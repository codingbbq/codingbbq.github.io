---
layout: post
title:  "Palindrome Number : Leetcode Algorithm Problem"
categories: algorithm
---

### Palindrome Number
> Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

[Link to leetcode problem](https://leetcode.com/problems/palindrome-number/)

My first approach was to convert the number into string and then break it into a array using the .split() function.
Then reverse the array and compare each item of the reversed array with original array.

However, the above solution causes a type conversion.
The challenge is to solve it without converting the integer to a string.

Below are the test cases covered

|  Input  	| Output  	|
|---	|---	|
|  121 	|  true 	|
|   -121	|   false   	|
|  0 	|   true	|
|  123 	|   false	|

Below is my approach. The Runtime is 280ms with a memory usage of 45.1MB

```javascript

var isPalindrome = function(x) {

    // If the number is negative, outright return a false.
    if(x < 0){
        return false;
    }
    
    // If the number is a single digit i.e less than 10, then it is a palindrome
    if(x > 9){

      /* 
      Number is more than 1 digit, so run through the math operator % (mod) and 
      than divide by 10 to get individiaul digits.
      We Store each digit in two arrays, in one array the original 
      sequence and in another array, the reverse sequence.
      */
      
      let output = []; let input = [];
      while(x){
        input.unshift(x % 10)
        output.push(x % 10);
        x = Math.floor(x/10);
      }
      
      let IsPalindrome = true;
      for(let i = 0; i<input.length; i++){
          if(input[i] !== output[i]){
            IsPalindrome = false;
            break;
          }
      }
      return IsPalindrome;
    }else{
      return true;
    }
};

console.log(isPalindrome(1000021));
console.log(isPalindrome(0));
console.log(isPalindrome(101101));
console.log(isPalindrome(-123321));

```




