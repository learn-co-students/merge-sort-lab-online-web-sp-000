function findMinAndRemoveSorted(array) {
    let min = array[0];
    let minIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }

    array.splice(minIndex, 1)
    return min;
}

function findMinAndRemove(firstArray, secondArray) {
    let firstMin = firstArray[0];
    let secondMin = secondArray[0];
    if (firstMin <= secondMin) {
        firstArray.shift();
        return firstMin;
    } else {
        secondArray.shift();
        return secondMin;
    }

}

function merge(firstArray, secondArray) {
    let sorted = [];
    while (firstArray.length != 0 && secondArray.length != 0) {
        // compare the two minimums. Whichever is smaller, add to sorted
        let min = findMinAndRemove(firstArray, secondArray);
        sorted.push(min);
    }

    // return sorted array once both array lengths are 0 
    return sorted.concat(firstArray).concat(secondArray);

}

function mergeSort(array) {
    let midway = array.length / 2 
    let firstHalf = array.slice(0, midway);
    let secondHalf = array.slice(midway, array.length)

    if (array.length < 2) {
        return array;
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}
