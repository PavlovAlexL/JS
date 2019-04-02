/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;

};
