/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var result = [];
    tweet.split(' ').forEach(
        function (item, index) {
            //console.log(item);
            if(item.indexOf('#') === 0) result.push(item.substring(1));
            //if (item[0] === '#') {
            //result.push(item.slice(1));}
        }
    )
    return result;


};
