---
layout: post
title:  "Bon Appetit - Javascript algorithm problem"
categories: learning
excerpt : HackerRank has some simple yet interesting problems. Based on simple input parameters, we had to calculate the output. The fun was going through the problem story line.
---

### Bon Appetit - HackerRank problem.

You can find the problem [here](https://www.hackerrank.com/challenges/bon-appetit/problem)

Below is my attempt solution.

```javascript

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  
  let sum = 0
  
  // Traverse through the bill array
  for(let i = 0; i < bill.length; i++){
    
    // Only add to the items if bill index is not equal to the mentioned index
    if(i != k){
      sum+= bill[i];
    }
  }
  
  // Check if anna overpaid Brain
  if((sum/2) === b){
    return "Bon Appetit";
  }else{
    return Math.abs(b - (sum/2));
  }

}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
console.log(bonAppetit([3, 10, 2, 9], 1, 7));

```

