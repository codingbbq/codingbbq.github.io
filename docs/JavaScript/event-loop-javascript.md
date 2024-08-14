# Explain Even Loop In JavaScript

JavaScript is single-threaded, meaning it executes code **synchronously**, one line at a time. To handle asynchronous tasks while maintaining this single-threaded nature, JavaScript uses a runtime model that involves the Call Stack, Message Queue, Microtask Queue, and Event Loop.

## Call Stack
The Call Stack is a stack data structure that keeps track of function calls. It operates on a Last In, First Out (LIFO) principle. When a function is called, it is added to the top of the stack, and when it finishes executing, it is removed from the stack.

For example:

```js
console.log("Print this");
```
Here, `console.log` is pushed onto the Call Stack and executed immediately, then popped off the stack.

## Web APIs
Certain functions, such as `setTimeout`, `setInterval`, and DOM event handlers, are provided by the browser and not directly managed by JavaScript's Call Stack. These are known as Web APIs.

When an asynchronous operation (e.g., a setTimeout function) is executed, it is handed off to the Web API, which handles the operation and places the callback function in the Message Queue once the operation is complete.

## Message Queue
The Message Queue (or Task Queue) is a queue data structure that follows the First In, First Out (FIFO) principle. It holds callbacks for asynchronous operations like `setTimeout` or user-driven events that are ready to be executed once the Call Stack is empty.

## Event Loop
The Event Loop is a mechanism that continuously monitors the Call Stack and Message Queue. Its primary role is to ensure that asynchronous code is executed at the appropriate time.

### The process works as follows:

- The Event Loop checks if the Call Stack is empty.
- If the Call Stack is empty and there are tasks in the Message Queue, the Event Loop dequeues the oldest task from the Message Queue and pushes it onto the Call Stack for execution.
- This allows JavaScript to handle asynchronous operations while still executing code in a single thread.

## Microtask Queue
In addition to the Message Queue, there is also the Microtask Queue. This queue is specifically used for operations like `Promises` and `MutationObserver`. 

The Microtask Queue has higher priority over the Message Queue.

When the Call Stack is empty, the Event Loop first processes all tasks in the Microtask Queue before moving on to the Message Queue.

For example:

```js 
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
```

Here, the Promise callback will be executed before the setTimeout callback, even though the setTimeout has a delay of 0 milliseconds.

### Summary
- JavaScript's Event Loop allows it to handle asynchronous operations effectively within its single-threaded environment.
- The Call Stack executes synchronous code, while the Event Loop manages the execution of asynchronous code from the Message Queue and Microtask Queue.
- Thus ensuring a smooth and responsive experience in JavaScript applications.