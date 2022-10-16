const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, {
  repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'
} = {}) {

  if (typeof str !== 'string')
    str = `${str}`;

  if (typeof addition !== 'string')
    addition = `${addition}`;


  return new Array(repeatTimes)
      .fill(str)
      .map(item => {
        if (addition.length === 0) {
          return item;
        }

        const suffix = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
        return `${item}${suffix}`;
      })
      .join(separator);
}

module.exports = {
  repeater
};
