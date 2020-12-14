let uInput = require('readline-sync');

let fName = uInput.question('What is your first name? ');
let lName = uInput.question('What is your lane name? ');
console.log(`Hello, ${fName} ${lName}!`);