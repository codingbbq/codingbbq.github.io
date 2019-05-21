---
layout: post
title:  "Shift Elements up or down"
categories: learning
excerpt : The problem to solve here is to shift or move certain consecutive items in an array up or down by one position. Based on user's selection we move items up/down based on feasibility.
---

### Shift Elements up or down

One of the enhancements in a project was that user should be able to select certain row items in a grid and move/shift that up or down. This looked really simple yet it was an interesting problem and I had to spend good amount of time (not just on the logic but also on the codebase which was written in Dojo) figuring out a solution.

Below is the breakdown of the requirement

1. Assume that there are items in an array.
2. User is able to select the Elements of the array which they want to shift/move up or down.
3. If the user is at the first element, then move up will not result into anything and vice versa for move down
4. Assume that user always selects consecutive elements from a sorted array.

For example,
```
arr = ["a", "b", "c", "d", "e"];
toMove = [1,2,3];
dir = "up"
// Result should be 
arr = ["b", "c", "d", "a", "e"]


arr = ["a", "b", "c", "d", "e"];
toMove = [2,3];
dir = "down"
// Result should be 
arr = ["a", "b", "e", "c", "d"]


arr = ["a", "b", "c", "d", "e"];
toMove = [0,1];
dir = "up"
// Result should be 
arr = ["a", "b", "c", "d", "e"]

```

#### Solution using the javascript splice method.

Since the array is sorted and user will always select the consecutive elements, we can find the `i-1th` or `i+1th` element and then remove it from array.
Then insert the removed element after the last element from the selected array.

```javascript

let a = ["a", "b", "c", "d", "e"];
let b = [];
// Move b, c, d one step above.

var array_move = function(indexToMove, direction) {
    
   // When the first selected item is 0th position, you cannot move up anymore
    if(indexToMove[0] == 0 && direction === "up"){
      return;
    }
  
    //If the Selected Items array's last item is equal to the last element in main array, and direction is down, we do nothing
    if(indexToMove[indexToMove.length - 1] == a.length - 1 && direction === "down"){
      return;
    }
  
    if(direction === "up"){
        
      // From the selected index, assumming that all the selected items are consecutive, we find the lowest index and remove the element 
      // previous to it. So for example, If index is 1, we remove 0th element
      let removed = a.splice(indexToMove[0] - 1, 1);
      // Now that we have removed the item from the array, we want to place it back after the last index in hte indexToMove array.
      let newPosition = indexToMove.slice(-1).pop();
      a.splice(newPosition, 0, removed[0]);
      return a;
    }
    
    if(direction === "down"){
      // From the selected index, assumming that all the selected items are consecutive, we find the highest index and remove the element 
      // previous to it. So for example, If index is 1, we remove 0th element
      let removed = a.splice(indexToMove.splice(-1).pop() + 1, 1);
      // Now that we have removed the item from the array, we want to place it back after the last index in hte indexToMove array.
      let newPosition = indexToMove[0];
      a.splice(newPosition, 0, removed[0]);
      return a; 
    }
    
};

console.log(array_move([1,2,3], "up"));   //["b", "c", "d", "a", "e"]

console.log(array_move([1,2,3], "down")); //["b", "e", "c", "d", "a"]

```

#### Notes on Splice:

The splice method changes the contents of an array by removing or replacing the existing elements / or adding new elements.
The most important point to note here is the return value. When using the splice method, the return value is an array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

If deleteCount is 0, it means delete/remove 0 elements. 

You can read more about [Splice here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)


#### Difference between splice and slice

After understanding `splice`, I was intrigued to learn about `slice`.

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). 
The original array will not be modified

`arr.slice([begin[, end]])`

More about the difference, [read here](https://stackoverflow.com/questions/37601282/javascript-array-splice-vs-slice).