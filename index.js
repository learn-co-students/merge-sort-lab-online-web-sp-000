function findMinAndRemove(a, b) {
  return (a[0] < b[0]) ? a.shift() : b.shift();
}

function findMinAndRemoveSorted(arr) {
  return (arr.length <= 1) ? arr[0] : findMinAndRemove(arr[0], arr);
}

function merge(a, b) {
  let sorted = [];
  while (a.length != 0 && b.length != 0) {
    sorted.push(findMinAndRemove(a, b));
  }

  return sorted.concat(a).concat(b);
}

function mergeSort(arr) {
  let mid = arr.length / 2;
  let a = arr.slice(0, mid);
  let b = arr.slice(mid, arr.length);

  return (arr.length < 2) ? arr : merge(mergeSort(a), mergeSort(b));
}
