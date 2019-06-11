---
layout: post
title:  "Consecutive Elements in an Array"
categories: hackerrank
excerpt : In this algorithm challenge, we find if given array of integers, all the items are consecutive. We assume that the array is sorted. Even though this problem looked straightforward, it turns out there are various other algorithms that help achieve the same output.
---

### Check if array elements are consecutive

Recently at work I encountered this situation, Only execute a piece of code if the items in an array are consecutive.
For example,

`let a = [1, 2, 3, 4, 5]`

The above array `a` has consecutive integers and so it passes the requirement. However array `b` does not satisfy the requirement

`let b = [1, 3, 4, 5]`

My first and immediate go to solution was to iterate over the array and find the difference of the item with the previous item.
1. Sort the array in ascending order. Initially I used the JavaScript method .sort() directly on the array, i.e `array.sort()` however found that for
array such as `[1, 2, 3, 10]` the sorting would be string sorting i.e output would be `[1, 10, 2, 3]`. So, the solution was to sort each item with previous item based on condition.

2. After sorting, iterate over the array and check if the next element is greater than the previous element by 1. Based on the condition we used, one point to take care was that the loop is run for a total length of array - 1 times.

```javascript

let selectedArray = [1, 3, 5, 2, 10, 11]

selectedArray.sort(function(a, b){
    return a < b;
});

for(var m = 0; m < selectedArray.length - 1; m++){
    if(selectedArray[m] != selectedArray[m + 1] - 1){
        return;
    }
}

```

#### Consecutive array | Method 2

The above solution worked great for me, however, I was wondering if there was any other solution to such problem. I came across this [hacker rank article](https://www.geeksforgeeks.org/check-if-array-elements-are-consecutive/) with similar problem and an alternative solution.

1. Check if max - min + 1 = n
where `max` is maximum element in array
`min` is minimum element in array and 
`n` is the number of elements in array.

2. Check if all the elements are distinct. we can create a visited{} object. We can map the ith element of input array arr[] to visited object by using arr[i] as index in visited with value as 1.

``` javascript

let x = [1, 2, 3, 5, 6, 7, 10];

let y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isConsecutive(a){
  
  let visited = {};
  if((a[a.length - 1] - a[0]) + 1 != a.length){
   return false;
  }
  
  for(let i = 0; i < a.length; i++){
    if(visited[a[i]] == 1){
      return false;
    }else{
      visited[a[i]] = 1;
    }
    
    return true;
  }
  
}

console.log(isConsecutive(x)); // false
console.log(isConsecutive(y)); // true

```

The best part about above solution is that, we do not have to iterate over the complete array. By using a visited object with key as the array element, we can always find for the duplicate.