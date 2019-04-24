---
layout: post
title:  "Valid Parenthesis : Leetcode Algorithm Problem"
categories: hackerrank
excerpt : This is by far the most interesting problem I saw on leetcode. Also the algorithm to solve such challenge was super easy to undrstand and at the same time it was also super easy to implement. 
---

### Valid Parenthesis

>Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
>
>An input string is valid if:
>
> 1. Open brackets must be closed by the same type of brackets.
> 2. Open brackets must be closed in the correct order.
>Note that an empty string is also considered valid.

[Link to leetcode problem](https://leetcode.com/problems/valid-parentheses/)

To be honest, even though this was an easy problem, I had to scratch my head. However, the problem was quite trivial.

So to jump in the solution,
1. Create a map of open sting v/s closed string.
2. Create an array out of the string by breaking it using the .split function i.e a stack
3. Create a reference array and keep it empty.
4. Loop through each element of the stack and compare the value with the reference array using the map we created in step 1.
5. If the condition matches, we pop from the reference array, else we push in the reference array.
6. If the reference array is empty, it means that the parenthesis are valid.


``` javascript

let parenthesisObject = {
  ")" : "(",
  "]" : "[",
  "}" : "{"
};

var isValid = function(s) {
     
    let stackCheck = [];
    let stack = s.split("");
    
    for(let i = 0; i < stack.length; i++){
      if(stackCheck.length > 0 && (stackCheck[stackCheck.length - 1] == parenthesisObject[stack[i]])){
        stackCheck.pop();
      }else{
        stackCheck.push(stack[i]);
      }
    }
  
    if(stackCheck.length == 0)
      return true;
    else
      return false;
};

console.log(isValid("(]")); // false
console.log(isValid("{}")); // true
console.log(isValid("([{([{[{}]}])}])")); // true
console.log(isValid("")); // true
console.log(isValid("[()]")) // true

```