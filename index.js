function findMinAndRemoveSorted(sorted_array) // removes the smallest element of a sort array.
{
  return sorted_array.shift(); // ...since the array is already, the first element is the smallest and the shift() removes the first element.
}

function merge(arrayOne, arrayTwo) // this function merges two arrays, and the elements of the array returned will be ascending order...
{
  let sorted = []; // stores array of it to contain sorted elements later on.

  while(arrayOne.length != 0 && arrayTwo.length != 0) // while the two arrays are both are not empty...
  {
    if(arrayOne[0] < arrayTwo[0]) // if the first element of arrayOne is smaller than the first element of arrayTwo then...
    {
      sorted.push(findMinAndRemoveSorted(arrayOne)); //...push arrayOne's first element into the local sorted array, but if it's not smaller, then...
    }
    else
    {
      sorted.push(findMinAndRemoveSorted(arrayTwo)); // ... push arrayTwo's first element because it's the smallest
    }
  }

  return sorted.concat(arrayOne).concat(arrayTwo); //... append the remaining elements of the two initial arrays to the sorted array, and then return that sorted array.
}

function mergeSort(array)
{
  let midpoint = array.length/2; // store the value that represents the midpoint an array. For instance, if there are 6 elements, the midpoint value is 3.
  let firstHalf = array.slice(0, midpoint); // stores all values of initial array from the first element up to the midpoint.
  let secondHalf = array.slice(midpoint, array.length); // "" ... "" ... "" ... " from the midpoint up to the last element.

  if(array.length < 2) // if the input array has only one element, then...
  {
    return array; // then just return it because it's already sorted, but the input array has more than 1 element, then...
  }
  else
  {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf)); // then call the merge helper function to combine the two local arrays, which recursively calls mergeSort to sort the two local arrays and ensure that the return value is properly sorted.
  }
}
