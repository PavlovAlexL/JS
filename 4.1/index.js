/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 * lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']
 * {name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
 */

function query(collection) {

    var arguments = arguments;
    console.log(arguments);
    if(arguments.length === 1) return collection;
    var collection = collection;

    for(var i = 1; i < arguments.length; i++){  //перебираем аргументы на наличие filter
        if(arguments[i][0] === 'filterIn'){         //если находим, то вызываем библиотечную функцию filter
            var values = arguments[i].slice(1); //создали массив параметров для фильтра [ { '0': 'favoriteFruit', '1': [ 'Яблоко', 'Картофель' ] } ]console.log(collection[0]['favoriteFruit']);
            collection = collection.filter(function(value){// // //передаем в функцию единицу коллекции, напр.:{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
                if(values[0][0] in value) {  //если первый аргумент (параметр фильтра) содержится в коллекции в виде параметра, то...   если 'favoriteFruit' содержится как свойство в value
                    for(var i = 0; i < values[0][1].length; i++) {    //для всех свойств объекта - [ 'Яблоко', 'Картофель' ] :todo проверяет только первый аргумент, доработать!!!
                        //console.log('i = ' + i + ' ' + value[values[0][0]] + ' === ' + values[0][1][i]);
                        if(value[values[0][0]] === values[0][1][i]){
                            return true;
                        } else if(i === values[0][1].length - 1){
                            return false;
                        }
                    }
                }
            });
            console.log(arguments[i]);//не забудь, это псевдомассив!!! почитай
            arguments[i].splice()    //удаляем обработанный аргумент, чтобы потом опять не нарваться на него
        }

    }

    //console.log(arguments);
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
    //console.log(arguments.length);
    //console.log(arguments[2]);
    //['1': [ 'select', [Arguments] { '0': 'name', '1': 'gender', '2': 'email' } ]
    for(var i = 1; i < arguments.length; i++){  //аналогично ищем select

        //console.log(arguments[i][0]);
       //if(arguments[i][0] === 'select') {//
       //    console.log('select');
   //  //  //    console.log(arguments[i].slice(1));
   //  //  ////    //var values = arguments[i].slice(1);
   //  //  //    //console.log(values);//
       //}
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



