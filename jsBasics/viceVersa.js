let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

//let obj = Object.fromEntries(nestedArray);

//console.log(obj);
let obj = {}
for (i = 0; i < nestedArray.length; i++) {
  //console.log(nestedArray[i][0]);
  //console.log(nestedArray[i][1]);
  obj[nestedArray[i][0]] = nestedArray[i][1];
}
console.log(obj);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }