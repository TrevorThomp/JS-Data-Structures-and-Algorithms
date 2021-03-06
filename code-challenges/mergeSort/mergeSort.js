'use strict';

function mergeSort(arr) {

  if (!arr) return 'No Array Given';
  if (arr.length === 0) return 'Empty Array';

  if (arr.length <= 1) { 
    return arr; 
  }

  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(
    mergeSort(left), mergeSort(right),
  );
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  } 
  return result
    .concat(left.slice(i))
    .concat(right.slice(j));
}

module.exports = mergeSort;