/*
function factorial (num) {
  let shifter = 0;
  if (num === 1) shifter = num;
  for (let i = 0; i < num-1; i++) {
    if (i === 0) {
      shifter = num;
    } else {
      shifter += shifter * (i)
    }
  }
  console.log(shifter)
}


factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);
factorial(6);
factorial(7);
factorial(8);
*/

/*
function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter--) {
    result *= counter;
  }

  return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));

*/

function recFactorial(num) {
  if (num === 1) return num;
  return num *= recFactorial(num - 1);
}
console.log(recFactorial(1));
console.log(recFactorial(2));
console.log(recFactorial(3));
console.log(recFactorial(4));
console.log(recFactorial(5));
console.log(recFactorial(6));
console.log(recFactorial(7));
console.log(recFactorial(8));