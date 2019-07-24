---
layout: post
title:  "JavaScript - Push to Array key, value"
categories: learning
excerpt : I came across this simple yet interesting challenge where I had to push key and value to an array using the array push method. The method that I followed was to first create an object and then insert the key and value in the object. I then pushed the object in the array of choice. 
---

Objects and Arrays are simple to understand data structures. However, everyday is a new learning day. Today, came across this situation where I wanted to use the push method on array to push key, value pair. The solution was very interesting and worth documenting. 

```javascript

// Below is the desired JSON output that we wanted to have.

"desiredArray" : [
  "ourKey" : "ourValue"
];

```

- Create an empty object
- Use this object to insert your key and value
- Push the object into the desired array

```javascript

var tempObj = {};
tempObj[ourKey] = ourValue;
desiredArray.push(obj);

```