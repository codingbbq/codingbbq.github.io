# What is Prototypal Inhertiance in JavaScript ?

Prototypal Inheritance is a feature in JavaScript in which Objects can inherit properties and methods from other objects. Every JavaScript object has an internal link to another object called its prototype. This inturn can have its own prototype form a chain called as prototype chain. 

Let's say you want to access a property or a method on an object, JavaScript first looks up in the said object itself and then if not found goes to the prototype chain until it is either found or is reached `null`.

This allows for a shared behaviro across Object, which is a powerfull technique to organize the code in JavaScript.

## Difference Between __proto__ and prototype:

#### __proto___
- `__proto__` is an internal property of an object (though accessible in most environments) that points to the object’s prototype.
- It is essentially the "link" to the object's prototype, which is where JavaScript looks for properties and methods that are not found directly on the object.

```js
const obj = {};
console.log(obj.__proto__); // Points to Object.prototype
```

#### prototype
- prototype is a property of constructor functions (including classes) that is used to set the prototype of objects created by that constructor.
- When you create an object using a constructor function (with the new keyword), the newly created object's __proto__ is set to the constructor function's prototype.

```js
function Person() {}
console.log(Person.prototype); // The prototype object
const me = new Person();
console.log(me.__proto__ === Person.prototype); // true
```

### Summary:
- __proto__: The actual prototype of an object, linking to its parent in the prototype chain.
prototype: A property on constructor functions that determines the __proto__ of the objects created by that constructor.
- In essence, __proto__ is used to access the prototype of an object, while prototype is used to define the prototype for objects created by a constructor function.

---

## Explain how prototypal inheritance works in JavaScript. How does it differ from classical inheritence in other languages like C++/Java?

In JavaScript, protypal inheritance is a system where objects can inherit properties and methods directly from other objects. This is achieved through an internal property known as Prototype or accessed via `__proto__`. When a property or method is accessed on an object, JavaScript first checks if the object itself has that property or method. If it doesn't, JavaScript then looks at the object's prototype, and this process continues up the prototype chain until the property or method is found, or the end of the chain is reached i.e `null`.

Objects can inherit directly from other objects using mechanism like `Object.create()` constructor functions with the `new` keyword, or classes introduced in ES6 (which still rely on prototypal inheritance under the hood).

Since prototypes are just objects, they can be modified at runtime, allowing for more dynamic inheritance patterns.

In languages like Java / C++, inheritace is based on classes. A class is blueprint for creating objects. Inheritance occurs when a class (child) inherits properties and behaviors from another class.

JavaScript is object-based, meaning the inheritance is based on objects, not classes. 

---
 
## What happens when you try to access a property on an object that is not directly on the object itself? How does the prototype chain come into play?

When you try to access a property on an object that is not directly defined on the object itself, JavaScript begins a process of searching for that property up the prototype chain.

The chain typically ends with `Object.prototype` which is the top-level prototype in JavaScript. If the property is not found by the time it reaches `Object.prototype`, which has its own set of standard methods like `toString`, `valueOf`, the search stops.

if the property is not found anywhere in the prototype chain, JavaScript returns `undefined`

When an object inherits properties or methods from its prototype, it is often referred to as delegation. The object "delegates" the request to its prototype.

---

## What is the difference between __proto__ and prototype in JavaScript? How are they related to each other?

In JavaScript, `__proto__` and `prototype` are both related to the concept of prototypal inheritance, but they serve different purposes and are used in different context.

### `__proto__`
`__proto__` is an internal property of an object that points to the prototype object from which it inherits properties and methods. Essentially, it represents the link to the object's prototype.

It is used to look up properties and methods in the prototype chain. When access a property on an objet, JavaScript checks the object itself first, and if the property is not found, it checks the object's `__proto__`, and so on up the prototype chain.

While you can access `__proto__` directly in most JavaScript environments eg. `obj.__proto__`, in modern JavaScript `Object.getProtoTypeOf(obj)` is the preferred method to access an object's prototype.

```js
const animal = { type: "mammal" };
const dog = { breed: "Labrador" };
dog.__proto__ = animal;

console.log(dog.type); // mammal = found via the prototype chain.
```

### `prototype`
`prototype` is a property of constructor functions in JavaScript. It's an object that is used as a blueprint for creating new instances. When a new object is created using a constructor function, the newly created object's `__proto__` is set to the constructor's `prototype`.

The `prototype` property is what enables inheritance in JavaScript. It allows you to define properties and methods that should be shared by all instances created by the constructor.

When you define a constructor function or a class, the method and properties you add to `prototype` will be availble to all instances of that constructor.

```js
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const me = new Person("Alice");
me.greet(); // Hello, my name is Alice
console.log(me.__proto__ === Person.prototype); // true
```

When an object is created using a constructor function, its `__proto__` points to the constructors `prototype`. This link is what establishes the prototype chain and enables inheritance in JavaScript.

---

## How would you create a new object that inherits from an existing object in JavaScript? Can you demonstrate this using Object.create()?

Creating a new object that inherits from an existing object in JavaScript can be done using the `Object.create()` method. This method creates a new object, using an existing objects as the prototype of the newly created object.

```js
let newObject = Object.create(prototypeObject);
```

`Object.create()` is a clean and straightforward way to set up prototype-based inheritance without using constructors or classes.

You can create objects with a `null` prototype, which means they won't inherit from `Object.prototype`, effectively creating a dictionary like object with no inherited methods.

---

## If an object has a property that is also defined on its prototype, which one will be used when the property is accessed? How can you override a property on an object that is defined on its prototype?

When you access a proeprty on an object that is also defined on its prototype, the property on the object itself will be used. JavaScript always checks the object's own properties first before looking at the prototype chain. If the property exists directly on the object, that property takes precedence, and the property on the prototype is ignored.

To override a property on an object that is defined on its prototype, you simply defined the property directly on the object itself. This can be done either when the object is created or at any time afterward.

---

## Are there any performance implications of using prototypal inheritance in JavaScript, particularly with deep prototype chains? How can this impact the lookup time for properties?

Yes, there are performance implications when using prototypal inheritance in JavaScript, especially with deep prototype chains. 

- When you access a property on an object, JavaScript first checks if the property exists directly on the object.
- If it doesn't find the property, it looks up the object's prototype and continues up the chain until it either finds the property or reaches the end of the chain.
- The deeper the prototype chain, the longer this lookup process can take, as JavaScript has to traverse through multiple objects to find the property.

### How to mitigate performance issues:
1. **Flatten Prototype Chain** : Try to avoid inheritance heirarchies. If possible, use composition over inheritance. This means instead of relying heavily on inheritance, you can structure your objects by combining smaller, reusable components.

2. **Cache Lookups** : If you frequently access a property that exists deep in the prototype chain, consider caching the value in a variable or directly on the object. 

3. **Avoid unnecessary prototypes** : If you don't need inheritance for certain objects, consider creating them with `Object.create(null)`. This creates an object with no prototpye, eliminating the lookup process entirely.

4. **Profile and Optimize** : Use JavaScript performance profiling tools to monitor and analyze the performance of your code.
