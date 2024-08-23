# Promises in JavaScript
Questions about promises in JavaScript

## What are Promises in JavaScript?
Promises in JavaScript are a way to handle asynchronous operations. They represent a value that may not be available yet, but will be resolved in the future. 
Promises have three states: pending, fulfilled, or rejected.
They allow you to chain multiple asynchronous operations together and handle the results using `.then()` and `.catch()` methods. Promises provide a more structured and readable way to handle asynchronous code compared to callbacks.

## Explain how Promises work with an example ?
Consider below code

```js
const promise = new Promise((resolve, reject) => {
    console.log("Promise Started");
    resolve("Promise Resolved");
});

promise.then((value) => {
    console.log(value);
});

console.log("End of code");

```

- When you create a new Promise, the function you pass in the Promise constructor called as executor function is executed immediately and synchronously. That is why "Promise Started" is printed on the console.

- The `.then()` method is called next, but it is an asynchronous function. It waits for the Promise to `resolve`, which means that the JavaScript's Event Loop waits for any synchronous code to execute before it can execute `resolve`. Thus it is put in the Task Queue until Event loop allows it to put on the Call Stack.

- Next in the Call stack is the synchronous code to print on the console. So the output "End of code" is printed next. Once this is popped out of Stack and the Stack is empty, Event loop picks up the callback from the Task Queue which is basically `resolve` in our case and so, "Promise is resolved" is printed on the screen.

```cmd
Promise Started
End of code
Promise is resolved
```
