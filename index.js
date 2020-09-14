function findMin(array){
  const reducer = (a, b) => a < b ? a : b;

  if (array)
    if (array.length > 0)
      return array.reduce(reducer);
}

function findMinAndRemoveSorted(array1, array2){
  const array1Min = findMin(array1);
  const array2Min = findMin(array2);


  if (array1Min && array2Min) {
    return array1Min < array2Min ? array1.splice(array1.indexOf(array1Min), 1) : array2.splice(array2.indexOf(array2Min), 1)[0];
  } else if (array1Min) {
    return array1.splice(array1.indexOf(array1Min), 1)[0];
  } else if (array2Min) {
    return array2.splice(array2.indexOf(array2Min), 1)[0];
  }
}

function mergeSort (a1){
  return a1.sort((a, b) => a - b);
}

function merge(a1, a2){
  debugger;
  const target = []

  while (a1.length > 0 || a2.length > 0){
    if (a1.length > 0 && a2.length > 0){
      if (a2[0] > a1[0]){
        target.push(a1.shift());
      } else {
        target.push(a2.shift());
      }
    } else if (a1.length > 0){
      target.push(...a1);
      a1 = [];
    } else if (a2.length > 0){
      target.push(...a2);
      a2 = [];
    }
  }
  return target;
}
