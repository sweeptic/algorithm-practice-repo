// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'

function reverse(str) {
  const word = str.split('');
  const res = [];

  while (word.length) {
    res.unshift(word.shift());
  }
  console.log(res.join(''));

  return res.join();
}

reverse('apple');
reverse('Greetings!'); //=== '!sgniteerG'
