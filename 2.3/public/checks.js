// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var phoneBook = require('./index.js');

// Добавляем телефоны контакту Ivan
//phoneBook('ADD Ivan 555-10-01,555-10-03');
//phoneBook('SHOW')
//phoneBook('ADD Ivan 555-10-02');
//phoneBook('SHOW')
//phoneBook('ADD Ivan 555-10-05');

//phoneBook("ADD Ivan 555,666");
//console.log(phoneBook("SHOW"));
//phoneBook("ADD Alex 777");
//console.log(phoneBook("SHOW"));
//phoneBook("ADD Alex 333");
//console.log(phoneBook("SHOW"));
//phoneBook("REMOVE_PHONE 555");
//console.log(phoneBook("SHOW"));
//phoneBook("REMOVE_PHONE 666");//
//console.log(phoneBook("SHOW")); //ожидается результат: ["Alex: 777, 333"],


phoneBook("ADD Ivan 555,666");
phoneBook("ADD Alex 777");
phoneBook("ADD Alex 333");
phoneBook("REMOVE_PHONE 555");
phoneBook("REMOVE_PHONE 666");
phoneBook("REMOVE_PHONE 333");
phoneBook("REMOVE_PHONE 777");
console.log(phoneBook("SHOW"));  //ожидается результат: []


//Проверка работы функции SHOW
//assert.deepEqual(
//    // Получаем содержимое телефонной книги
//    phoneBook('SHOW'),//
//    [
//        'Ivan: 555-10-01, 555-10-03, 555-10-02'
//    ],'В телефонной книге: "Ivan: 555-10-01, 555-10-03, 555-10-02"'
//);

//// Проверка работы функции REMOVE_PHONE
//assert.equal(
//    // Удаляем телефон 555-10-03
//    phoneBook('REMOVE_PHONE 555-10-03'),
//    true,
//    'Телефон 555-10-03 успешно удален'
//);
//// Добавляем новый контакт
//phoneBook('ADD Alex 555-20-01');
//
//// Проверка работы функции SHOW
//assert.deepEqual(
//    // Получаем содержимое телефонной книги
//    phoneBook('SHOW'),
//    [
//        'Alex: 555-20-01',
//        'Ivan: 555-10-01, 555-10-02'
//    ],
//    'В телефонной книге: "Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"'
//);
//
//// Удаляем телефон
//phoneBook('REMOVE_PHONE 555-20-01');
//
//// Проверка работы функции SHOW
//assert.deepEqual(
//    // Получаем содержимое телефонной книги
//    phoneBook('SHOW'),
//    [
//        'Ivan: 555-10-01, 555-10-02'
//    ],
//    'В телефонной книге: "Ivan: 555-10-01, 555-10-02"'
//);

console.info('OK!');
