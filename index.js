// finds and removes the minimum element of a sorted array 
function findMinAndRemoveSorted(arr) {
    return arr.shift();
}

// merges two sorted array into one sorted array
function merge(arr1, arr2) {
    let sorted = [];

    while (arr1.length !== 0 && arr2.length !== 0) {
        if (arr1[0] < arr2[0]) {sorted.push(findMinAndRemoveSorted(arr1))}
        else {sorted.push(findMinAndRemoveSorted(arr2))}
    }

    return sorted.concat(arr1).concat(arr2);
}

// splits array into one elements array, then merges them into one sorted array
function mergeSort(arr) {
    let midPoint = arr.length / 2;
    let firstHalf = arr.slice(0, midPoint);
    let secondHalf = arr.slice(midPoint, arr.length);

    if (arr.length < 2) {
        return arr;
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}