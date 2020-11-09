function findMinAndRemoveSorted(array)
{
  return array.shift()
}



function merge(firstArray, secondArray)
{
  let sortedArray = [];
  while(firstArray.length > 0 && secondArray.length > 0)
  {
    if(firstArray[0] < secondArray[0])
    {
      let min = findMinAndRemoveSorted(firstArray)
      sortedArray.push(min);
    }
    else
    {
      let min = findMinAndRemoveSorted(secondArray)
      sortedArray.push(min);
    }
  }
  return sortedArray.concat(firstArray).concat(secondArray);
}


function mergeSort(array)
{
  let middle = array.length / 2
  let firstHalf = array.slice(0, middle)
  let secondHalf = array.slice(middle, array.length)

  if(array.length < 2)
  {
    return array
  }
  else
  {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
} 