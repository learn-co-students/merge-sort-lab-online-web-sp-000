function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}
function findMinAndRemove(array1, array2) {
  let min1 = array1[0];
  let min2 = array2[0];

  if (min1 < min2) {
    return array1.shift();
  } else {
    return array2.shift();
  }
}

function merge(array1, array2) {
  let sorted = [];
  while (array1.length != 0 && array2.length != 0) {
    let currentMin = findMinAndRemove(array1, array2);
    sorted.push(currentMin);
  }
  return sorted.concat(array1).concat(array2);
}

function mergeSort(array) {
  console.log(`mergeSort-ing ${array}`);
  debugger;
  let midpoint = array.length / 2;
  let array1 = array.slice(0, midpoint);
  let array2 = array.slice(midpoint, array.length);
  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(array1), mergeSort(array2));
  }
}
