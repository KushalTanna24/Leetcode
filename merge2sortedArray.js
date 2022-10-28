// *************************************************
// Merge 2 sorted array: https://leetcode.com/problems/merge-two-sorted-lists/
// *************************************************
list1 = [1,2,4], list2 = [1,3,4]

function mergeTwoLists(list1, list2) {
    let newList = []
    newList = [...list1, ...list2]
    return newList.sort()
};
console.log(mergeTwoLists(list1,list2))