

function findMinAndRemoveSorted(array){
    let min = array[0];
    let minIndex = 0;
  for (let i=0; i<array.length; i++){
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function merge(firstHalf, secondHalf){
    let sorted = []
    let currentMin;
    while(firstHalf.length != 0 && secondHalf.length != 0){
      let currentMin = findMinAndRemoveSorted(firstHalf.concat(secondHalf))
      sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(firstHalfArray,secondHalfArray){
    if(array.length < 2){
      return array;
    } else {
      merge(mergeSort(firstHalfArray), mergeSort(secondHalfArray))
    }
  }
