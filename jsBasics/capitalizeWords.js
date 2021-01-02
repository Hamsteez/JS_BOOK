let x = 'launch school tech & talk';
y = x.split(' ');
let caps = [];
for (let i = 0; i < y.length; i++) {
  let word = y[i];
  caps.push(word[0].toUpperCase() + word.slice(1));
}
console.log(caps.join(' '));

