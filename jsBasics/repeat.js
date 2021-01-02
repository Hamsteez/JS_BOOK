
function repeat(times, phrase) {
  let timer = 1;
  let arr = [];
  while (timer <= times) {
    arr.push(phrase);
    timer += 1;
  }
  console.log(arr.join(''));
}

repeat(3, 'ha'); // 'hahaha'