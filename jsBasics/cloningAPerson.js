function clone(obj) {
  let nestedArray = Object.entries(obj);
  let clonedObj = Object.fromEntries(nestedArray);
  return clonedObj;
  //return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33,
  randomness: {
    idk: 'ok',
    kk: false
  }
};

let clonedPerson = clone(person);
person.age = 34;
person.randomness.kk = true;
person.randomness.idk = 7;
person.name = 'killa';

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

console.log(person.randomness.kk);       // 34
console.log(clonedPerson.randomness.kk); // 33

console.log(person.name);       // 34
console.log(clonedPerson.name); // 33