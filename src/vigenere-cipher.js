const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(isDirectEncryption = true) {
    this.isDirectEncryption = isDirectEncryption;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.offset = 65;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    const keyCharCodes = key.toUpperCase().split('').map(c => c.charCodeAt(0));
    const encryptedChars = [];

    for (let m = 0, k = 0; m < message.length; m++){
      if (this.alphabet.includes(message[m])){
        const messageCharCode = message.charCodeAt(m);
        const encryptedCharCode = this.calcCharCode(messageCharCode + keyCharCodes[k % keyCharCodes.length]);
        const encryptedChar = String.fromCharCode(encryptedCharCode);
        encryptedChars.push(encryptedChar);
        k +=1;
      } else {
        encryptedChars.push(message[m]);
      }
    }

    return this.isDirectEncryption ? encryptedChars.join('') : encryptedChars.reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    const keyCharCodes = key.toUpperCase().split('').map(c => c.charCodeAt(0));
    const encryptedChars = [];

    for (let m = 0, k = 0; m < message.length; m++){
      if (this.alphabet.includes(message[m])){
        const messageCharCode = message.charCodeAt(m);
        const encryptedCharCode = this.calcCharCode(messageCharCode - keyCharCodes[k % keyCharCodes.length]);
        const encryptedChar = String.fromCharCode(encryptedCharCode);
        encryptedChars.push(encryptedChar);
        k +=1;
      } else {
        encryptedChars.push(message[m]);
      }
    }

    return this.isDirectEncryption ? encryptedChars.join('') : encryptedChars.reverse().join('');
  }


  calcCharCode(start) {
    if (start < 0)
      start = start + this.alphabet.length;

    return (start % this.alphabet.length) + this.offset;
  }

}

module.exports = {
  VigenereCipheringMachine
};
