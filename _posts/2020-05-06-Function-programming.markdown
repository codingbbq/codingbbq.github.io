---
layout: post
title:  "Function programming - my notes"
categories: learning
excerpt : The other while going through the freecodeCamp's learning series, I came across their JavaScript functional programming section. Below are my notes for future reference taken directly from the freeCodeCamp's lessons.
---

- In JavaScript, a function always has ACCESS to the context in which it was created. This is called Closure. 

- IIFE -> Immediately Invoked function expression

## Functional Programming

- Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation.

- Functions try to limit any changes to the state of the program and avoid changes to the global object holding data.

- Functions have minimal side effects in the program

## Callback functions
Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function eg. filter

## First class functions
Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value.

## Higher order functions
Functions that take a function as an argument, or return a function as a return value are called higher order functions.

When functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called lambda.

## Principles of Functional programming
One of the core principles of functional programming is to not change things, including the function arguments or any global variable.

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as argument.

Functional programming is centered around theory of functions.

The map method iterates over each item in an array and returns a new array containing the result of calling the callback function on each element. It does this without mutating the original array. 
map() is a pure function. Its output depends solely on its inputs. Plus it takes another function as an argument.

### Using filter and map
```javascipt

const filteredList = watchList.filter((movie) => {
    if(movie.imdbRating > 8.0) {
        return movie;
    }
}).map((m) => {
    return {
        title: m.Title,
        rating: m.imdbRating
    }
});

```

## About sort method
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place.

## Currying and Partial application
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1

It restructures a function so it takes one argument, then returns another function that rakes the next argument and so on. 

This is useful in your program if you can't supply all the arguments to a function at one time.