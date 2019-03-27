/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 * lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']
 * {name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
 */

function query(collection) {
    if(arguments.length === 1) return collection;
    var collection = collection;


    for(var i = 1; i < arguments.length; i++){  //перебираем аргументы на наличие filter
        console.log(arguments[i]);  //получаем  'filterIn',
                                               //[Arguments] { '0': 'favoriteFruit', '1': [ 'Яблоко', 'Картофель' ] } ]

        if(arguments[i][0] === 'filterIn'){         //если находим, то вызываем библиотечную функцию filter
            var values = arguments[i].slice(1); //создали массив параметров для фильтра [ [Arguments] { '0': 'favoriteFruit', '1': [ 'Яблоко', 'Картофель' ] } ]

            collection.filter(function(value){ // //передаем в функцию единицу коллекции, напр.:
                                            //{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'}
                if(values[0] in value) {  //если первый аргумент (параметр фильтра) содержится в коллекции в виде параметра, то...
                    for(var i = 1; i < values.length; i++) {
                        if (value[values[0]] === values[i])   //если в объекте свойство с именем, взятым из первого аргумента массива равно

                            }
                }

            }
         }

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
