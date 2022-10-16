const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  return domains.reduce((acc, val) => {
    const levels = val.split('.')
        .reverse()
        .map(m => `.${m}`)
        .reduce(( accum, lev ) => {
          const keyName = accum + lev;
          acc[keyName] = (keyName in acc) ? acc[keyName] += 1 : 1;
          return keyName;
        }, '');
    return acc;
  }, {});
}

module.exports = {
  getDNSStats
};
