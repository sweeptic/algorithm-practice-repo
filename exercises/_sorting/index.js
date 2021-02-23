// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

function selectionSort(array) {
  let pointer;
  for (let i = 0; i < array.length - 1; i++) {
    pointer = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[pointer]) pointer = j;
    }
    if (pointer !== i) [array[pointer], array[i]] = [array[i], array[pointer]];
  }
  return array;
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr.splice(0, 1);
  const left = [];
  const right = [];

  arr.map(item => (item < pivot ? left.push(item) : right.push(item)));

  return [...quickSort(left), ...pivot, ...quickSort(right)];
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

function mergeSort(arr) {
  // console.log(arr);

  if (arr.length < 2) {
    return arr;
  }

  const middle = arr.length / 2;
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

//
// console.log(bubbleSort([5, 3, 2, 4, 100, 6, 34, 22, 17, 9, 1, 10]));
// console.log(selectionSort([5, 3, 2, 4, 100, 6, 34, 22, 17, 9, 1, 10]));
// console.log(quickSort([5, 3, 2, 4, 100, 6, 34, 22, 17, 9, 1, 10]));
// console.log(mergeSort([5, 3, 2, 4, 100, 6, 34, 22, 17, 9, 1, 10]));
