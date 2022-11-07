// *************************************************
// Remove duplicates element from sorted array: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// *************************************************

var deleteDuplicates = function (head) {
  for (let i = 0; i < head.length; i++) {
    for (let j = head.length; j >= i + 1; j--) {
      if (head[i] === head[j]) {
        head.splice(j, 1);
      }
    }
  }
  return head;
};

// let head = [1, 1, 1, 2, 2, 3, 2];
let head = [1, 1, 2, 3, 3];
console.log(deleteDuplicates(head));
console.log(head);
