// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const res = {};
  let max = 0;
  let letter;

  str
    .replace(/\s/g, '')
    .split('')
    .map(item => {
      res[item] ? res[item]++ : (res[item] = 1);
      if (res[item] > max) {
        //  console.log(res[item], max);
        max = res[item];
        letter = item;
      }
    });

  //   console.log(res, max, letter);
  return letter;
}

console.log(maxChar('abcccccccd')); //=== 'c';
console.log(maxChar('apple 1231111')); //=== '1';
