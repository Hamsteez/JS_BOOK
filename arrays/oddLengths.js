let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths() {
  let arrayLength = arr.map(len => len.length);
  console.log(arrayLength);
  console.log(arrayLength.filter(filter => filter % 2 !== 0));
}

oddLengths();