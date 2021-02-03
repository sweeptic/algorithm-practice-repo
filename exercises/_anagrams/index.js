// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function matcher(str) {
  return (
    str
      .trim()
      .toLowerCase()
      .replace(/[^\w]/g, '')
      .split('')
      //  .filter(item => /[A-Za-z]/.test(item))
      .sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      })
      .join('')
  );
}

function anagrams(stringA, stringB) {
  return matcher(stringA) === matcher(stringB) ? true : false;
}

console.log(anagrams('rail safety', 'fairy tales')); //-- > True;
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); //-- > True;
console.log(anagrams('Hi there', 'Bye there')); //-- > False;
