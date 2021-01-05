function greet(greeting = 'Hello', recipient = 'World') {
  console.log(greeting + ', ' + recipient + '!');
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!