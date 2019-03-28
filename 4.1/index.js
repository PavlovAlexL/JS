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
            args.splice(i, 1);    //удаляем обработанный аргумент, чтобы потом опять не нарваться на него
        }

    }

    /**
     * [Arguments] {
  '0':
   [ { name: 'Сэм',
       gender: 'Мужской',
       email: 'luisazamora@example.com',
       favoriteFruit: 'Картофель' },...
      ],
  '1':
   [ 'select',
     [Arguments] { '0': 'name', '1': 'gender', '2': 'email' } ] }
     */
    //console.log(args.length);   //2
    //console.log(args[1]);   //[ 'select', { '0': 'name', '1': 'gender', '2': 'email' } ]
    for(var i = 1; i < args.length; i++){  //аналогично ищем select

       if(args[i][0] === 'select') {
           //console.log(args[1][1][1]); //gender
           //console.log(args[i].slice(1));
           values = args[i].slice(1);
           console.log(values[0][0])



           for(elmnt in 
           //console.log(collection)



           //collection = collection.filter(function(value)//{// // //передаем в функцию единицу коллекции, напр.:{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
           //
           //
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



       }
    }

    //console.log(collection);
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



