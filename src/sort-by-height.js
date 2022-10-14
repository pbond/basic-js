const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const proxy = arr.filter(val => val !== -1).sort((a, b) => a-b);
  arr.forEach((val, index) => {
    if (val === -1)
      proxy.splice(index, 0, val);
  });
  return proxy;
}

module.exports = {
  sortByHeight
};