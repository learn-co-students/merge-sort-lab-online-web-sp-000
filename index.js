
function findMinAndRemoveSorted(a) {
  return a.shift();
}

function merge(aOne, aTwo) {
  let r = [];
  while (aOne.length > 0 && aTwo.length > 0) {
    aOne[0] < aTwo[0] ? r.push(findMinAndRemoveSorted(aOne)) : r.push(findMinAndRemoveSorted(aTwo));
  }
  return r.concat(aOne).concat(aTwo);
}

function mergeSort(a) {
  if (a.length < 2) {
    return a;
  } else {
    let mid = a.length/2;
    let firstHalf = a.slice(0, mid);
    let secondHalf = a.slice(mid, a.length);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }

}
