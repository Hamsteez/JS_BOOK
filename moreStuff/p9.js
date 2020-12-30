
function findZero(input) {
  if (7 / input === -Infinity) {
    return true;
  } else {
    return false;
  }
}

console.log(findZero(0));
console.log(findZero(-0));