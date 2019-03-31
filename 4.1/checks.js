// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./index.js');

// Коллекция данных
var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко, Картофель'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель, Банан'
    }
];

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'ge', 'email'),
    lib.select('name', 'name'),
    lib.select(),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель', "Кар"]),
    //lib.select('name', 'gender', 'dfas'),
    //lib.filterIn('favoriteFruit', ['Картофель']),
    //lib.filterIn('favoriteFruit', ['Картофель','Апельсин']),
    //lib.filterIn('gender', []),
    //lib.select(),
);

console.log(result);
//console.log(friends);

// //Сравниваем полученный результат с ожидаемым
//assert.deepEqual(result, [
//    { name: 'Сэм'   , email: 'luisazamora@example.com' },
//    { name: 'Эмили' , email: 'example@example.com' },
//    { name: 'Мэт'   , email: 'danamcgee@example.com' },
//    { name: 'Шерри' , email: 'danamcgee@example.com' },
//    { name: 'Стелла', email: 'waltersguzman@example.com' }
//]);
//
//console.info('OK!');
