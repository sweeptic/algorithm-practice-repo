// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51

function reverseInt(n) {
  let num = n < 0 ? -1 : 1;

  let res =
    Math.abs(n)
      .toString()
      .split('')
      .reduceRight((acc, item) => (acc = acc + item)) * num;

  console.log(res);
  return res;
}

reverseInt(981) === 189;
reverseInt(-90) === -9;
reverseInt(500) === 5;
reverseInt(-15) === -51;
