function multiply(whichNum1, whichNum2) {
  let uInput = require('readline-sync');
  let num1 = Number(uInput.question(`Enter your ${whichNum1} number: `));
  let num2 = Number(uInput.question(`Enter your ${whichNum2} number: `));
  let mult = num1 * num2;
  console.log(`${num1} * ${num2} = ${mult}`);
  return mult;
};

multiply('first', 'second');
