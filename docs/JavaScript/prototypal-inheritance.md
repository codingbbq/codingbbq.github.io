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