function findMinAndRemoveSorted(arr){
    let j = 0
    if (arr.length === 1){
        return arr[0]
    } else {
        for(let i = 0; i < arr.length; i++){
            if (arr[i] < arr[j]) {
                j = i
            }
        }
    }
    return arr.splice(j,1)
}

function merge(arr1, arr2){
    let sorted = [];
    while (arr1.length != 0 && arr2.length !=0){
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.splice(0,1)[0]) 
        } else {
            sorted.push(arr2.splice(0,1)[0])
        }
    }
        return sorted.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
    let mid = arr.length/2
    let first = arr.sllice(0, mid)
    let second = arr.sllice(mid, arr.length)
    if (arr.length < 2) {
        return arr
    } else {
        return merge(mergeSort(first), mergeSort(second))
    }
}