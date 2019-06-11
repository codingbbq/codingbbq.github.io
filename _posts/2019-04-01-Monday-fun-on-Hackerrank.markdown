---
layout: post
title:  "Monday fun day - Challenging myself on Hackerrank"
categories: hackerrank
excerpt : Happy Amazing Monday. Again, we try to push ourself on the hackerrank platform to learn algorithms and put our skills to test.
---

### Caesar Cipher 1 - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/caesar-cipher-1/problem)

This problem challenge was simple, however my initial solution failed for various test cases and hence I had to spend hackos. I had not considered the rotation factor for more than 26 characters. From this challenge, I learned about `charCodeAt()` and `fromCharCode()` methods.

```javascript

function caesarCipher(s, k) {

    let newString = [];

    // In case if the rotation is greater than 26
    k = k % 26;

    for (let i = 0; i < s.length; i++) {

        // Get the charCode of the alphabet
        let charCode = s[i].charCodeAt();
        let newCharCode = 0;

        // Char code of A-Z is 65 - 90
        // Char code of a-z is 97 - 122
        if (charCode >= 65 && charCode <= 90) {
            // Only then do a alphabet rotation
            newCharCode = charCode + k;
            if (newCharCode > 90) {
                newCharCode = (newCharCode - 90) + 64;
            }

        } else if (charCode >= 97 && charCode <= 122) {
            // Only then do a alphabet rotation
            newCharCode = charCode + k;
            if (newCharCode > 122) {
                newCharCode = (newCharCode - 122) + 96;
            }

        } else {
            newCharCode = charCode;
        }

        newString.push(String.fromCharCode(newCharCode));
    }

    return newString.join("").trim();

}

```

### Mars Exploration - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/mars-exploration/problem)

This too was a fun challenge. I used the `.reduce()` JavaScript method. Also considered that test case when the letters are jumbled and not just changed. For example, what would be the output when the letters are in sequence "SSO". Here it should be 2 because the last two characters are interchanged.

1. First we split the array in chunks of 3, using the regular expression. (Found this on StackOverflow)
2. We then traverse through each chunk and check the sequence. If it matches the required "SOS" sequence, we return 0 else the count of characters that are missed.

After solving some of the challenges using .reduce, I was confident of using it here.


```javascript

function marsExploration(s) {

  let arrayBreak = s.match(/[\s\S]{1,3}/g) || [];
  let badChars = 0;

  badChars = arrayBreak.reduce((acc, item) => {
    if(item[0] != "S"){
      acc++;
    }
    if(item[1] != "O"){
      acc++;
    }
    if(item[2] != "S"){
      acc++;
    }
    
    return acc;
    
  }, 0);
   
  
  return badChars;

}

console.log(marsExploration("SOSSPSSQSSOR"));
console.log(marsExploration("SOSSOT"));
console.log(marsExploration("SOSSOSSOS"));
console.log(marsExploration("SSO"));

```

### Strong password - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/strong-password/problem)

Unfortunately, I spent 10 hackos in this problem to figure out certain test fails, but it was worth the learning.
I used JavaScript regular expressions and learned quite a few concepts.


```javascript

function minimumNumber(n, password) {

let count = 0;

// It contains at least one digit.
if((password.match(/\d/g) || []).length < 1){
  count++;                 
}
  
// It contains at least one lowercase English character.
if((password.match(/[a-z]{1}/g) || []).length < 1){
  count++;  
}
  
// It contains at least one uppercase English character.
if((password.match(/[A-Z]{1}/g) || []).length < 1){
  count++;  
}
  
// It contains at least one special character. The special characters are: !@#$%^&*()-+
if((password.match(/[!@#$%^&*()-+]/g) || []).length < 1){
  count++;  
}
  
// Its length is at least 6.
if(password.length < 6){
  count = Math.max(count, 6 - password.length);
}
    
return count;  

}



console.log(minimumNumber(3, "Ab1"));
console.log(minimumNumber(3, "rZaEu"));
console.log(minimumNumber(3, "AUzs-nV"));

```


### Funny String - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/funny-string/problem)

To Solve this challenge, I used built in javascript functions. 

```javascript

function funnyString(s) {

    //Find the characterCode and push it into an array
    // Reverse the array
    // Find absolute difference
    let original = [];
    let rev = [];

    // Object to check each absolute difference of original array with
    // reversed array.
    let adj = {};

    // Directly push the charCode of each character in the string.
    for(let i = 0; i < s.length; i++){
      original.push(s[i].charCodeAt());
    }

    // Reverse the originam array. When using reverse(), it mutates the original array,
    // to get a duplicate array, we use the ES6 spread operator to create a duplicate array
    // with same elements and then we apply reverse() on it.
    rev = [...original].reverse();

    // Check the absolute difference. We also check the abs difference of the reversed
    // array simultaneiously and if we find any difference, we exit the loop.
    for(let j = 1; j < original.length; j++){
      
      adj[j] = Math.abs(original[j] - original[j-1]);
      
      if(adj[j] !== Math.abs(rev[j] - rev[j-1])){
        return "Not Funny";
        break;
      }    
      
    }
  
    return "Funny";

}

console.log(funnyString("acxz"));
console.log(funnyString("bcxz"));
console.log(funnyString("ivvkxq"));
console.log(funnyString("ivvkx"));

```