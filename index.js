
function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(arr1, arr2) {
  let sortedArr = [];

  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(findMinAndRemoveSorted(arr1))
    } else {
      sortedArr.push(findMinAndRemoveSorted(arr2))
    }
  }

  return sortedArr.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
  let midPoint = arr.length/2;
  let fHalf = arr.slice(0,midPoint);
  let sHalf = arr.slice(midPoint, arr.length);

  if (arr.length === 1) {
    return arr;
  } else {
    return merge(mergeSort(fHalf), mergeSort(sHalf))
  }
}
