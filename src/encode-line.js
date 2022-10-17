const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let char = { name: str[0], count: 0};

    const charSequence = str.split('').reduce((acc, chr) => {
        if (chr === char.name) {
            char.count += 1;
        } else {
            acc.push(char);
            char = { name: chr, count: 1 };
        }
        return acc;
    }, [])
    charSequence.push(char);

    return charSequence.map(({name, count}) => ((count > 1) ? count + name : name)).join('');
}

module.exports = {
    encodeLine
};
