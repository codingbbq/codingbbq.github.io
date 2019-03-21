---
layout: post
title:  "Pushing rank at Hackerrank"
categories: hackerrank
excerpt : Hackerrank problems are fun. Today, I try to push my rank by solving simple yet interesting problems.
---

### Birthday Cake Candles

[Link to the problem](https://www.hackerrank.com/challenges/birthday-cake-candles/problem)

Below is my attempted solution.
1. Get the maximum number from the array
2. Using the filter function, find all the max items in array and then
3. return the length of the filtered array.

```javascript

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {

    // Get the max from the array
    let max = Math.max.apply(null, ar);

    // Filter out all the max items from array
    let candlesToBlow = ar.filter((item) => {
      if(item == max){
        return item;
      }
    });
  
    return candlesToBlow.length;

}

console.log(birthdayCakeCandles([3, 2, 1, 3]));

```

---

### Grading students

[Link to the problem](https://www.hackerrank.com/challenges/grading/problem)

The interesting part of this algorithm challenge was to get the next multiple of a given number.
I had to google my way around and found this [interesting SO discussion](https://stackoverflow.com/questions/4228356/integer-division-with-remainder-in-javascript)

To get the whole number as output for division, we used the bitwise operator
`var num = ~~(a / b);`

Thus, for eg,
`~~(8/5)` would return 1.

We can also use `Math.floor(8/5)` however the use of bitwise operator was interesting.

Below is my attemplted solution

```javascript

function gradingStudents(grades) {
  
  let finalGrades = [];
  
  for(let i = 0; i< grades.length; i++){
    
    // If grades are less than 38, do nothing
    if(grades[i] < 38){ 
      finalGrades.push(grades[i]);
    }else{
      
      // Find the next multiple of 5 of a given grade.
      let nextMultiple = [(~~(grades[i]/5)) + 1]*5;
      if(nextMultiple - grades[i] < 3){
        finalGrades.push(nextMultiple);
      }else{
        finalGrades.push(grades[i]);
      }

    }
   
  }
  
  return finalGrades;
  
}

console.log(gradingStudents([73,67,38,33]));

```

---

### Apple and Orange

[The problem statement can be found here](https://www.hackerrank.com/challenges/apple-and-orange/problem)

What did I learn?
1. I could easily figure out when the use the javascript higher order array functions.
2. I used `.map` to get the distance count
3. I used `.reduce` to get the sum of the apples/oranges which fall within the points
4. I used the ternary operator successfully. Considering that I am not a big fan of them, using it today felt so comforting.


```javascript

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  
  // Find the distance of apples from the point
  let distanceApples = apples.map((apple) => {
    return a + apple;
  });
  
  // Find the distance of oranges from the point 
  let distanceOranges = oranges.map((orange) => {
    return b + orange;
  });
  
  // Get the total apples which fall within the house points
  let totalApples = distanceApples.reduce((acc, item) => {
    return (item >= s && item <= t) ? acc + 1 : acc;
  }, 0);
  
  // Get the total oranges which fall within the house points
  let totalOranges = distanceOranges.reduce((acc, item) => {
    return (item >= s && item <= t) ? acc + 1 : acc;
  }, 0);
  
  console.log(totalApples);
  console.log(totalOranges);

}

countApplesAndOranges(7,11,5, 15, [-2,2,1], [5, -6]);

```

---

### Breaking the Records

[The problem can be found here](https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem)

1. We can push multiple elements in a javascript array. For eg.
`myArray.push(10, 2, 3)`

```javascript

// Complete the breakingRecords function below.
function breakingRecords(scores) {
  
  let previousLowScore = scores[0];
  let previousHighScore = scores[0];
  let breakLowScore = 0, breakHighScore = 0;
  
  for(let i = 0; i < scores.length; i++){
    if(scores[i] < previousLowScore){
      breakLowScore++;
      previousLowScore = scores[i];
    }
    
    if(scores[i] > previousHighScore){
      breakHighScore++;
      previousHighScore = scores[i];
    }
  }
  
  let result = [];
  result.push(breakHighScore, breakLowScore)
  
  return result;

}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

```

---

### Birthday Chocalate

[Problem statement](https://www.hackerrank.com/challenges/the-birthday-bar/problem)

This was an interesting problem, because I had to figure out how my for loop will be processed.
Also, I wrote the algorithm on a book before I started to code. This helped me have a clear goal when writing the code.

```javascript

function birthday(s, d, m) {
    
    let count = 0;
    for(let i = 0; i< s.length; i++){
      
      let sum = 0;
      
      for(let j = 0; j< m; j++){
        sum += s[i + j];
      }
      
      if(sum == d){
        count++;
      }
      
    }
  
    return count;

}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([1, 1, 1, 1, 1], 3, 2));
console.log(birthday([4], 4, 1));

```

---

### Divisible sum pairs

[The problem can be found here](https://www.hackerrank.com/challenges/divisible-sum-pairs/problem)

Again, a sumple solution, but it was quite clear when I solved it on a book.

```javascript

function divisibleSumPairs(n, k, ar) {
  
  let count = 0;
  
  for(let i = 0; i< ar.length; i++){
    for(let j = i+1; j<ar.length; j++){
      if((ar[i] + ar[j]) % k == 0){
        count++;
      }
    }
  }
  
  return count;

}

console.log(divisibleSumPairs(6,3, [1,3,2,6,1,2]));

```