function evenOrOdd() {
  let uInput = require('readline-sync');
  let num = Number(uInput.question(`Enter a number: `));
  
  //console.log(`${Number.isInteger(num)}`);
  if (Number.isInteger(num) === false) {
    console.log('Please enter a number');
    return;
  }

  let evenChecker = num % 2;
  if (evenChecker === 0) {
    console.log(`Your number of ${num} is even.`)
  } else {
    console.log(`Your number of ${num} is odd.`)
  }

}

evenOrOdd();