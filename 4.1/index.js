

function myFilter(collection, values){
    var collection = collection;
    var values = args[i].slice(1); //создали массив параметров для фильтра [ { '0': 'favoriteFruit', '1': [ 'Яблоко', 'Картофель' ] } ]
    collection = collection.filter(function(value){// // //передаем в функцию единицу коллекции, напр.:{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
        if(values[0][0] in value) {  //если первый аргумент (параметр фильтра) содержится в коллекции в виде параметра, то...   если 'favoriteFruit' содержится как свойство в value
            for(var i = 0; i < values[0][1].length; i++) {    //для всех свойств объекта - [ 'Яблоко', 'Картофель' ]
                //console.log('i = ' + i + ' ' + values[0][1][i] + ' === ' + value[values[0][0]]);
                if(values[0][1][i] === value[values[0][0]]){    //если параметр фильтра равен
                    return true;
                } else if(i === values[0][1].length - 1){
                    return false;
                }
            }
        }
    });
    return collection;
}

function mySelect(collection, values){

}


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

    //console.log(args);
    if(args.length === 1) return collection;
    var collection = collection;

    for(var i = 1; i < args.length; i++){  //перебираем аргументы на наличие filter
        if(args[i][0] === 'filterIn'){         //если находим, то вызываем библиотечную функцию filter
            console.log('found filter');

            //var values = args[i].slice(1); //создали массив параметров для фильтра [ { '0': 'favoriteFruit', '1': [ 'Яблоко', 'Картофель' ] } ]
            //collection = collection.filter(function(value){// // //передаем в функцию единицу коллекции, напр.:{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
            //    if(values[0][0] in value) {  //если первый аргумент (параметр фильтра) содержится в коллекции в виде параметра, то...   если 'favoriteFruit' содержится как свойство в value
            //        for(var i = 0; i < values[0][1].length; i++) {    //для всех свойств объекта - [ 'Яблоко', 'Картофель' ]
            //            //console.log('i = ' + i + ' ' + values[0][1][i] + ' === ' + value[values[0][0]]);
            //            if(values[0][1][i] === value[values[0][0]]){    //если параметр фильтра равен
            //                return true;
            //            } else if(i === values[0][1].length - 1){
            //                return false;
            //            }
            //        }
            //    }
            //});

            //args.splice(i, 1);    //удаляем обработанный аргумент, чтобы потом опять не нарваться на него
        }
    }

    for(var i = 1; i < args.length; i++){  //аналогично ищем select
       if(args[i][0] === 'select') {
           console.log('found select');
           console.log(args)
           console.log(args[i][1] + ' ' + args.length + ' ' + i);
           //values = Object.values(((args[i].slice(1))[0]))  //создаем массив парамертров select
           //for(var i = 0; i < collection.length; i++){
           //    for(var key in collection[i]){
           //        if(!values.includes(key)){
           //            delete collection[i][key];
           //        }
           //    }
           //}
       }
    }
    return collection;
}




/**
 * @params {String[]}
 */
function select() {
    //console.log('select');
    return ['select', arguments];

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    //console.log('filter');
    return ['filterIn', arguments];


}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};



