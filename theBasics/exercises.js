//1.
console.log('P1:');
let fName = 'Hamza ';
let lName = 'Choudhury';
console.log(fName + lName);

//2.
console.log('-----')
console.log('P2:');
const bigNum = 4936;
let num = 4936;
let ones = num % 10;
num = (num - ones) / 10;
let tens = num % 10;
num = (num - tens) / 10;
let hundreds = num % 10;
num = (num - hundreds) / 10;
let thousands = num % 10;
num = (num - thousands) / 10;

console.log(`${bigNum}`);
console.log(`1. thousands place is ${thousands}`);
console.log(`1. hundreds place is ${hundreds}`);
console.log(`1. tens place is ${tens}`);
console.log(`1. ones place is ${ones}`);

//3.
console.log('-----');
console.log('P3:');
console.log("'true': " + typeof('true'));
console.log('false: ' + typeof(false));
console.log('1.5: ' + typeof(1.5));
console.log('2: ' + typeof(2));
console.log('undefined: ' + typeof(undefined));
console.log('{ foo: \'bar\'}: ' + typeof({ foo: 'bar' }));

//4.
console.log('-----');
console.log('P4:');
console.log('5' + 10);
console.log(`Because 5 is listed as a string and it is concatenated with the number 10`);

//5.
console.log('-----');
console.log('P5:');
console.log(Number('5') + 10);

//6.
console.log('-----');
console.log('P6:');
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

//7.
console.log('-----');
console.log('P7:');
console.log('undefined');

//8.
console.log('-----');
console.log('P8:');
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];
console.log(names);

//9.
console.log('-----');
console.log('P9:');
let pets = {asta: 'dog', butterscotch: 'cat', pudding: 'cat', neptune: 'fish', darwin: 'lizard'};
console.log(pets);

//10.
console.log('-----');
console.log('P10:');
console.log(`'foo' === 'Foo' evaluates to ${'foo' === 'Foo'}`);

//11.
console.log('-----');
console.log('P11:');
console.log(`parseInt('3.1415') evaluates to ${parseInt('3.1415')}`);

//12.
console.log('-----');
console.log('P12:');
console.log(`'12' < '9' evaluates to ${'12' < '9'}`);