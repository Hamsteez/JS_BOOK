function caps(){
  let uInput = require('readline-sync');
  let text = uInput.question(`Enter a string: `);
  if (text.length > 10) {
    console.log(text.toUpperCase());
  }
}
caps();