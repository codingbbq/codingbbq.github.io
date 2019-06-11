---
layout: post
title:  "Sock Merchant - JavaScript algorithm problem"
categories: hackerrank
excerpt : The Sock Merchant problem on hacker Rank was quite interesting. I got to use the JavaScript .map function and also used the hash map technique to store the frequency of the sock type. I spent around 35 minutes on this problem.
---

### Sock Merchant - HackerRank problem.

You can find the problem [here](https://www.hackerrank.com/challenges/sock-merchant/problem)

Below is my attempted solution to the Sock Merchant problem. In this problem, 
I used the .map JavaScript function and also used hash map technique to store the frequency 
of sock type.

```javascript

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  
  // Store the count of each sock in a hash map or javascript object.
  let sockHashMap = {};
  
  // Map through each items in the array and find the frequency of each sock type
  ar.map((item) => {
    if(sockHashMap.hasOwnProperty(item)){
      sockHashMap[item] = sockHashMap[item] + 1;
    }else{
      sockHashMap[item] = 1;
    }
  });
  
  let totalStock = 0;
  
  // Loop through the object using the for..in operator. 
  //This gives us the key, value properties in object.
  
  for(var stock in sockHashMap){
    if(sockHashMap.hasOwnProperty(stock)){
      //We need to find the pairs of each sock type. So we check if the sockType % 2 == 0. 
      //If it is true, then we can find the total pairs by dividing the value by 2 
      if(sockHashMap[stock] % 2 == 0){
        totalStock+= (sockHashMap[stock]/2);
      
      // If the total count is odd, we subtrack 1 from the total count and then we check
      // if sockType % 2 == 0 and then divide that by 2 to get the total count.
      // For eg. if the total count is 5, we subtract 1 and so total count is 4 which upon dividing
      // by 2 will give you the total sock Pair count as 2.
      }else if((sockHashMap[stock] - 1) % 2 == 0){
        totalStock+= ((sockHashMap[stock] - 1) / 2);
      }
    }
  }
  
  return totalStock;

}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

```

