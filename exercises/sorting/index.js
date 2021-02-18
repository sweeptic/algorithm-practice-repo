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

function merge(left, right) {}

function mergeSort(arr) {}

function quickSort(left, right) {}

//
// console.log(bubbleSort([5, 3, 2, 4, 100, 6, 34, 22, 17, 9, 1, 10]));

console.log(selectionSort([5, 3, 2, 4, 100, 6, 34, 22, 17, 9, 1, 10]));
