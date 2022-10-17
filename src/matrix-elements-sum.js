const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  let sum = matrix[0].reduce((acc, val) => acc += val, 0);
  for (let c = 0; c < matrix[0].length; c++) {
    for (let r = 1; r < matrix.length; r++) {
      if (matrix[r-1][c] !== 0)
        sum += matrix[r][c];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
