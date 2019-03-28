---
layout: post
title:  "Algorithms, Problems and Fun - Hackerrank"
categories: hackerrank
excerpt : We try to push our rank on hackerrank trying to solve as many challenges as possible.
---

### Circular array rotation

[Link to the problem](https://www.hackerrank.com/challenges/circular-array-rotation/problem)

The challenge is to rotate a given array "a",  "k" times and print the values of the array for the indices mentioned in "queries".
Again I used a brute force approach for this problem. One of the test case timed out, so this challenge was still incomplete. 

```javascript

function circularArrayRotation(a, k, queries) {
  
  // We need to rotate array "a", "k" times and output the array values for the indices asked in "queries"
  let temp;
  let result = [];
  for(let i = 0; i < k; i++){
    temp = a[a.length - 1];
    for(let j = a.length - 1; j > 0; j--){
      a[j] = a[j - 1];
    }
    a[0] = temp;
  }
  
  for(let q = 0; q< queries.length; q++){
    result.push(a[queries[q]]);
  }
  
  return result;

}

console.log(circularArrayRotation([1,2,3], 2, [0,1,2]));

```

### Permutation Equation

[Link to problem](https://www.hackerrank.com/challenges/permutation-equation/problem)

Yet another interesting problem, but I could not understand the value behind this problem. It looked trivial to me. However, the best approach I could think of was to use a hashMap / Javascript object with key, value to store the required indices. 

My approach was
1. Get the max value from the given array, so we can loop through from 1 to max
2. Store the indices as keys and values in a javascript object.
3. Refer the javscript object to get the desired permution.

```javascript

function permutationEquation(p) {
  
  // Get the max from array so we can use for loop
  let max = Math.max.apply(null, p);
  let keys = {};
  let temp;
  let finalResult = [];
   
  // Now we want x = 1 to x <= n
  for(let x = 1; x <= max; x++){
    keys[p[x - 1]] = x;
  }
  
  for(let y = 1; y <= max; y++){
    temp = keys[y];
    finalResult.push(keys[temp]);
  }
  
  return finalResult;
  
}

console.log(permutationEquation([5,2,1,3,4]));
console.log(permutationEquation([2,3,1]));

```


### Sherlock and Squres

[Problem statemet](https://www.hackerrank.com/challenges/sherlock-and-squares/problem)

I used the brute force approach to find the count of perfect squares. See below solution. However, for couple of test cases, this solution timed out.
Upon doing a google search, I learned about a formula that gives you the count.

#### Brute force approach

```javascript

function squares(a, b) {
  
  let count = 0;
  for(let i = a; i <= b; i++){

    // Check if it is a perfect squre
    if(i % Math.sqrt(i) === 0){
      count++;
    }
  }
  
  return count;

}

console.log(squares(3, 9));
console.log(squares(17, 24));
console.log(squares(24, 37));

```

#### Method 2, Using formula

```javascript

function squares(a, b) {

    return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;

}

```

### Library fines - hackerrank

Even though this looked quite straight forward problem, there were corner cases that we had to consider. This problem taught me how to be patient and very meticulous in solving problems and always have an open mind about all the possible test cases.

[Problem statement](https://www.hackerrank.com/challenges/library-fine/problem)

```javascript

function libraryFine(d1, m1, y1, d2, m2, y2) {

    let fine = 0;
    
    // If book is returned year late
    if(y1 > y2){
      return 10000;
    }
  
    // If book is returned days late, but month and year are same
    if(y1 == y2 && m1 == m2 && d1 > d2){
      return 15 * (d1 - d2);
    }
    
    // If book is returned month late but year is same. 
    // No need to consider the days here because month takes precendence in 
    // calculating the fine
    if(y1 == y2 && m1 > m2){
      return 500 * (m1 - m2);
    }
    
    // Case where book is returned before the due date
    // One year before, months before and days before the due date
    return 0;

}

console.log(libraryFine(25, 01, 2014, 10, 01, 2015)); // Year early 
console.log(libraryFine(01, 01, 2016, 31, 12, 2015)); // Year late 
console.log(libraryFine(9, 6, 2015, 6, 6, 2015)); // Days late 
console.log(libraryFine(9, 7, 2015, 9, 6, 2015)); // Month late 
console.log(libraryFine(28, 2, 2015, 15, 4, 2015)); // Month early
console.log(libraryFine(01, 12, 2017, 01, 01, 2018)); // Year early 
console.log(libraryFine(1, 2, 2015, 1, 2, 2016)); // Year early
console.log(libraryFine(15, 2, 2015, 28, 2, 2015)); // Days early

```


### Cut the sticks - hackerrank

This was by far the most interesting problem and I enjoyed solving it. I got to use recursive function and my solution passed all the tests in first attempt.

[Link to problem](https://www.hackerrank.com/challenges/cut-the-sticks/problem)

My approach to this problem was to get
1. Length of the array.
2. 

```javascript

function cutTheSticks(arr) {
  
  let result = [];
  
  // Call this functoin recursively
  return processedSticks(arr, result);

} 

// Recursive function to process the sticks in the array
function processedSticks(arr, result){
    
    if(arr.length > 0){
      result.push(arr.length);
      
      // Find the minimum value from the array. This will be the length of 
      // the stick that we need to cut
      let min = Math.min.apply(null, arr);
      
      // Generate new array which has sticks that are cut by minimum length
      let iteratedArray = arr.map((item) => {
        if(item - min >= 0){
          return item - min;
        }
      });
      
      // Filter out the array with zero length
      let filteredArray = iteratedArray.filter((item) => {
        return item > 0;
      });
      
      // If the filteredArray length is > 0, repeat the steps 
      if(filteredArray.length > 0){
        return processedSticks(filteredArray, result);
      }
    } // End if statement
    
    return result;
  }


console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));

```