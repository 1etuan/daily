// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

var nextGreatestLetter = function(letters, target) {
    let start = 0
    let end = letters.length - 1
    
    while(start<=end){
        let mid  = Math.floor((start+end)/2)
        
        if(target>=letters[mid]){ // remember this, in binary search with "greater than cases"
            start = mid + 1
        }else end = mid - 1
    }
    return letters[start%letters.length]
};