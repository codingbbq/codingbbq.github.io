---
layout: post
title:  "JavaScript Interview Questions : Challenging `this`"
categories: learning
excerpt : Attempting to solve and figure out solution to some of the tricky and very interesting questions asked in JavaScript interviews.
---

### JavaScript interview questions

I found a print of JavaScript questions usually asked in Interview and I had to test my own knowledge. Below is the breakup of each questions, my answer and then followed by the correct answer. The idea of this blog post is to be honest to myself and sincerely take the test. So let's get started.

## What the code below will output to the console?

```javascript

var obj = {
  foo : "bar",
  func : function(){
    var self = this;
    console.log("outer func : this.foo= " + this.foo);
    console.log("outer func : self.too= " + self.foo);
    (function(){
      console.log("inner func : this.foo= " + this.foo);
      console.log("inner func : self.foo= " + self.foo);
    }());
  }
};

obj.func();

```
#### My Solution:
To start with `obj.func()` is being called. However there is a self executing function inside `func` function. If I have to think through, looks like self executing functions will be called first followed by the console.log instead of the `func` function. It could even be otherwise. Also, it looks like assigning `this` to `self` is just to confuse. So the answer according to me should be

```
"inner func : this.foo= bar"
"inner func : self.foo= bar"
"outer func : this.foo= bar"
"outer func : self.foo= bar"

```

#### Computed Actual Output:

```
"outer func : this.foo= bar"
"outer func : self.too= bar"
"inner func : this.foo= undefined"
"inner func : self.foo= bar"
```

Alright, this the correct answer is thought provoking. 
1. As anticipated, self invoking or Anonymous function does not execute first. To note here: The anonymous function is inside a function. Hence the console.log of the main parent function will be called before executing the Anonymous function.

2. Another revealing observation : Inside the anonymous function, `this` does not have reference to the global namespace and hence it does not have reference to object `foo`. Hence at line `console.log("inner func : this.foo= " + this.foo);`, `this.foo` is undefined. Interesting. My explanation may not be correct, but this is what I believe.

3. Also to note that, `this` is assigned to variable `self` inside our function definition. Because of this, `self` is available inside the anonymous function (?).

---

## What will the code below output to the console.

```javascript

function foo1() {
  return {
    bar : "hello"
  };
}

function foo2() {
  return {
    bar : "hello"
  };
}

console.log(foo1());
console.log(foo2());

```

#### My solution:

Well the function returns objects with key : value pair. However, it confuses me with what the output will be on console. My best guess is it will just output the object on console like `{ bar : "hello }` for both the console.logs.

#### Computed Actual Output:

Yes, the actual computed output is that the code prints on the console the object which is returned in each function.

---

## What will be output of following code?

```javascript

for(var i=0; i<5; i++){
  setTimeout(function(){ console.log(i); }, i*1000);
}

```

#### My solution:

`setTimeout` is basically execute the piece of code after certain time. In our piece of code, `setTimeout` is inside the for loop. Also, since for loop will increment immediately, it looks like, variable `i` will keep incrementing and when it is `4` it will eventually print on the screen.

#### Computed Actual Output:

Aargh.. I overlooked many things. Alright, the actual answer is, `i` will be `5` and it will be printed on console `5` times. Our definition of `setTimeout` was correct. 
> The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
So why 5 times?

Well, when `i` is incremented, the time is multiplied by `i`. Which means that it has to wait so many seconds before doing a console.log. In the meantime, while timer is being run, the value of `i` has reached `5` which means it will always print `5` to the console and that too `5` times.

---

## What is the output of the following code?

```javascript

var a = {},
    b = { key : "b" },
    c = { key : "c" };

    a[b] = 123;
    a[c] = 456;

    console.log(a[b]);

```

#### My solution:
So here, we are assigning `b` which is an object, as a key to object `a`. Now the question is can we assign an object as a key to another object?
The immediate thought is, that yes, we can assign object as a key to another object. Based on this assumtion, we will get `123` as the output in console.

#### Computed Actual Output:
Alright, again my solution is wrong and again it is really interesting problem. The output to console will be `456`. But how?
By executing the code, I found that the key becomes `"[Object Ojbect]"` a string type. Which means, it eventually gets overridden by the last stement `a[c] = 456`, and hence the output.
So my assumption that objects can be used as keys is partially wrong, because when used as key, they become strings with value as `"[Object Object]"` which if we have to see, is itself a valid string key.

---

## What is the output of the following code?

```javascript

var length = 10;
function fn(){
  console.log(this.length);
}

var obj = {
  length : 5,
  method : function(fn){
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

```

#### My solution:
The line `arguments[0]()` basically calls the `fn()` function. Which means fn() is called twice.
Also, when `obj.method(fn, 1)` is called, we are passing the reference of `fn` which is defined at the top.
Now, what will be the value of `length`? My understanding is that since `length=10` is in the global namespace, it will be attached to `this` and its value will be `10` throughout. So the output to console will have length of value 10 printed twice.


#### Computed Actual Output:
Again, this was really interesting. The output will be 
`10`
`2`
Why?

When I saw in the console and put debugger, I observed that on the first call, the `this` of fn will refer to the variable `length = 10`. The next time, it calls the `arguments` object and the `this` is then referred to the `arguments` rather than `fn` or the global namespace.
Considering `this` is referred to the `arguments` object, it means that when we call `obj.method(fn,1)` we are passing two arguments and therefore `this` has reference to two parameters. 

Now the most amazing revelation was that `this` being an array of objects, `length` will be the javascript method and hence `this.length` will be 2.

---

## What would following code return?

```javascript
console.log(typeof typeof 1);
```

#### My solution:
`typeof 1` will return `'number'` which inturn will be of type `string`. Hence `string` will be printed on the screen.

#### Computed Actual Output:
Yup, it will print `string` on the console.

---

This was a fun excersice and I learned a lot spending time on such quiz. I plan to do just posts in future.

