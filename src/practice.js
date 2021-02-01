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

function mergeSort(array) {}
function quickSort(array) {}

const array = [65, 4, 55, 765, 10, 11, 1, 78, 5];
const arrayForMerge = [65, 4, 55, 765, 10, 11, 1, 78, 5];
const arrayForQuick = [65, 4, 55, 765, 10, 11, 1, 78, 5];

console.log(bubbleSort(array));
console.log(selectionSort(array));
// console.log(mergeSort(arrayForMerge));
// console.log(quickSort(arrayForQuick));

// console.log(array);
