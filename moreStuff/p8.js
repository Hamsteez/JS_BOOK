
function isNotANumber(input) {
  if (input !== input) {
    return true;
  } else {
    return false;
  }
}

console.log(isNotANumber('hello'));
console.log(isNotANumber(7));
console.log(isNotANumber(NaN));
console.log(isNotANumber('7s'));
console.log(isNotANumber(true));