// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let brick = 1;
  const res = [];

  while (n > 0) {
    const spaces = new Array(n * 2 - n - 1).fill(' ');
    const bricks = new Array(brick).fill('#');
    //  console.log(...spaces, ...bricks, ...spaces);
    const row = [...spaces, ...bricks, ...spaces].join('');
    res.push(row);
    n--;
    brick += 2;
  }

  console.log(res);
}

pyramid(4);
// expect(console.log.mock.calls[0][0]).toEqual('   #   ');
// expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
// expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
// expect(console.log.mock.calls[3][0]).toEqual('#######');
