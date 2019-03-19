---
layout: post
title:  "String related Javascript algorithm problem"
categories: hackerrank
excerpt : While working with strings, I always had encountered difficulty. So it was time to look at some of the string related problems.
---

### CamelCase - HackerRank problem.

1. [CamelCase Hacker Rank Problem](https://www.hackerrank.com/challenges/camelcase/problem)

In this problem I learned and used the regex (Regular Expressions). When converting any string to array, we use split and I 
was surprised to learn that we can use our RegEx inside the split function as one of the parameter.
The regEx is basically to check if there exists zero or one existance of a uppercase alphabet and then we split it to form an array.
Since the problem asks us only to get the length of string, we calculate that using the `.length` array method.

Important point to note in the below Regular Expression is that we are using [Lookahead regular expression](https://coderwall.com/p/5c7kjq/lookahead-and-lookbehind-regex). 

`(?=regex)`
Meaning: followed by the expression regex but without including it in the match

eg. 

a yolo followed by a lo but without including it in the match

```javascript

// camelcase function below.
function camelcase(s) {
  return s.split(/(?=[A-Z])/).length;
}

console.log(camelcase("saveChangesInTheEditor"));

```

### Pangram - HackerRank problem

2. [Pangram problem](https://www.hackerrank.com/challenges/pangrams/problem)

*A sentance is a Pangram if it contains every letter of the Alphabet.* 
I used below logic to get around the solution
1. Remove all the white spaces from the sentence using the regular expression. (I had to google :|)
2. `split` the output string to form an array.
3. Use the `.map` method and convert all the alphabets to lower case.
4. We then run through the final array and search if the alphabet is present in the placeholder object.
If it is not present, we add it to the object and increase our count.
5. We then check the value of count. Assuming that this is only for the English alphabets, we know that there 
are 26 characters and if our count matches 26 characters, we declare it as Pangram else it is not a Pangram.

Below is my attempted solution.

```javascript

// Complete the pangrams function below.
function pangrams(s) {
    
    // Our placeholder object
    let alphabetArray = {};
    // Set the count to 0
    let count = 0;

    // Remove spaces, convert to an array and make each alphabet to lowercase
    let pangramTest = s.replace(/ +/g, "").split("").map((eachAlphabet) => {
      return eachAlphabet.toLowerCase();
    });

    // Check if the alphabet is present in the placeholder object. If not, we insert into placeholder 
    // object and then increment the count.
    pangramTest.map((eachTest) => {
      if(!alphabetArray.hasOwnProperty(eachTest)){

        // Inserting 0 as a placeholder value.
        alphabetArray[eachTest] = 0;
        count++;
      }
    });

    // Assuming that English alphabets total to 26.
    if(count === 26){
      return "pangram";
    }else{
      return "not pangram";
    }

}

console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(pangrams("We promptly judged antique ivory buckles for the prize"));

```

### Weights uniform strings - HackerRank problem

3. [Weighted uniform Strings problem](https://www.hackerrank.com/challenges/weighted-uniform-string/problem)


Below is my attempted solution. I took help of the solutions posted in the discussion to understand how it was solved but then solved it 
on my own later to understand the solution. This problem makes good use of the hash map methodology. The best part about the solution is that
we are not utilizing time on how to destructure the strings, instead we are using simple basic configs to create a final output object.

```javascript

// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {
    
    let previousItem;
    let previousCount;
    let code;
  
    // We are using this object to store the calculated weights
    let calculatedWeights = {};
    
  
    // For loop to traverse through each of the items
    for(var i = 0; i< s.length; i++){
        
        // Get the char Code and subtract it from 96 so that a = 1, b = 2 etc. This will help avoid create any pre defined 
        // array with characters and corresponding codes
        code = s.charCodeAt(i) - 96;
      
        // Check with a previousItem variable and use a counter
        if(previousItem === code){
          previousCount++;
        }else{
          previousItem = code;
          previousCount = 1;
        }
      
        // Since we are in a for loop, the idea is to know if there were any repeated previous items, we can
        // then using basic maths to calculate the weights. See below example.
        calculatedWeights[previousItem * previousCount] = true;
    }
    
    // We then check each input query with the object index, if it exists, then we print Yes
    var results = []
    for(var j = 0; j< queries.length; j++){
      results.push(calculatedWeights[queries[j]] ? "Yes" : "No"); 
    }
  
    return results;
    

}

weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10]);
weightedUniformStrings("aaabbbbcccddd", [9, 7, 8, 12, 5]);

```