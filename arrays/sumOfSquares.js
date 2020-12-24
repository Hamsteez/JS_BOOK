let array = [3, 5, 7];

function sumOfSquares() {
 return array.reduce((accumalator, element) => accumalator + element * element, 0);
}

console.log(sumOfSquares());