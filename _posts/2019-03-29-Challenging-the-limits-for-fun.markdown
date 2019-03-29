---
layout: post
title:  "Challenging the limits - Fun solving Hackerrnk problems"
categories: hackerrank
excerpt : Happy Friday!!! Hackerrank has been a great resource for challenging problems and a good learning experiance. We try to push our rank to get the Gold badge by solving more problems. Let's get it
---

### Repeated String - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/repeated-string/problem)

My immediate approach to solving this problem was
1. Find the minimum count of times we want to repeat a string.
2. Use the ES6 repeat function and repeat the string. 
3. Slice the string by removing the unwanted characters from the tail
4. Use `.split` to separate the "a" from the string and then get the count.

However, it could solve only a single test case. My approach was not optimal. Below is my attempt (P.S this is not optimal solution)

```javascript

function repeatedString(s, n) {

    if (s.length == 1 && s === "a") {
        return n;
    } else {
        let repeatCount = Math.ceil(n / s.length);
        let finalString = s.repeat(repeatCount).slice(0, n - 1);
        return finalString.split("a").length;
    }

}

```

Because most of the test cases failed, I had to look up for a better solution, and to my surprise, there exist a super simple algorithm to go about solving this problem. The solution is not the create a repeated string.

```javascript

function repeatedString(s, n) {
  
  // Gives you the upper count of times we want to 
  // repeat the string.
  let times = Math.trunc(n / s.length);
  
  // Gives you how many more characters to add to the times
  // For example, for n = 10 and s = 3,
  // we get times + ramainder i.e ("aba" * 3 times) + remainder 
  let remainder = n % s.length;
  
  let counter = 0;
  for(let c = 0; c < s.length; c++){
    if(s[c] === "a"){
      counter++;
    }
  }
  
  // We get the count of "a" in a string. So in our example, it is 2
  // Now we multiply above count to times
  counter = counter * times;
  // We get counter = 2 * 3 = 6
  
  // We want to find the count of "a" in the remaining string
  for(let j = 0; j < remainder; j++){
    if(s[j] === "a"){
      counter++;
    }
  }
  
  return counter;
  
}

console.log(repeatedString("a", 1000000000));

```

### Jumping on the clounds - hackerrank

[Problem statement](https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem)

Simple fun challenge. I had to scratch my brains a little, but it was fun.

```javascript

function jumpingOnClouds(c) {
    
    let count = 0, i = 0;
    while(i < c.length){

      // When the index points to a 0, which it should always do,
      // but we are being extra careful and then increasing the count.
      // Also, this will check for the first iteration, when the index is at 0th position
      if(c[i] == 0){
        count++
      }

      // We first assume that Emma will always take a jump by 2 clouds,
      // as we want the shortest route.
      if(c[i+2] === 0){
        i += 2;
      }else{
        i += 1;
      }
    }

    // Because we are considering the 0th position, we decrease the final count by 1
    return count - 1;

}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));

```

### Equality in Array - Hackerrank

[Problem statement](https://www.hackerrank.com/challenges/equality-in-a-array/problem)


```javascript

function equalizeArray(arr) {
  
  // First we find the frequency of each items in array and store it in an
  // object.
  let arrFrequency = arr.reduce((acc, item) => {
    if(acc[item]){
      acc[item] += 1;
    }else{
      acc[item] = 1;
    }
    return acc;
  }, {});
  
  // We need to find the max from the object value,
  // hence we use the for in loop
  let max = 0;
  for(let key in arrFrequency){
    if(arrFrequency[key] > max){
      max = arrFrequency[key];
    }
  }
  
  // max, here is the count i.e frequency of items that are similar.
  // If we subtract it from the arr length, we get the count of items we 
  // want to delete to fulfill the challenge requirement.
  let toDelete = arr.length - max;
  
  return toDelete;
  
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
console.log(equalizeArray([37, 32, 97, 35, 76, 62]));

```

### Hackerrank in a string - hackerrank

[Problem statement](https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem)

This was a good challenging problem. I used the `indexOf` javascript function. This function returns the first found index of the character being searched.
However, in our challenge, we wanted to check for incremental search of the string. For this we had to define the starting Index in the `indexOf` function.
Also, since we changed the startIndex, we would always get the indices in incremental order. In case the character was not found we would get a -1.
Based on above assumptions, we could print the correct output.

```javascript

function hackerrankInString(s) {
  
  // String to search
  let stringToCheck = "hackerrank";
  
  // Array to store the index number of each found characters
  let indexOfString = [];
  
  // We want to have start index when using the JS indexOf
  let startIndex = 0;
  
  // Loop through the given string
  for(let i = 0; i < stringToCheck.length; i++){
    
    // JS function indexOf to search string, and using the
    // startindex parameter so that we can test for sequential indices
    let index = s.indexOf(stringToCheck[i], startIndex);
    indexOfString.push(index);
    
    startIndex = index + 1;
  }
  
  // In case our index Array has a -1, that means the character was not
  // found in the string, Which means we can return a NO 
  if(indexOfString.indexOf(-1) >= 0){
    return "NO";
  }else{
    return "YES";
  }

}

console.log(hackerrankInString("hhaacckkekraraannk"));
console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"));

```