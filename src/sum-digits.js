const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n ) {

  return (n + '').split('').reduce((acc, val) => {
    acc = +val + acc;
    if (acc >= 10)
      acc = Math.floor(acc / 10) + acc % 10 ;
    return acc;
  }, 0);
}

module.exports = {
  getSumOfDigits
};
