// *************************************************
// Search valid position in array in order to push the target value to keep array sorted: https://leetcode.com/problems/search-insert-position/
// *************************************************
var searchInsert = function (nums, target) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] >= target) {
      return i;
    } else if (nums[nums.length - 1] < target) {
      return nums.length;
    }
    i++;
  }
};

let nums = [1, 5, 4, 4, 6];
let target = 20;

console.log(searchInsert(nums, target));
