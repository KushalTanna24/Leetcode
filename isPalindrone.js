// *************************************************
// Check if number or word entered is palindrome: https://leetcode.com/problems/palindrome-number/
// *************************************************
const isPalindrome =(num) =>{
    let string
    if(!num){
        return "please enter a valid input"
    }
    typeof num !== 'string'? string= num.toString().toLowerCase() :  string = num.toLowerCase()
    let result = string.split("").reverse().join("").toLowerCase()

    return (string === result ? true : false)
    }
console.log(isPalindrome("ABCBa"))