function findMinAndRemoveSorted(arr){
    let min = arr[0];
    let minPos = 0;
    for(let i = 0; arr.length > i; i++){
        if(min > arr[i]){
            min = arr[i];
            minPos = i;
        }
    }
    arr.splice(minPos, 1)
    return min
}

function sortRemove(first, second){
    let firstMin = first[0];
    let secondMin = second[0];
    if (firstMin >= secondMin){
        second.shift();
        return secondMin;
    } else {
        first.shift();
        return firstMin;
    }
}

function merge(first, second){
    let sorted = [];
    while (first.length !== 0 && second.length !== 0){
        sorted.push(sortRemove(first, second))
    }
    return sorted.concat(first).concat(second)
}

function mergeSort(arr){
    let half = arr.length/2;
    let firstHalf = arr.slice(0, half);
    let secondHalf = arr.slice(half, arr.length);
    
    if (arr.length < 2) {
        return arr;
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}