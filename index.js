function findMinAndRemoveSorted(array) {
    let min = array[0];
    let minIdx = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIdx = i;
        } 
    }
    array.splice(minIdx, 1);
    return min;
}

function merge(a1, a2) {
    const mergedArray = new Array(a1.length + a2.length);
    for (let i = 0, j = 0, k = 0; i < mergedArray.length; i++) {
        if (j == a1.length) {
            mergedArray[i] = a2[k];
            k++;
            continue;
        } else if (k == a2.length) {
            mergedArray[i] = a1[j];
            j++;
            continue;
        } else if (a1[j] < a2[k]) {
            mergedArray[i] = a1[j];
            j++;
            continue;
        } else {
            mergedArray[i] = a2[k];
            k++;
        }
    }
    return mergedArray;
}

function mergeSort(array) {
    if (array.length === 1) return array;
    const left = mergeSort(array.splice(0, Math.floor(array.length/2)));
    const right = mergeSort(array.splice(0, array.length));

    return merge(left, right);
}
