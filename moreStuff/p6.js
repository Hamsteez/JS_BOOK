
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, stringToMatch) {
  let ansArray = [];
  array.forEach(function(results) {
    let checker = results.match(stringToMatch);
    if (checker) {
      ansArray.push(results);
    }
  });
  return ansArray;    
  };


console.log(allMatches(words, /lab/));
