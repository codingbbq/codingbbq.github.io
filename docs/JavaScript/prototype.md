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

