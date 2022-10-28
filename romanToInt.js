// *************************************************
// Roman to int: https://leetcode.com/problems/roman-to-integer/
// *************************************************
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

function romanToInt(s) {
    const values ={
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }

    s = s.replace("IV", "IIII").replace("IX","VIIII").replace("XL","XXXX").replace("XC","LXXXX").replace("CD","CCCC").replace("CM","DCCCC")

    let answer = 0;
    for(i=0; i<s.length; i++){
        answer += values[s[i]]
    }
    return answer
};

console.log(romanToInt("MCMXCIV"))