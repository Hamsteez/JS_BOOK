/*
let myArray = {
  r1: 'hello',
  r2: 'idk',
  r3: 'ok'
};

let myArrayA = Object.keys(myArray);
myArrayA.forEach(key => console.log(myArray[key]));

for (let i = 0; i < myArrayA.length; i += 1) {
  console.log(myArrayA[i]);
}
*/
let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}