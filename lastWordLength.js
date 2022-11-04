// *************************************************
// Length of Last Word: https://leetcode.com/problems/length-of-last-word/
// *************************************************
var lengthOfLastWord = function (s) {
  return s
    .split(" " || "  ")
    .filter(function (word) {
      return word !== "";
    })
    .at(-1).length;
};

let s = "Hello World";
console.log(lengthOfLastWord(s));
