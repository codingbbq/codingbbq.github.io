---
layout: post
title:  "Problems and Challenges for the win"
categories: hackerrank
excerpt : Continuing our quest and rank pushing along with learning every single minute, we try improve our skills by solving hackerrank problems.
---

### Gem Stones - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/gem-stones/problem)

In this problem, I learned about
1. `.set` implementation ES6
2. Used the spread operator (...)
3. Got the array intersection using `.reduce`, `.filter` and `.includes` - I am still unsure how it behaves, I found this function definition on StackOverflow.

```javascript

function gemstones(arr) {
  
  
  let finalArray = [];
  // We want to remove the duplicates from the string given
  for(let i = 0; i < arr.length; i++){
    
    // new Set is ES6 which creates a set implementation.
    // ... is spread operator which converts it into an array.
    finalArray.push([...new Set(arr[i])]);
  }
  
  // We use the reduce + filter combination to get the intersection of array
  // because we want to get the common values in the given array.
  let newArray = finalArray.reduce((p,c) => {
    return p.filter((e) => {
      return c.includes(e)
    });
  });
  
  return newArray.length;

}

console.log(gemstones(["abcdde", "baccd", "eeabg"]));

```
---

### Beautiful string - hackerrank

[Problem statement](https://www.hackerrank.com/challenges/beautiful-binary-string/problem)

```javascript

function beautifulBinaryString(b) {
  
  // .split creates an array without the string
  // we then join the newly created array
  // Get the length of original string and substract from the newly created string
  // We get the length of the string without the pattern
  // Since we want to replace only one character from the pattern, we divide by 3
  return (b.length - (b.split("010").join("")).length)/3;
  
}

console.log(beautifulBinaryString("0101010"));
console.log(beautifulBinaryString("01100"));
console.log(beautifulBinaryString("0100101010"));

```
---

### Super Reduced string - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/reduced-string/problem)

I took help of google to find an elegant solution, but found the solution on hackerrank discussion forum


```javascript

function superReducedString(s) {
  
  // Convert the string to array so that we can use the array methods
  let chars = s.split('');
  
  // Loop through each array elements
  for(let i = 0; i < chars.length; i++){
    
    // If both the adjacent elements are equal, we use splice and 
    // reduce the array and then
    // recursively call the function with the reduced string
    if(chars[i] == chars[i+1]){
      chars.splice(i, 2);
      return superReducedString(chars.join(''));
    }
  }
  
  // Return remaining string length
  return chars.length ? chars.join('') : "Empty string";
  
}

console.log(superReducedString("aaabccddd"));

```
---

### Palindrome Index - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/palindrome-index/problem)

This was a very interesting problem and I had to iterate many times to get the challenge executed. Below is my attempted solution

```javascript

function palindromeIndex(s) {
    
    let chars = s.split('');
    
    let i = 0, k = chars.length - 1;

    // If the string itself is palindrome, we need not do anything and return -1
    if(checkPalindrome(s)){
      return -1;
    }

    // Loop through the string with two pointers i and k
    // Loop until mid of the array because we are checking from both the ends
    // i is from beginning of array and k is from end of array
    while(i != k && i < Math.floor(chars.length/2) && k > Math.floor(chars.length/2)){
      
      // If the characters do not match?
      if(chars[i] != chars[k]){

        // Check if the next ith character matches with the kth character
        if(chars[i+1] == chars[k]){
          
          // If there is a match, we check if the new string is a palindrome by removing the ith character
          let newString = s.substring(0, i) + s.substring(i + 1, s.length);
          
          // If the new string is a palindrome, we return the ith index
          if(checkPalindrome(newString)){
            // Since we return i, we would come out of the while loop
            return i;
          }
          
        }
        
        // In certain situation, we may also encounter when k-1th is equal to ith
        if(chars[i] == chars[k-1]){

          // We again discard the kth character and check if it is palindrome
          let newString = s.substring(0, k) + s.substring(k + 1, s.length);

          if(checkPalindrome(newString)){
            return k;
          }
        }
        
      }else{
        // Increment ith and decrement kth index
        i++;
        k--;
      }
            
    }

}

// Check if the string is palindrome
function checkPalindrome(s){
  return s === s.split('').reverse().join('');
}

console.log(palindromeIndex("hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh"));
console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));

```

---

### Anagram - hackerrank

[Problem Statement](https://www.hackerrank.com/challenges/anagram/problem)

```javascript

function anagram(s) {
  
  // Check if we can break the string in two equal parts
  if(s.length % 2 != 0){
    // we cannot break the string in eqaul parts, hence return
    return -1;
  }
  
  // Break the string into two strings of equal length
  let len = s.length/2;
  let s1 = s.substring(0, len);
  let s2 = s.substring(len, s.length);
  
  // We split the strings into arrays.
  let s1Array = s1.split('');
  let s2Array = s2.split('');
  let count = 0;
  
  // loop through one of the array and check if the item is 
  // present in the other array. We use indexOf
  // If the item is present, we change the other array value to -1
  // If it is not present, we incremenet the count, which means we need
  // to change that character.
  for(let i = 0; i < s1Array.length; i++){
    let index = s2Array.indexOf(s1Array[i]);
    if(index >= 0){
      s2Array[index] = -1;
    }else{
      count++;
    }
  }
  
  return count;

}

console.log(anagram("aaabbb"));
console.log(anagram("ab"));
console.log(anagram("abc"));
console.log(anagram("mnop"));
console.log(anagram("xyyx"));
console.log(anagram("xaxbbbxx"));

```

---

### Making Anagrams - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/making-anagrams/problem)

Below is my attempted solution, it may not be the most optimized. I am definitely looking at some other approach.

```javascript

function makingAnagrams(s1, s2){
  
 // We split the strings into array
  let s1Array = s1.split('');
  let s2Array = s2.split('');
  let count = [];
  
  // Loop through first array
  for(let i = 0; i < s1Array.length; i++){
    
    if(s1Array[i] != -1){
      // Check if the item of first array exists in second array
      let index = s2Array.indexOf(s1Array[i]);
      if(index >= 0){
        // We change the value to -1 if the element match exists
        s1Array[i] = s2Array[index] = -1;
      }else{
        // We push that item in another array
        count.push(s1Array[i]);
      }
    }
    
  }
  
  // Same check for items from array 2 to array 1.
  for(let j = 0; j < s2Array.length; j++){
    
     if(s2Array[j] != -1){
      let index = s1Array.indexOf(s2Array[j]);
      if(index >= 0){
        s1Array[j] = s2Array[index] = -1;
      }else{
        count.push(s2Array[j]);
      }
     }
  }
  
  return count.length

}

console.log(makingAnagrams("absdjkvuahdakejfnfauhdsaavasdlkj", "djfladfhiawasdkjvalskufhafablsdkashlahdfa"));
console.log(makingAnagrams("cde", "abc"));

```