const findMinAndRemoveSorted = (array) => {
    return array.shift()
}

const merge = (firstSubArray, secondSubArray) => {
    let mergedArray = []
    while (firstSubArray.length != 0 && secondSubArray.length != 0){
        let firstSubArrayMin = firstSubArray[0] 
        let secondSubArrayMin = secondSubArray[0] 
        if (firstSubArrayMin < secondSubArrayMin){
            mergedArray.push(findMinAndRemoveSorted(firstSubArray))
        }else{
            mergedArray.push(findMinAndRemoveSorted(secondSubArray))
        }
    }
    return mergedArray.concat(firstSubArray).concat(secondSubArray)
}

const mergeSort = (unsorted) => {
    let midpoint = unsorted.length/2 
    let firstHalf = unsorted.slice(0, midpoint)
    let secondHalf = unsorted.slice(midpoint, unsorted.length)
    if (midpoint > 1){
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return merge(firstHalf, secondHalf)
}