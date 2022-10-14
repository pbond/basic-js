const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  if (Array.isArray(arr) === false)
    throw new Error('\'arr\' parameter must be an instance of the Array!');

  return arr.reduce((acc, item, index, array) => {
    if (item === 'itShouldBeDiscard'){
      return acc;
    }

    switch (item) {
      case '--discard-next': {
        if (index + 1 < array.length) {
          array[index + 1] = 'itShouldBeDiscard';
        }
        return acc;
      }
      case '--discard-prev': {
        if (acc.length > 0 && array[index - 1] !== 'itShouldBeDiscard') {
          acc.pop();
        }
        return acc;
      }
      case '--double-next': {
        if (index + 1 < array.length) {
          acc.push(array[index + 1]);
        }
        return acc;
      }
      case '--double-prev': {
        if (index - 1 > 0 && array[index - 1] !== 'itShouldBeDiscard') {
          acc.push(array[index - 1]);
        }
        return acc;
      }
      default: {
        acc.push(item);
        return acc;
      }
    }
  }, []);
}

module.exports = {
  transform
};
