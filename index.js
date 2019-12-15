
function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(firstHalf, secondHalf){
  var sorted = []
    while (firstHalf.length !== 0 && secondHalf.length !== 0) {
            if (firstHalf[0] > secondHalf[0]){
                sorted.push(findMinAndRemoveSorted(secondHalf))
            }else{
                sorted.push(findMinAndRemoveSorted(firstHalf))
            }
    }
    return sorted.concat(firstHalf).concat(secondHalf);
}

function mergeSort(array){

  let midPoint = array.length / 2;
  let fHalf = array.slice(0,midPoint);
  let sHalf = array.slice(midPoint, array.length);
  let sorted;
    if(array.length === 1){
      return array;
    }else {
      sorted = merge(mergeSort(fHalf), mergeSort(sHalf))
    }
    return sorted;
  }
