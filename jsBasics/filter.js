let scores = [96, 47, 113, 89, 100, 102];
let counter = 0;
scores.forEach(function count(x) {
  x >= 100 ? counter++ : counter;
});


console.log(counter);