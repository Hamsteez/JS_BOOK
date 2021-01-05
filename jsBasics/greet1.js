function greet(greeting) {
  if (greeting) {
  console.log(greeting + ', world!');
  } else {
    console.log('Hello, world!');
  }
}
/*
Correct Solution: 
function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}
*/

greet('Salutations'); // logs: Salutations, world!

greet();