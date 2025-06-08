var isPalindrome = function(x) {
    return x == 0 ? false : x == + x.toString().split("").reverse().join("")
};
console.log(isPalindrome(121)) //true
console.log(isPalindrome(12))  //false
