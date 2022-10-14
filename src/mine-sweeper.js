const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minesMap = Array.from(matrix, (row) => row.slice().fill(0));

  const cellUpdate = (y, x) => {
    if (0 > y || y > matrix[0].length - 1) return;
    if (0 > x || x > matrix.length - 1) return;

    minesMap[x][y] += 1;
  };

  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      if (matrix[i][j]){
        cellUpdate(i-1, j-1);
        cellUpdate(i-1, j);
        cellUpdate(i-1, j+1);

        cellUpdate(i, j-1);
        //cellUpdate(i, j);
        cellUpdate(i, j+1);

        cellUpdate(i+1, j-1);
        cellUpdate(i+1, j);
        cellUpdate(i+1, j+1);
      }
    }
  }
  return minesMap;
}

module.exports = {
  minesweeper
};
