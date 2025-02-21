# JavaScript Prototypes
A complete article on what are Prototypes in Javascript.

- In JavaScript all objects have a `[[prototype]]
- Strings are a little weired in JavaScript. When you create a string literal in JS, it will be treated as string primitive. You cannot add properties to it. You cannot even see the list of properties or methods in the console. 
Why? - for performance reasons. Primitive values are stored in a place in memory known as stack and this type of memory should be accessed quickly.
- Objects in other hand are stored in a place in memory call the heap. The heap can take larger amounts of data but it is slightly slower to access.

## How can you create Objects in JavaScript ?
There are several ways to create objects in JavaScript:

### Using Object Literals
```javascript
const obj = {
    key1: 'value1',
    key2: 'value2'
};
```

### Using the `new Object()` Syntax
```javascript
const obj = new Object();
obj.key1 = 'value1';
obj.key2 = 'value2';
```

### Using a Constructor Function
```javascript
function MyObject(name, age) {
    this.name = name;
    this.age = age;
}
const obj = new MyObject('John Doe', 50);
```

### Using ES6 Classes
```javascript
class MyObject {
    constructor(key1, key2) {
        this.key1 = key1;
        this.key2 = key2;
    }
}
const obj = new MyObject('value1', 'value2');
```

### Using `Object.create()`
```javascript
const proto = {
    key1: 'value1',
    key2: 'value2'
};
const obj = Object.create(proto);
```

## `[[Prototype]]`

- All objects have a `[[prototype]]` property
- The `[[prototype]]` points to a prototype object which is a global object
- The `[[prototype]]` has to be an object or null

## `[[Prototype]]` is hidden
- You cannot access the `[[prototype]]` property from code
- It is an internal property, which defines the internal behavior of code but cannot be accessed from code. 
- Internal properties are not part of JavaScript language
- Reason - you should not be accidentely delete the internal properties
- You can choose the object's `[[prototype]]`

## In Javascript, you can define what prototype You want your objects to INHERIT from.
You can set the prototype of an object using the `Object.setPrototypeOf()` method or the `__proto__` property.

#### Using `__proto__`
```javascript
// This is outdated and old way of doing it.
const proto = {
    greet() {
        console.log('Hello!');
    }
};

const obj = {};
obj.__proto__ = proto;
obj.greet(); // Output: Hello!
```

#### Using `Object.setPrototypeOf()`
```javascript
const proto = {
    greet() {
        console.log('Hello!');
    }
};

const obj = {};
Object.setPrototypeOf(obj, proto);
obj.greet(); // Output: Hello!
```


#### Using `Object.create()`
```javascript
// This is recommended way
const proto = {
    greet() {
        console.log('Hello!');
    }
};

const obj = Object.create(proto, { 
    name: {
        value: 'John Doe'
    }
});
obj.greet(); // Output: Hello!
```

## `[[prototype]]` points to the Constructor's prototype
- When an Object is created, the JS engine adds the `[[prototype]]` property automatically. This is set equal to the prototype object of the function that created the object in the first place.
```javascript
let doctor = {};
doctor.__proto__ == Object.prototype; // true

```

## The prototype chain can be as long as you want
- The `[[prototype]]` property of an object can point to another object, which in turn can point to another object, and so on.
- This is called the prototype chain.
- The prototype chain is used to implement inheritance in JavaScript.
- The prototype chain is a series of objects connected by their `[[prototype]]` property.
- When you try to access a property of an object, JavaScript will first look at the object itself. If it doesn't find the property, it will look at the object's prototype, and so on up the chain.
- If the property is not found in the prototype chain, JavaScript will return `undefined`.

## The prototype does not affect the value of 'this'.
- The prototype object is used to store methods and properties that are shared among all instances of a constructor function.
- When a method is called on an object, JavaScript will first look for the method on the object itself. If it doesn't find the method, it will look at the object's prototype, and so on up the chain.
- When the method is called, the value of `this` will be the object that called the method, not the prototype object.


## What are ENUMERABLE properties ?
- Enumerable properties are those properties of an object that can be iterated over using constructs like for...in loops or Object.keys().
- To check if a property is enumerable, you can use the `Object.prototype.propertyIsEnumerable()` method.
- You can define or change the enumerability of a property using Object.defineProperty or Object.defineProperties.
```JavaScript
const obj = {};
Object.defineProperty(obj, 'a', {
  value: 1,
  enumerable: false
});
console.log(obj.propertyIsEnumerable('a')); // false
```

## What is instantiation pattern in JavaScript?
- The instantiation pattern is a way to create new objects from a shared prototype object.
- It is a way to implement inheritance in JavaScript.
- There are 5 types of instantiation patterns in Javascript
    - Functional Instantiation
    - Functional Instantiation with Shared Methods
    - Prototypal Instantiation
    - Pseudo-Classical Instantiation
    - ES6 Class Instantiation

## What are the limitations of Arrow functions?
- Arrow functions do not have their own `this` value. They inherit the `this` value from the enclosing lexical context.
- Arrow functions cannot be used as constructors. They do not have a `prototype` property.
- Arrow functions do not have their own `arguments` object. You can use the `arguments` object from the enclosing lexical context.
- Arrow functions cannot be used with the `new` keyword. They do not have a `[[Construct]]` internal method.
- Arrow functions cannot be used as generators and do not support the yield keyword.

## What is the difference between `__proto__` and `[[prototype]]`?
- `__proto__` is a getter/setter property that allows you to get or set the prototype of an object.
- `[[prototype]]` is an internal property that points to the prototype object of an object.
- `__proto__` is a non-standard property that is not part of the ECMAScript specification. It is supported by most modern browsers.
- `[[prototype]]` is an internal property that is used by the JavaScript engine to implement inheritance.
- `__proto__` is a property that is defined on the object itself.
- `[[prototype]]` is an internal property that is not accessible from JavaScript code.

## What is recommended way for `__proto__`?
- The `__proto__` property is considered outdated and should not be used in production code.
- It is recommended to use the `Object.setPrototypeOf()` method or the `Object.getPrototypeOf()` method to get the prototype of an object.

## To create an Object with a given prototype you should use ?
- The recommended way to create an object with a given prototype is to use the `Object.create()` method.
    ### Using `Object.create()`
    ```javascript
    const proto = {
        greet() {
            console.log('Hello!');
        }
    };

    const obj = Object.create(proto);
    obj.greet(); // Output: Hello!
    ```

- You can also use the constructor function pattern or the class syntax to create objects with a given prototype.
    ### Using Constructor Function
    ```javascript
    function MyObject() {}
    MyObject.prototype.greet = function() {
        console.log('Hello!');
    };

    const obj = new MyObject();
    obj.greet(); // Output: Hello!
    ```
    ### Using ES6 Class
    ```javascript
    class MyObject {
        greet() {
            console.log('Hello!');
        }
    }
    const obj = new MyObject();
    obj.greet(); // Output: Hello!
    ```

## `.prototype` has constructor property by default.
- When you create a function in JavaScript, it automatically gets a `prototype` property.
- The `prototype` property is an object that has a `constructor` property by default.
- The `constructor` property points back to the function that created the object.
- The `constructor` property is used to create new instances of the object.

## What is the difference between `prototype` and `[[Prototype]]`?
- `[[Prototype]]` is an internal property of an object that points to its prototype object. It is used to define an objects properties and methods.
- If an object's property is not found, the JS engine will look at its `[[Prototype]]` object and so on up the chain, eventually until it reaches `null`.
- The `.prototype` property is used to assign the `[[prototype]]` to an object when 'new' is used.

## Important points
- Almost every function has `.prototype` property.
- Since functions are also objects, they have a `[[prototype]]` property that points to the `Function.prototype` object.
- The `.prototype` is an object (by default) and is used to set the `[[prototype]]` of an object created with the `new` keyword.
- The `Doctor.prototype` sets the `[[prototype]]` of new Doctor when `new Doctor()` is used.
- The `.prototype` is only useful when used on constructor functions.