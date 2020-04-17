// console.log(findMinAndRemoveSorted([4,3,2]));

function findMinAndRemoveSorted(array)
{
  // We shouldn't trust that array is sorted.
  let min = array[0];
  let minIndex = 0;

  for(let i = 0; i < array.length; i++){
    if(array[i] < min)
    {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return min;
}

// console.log(merge(
//   [1,2,3,8],
//   [6,7,8,9]
// ));

function merge(firstArray, secondArray)
{
  let sorted = [];
  let currentMin;

  while(firstArray.length != 0 && secondArray.length != 0)
  {
    if(firstArray[0] < secondArray[0])
    {
      currentMin = findMinAndRemoveSorted(firstArray);
    } else {
      currentMin = findMinAndRemoveSorted(secondArray);
    };
    sorted.push(currentMin);
  };
  return sorted.concat(firstArray).concat(secondArray);
}

// console.log(mergeSort([7,8,1,6]));

function mergeSort(array)
{
  let mid = array.length/2;
  let firstHalf = array.slice(0, mid);
  let secondHalf = array.slice(mid, array.length);

  if(array.length < 2)
  {
     return array
   } else {
     return merge(mergeSort(firstHalf), mergeSort(secondHalf));
   };
}
