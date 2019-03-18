/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var time = new Date(date);
    function getValue(t) {
        var year = t.getFullYear();
        var month = (t.getMonth() + 1) < 10 ? ('0' + (t.getMonth() + 1)) : (t.getMonth() + 1);
        var day = t.getDate() < 10 ? ('0' + t.getDate()) : t.getDate();
        var hour = t.getHours() < 10 ? ('0' + t.getHours()) : t.getHours();
        var minutes = t.getMinutes() < 10 ? ('0' + t.getMinutes()) : t.getMinutes();
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;
    }
    return {
        add: function(val, par){
            if(val < 0) throw new TypeError();
            else if(par === 'years') time.setFullYear(time.getFullYear() + val);
            else if(par === 'months') time.setMonth(time.getMonth() + val);
            else if(par === 'days') time.setDate(time.getDate() + val);
            else if(par == 'hours') time.setHours(time.getHours() + val);
            else if(par === 'minutes') time.setMinutes(time.getMinutes() + val);
            else throw new TypeError();
            if(time < new Date(2000, 0, 1)) throw new Error ('Date is low');
            this.value = getValue(time);
            return this;
        },
        subtract: function(val, par){
            if(val < 0) throw new TypeError();
            if(par === 'years') time.setFullYear(time.getFullYear() - val);
            else if(par === 'months') time.setMonth(time.getMonth() - val);
            else if(par === 'days') time.setDate(time.getDate() - val);
            else if(par == 'hours') time.setHours(time.getHours() - val);
            else if(par === 'minutes') time.setMinutes(time.getMinutes() - val);
            else throw new TypeError();
            this.value = getValue(time);
            if(time < new Date(2000, 0, 1)) throw new Error ('Date is low');
            return this;
        },
        value : getValue(time)

    };
};
