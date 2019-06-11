---
layout: post
title:  "More of Hackerrank"
categories: hackerrank
excerpt : Hackerrank has interesting challenges and today I utilized some time solving them.
---

### Alternating Characters - Hackerrank

[The problem can be found here](https://www.hackerrank.com/challenges/alternating-characters/problem)

The problem is quite straight forward yet thought provoking. I was intrigued by the problem and a careful analysis showed that the solution was simple. 
I learned to break the problem down into smaller chunks to lead to a simpler solution.

```javascript

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  
  let previousChar;
  let deleteCount = 0;

  // our for loop checks each character with a temporary previous character and 
  // increments the delete count accordingly.
  for(let i = 0; i < s.length; i++){
    if(s[i] === previousChar){
      deleteCount++;
    }else{
      previousChar = s[i];
    }
  }
  
  return deleteCount;

}

console.log(alternatingCharacters("ABBABAB"));

```

---

### Simple Array Sum - Hackerrank

[Array sum problem](https://www.hackerrank.com/challenges/simple-array-sum/problem)

The problem is to add all the items in an array and return the sum. Earlier, we would use the for loop to loop over the array and find the sum.
However, now we used the ES5 `.reduce` method. 

Below is my attempted solution
1. Used the ES6 array function
2. We are setting the initial value to be 0 which is used as the value of literal total during the first call-back execution

```javascript

function simpleArraySum(ar) {
    
    let sum = ar.reduce((total, currentValue) => {
      return total + currentValue;
    }, 0)
    
    return sum;
  
}

console.log(simpleArraySum([1,2,3,4,10,11]));

```

Some points about `.reduce` that I learned today
1. The reduce method reduces the array to a single value. It executes a call-back function once for each element in an array.
2. The call-back function accepts arguments such as
    1. accumulator - Accumulates the call-back's return value
    2. currentValue - Current value of the array
    3. currentIndex - The array index of the current Value.
    4. array (optional) - The array, reduce was called upon.
3. InitialValue - This is the value used as the first argument to the first call of the call-back function. If no initial value is supplied than the first element of the array will be used.
4. We cannot call reduce method on an empty array without an initial value.

---

### Compare the triplets

[Compare the triplets problem](https://www.hackerrank.com/challenges/compare-the-triplets/problem)

This was a straightforward problem. I wanted to see if we can use any of the JavaScript array functions like filter, every or map. Eventually I end up using the for loop to do the comparison.

```javascript

function compareTriplets(a, b) {
  
  let alice = 0, bob = 0, output = [];
  output[0] = alice;
  output[1] = bob;
  
  // We want the output in array
  // Only add if alice > bob and vice versa.
  // If both alice and bob are of same value, do nothing
  for(let index = 0; index < a.length; index++){
     if(a[index] > b[index]){
      output[0] = ++alice;
    }else if(a[index] < b[index]){
      output[1] = ++bob;
    } 
  }
    
  return output;

}

console.log(compareTriplets([5,6,7], [3,6,10]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

```

---

### A very Big Sum

[A very big sum](https://www.hackerrank.com/challenges/a-very-big-sum/problem)

The problem is simple, adding of array elements. However the point here was to be able to add a very large number.
I had to google my way to figure out if it was possible and I learned about the `BigInt` data type.

We can assign a possible big integer data type to a variable like below
`let aBigSum = BigInt(Number.MAX_SAFE_INTEGER);`

Also, I used the `reduce` JavaScript function in this problem.

```javascript

function aVeryBigSum(ar) {
  
  let aBigSum = BigInt(Number.MAX_SAFE_INTEGER);
  
  aBigSum = ar.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
  
  return aBigSum;

}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));

```

---

### Diagonal Difference

[Link to the problem](https://www.hackerrank.com/challenges/diagonal-difference/problem)

I had to google my way through such a simple problem. It felt easy once I could traverse through the for loop.
Interestingly, I learned about the use of two variables inside just one for loop.
The idea was to move pointer from left to right and right to left simultaneously.

```javascript

function diagonalDifference(arr) {
  
  let primaryDig = 0, secondaryDig = 0;
  
  for(let a = 0, b = arr.length - 1; a < arr.length; a++, b--){
    primaryDig += arr[a][a];
    secondaryDig += arr[a][b];
  }
  
  return Math.abs(primaryDig - secondaryDig);

}

console.log(diagonalDifference([[11, 2, 4],[4, 5, 6], [10, 8, -12]]));

/* This is how the for loop will traverse
a[0][0] = 11
b[0][2] = 4

a[1][1] = 5
b[1][1] = 5

a[2][2] = -12
b[2][0] = 10 
*/

```

---

### Plus - Minus

[The problem on hackerrank](https://www.hackerrank.com/challenges/plus-minus/problem)

This being straightforward, I want to use any of the ES6 methods while finding the count of positive, negative and zero in an array.
Thus, `.reduce` to the rescue. I learned
1. We can return any datatype when using reduce. In our example we are returning array.
2. We need to do a return for each iteration of reduce call-back function. In our example we return an array.
3. We can modify the length of decimal value using the `toFixed(6)` method. Here, I want the output to be up to 6 decimal places.



```javascript

function plusMinus(arr) {

  let plusMinusCount = arr.reduce((acc, currentValue) => {
    
    // Get the count of all the postive numbers.
    if(currentValue > 0){
      return [acc[0] + 1, acc[1], acc[2]];
    }

    // Get the count of all the Negative numbers.
    if(currentValue < 0){
      return [acc[0], acc[1] + 1, acc[2]];
    }

    // Get the count of zero
    if(currentValue == 0){
      return [acc[0], acc[1], acc[2] + 1];
    }

  }, [0,0,0]);
  
  let arrayLength = arr.length;
  
  console.log((plusMinusCount[0]/arrayLength).toFixed(6));
  console.log((plusMinusCount[1]/arrayLength).toFixed(6));
  console.log((plusMinusCount[2]/arrayLength).toFixed(6));
  
}

plusMinus([-4, 3, -9, 0, 4, 1]);

```