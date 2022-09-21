// O (log n)
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = (nums, target) => {
 let res = []
 res[0] = findFirst(nums,target)
 res[1] = findLast(nums,target)
 return res
};

    const findFirst = (nums,target) => {
        let idx = -1
        let start = 0
        let end = nums.length - 1
        
        while(start<=end){
            let mid = (start+end) >> 1
            
// slide to left (end = mid-1) if nums[mid]==target => idx always in max left position
            if(nums[mid]>=target) end = mid -1
            else start = mid  +1
            
            if(nums[mid]==target) idx = mid
        }
        
        return idx
    }
    
     const findLast = (nums,target) => {
        let idx = -1
        let start = 0
        let end = nums.length - 1
        
        while(start<=end){
            let mid = (start+end) >> 1

// slide to right (start = mid +1) if nums[mid]==target => idx always in max right position
            if(nums[mid]<=target) start = mid +1
            else end = mid  -1

            if(nums[mid]==target) idx = mid
        }
        
        return idx
    }