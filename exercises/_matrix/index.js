// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let inner = n;
  let outer = 0;
  const res = [];

  while (outer < n) {
    inner = n;
    res.push([]);
    while (inner > 0) {
      // console.log((outer + 1) * n - inner + 1);
      res[outer].push((outer + 1) * n - inner + 1);
      inner--;
    }
    outer++;
  }

  console.log(res);
  return res;
}

matrix(4);
