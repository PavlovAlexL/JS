/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 * lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']
 * {name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
 */

function query(collection) {

    var args = [];
    for (var i = 0; i < arguments.length; i++) {    //делаем из псевдомассива обычный массив
        args[i] = arguments[i];
    }
    if (args.length === 1) {
        return collection;
    }
    var collection = collection;

    for (var i = 1; i < args.length; i++) {  //перебираем аргументы на наличие filter
        if (args[i][0] === 'filterIn') {
            collection = filterIn(collection, args[i][1]);
        }
    }

    for (var i = 1; i < args.length; i++) {
        if (args[i][0] === 'select') {
            collection = select(collection, args[i][1]);
        }
    }

    return collection;
}


/**
 * @params {String[]}
 */
function select() {
    if (typeof arguments[0] === 'string') {
        return ['select', arguments];
    } else {
        var collection = arguments[0];      //{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
        var values = Object.values(arguments[1]);       //[ 'name', 'gender', 'email' ]
        for(var i = 0; i < collection.length; i++){     //{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
            for(var key in collection[i]){
                        if(!values.includes(key)){
                            delete collection[i][key];
                        }
                    }
        }
        return collection;
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    if(typeof property === 'string'){
        return ['filterIn', arguments];
    } else {
        var collection = arguments[0];      //{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
        var property = arguments[1][0];     //'favoriteFruit'
        var values = arguments[1][1];       //[ 'Банан', 'Картофель' ]
        collection.filter(function (fValue) {// // //передаем в функцию единицу коллекции {name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
            var valueProperty = fValue[property].split(', ');    //массив параметров поля в коллекции
            valueProperty.some(function (sValue) {   //если хоть кто то вернет true, вернется true в фильтр
                return values.includes(sValue);
            });
        });
        return collection;
    }
}


module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};



