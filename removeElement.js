// *************************************************
// Remove element from and change the value in global array value: https://leetcode.com/problems/remove-element/
// *************************************************
var removeElement = function(nums, val) {
    while(nums.indexOf(val) >= 0) {
    nums.splice(nums.indexOf(val,0), 1);
}
return nums.length;
};