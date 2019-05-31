
function findMinAndRemoveSorted(sortedArray) {
    return sortedArray.shift();
}

function merge(arrayOne, arrayTwo) {
    let sorted = [];
    while(arrayOne.length != 0 && arrayTwo.length != 0) {
        if(arrayOne[0] > arrayTwo[0]) {
            sorted.push(findMinAndRemoveSorted(arrayTwo))
        } else {
            sorted.push(findMinAndRemoveSorted(arrayOne))
        }
    }
    return sorted.concat(arrayOne).concat(arrayTwo);
}

function mergeSort(unSortedArray) {
    let sorted;
    let mid = unSortedArray.length / 2
    let front = unSortedArray.slice(0, mid)
    let back = unSortedArray.slice(mid, unSortedArray.length)
    if(unSortedArray.length < 2){
        return unSortedArray
      } else {
        sorted = merge(mergeSort(front), mergeSort(back))
      }
    return sorted
}