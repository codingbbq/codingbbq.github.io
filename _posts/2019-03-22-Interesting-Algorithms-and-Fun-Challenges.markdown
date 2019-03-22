---
layout: post
title:  "Interesting Algorithm problems and Fun challenges"
categories: hackerrank
excerpt : The difficulty level of all the challenges are increasing. We now need to also look at improving the performance of the algorithms that we write.
---

### Pairs - hackerrank

[Problem can be found here](https://www.hackerrank.com/challenges/pairs/problem)

This was a classic two-sum problem with a twist. We had to get the difference. At first I used `Math.abs(x - y)` to get the difference. However after submitting the code, few of the test timed out. Next, I tried to sort the array and then do a difference instead. This time, all the tests ran successfully. I am sure there can be better and better performing algorithm for such challenge instead of using the brute force method.

```javascript

function pairs(k, arr) {
  
  let count = 0;
  
  let newArr = arr.sort((a,b) => {return a - b});
  
  for(let i = 0; i < newArr.length; i++){
    for(let j = i+1; j< newArr.length; j++){
      if((newArr[j] - newArr[i]) == k){
        count++;
      }
    }
  }
  
  return count;

}

console.log(pairs(2, [1, 5, 3, 4, 2]));

```

