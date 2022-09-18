
// O logn
var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    
    const isAscending = nums[start] < nums[end]
    
    while(start <= end ){
        let middle = Math.floor(start + (end-start)/2)
        
        if(target===nums[middle]) {
            return middle
        }
        
        if(isAscending){
            if(target> nums[middle]){
                start = middle+1
            }
            if(target<nums[middle]){
                end = middle-1
            }
        }else{
            if(target < nums[middle]){
                start = middle+1
            }
            if(target>nums[middle]){
                end = middle-1
            }
        }
    }
    return -1
};