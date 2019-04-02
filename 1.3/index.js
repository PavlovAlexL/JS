/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 (12, 30, 30), '13:00', 'При добавлении 30 мин. к 12:30 получится 13:00');
 (23, 59, 31), '00:30', 'При добавлении 31 мин. к 23:59 получится 00:30');
 (11, 50, 61), '12:51', 'При добавлении 61 мин. к 11:50 получится 12:51');
 (23, 1, 80), '00:21', 'При добавлении 80 мин. к 23:01 получится 00:21');

 */
module.exports = function (hours, minutes, interval) {

    hours += (minutes + interval) / 60;
    minutes = (minutes + interval) % 60;

    hours = Math.floor(hours);
    minutes = Math.floor(minutes);

    if(hours > 23) hours = hours % 24;

    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;

    return hours + ':' + minutes;




};

//console.info(module.exports(15, 00, 2880));

/**
 // Определяем константу с информацией о количестве часов в сутках
 var HOURS_PER_DAY = 24;
 // Определяем константу с информацией сколько минут в часе
 var MINUTES_PER_HOUR = 60;


module.exports = function (hours, minutes, interval) {
    // Увеличиваем значение минут
    minutes += interval;

    // Увеличиваем значение часов на количество полных часов в интервале
    hours += Math.floor(minutes / MINUTES_PER_HOUR);

    // Так как мы увеличили минуты и часы на весь interval, то
    // мы можем выйти за пределы 60 минут у часа и 24 часов у суток.
    // Исключим эту ситуацию.
    minutes %= MINUTES_PER_HOUR;
    hours %= HOURS_PER_DAY;

    // Используем для формата часов и минут, как в часах 1 -> 01
    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    // Возвращаем результат
    return hours + ':' + minutes;
};
 */
