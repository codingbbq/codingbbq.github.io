# How does the `new` keyword work with a function that is not a class in JavaScript?

The JavaScript's `new` keyword can be used by both classes and functions. In JavaScript functions can be used as constructors to create objects, even if they are not explicitly defined in class.

## Using new with Constructor Functions
- Before ES6 introduced the `class` syntax, JavaScript developers used functions to define objects using the pattern known as Constructor Functions. The `new` keyword is used to create an instance of an object from the constructor function

```js
function Person() {
    console.log("Person");
}

const me = new Person(); // Person
```

When you use the new keyword with a function:

- A new empty object is created.
- The `this` keyword within the function is bound to this new object.
- The function is executed, and properties or methods can be added to `this`.
- The function implicitly returns `this`, the new object.

## Using new with Classes
classes are syntactic sugar over constructor functions. They provide a more intuitive and organized way to create objects and support features like inheritance.

```js
class Person {
    constructor() {
        console.log("Person");
    }
}

const me = new Person(); // Person
```

### Summary
You can use the new keyword with the Person function because, in JavaScript, functions can act as constructors. The new keyword creates a new object, binds this to it, and executes the function, allowing you to initialize properties or methods on the object. This pattern has been widely used in JavaScript before the introduction of ES6 classes.