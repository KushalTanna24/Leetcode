// *************************************************
// Merge and sort two sorted array: https://leetcode.com/problems/merge-sorted-array/
// *************************************************

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

function sortMerge(nums1, m, n, nums2) {
  for (let l = m; l < m + n; l++) {
    nums1[l] = nums2[l - m];
  }
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[i] < nums1[j]) {
        let temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
      }
    }
  }
  return nums1;
}

console.log(sortMerge(nums1, m, n, nums2));
