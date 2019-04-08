---
layout: post
title:  "Practicing challenges at Hackerrank"
categories: hackerrank
excerpt : Its summer and the scrotching heat will not stop us from challeging ourselves to solve Hackerrrank problems.
---

### Game of Thrones 1 - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/game-of-thrones/problem)

The challenge is to check if a given string can be rearranged in such a way that it can form a palindrome. To be able to solve this, I wanted to run this accross some of my own test cases.

1. aabccaa
The above text can be a palindrome if rearranged to `aacbcaa`. Let us count the frequency of each characters
a : 4
b : 1
c : 2

2. aabbccaa
If rearranged, we get palindrome for `aabccbaa` with frequency as follows
a : 4
b : 2
c : 2

3. aaabb
If rearranged, we get palindrome for `ababa` with frequency as follows
a : 3
b : 2

4. aaabccc
Above string cannot be rearranged into a palindrome. Let us see the frequency of each characters
a : 3
b : 1
c : 3

5. aabbcccddd
Above cannot be rearranged to palindrome. Let us see the frequency
a : 2
b : 2
c : 3
d : 3

Based on above test cases, we can conclude that, for a string to be palindrome, it should have *at most* ONE odd occurrence of a character, which means either zero or one odd occurrence of a character.

Below is my attempt in javascript

```javascript

function gameOfThrones(s) {
  
  // If a string has at most 1 character occurring odd number of times
  // and rest all characters occurring even number of times
  
  let characters = s.split('');

  // Lets get the frequency of each characters  
  let frequency = characters.reduce((acc, item) => {
    if(acc[item]){
      acc[item] = acc[item] + 1;
    }else{
      acc[item] = 1;
    }
      
    return acc;
      
  }, {});
  

  let count = 0;
  for(let key in frequency){
    if(frequency[key] % 2 != 0){
      count++;
    }
    
    if(count > 1){
      return "NO";
      break;
    }
  }
  
  if(count <= 1){
    return "YES";
  }

}

console.log(gameOfThrones("aaabbbb"));
console.log(gameOfThrones("cdcdcdcdeeeef"));
console.log(gameOfThrones("cdefghmnopqrstuvw"));

```

---

### Two Strings - Hackerrank

[Problem Statement](https://www.hackerrank.com/challenges/two-strings/problem)

For this challenge I used the `indexOf` javascript method.
One caveat in my solution is, it does not give exact match. For example
"Hello" and "World" has two substrings, i.e "l" and "o". However my function below also considers the second "l" from "Hello" and shows as a match, thus giving a total of 3 matches.

Since the problem was to get the a "Yay" or a "Nay" for a substring match, our solution passes all the test on hackerrank. 

I further optimized the code by using the ternary operator to return the output. Super happy.

```javascript

function twoStrings(s1, s2) {
  
  let s1Arr = s1.split('');
  
  // We call the reduce function on the 2nd string and 
  // use indexOf method to get a match.
  let sum = s1Arr.reduce((total, item) => {
    if(s2.indexOf(item) >= 0){
      total = total + 1;
    }
    return total;
  }, 0);
  
  
  // if(sum > 0){
  //   return "YES";
  // }else{
  //   return "NO";
  // }
  
  return (sum > 0) ? "YES" : "NO"

}

console.log(twoStrings("Hello", "World"));

```

---

### String Construction - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/string-construction/problem)

Initially my approach was to
1. Break the string into array
2. Loop through each character
3. Push to a new string and slice the remaining strings into another variable
4. When pushing to new string, increment the counter
5. Check if the new string and the slice string length are same
6. If the length are same, then compare both the strings as chances are both the strings can be anagrams
7. Return the counter as the string construction cost.

Now, if we break down the problem statement, we realize that, we need to remove all the duplicate characters in the string and return the length. 
So, a one liner ES6 solution could be as below

```javascript

function stringConstruction(s) {
  return [...new Set(s)].length;
}

console.log(stringConstruction("abcd"));
console.log(stringConstruction("abab"));

```

Even though the solution code and the problem statement do not seem to be as per logical view to anyone, the solution lies on how we approach the challenge and what learning the pattern of the outcome.