function findMinAndRemoveSorted(array) {
  return parseInt(array.splice(0, 1).join(), 10)
}

function merge(firstSubArr, secondSubArr) {
  const processSort = [];

  while (firstSubArr.length != 0 && secondSubArr.length != 0) {
    if (firstSubArr[0] < secondSubArr[0]) {
      processSort.push(findMinAndRemoveSorted(firstSubArr));
    } else {
      processSort.push(findMinAndRemoveSorted(secondSubArr));
    }
  }

  const finalSort = processSort.concat(secondSubArr).concat(firstSubArr);

  return finalSort
}

function mergeSort(array) {
  //split in half into separate arrays until array.length = 1
  // (arrays of length 0 or 1 are 'sorted' by default)
  let midpoint = Math.floor(array.length / 2)
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if (firstHalf.length > 1) {
    firstHalf = mergeSort(firstHalf)
  }
  if (secondHalf.length > 1) {
    secondHalf = mergeSort(secondHalf)
  }
  // merge two sorted arrays into one sorted array using the above merge function
  let sorted = merge(firstHalf, secondHalf);

  return sorted
}

// Basic understandign for recursion: when you call the method that you are recursing, code top level like you have a working
// function that WILL return a successful answer.
// Here, think that the first time your code encounters lines 28 and 31, those mergeSort methods WILL return a sorted array and then when you
// go down to line 34 and put them together with merge, you will be done.
// from the point of view of the outermost call of mergeSort, this IS true, but then inside of the mergeSort call the next level down it is
// also true. It's ALWAYS true as the code successfully does the same thing each time. But each individual level only knows about what's
//happening on it's own level (and tangentially the return it got from one level down, which knows about the return it got from one level
// down, which knows about the return it got from one level down, and so on until it stops) -- but even though your current level knows about
// return from one level down, it has NO control over what happens on that level so it can only assume that that level worked correctly
// and move on to the next step with the expectation that it received correct information
