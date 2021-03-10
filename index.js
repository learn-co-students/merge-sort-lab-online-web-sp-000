let costOfItemsAtTraderJoes =  [1, 2, 6, 7, 8]
  let costOfItemsAtWholeFoods =  [3, 4, 5, 9, 10]

  let firstHalf =  [1, 2, 6, 7, 8]
let secondHalf =  [3, 4, 5, 9, 10]
function findMin(firstHalf, secondHalf){
  let minfirstHalf = firstHalf[0]
  let minsecondHalf = secondHalf[0]

function findMinAndRemoveSorted = (1,2,3,4);

  if(minfirstHalf < minsecondHalf){
    return minfirstHalf
  } else {
    return minsecondHalf
  }
}

function merge(firstHalf, secondHalf){
    let sorted = []
    while(firstHalf.length != 0 && secondHalf.length != 0){
      let currentMin = findMinAndRemove(firstHalf, secondHalf)
      sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
  }
