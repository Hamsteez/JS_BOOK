
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths2 () {
 return arr.reduce((accumalator, element) => {
  let len = element.length;
  if (len % 2 !== 0) {
    accumalator.push(len);
  }
  return accumalator;
 }, []);
}
console.log(oddLengths2());