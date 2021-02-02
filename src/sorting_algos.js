function bubbleSort(arr) {
  const array = [...arr];
  let i = 0;

  for (; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

function selectionSort(arr) {
  const array = [...arr];
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (min !== i) [array[min], array[i]] = [array[i], array[min]];
  }
  return array;
}

function merger(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    left[0] < right[0] ? sorted.push(left.shift()) : sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
}

function mergeSort(array) {
  if (array.length < 2) return array;

  const middle = array.length / 2;

  return merger(
    mergeSort(array.slice(0, middle)),
    mergeSort(array.slice(middle))
  );
}

function quickSort(array) {
  if (array.length < 2) return array;

  const pivot = array.shift();

  const left = [];
  const right = [];

  array.map(item => (item < pivot ? left.push(item) : right.push(item)));

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [65, 4, 55, 765, 10, 11, 1, 78, 5];
const arrayForMerge = [65, 4, 55, 765, 10, 11, 1, 78, 5];
const arrayForQuick = [65, 4, 55, 765, 10, 11, 1, 78, 5];

// console.log(bubbleSort(array));
// console.log(selectionSort(array));
// console.log(mergeSort(arrayForMerge));
console.log(quickSort(arrayForQuick));

// console.log(array);
