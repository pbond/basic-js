const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = '( )';
    } else {
      value = `( ${value} )`;
    }

    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || Number.isInteger(position) === false || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainValue = this.chain.join('~~');
    this.chain = [];
    return chainValue;
  }
};

module.exports = {
  chainMaker
};
