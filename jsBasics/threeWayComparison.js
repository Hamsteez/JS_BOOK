function compareByLength(phrase1, phrase2) {
  if (phrase1.length === phrase2.length) {
    return 0;
  } else if (phrase1.length > phrase2.length) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0