function getName(part) {
  let uInput = require('readline-sync');
  let name = uInput.question(`What is your ${part} name? `);
  return name;
};


let fName = getName('first');
let lName = getName('last');
console.log(`Hello, ${fName} ${lName}!`);