/**
 * // Для выполнения операций в определённом порядке назначим им приоритет
 var PRIORITY = {
    operationFilter: 0,
    operationSelect: 1
};


function query(collection) {
    // Получаем операции
    var operations = [].slice.call(arguments, 1);

    // Сортируем операции по приоритету
    operations.sort(function (operationOne, operationTwo) {
        // Для определения операции будем использовать название соответствующей функции
        return PRIORITY[operationOne.name] - PRIORITY[operationTwo.name];
    });

    // Копируем коллекцию, чтобы не менять исходную
    var clonedCollection = cloneCollection(collection);

    // Применяем операции над скопированной коллекцией
    return operations.reduce(function (resultCollection, operation) {
        // Запускаем следующую операцию с коллекцией, получившейся после предыдущей операции
        return operation(resultCollection);
    }, clonedCollection);
}


function select() {
    // Получаем список свойств, которые будем выбирать
    var properties = [].slice.call(arguments);

    // Возвращаем функцию, которая позже будет применена к коллекции.
    return function operationSelect(collection) {
        return collection.map(function (item) {
            // Клонируем объект с переданными свойствами
            return cloneItem(item, properties);
        });
    };
}


function filterIn(property, values) {
    // Возвращаем функцию, которая позже будет применена к коллекции.
    return function operationFilter(collection) {
        // Фильтруем коллекцию по значению поля
        return collection.filter(function (item) {
            var value = item[property];

            return values.indexOf(value) > -1;
        });
    };
}

function cloneCollection(collection) {
    return collection.map(function (item) {
        var properties = Object.keys(item);

        // Клонируем элемент со всеми его свойствами
        return cloneItem(item, properties);
    });
}

// Функция для клонирования объекта с заданными свойствами
function cloneItem(item, properties) {
    var newItem = {};

    // Копируем каждый ключ элемента в новый элемент
    for (var i = 0; i < properties.length; i++) {
        var property = properties[i];

        // Присваивание происходит по значению
        // так как по условию тип поля строка либо число
        // Проверяем, что свойство существует у исходного элемента
        if (item.hasOwnProperty(property)) {
            newItem[property] = item[property];
        }
    }

    return newItem;
}

// Экспортируем наши методы
module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
 */







/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 * lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']
 * {name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
 */
function makeClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}
function query(collection) {

    var cloneCollection = [];
    //for (var key in collection){  //нужна рекурсивная функция
    //    cloneCollection[key] = collection[key];
    //    cloneCollection[key].test = 'yes';
    //}

    collection.forEach(function (el) {
        cloneCollection.push(makeClone(el));
    });

    function makeClone(obj) {
        return JSON.parse(JSON.stringify(obj))
    }


    var args = [];
    for (var i = 0; i < arguments.length; i++) {    //делаем из псевдомассива обычный массив
        if(typeof arguments[i] == 'undefined'){
            continue
        } else args.push(arguments[i])
    }

    // var args = [].slice.call(arguments); - вызываем метод в контексте arguments

    if (args.length === 1) {
        return cloneCollection;
    }

    for (var i = 1; i < args.length; i++) {  //перебираем аргументы на наличие filter
        if (args[i][0] === 'filterIn') {
            cloneCollection = filterIn(cloneCollection, args[i][1]);
        }
    }

    for (var i = 1; i < args.length; i++) {//
        if (args[i][0] === 'select') {
            cloneCollection = select(cloneCollection, args[i][1]);
        }
    }

    return cloneCollection;
}


/**
 * @params {String[]}
 */
function select() {
    if(arguments.length === 0){
        return;
    } else if (typeof arguments[0] === 'string') {
        return ['select', arguments];
    } else {
        //console.log(arguments)

        //var Collection = arguments[0];      //{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
        var Collection = [];
        for (var key in arguments[0]){
            Collection[key] = arguments[0][key];
        }




        var values = Object.values(arguments[1]);       //[ 'name', 'gender', 'email' ]
        for(var i = 0; i < Collection.length; i++){     //{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
            for(var key in Collection[i]){
                        if(!values.includes(key)){
                            delete Collection[i][key];
                        }
                    }
        }
        return Collection;
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    if(arguments.length === 0){
        return;
    } else if(typeof property === 'string'){
        return ['filterIn', arguments];
    } else {
        var Collection = arguments[0];      //{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
        var property = arguments[1][0];     //'favoriteFruit'
        var values = arguments[1][1];       //[ 'Банан', 'Картофель' ]

        Collection = Collection.filter(function (val) {
            var valueProperty = [];
            if((val[property].indexOf(',')) > 0){
                valueProperty = val[property].split(', ');//
            } else valueProperty = [val[property]];
            return valueProperty.some(function (sValue) {
                return values.includes(sValue);
            });
        });

        return Collection;
    }
}


module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};



