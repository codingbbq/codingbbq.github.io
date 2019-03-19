---
layout: post
title:  "Desinger PDF Viewer - Javascript algorithm problem"
categories: hackerrank
excerpt : The "Designer PDF Viewer" problem on hacker Rank was interesting. I got to use the .reduce method of ES6 and also learn to use the Math.max method on an array.
---

### Designer PDF Viewer - HackerRank problem.

You can find the problem [here](https://www.hackerrank.com/challenges/designer-pdf-viewer/problem)

Below is my attempted solution to the Designer PDF Viewer problem. In this problem, 
I used the .map as well as .reduce array methods available in javascript. I found out about how we can use the Math.max method
to get the maximum value in an array of integers.

```javascript

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
  
  // Creating the array of alphabets
  var alphabetKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
    let values = h,
        
    // Using the ES6 reduce function to create an object which associates the input height with each alphabet
    associated = alphabetKeys.reduce((previous, key, index) => {
        previous[key] = values[index];
        return previous
    }, {});
    
    // Storing the height of each letter from the input word
    let alphaValues = [];
    
    // We split the word and then we loop over each alphabet to get its associated height
    word.split("").map((alphabet) => {
      if(associated.hasOwnProperty(alphabet)){
        alphaValues.push(associated[alphabet]);
      }
    });
  
    // Get the max from the alphaValues array
    let max = Math.max.apply(null, alphaValues);
    
    // We find the total number of alphabets. Since we assume that the width of each alphabet is 1mm, we can add up each alphabet to get
    // total length.
    let length = alphaValues.length;
    
    // Based on max height and total length, we calculate the area.
    return max*length;
    
}


console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"));


```

