---
layout: post
title:  "Javascript Interview Questions : Let the fun continue"
categories: learning
excerpt : Going through some of the tricky yet interesting questions asked in Front-End interviews. 
---

### Javascript Fun Challenges

Continuing from when we were [Challenging `this`](https://codingbbq.github.io/learning/2019/03/12/Javascript-Interview-Questions.html), it is yet another fun excercise to learn more about javascript.

## What will be the output of the following code?

```javascript

var output = (function(x){
  delete x;
  return x;
})(0);

console.log(output);

```
#### My Solution:
There is an Anonymous function `output` and it is passed with `0`. The statement `delete x` will delete it which means that it will return `undefined`. This is my analysis, now let us execute the program and see if my knowledge is correct? Ahem.

#### Computed Actual Output:
Ok, again my analysis was incorrect. The output would be `0`. But why? So, I did a google search and found out that 

>The delete operator is designed to be used on object properties. It has no effect on variables or functions.

Now since our function was passing a variable and we were trying to delete a variable, there was no effect. And hence, the console output was `0`.

This was a tricky question and it needed proper javascript knowledge. I learned something fascinating today.

---

## What will the following code output in console. What is the issue with the code and how it can be fixed?

```javascript

var hero = {
  _name : "John Doe",
  getSecretIdentity : function(){
    return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

```

#### My solution:

As per my understanding, the first `console.log(stoleSecretIdentity());` will output `undefined`. The reason being, we are passing the reference of the function which then changes the assignment of `this`.

The second `console.log(hero.getSecretIdentity());` will print "John Doe";

Let us see how the output will appear in console.

#### Computed Actual Output:

Alright, my analysis of the output is correct. Now the part where we need to fix this code. So I understand that the first console.log should print the correct name i.e "John Doe" instead of undefined. For this, we need to assign the returned value of hero function to the variable, and in first console.log we remove the parenthesis so that only the variable is printed instead of function execution. See below code.

```javascript

var hero = {
  _name : "John Doe",
  getSecretIdentity : function(){
    return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity();
console.log(stoleSecretIdentity);
console.log(hero.getSecretIdentity());

```

---

## Write a mul function which produce following output when invoked
> console.log(mul(2)(3)(4)) // output : 24
> console.log(mul(4)(3)(4)) // output : 48

#### Computed Actual Output:

To be honest, I had never written such functions nor remember seeing before. I had to google my way through.
So basically, this is called a *currying programming technique*. [Interesting read here](https://stackoverflow.com/questions/18234491/two-sets-of-parentheses-after-function-call)

```javascript

function mul(x){
  return function(y){
    return function(z){
      return x*y*z;
    }
  }
}

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));

```