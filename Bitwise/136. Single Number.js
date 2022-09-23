https://leetcode.com/problems/single-number/

function findSingleNumber(arr) {
  const numberMap = new Map()
  
  for(let i = 0; i < arr.length; i++) {
    if(numberMap.has(arr[i])){
      numberMap.delete(arr[i])
    } else {
      numberMap.set(arr[i], 0)
    }
  }
  for(const k of numberMap.keys()){
    return k
  }
}
  
findSingleNumber([1, 4, 2, 1, 3, 2, 3])//4
findSingleNumber([7, 9, 7])//9