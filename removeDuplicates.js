// *************************************************
// Remove duplicate elements from global sorted array: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// *************************************************

function removeDuplicates(nums) {
    let insertIndex = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] != nums[i]){  
            nums[insertIndex] = nums[i];  
            insertIndex++; 
        }
    }
    return insertIndex;
};

let arr1 = [1,1,2]
let arr2 =[0,0,1,1,1,2,2,3,3,4]

removeDuplicates(arr1)
