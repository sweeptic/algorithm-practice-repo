// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const res = str
    .split(' ')
    .map(item => item[0].toUpperCase() + item.slice(1))
    .join(' ');

  console.log(res);
}

capitalize('hi there, how is it going?');
capitalize('i love breakfast at bill miller bbq');

/*
test('capitalizes the first letter of every word in a sentence', () => {
   expect(capitalize('hi there, how is it going?')).toEqual(
     'Hi There, How Is It Going?'
   );
 });
 
 test('capitalizes the first letter', () => {
   expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
     'I Love Breakfast At Bill Miller Bbq'
   );
 });
 */
