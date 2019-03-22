---
layout: post
title:  "More algorithm challenges"
categories: hackerrank
excerpt : We continue the jounrney of improving problem solving abilities. The key to solving puzzles and problems effectivly is consistency. We may know the theoretical concepts and the paradigms, but we want to learn and practice each concept.
---

### Migratory Birds

[Link to the problem](https://www.hackerrank.com/challenges/migratory-birds/problem)

Below is my attempted solution.

```javascript

function migratoryBirds(arr) {
  
  // We find the frequency of each bird type using the 
  // reduce function and store it in an object.
  let birdType = arr.reduce((acc, item) => {
    acc[item] ? acc[item]++ : acc[item] = 1;
    return acc;
  }, {});
  
  let max = 0;
  let type;
  
  // Using the for..in loop, we traverse through each object 
  // key and value and get the max value but for the min key
  for(var i in birdType){
    if(birdType[i] > max){
      max = birdType[i];
      type = parseInt(i);
    }
    if(birdType[i] == max && type > parseInt(i)){
      max = birdType[i];
      type = parseInt(i);
    }
  }
  
  return type;

}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));

```

---

### Electronic Shop - Hackerrank

[The problem statement](https://www.hackerrank.com/challenges/electronics-shop/problem)

This was a simple straight forward problem. The best part about this attempt was I did not spend much time into debugging.
Putting in time in writing code and solving puzzles, not only helps your brain adapt to thinking but also gives you a level of confidence.

```javascript

function getMoneySpent(keyboards, drives, b) {
    let totalPrice = 0; // Price of keyboard + drive
    let maxPrice = 0; // Maximum of both the combination
  
    for(let k = 0; k< keyboards.length; k++){
      for(let d = 0; d< drives.length; d++){
        totalPrice = keyboards[k] + drives[d];
        if(totalPrice <= b && totalPrice > maxPrice){
          maxPrice = totalPrice;
        }
      }
    }
  
    if(maxPrice == 0){
      // Monica cannot buy any of the items as it does not fall in her budget;
      maxPrice = -1;
    }
  
    return maxPrice;
}

console.log(getMoneySpent([3,1], [5,2,8], 10));
console.log(getMoneySpent([4], [5], 5));

```

---

### Cat and Mouse

[The problem can be found here](https://www.hackerrank.com/challenges/cats-and-a-mouse/problem)

Again, considering that the problem was quite simple, I could get the solution without any debugging and at one go.
We used the `Math.abs(a-b)` javascript function comfortably here.

```javascript

// x is Cat A's position
// y is Cat B's position
// z is Mouse position

// We need to find the distance of each cat from Mouse.
function catAndMouse(x, y, z) {
  
  let catA = Math.abs(x - z);
  let catB = Math.abs(y - z);
  
  if(catA > catB){
    return "Cat B";
  }else if(catA < catB){
    return "Cat A";
  }else{
    return "Mouse C";
  }

}

console.log(catAndMouse(1,2,3));
console.log(catAndMouse(1,3,2));

```

---

### The Hurdle race - hackerrank

[Problem statement](https://www.hackerrank.com/challenges/the-hurdle-race/problem)

This was a very simple problem. However it was confusing at first. The point to note was that we had to find the minimum doses that dave needs to take to jump.

1. Since the height would always be an array of integers, I took the liberty of using the `Math.max` on the array.
2. By default the maxDose variable is set to 0. Thus it saved me extra line of code.

```javascript

function hurdleRace(k, height) {
  
  let maxDose = 0;
  
  let max = Math.max.apply(null, height);
  if(k < max){
    maxDose = max - k;
  }
  
  return maxDose;
  
}

console.log(hurdleRace(4, [1,6,3,5,2]));
console.log(hurdleRace(7, [2,5,4,5,2]));

```

---

### Ice Cream Parlour problem

[Link to this problem](https://www.hackerrank.com/challenges/icecream-parlor/problem)

This problem gave me a little hard time. I remember solving such problem earlier, but this time, I had trouble in getting the for loop correct.
Also, I spent some heckos to get the test cases and based on that, I was able to solve the problem. 
Searching let me to this [interesting .pdf] which talks about this two-sum problem and various approaches. I took the easier approach, however, I learned a lot in the process.

```javascript

function icecreamParlor(m, arr) {
  
  let flavorIndex = [0, 0];
  
  for(let i = 0; i < arr.length; i++){
    
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === m){
        flavorIndex[0] = i + 1
        flavorIndex[1] = j + 1;
      }
    }
    
  }
  
  return flavorIndex.sort((a, b) => a - b);

}

console.log(icecreamParlor(100, [5, 75, 25]));

console.log(icecreamParlor(200, [150, 24, 79, 50, 88, 345, 3]));

console.log(icecreamParlor(8, [2, 1, 9, 4, 4, 56, 90, 3]));

console.log(icecreamParlor(542, [230, 863, 916, 585, 981, 404, 316, 785, 88, 12, 70, 435, 384, 778, 887, 755, 740, 
337, 86, 92, 325, 422, 815, 650, 920, 125, 277, 336, 221, 847, 168, 23, 677, 61, 400, 136, 
874, 363, 394, 199, 863, 997, 794, 587, 124, 321, 212, 957, 764, 173, 314, 
422, 927, 783, 930, 282, 306, 506, 44, 926, 691, 568, 68, 730, 933, 737, 531, 
180, 414, 751, 28, 546, 60, 371, 493, 370, 527, 387, 43, 541, 13, 457, 328, 227, 652, 365, 430, 803, 59, 
858, 538, 427, 583, 368, 375, 173, 809, 896, 370, 789]));

console.log(icecreamParlor(789, [591, 955, 829, 805, 312, 83, 764, 841, 12, 744, 104, 
773, 627, 306, 731, 539, 349, 811, 662, 341, 465, 300, 491, 423, 569, 405, 508, 
802, 500, 747, 689, 506, 129, 325, 918, 606, 918, 370, 623, 905, 321, 670, 879, 
607, 140, 543, 997, 530, 356, 446, 444, 184, 787, 199, 614, 685, 778, 929, 819, 
612, 737, 344, 471, 645, 726]));

console.log(icecreamParlor(101, [722, 600, 905, 54, 47]));

console.log(icecreamParlor(35, [210, 582, 622, 337, 626, 580, 994, 299, 386, 274, 
591, 921, 733, 851, 770, 300, 380, 225, 223, 861, 851, 525, 206, 714, 985, 82, 
641, 270, 5, 777, 899, 820, 995, 397, 43, 973, 191, 885, 156, 9, 568, 256, 
659, 673, 85, 26, 631, 293, 151, 143, 423]));

console.log(icecreamParlor(890, [286, 461, 830, 216, 539, 44, 989, 749, 340, 
51, 505, 178, 50, 305, 341, 292, 415, 40, 239, 950, 404, 965, 29, 972, 
536, 922, 700, 501, 730, 430, 630, 293, 557, 542, 598, 795, 28, 344, 
128, 461, 368, 683, 903, 744, 430, 648, 290, 135, 437, 336, 152, 698, 
570, 3, 827, 901, 796, 682, 391, 693, 161, 145]));

console.log(icecreamParlor(163, [22, 391, 140, 874, 75, 339, 439, 638, 
158, 519, 570, 484, 607, 538, 459, 758, 608, 784, 26, 792, 389, 418, 
682, 206, 232, 432, 537, 492, 232, 219, 3, 517, 460, 271, 946, 418, 
741, 31, 874, 840, 700, 58, 686, 952, 293, 848, 55, 82, 623, 850, 
619, 380, 359, 479, 48, 863, 813, 797, 463, 683, 22, 285, 522, 60, 
472, 948, 234, 971, 517, 494, 218, 857, 261, 115, 238, 290, 158, 
326, 795, 978, 364, 116, 730, 581, 174, 405, 575, 315, 101, 99]));

console.log(icecreamParlor(295, [678, 227, 764, 37, 956, 982, 118, 
212, 177, 597, 519, 968, 866, 121, 771, 343, 561]));

```

---

### Missing Numbers

[Link to Problem](https://www.hackerrank.com/challenges/missing-numbers/problem)

This was a fun to do problem. I could figure out the logic howerver, I missed reading one important requirement i.e <i>Print each missing number once, even if it is missing multiple times.</i> because of which one of the Test Case failed. Unlike the last problem, I did not want to spend any heckos, so I read the entire problem again and fortunately I was able to figure out the issue.

After practicing the fundamentals, use of higher order javascript functions appear familiar and hence I again used `.reduce` in my algorithm.

```javascript

function missingNumbers(arr, brr) {
  
  let hashArr = brr.reduce((acc, item) => {
    acc[item] ? acc[item]++ : acc[item] = 1
    return acc;
  }, {});
  
  for(let i = 0; i< arr.length; i++){
    if(hashArr.hasOwnProperty(arr[i]) && hashArr[arr[i]]){
      hashArr[arr[i]]--;
    }
  }
  
  let newArray = [];
  
  for(var key in hashArr){
    if(hashArr[key] > 0){
      newArray.push(parseInt(key));
    }
  }
  
  return newArray.sort((a, b) => a - b);

}

console.log(missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], 
[203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]));

```