const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = `${n}`.split('');
  const numbers = digits.map((d, index, array) => {
    const number =  array.slice(0, index).concat(array.slice(index + 1)).join('');
    return parseInt(number);
  });
  return Math.max.apply(null, numbers);
}

module.exports = {
  deleteDigit
};
