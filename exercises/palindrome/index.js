// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

export function palindrome(str) {
  const res = str.split('');

  while (res.length > 1) {
    if (res.shift() !== res.pop()) return false;
  }

  return true;
}

console.log(palindrome('pennep')); //=== true

/*


 test('"greetings" is not a palindrome', () => {
   expect(palindrome('greetings')).toBeFalsy();
 });
 
 test('"1000000001" a palindrome', () => {
   expect(palindrome('1000000001')).toBeTruthy();
 });
 
 test('"Fish hsif" is not a palindrome', () => {
   expect(palindrome('Fish hsif')).toBeFalsy();
 });
 
 test('"pennep" a palindrome', () => {
   expect(palindrome('pennep')).toBeTruthy();

   */
