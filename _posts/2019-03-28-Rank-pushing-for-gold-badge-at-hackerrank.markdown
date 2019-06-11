---
layout: post
title:  "Rank Pushing at Hackerrank"
categories: hackerrank
excerpt : Continuing our journey for Rank push on hackerrank, today we try to solve as many problem challenges as possible. Hackerrank has been a great inspirational resource to push myself in the programming domain.
---

### Find Digits - hackerrank

[Link to problem](https://www.hackerrank.com/challenges/find-digits/problem)

This was a classic break the number to its individual digits problem. My usual approach is to convert the Number to string, split it and then convert each string back to Number yielding a array of integers.
I learned an interesting piece of code today which is we can convert each number of typeof string to typeof number using the higher order function .map like
`a = a.map(Number)` where `a` is the array of numbers of type string.
The next step is to find all the individual numbers that are divisible by the given number. For this, we used `filter` function and then returned the length. 

```javascript

function findDigits(n) {
  
  let number = n;
  
  // Get each digit in an array
  let arrayOfNumbers = n.toString().split('').map(Number);
  
  // Filter out all the divisible integers and the return its count.
  let digits = arrayOfNumbers.filter((item) => {
    return (number % item == 0);
  }).length;
  
  return digits;

}

console.log(findDigits(12)); // 2
console.log(findDigits(1012)); // 3

```

### Find Median - hackerrank

The challenge is pretty straight forward, we had to find the median from a given array. [Problem statement](https://www.hackerrank.com/challenges/find-the-median/problem)

What is median?
The median of a list of numbers is essentially the middle element after sorting. Thus a median is a value that separates the higher half from the lower half of sample of data. For example, in understanding statistics like household income or assets which vary greatly, a mean may be skewed by a small number of extremely high or low values. Median income, for example, may be a better way to suggest what a "typical" income is.

```javascript

function findMedian(arr) {

  // Sort the array
  let sortedArray = arr.sort((a, b) => {
    return a - b;
  });
  
  // Get the middle element of the sorted array. We know that the array has odd
  // length of numbers. So we can divide the array to get the middle index and 
  // thus the middle number.
  let median = sortedArray[(sortedArray.length - 1)/2]
  
  return median;

}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));

```

### Chocolate Feast | Hackerrank

Another interesting problem, I decided to use the recursive function to calculate the output. This was yet another fun challenge.
[Problem statement](https://www.hackerrank.com/challenges/chocolate-feast/problem)

```javascript

// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {
  
  // n => The amount Bobby has
  // c => cost of each chocalate
  // m => wrappers he can turn in to get a new chocalate
  
  // First we find how many chocaltes he can buy
  let totalChocalates = Math.floor(n / c);
  
  // During first pass he has
  let totalWrappers = totalChocalates;

  // We recursively call a function to calculate the total chocalates he can
  // eat with the wrappers from the chocalates he purchased  
  return countChocalates(totalChocalates, totalWrappers, m);

}

function countChocalates(tC, tW, m){
    
    // New chocalate count
    let newC = 0;
    
    // If the wrappers are lesser than the promotion, 
    // Bobby has reached his maximum limit
    if(tW < m){
      return tC;
    }else{

      // Find how many chocalates he can buy from the wrappers
      newC = Math.floor(tW / m);

      // Add to the existing chocalate count
      tC += newC;

      // Find the total wrappers (old remaining wrappers + wrappers from new chocalates)
      tW = (tW % m) + newC;

      // Call this function recursively to get the total chocalate count
      return countChocalates(tC, tW, m)
    }
  
}

console.log(chocolateFeast(10, 2, 5));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(6, 2, 2));

```