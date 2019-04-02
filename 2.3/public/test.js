var phoneBook = {};
var name = 'Sasha';
var phone = '555-10-11';
phoneBook[name] = ['555-10-01', '555-10-03'];
console.log(phoneBook);         //{ Sasha: [ '555-10-01', '555-10-03' ] }
phoneBook[name].push(phone);
console.log(phoneBook);         //{ Sasha: [ '555-10-01', '555-10-03', '555-10-11' ] }
console.log(phoneBook[name].indexOf(phone));
console.log(phoneBook[name].indexOf('555-10-11'));