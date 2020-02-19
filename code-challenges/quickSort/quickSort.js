'use strict';

function QuickSort(array) {
  if (!array) return 'No Array Given';

  if (array.length <= 1) {
    return array;
  } else {
    const left = [];
    const right = [];
    const newArray = [];
    let pivot = array.pop();
    let length = array.length;

    for (let i = 0; i < length; i++) {
      if (array[i] <= pivot) {
        left.push(array[i])
      } else {
        right.push(array[i])
      }
    }

    return newArray.concat(QuickSort(left), pivot, QuickSort(right))
  }
}

module.exports = QuickSort;