// *************************************************
// valid parantheses: https://leetcode.com/problems/valid-parentheses/
// *************************************************
function isValid(s) {
    if (s.length === 0) return true
    if (s.length % 2 !== 0) return false
    const pairs = {
        "]":"[",
        "}":"{",
        ")":"("
    }
    const stack =[]
    for(let i = 0; i < s.length; i++) {
        console.log(i);
        if(stack.length !== 0 && pairs[s[i]] === stack[stack.length -1]){
            stack.pop(s[i]);
        }else{
            stack.push(s[i])
        }
    }
    return !stack.length
};

console.log(isValid("{}()"))