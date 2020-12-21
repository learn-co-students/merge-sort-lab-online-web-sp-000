function findMinAndRemoveSorted(array) {
  let min = array[0];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      array[i] = min
      index = i
    }
  }
  array.splice(index, 1)
  return min
}

function findMinAndRemove(array1, array2) {
  if (array1[0] < array2[0]) {
    return array1.shift()
  } else if (array2[0] < array1[0]) {
    return array2.shift()
  }
}

function merge(array1, array2) {
  let newArray = [];
  while (array1.length !== 0 && array2.length !== 0) {
    let min = findMinAndRemove(array1, array2)
    newArray.push(min)
  }
  return newArray.concat(array1).concat(array2)
}

function mergeSort(array) {
  let midpoint = array.length / 2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}