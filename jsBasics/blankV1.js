
function isBlank(phrase) {
  phrase = phrase.trimStart();
  if (phrase === '') {
    console.log(true);
  } else {
    console.log(false);
  }
}


isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true