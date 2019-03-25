---
layout: post
title:  "Sherlock and array - hackerrank"
categories: hackerrank
excerpt : This is an interesting problem besides the fact that it would give me 4th star for my problem solving badge. It took me considerable time to solve this problem, which was dissapointing. Nevertheless, I am happy with the results.
---

### Sherlock and array

[Link to the problem](https://www.hackerrank.com/challenges/sherlock-and-array/problem)

Self Analysis
1. To solve this problem, I spent considerable more than expected time. 
2. Did not solve for the test case [1,4,1] for which my Test Case 6 failed. I lost my nerve and spent hackos to get the test case data.
3. I realized that with a lot of background noise, it is nearly impossible to concentrate on such problems. So I have been listening to instrumental playlists on youtube to keep me focused.
4. I feel happy that I motivated myself to solve this problem. Also this problem gave me a 4th star on the problem solving badge. So Yay!!!

```javascript

function balancedSums(arr) {
    
    let output = "NO";

    // starting index of the array
    let i = 0; 

    // End index of the array
    let j = arr.length - 1;

    let left_sum = arr[i];
    let right_sum = arr[j];
    
    // If the array has just one item or zero items, we outright declare it a balanced sum
    if(arr.length <= 1){
      output = "YES";
    }else{
      
      // Perform the action, while index of j - 1 != 1
      while(j - i != 1){
      
      // When the array has 3 elements for eg [1,4,1], it is a balanced sum array.
      if(j - i == 2 && left_sum == right_sum){
        output = "YES";
        break;
      }
      
      // Move the pointer based on the value of sum
      if(left_sum > right_sum){
        j--;
        right_sum += arr[j]; 
      }else{
        i++
        left_sum += arr[i];
      }
      
    }

    // For input like [2,0,0,0] or [0,0,1];
    if(right_sum === 0 || left_sum === 0){
      output = "YES";
    }
      
      
    }
  
   return output;
  
}


console.log(balancedSums([1])); // YES
console.log(balancedSums([2])); // YES
console.log(balancedSums([3])); // YES
console.log(balancedSums([1,2]));  // NO
console.log(balancedSums([1,4,1]));  // YES
console.log(balancedSums([1,5,1]));  // YES
console.log(balancedSums([234]));  // YES
console.log(balancedSums([20000]));  // YES
console.log(balancedSums([6,26,6]));  // YES

```