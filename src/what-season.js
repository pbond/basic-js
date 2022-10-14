const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

const seasons = [
    {end: 1, name: 'winter'},
    {end: 4, name: 'spring'},
    {end: 7, name: 'summer'},
    {end: 10, name: 'autumn'},
    {end: 11, name: 'winter'}
];

function getSeason(date) {
    if (!date)
        return 'Unable to determine the time of year!';

    if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length !== 0) {
        throw new Error('Invalid date!');
    }

    const month = date.getMonth();
    return seasons.find(s => s.end >= month).name;
}

module.exports = {
    getSeason
};
