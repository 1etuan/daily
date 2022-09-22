
// O (log_n) time | O (1) space
// https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/


class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) return Number.MAX_SAFE_INTEGER;
    return this.arr[index];
  }
}

function searchInInfiniteArray(reader, key) {
  //1. find the proper bounds
  let start = 0;
  let end = 1;
  while(key>reader.get(end)){
  let newStart = end + 1;
    end += (end - start + 1) * 2;

    //2. increase to double the bounds size
    start = newStart;
    console.log(start,'start',end,'end')
}
  return binarySearch(reader, key, start, end);
}

function binarySearch(reader, key, start, end) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (key < reader.get(mid)) {
      end = mid - 1;
    } else if (key > reader.get(mid)) {
      start = mid + 1;
    } else {
      //found the key
      return mid;
    }
  }
  return -1;
}

reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
searchInInfiniteArray(reader, 40); //-1, The key is not present in the array.
searchInInfiniteArray(reader, 16); // 6, The key is present at index '6' in the array.

reader = new ArrayReader([1, 3, 8, 10, 15]);
searchInInfiniteArray(reader, 15); //4, The key is present at index '4' in the array.
searchInInfiniteArray(reader, 200); //-1, The key is not present in the array.