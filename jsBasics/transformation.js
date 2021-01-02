let str = 'Captain Ruby';

let arrOfString = str.split(' ');
arrOfString[1] = 'JavaScript';
str = arrOfString[0] + ' ' + arrOfString[1];
console.log(str);