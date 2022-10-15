const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const subArrays = arr.filter(a => Array.isArray(a)).map(item => this.calculateDepth(item));

    if (subArrays.length === 0){
      return 1;
    }
    return 1 + Math.max.apply(Math, subArrays);
  }
}

module.exports = {
  DepthCalculator
};
