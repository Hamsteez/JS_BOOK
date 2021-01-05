function removeLastChar(string) {
  let array1 = string.split('');
  array1.pop();
  string = array1.join('');
  console.log(string);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'