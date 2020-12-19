let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(){
 console.log(things.filter(arrayPart => Number.isInteger(arrayPart) === true));
  
}
findIntegers();