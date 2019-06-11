---
layout: post
title:  "Beautiful Days at the Movies - JavaScript algorithm problem"
categories: hackerrank
excerpt : Found this problem on hackerrank and it seemed interesting. This problem required to implement for loop, reverse an Integer and also use JavaScript Math methods. While solving this problem, I learned and got my way through return statement, function chaining and modularising my code.
---

### Beautiful days at the movies - HackerRank problem.

You can find the problem [here](https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem)

Below is my attempt solution.

```javascript

// Object to store the total beautiful days
let beautifulDayAtMovies = { "day" : 0 };

// Main function
let beautifulDays = function(i, j, k){
 let days = [];

 // traverse through all the days 
 for(var day = j; day >= i; day--){

   // Get the reversed Day i.e if day is 21 then reverse is 12  
   let revDay = getReversedDay(day);

   // Get the absolute value of the reversedDay - Actual Day
   let absDay = Math.abs(day - revDay);

   getBeautifulDay(absDay, k);
 
 }
  
 console.log(beautifulDayAtMovies.day);
 
}


// Function to get the revese of a number. This function uses the type conversion method. We convert int to string and then split it into array and then reverse the array. We than join the array back to a string and then use parseInt to convert back to int.
let getReversedDay = function(day){
  let reverseInt =  
    parseInt(
    day
    .toString()
    .split("")
    .reverse()
    .join("")
    );
  
  return reverseInt;
}

// If the day is divisible by the given value, then we increment the beautifulDayAtMovies object.
let getBeautifulDay = function(absDay, k){
  if(absDay % k == 0){
    beautifulDayAtMovies.day = beautifulDayAtMovies.day + 1;
  }
}

beautifulDays(13, 45, 3);

```

