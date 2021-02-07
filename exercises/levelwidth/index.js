// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
}

function levelWidth(root) {
  let workArr = [root, 's'];
  const res = [0];

  while (workArr.length > 1) {
    let actual = workArr.shift();

    if (actual === 's') {
      workArr.push('s');
      res.push(0);
    } else {
      workArr.push(...actual.children);
      res[res.length - 1]++;
    }
  }
  return res;
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

// console.log(root);

console.log(levelWidth(root));
