// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let count = 2;
  const fib = [0, 1];

  while (count <= n) {
    const a = fib[count - 1];
    const b = fib[count - 2];

    fib.push(a + b);
    count++;
  }

  return fib[n];
}

//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log(fib(4)); // === 3;
