---
layout: post
title:  "React Fundamentals - Notes"
categories: learning
excerpt : Notes for React while learning about the library. I followed the codevolution React Js series. The tutorials are very informative as they teach us why we have to use certain concept and how to correctly implement them.
---

# React Fundamentals

```jsx

npx create-react-app react-fundamentals

```

### Named exports V/S Default exports

If a component is exported as **named export**, then it should be imported inside a brace with the exact same name.

```jsx

// Welcome.js, exporting
export const Welcome = () => { };
export const Hello = () => { };

// App.js, importing
import { Welcome } from './Welcome';

// or, giving it an alias
import { Welcome as Greet } from './Welcome';

// or, import all the named exports into an object and using it
import * as WelcomeObj from './Welcome';
 // user WelcomeObj.Welcome, WelcomeObj.Hello

```

**Default export** can be just one per module. A default export can be a function, a class, and object etc. This values is to be considered as the "main" exported value since it will be the simplest to import. 

```jsx

//export, default exports
const World = () = { };
export default World;

//Import
import World from './World';
```

Importing default and named exports the same time.

```jsx

import World, { Hello, Friend } from './components/Start';

```

### Component Types - Functional V/S Class

Components describe a part of the user interface. They are re-usable and can be nested inside other components.

```jsx

// Javscript functions
function Welcome(props) {
	return <h1>Hello, { props.name }</h1>;
}

// Class Component
class Welcome extends React.component {
	render() {
		return <h1>Hello, { this.props.name }</h1>;
	}
}

```

- **Functional Components**
    - Simple functions
    - Use Functional Components as much as possible
    - Absence of 'this' keyword
    - Force to build a solution without using state
    - Mainly responsible for the UI ( presentational )

- **Class Components**
    - Feature rich and Maintain their own private data - state
    - Complex UI logic

### JSX - Javascript XML

Extension to the Javascript language syntax

Write XML like code for elements and components

- className instead of class
- htmlFor instead of for
- cameCase property naming convention
    - onclick ⇒ onClick
    - tabindex ⇒ tabIndex

### Props V/S State

Properties that a component can accept

Props are immutable - it cannot be changed

In a functional component, we use "props" keyword and in class component we use "this.props"

State is managed within the component

State can be changed

State can be accessed using useState Hooks in Functional component and this.state in class component

Problem : Create a component that displays a message "Hello World!" and on click of the button, changes it to "Hola World!"

```jsx

import React, { Component } from 'react';

class Message extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: 'Hello World!'
        };
    }

    changeState() {
        this.setState({
            message: "Hola World!"
        })
    }
    render() {
        return (
            <div>
                <h1>{ this.state.message }</h1>
                <button onClick={ () => this.changeState() }>Change Message</button>
            </div>
        );
    }
}

export default Message;

```

Note : Never modify the state directly. Use setState.

setState is asynchronous.  So if you want to execute some code after the state has changed, you can use its callback function

```jsx

...
this.setState({
	message: "New message sent!";
}, () => {
	console.log("Update once the state of message is changed");
});

```

If you want to update the state based on the previous state, we pass in the function as an argument to setState.

```jsx
...
this.setState((prevState) => ({
	count: prevState.count + 1;
}));
...

// The above can also accept a second argument as props
```

### Handling Events

React Events are named as camleCase, for eg. onClick

Event handles has to be a function and not the function call. So when using onClick do not add parenthesis to the function.

```jsx

...
<button onClick={ clickHandler }>Click</button>
...

```

### Binding Event Handlers in React.

1. Binding in the render method.

    ```jsx
    ...
    <button onClick={ this.clickHandlers.bind(this) }>Click</button>
    ...
    ```

2. User arrow function in render method.

    ```jsx
    ...
    <button onClick={ () => this.clickHandler() }>Click</button>
    ...
    ```

3. Binding the event handler in the constructor. This is recommended approach.

    In this approach, binding happens only once in the constructor, instead 

    ```jsx
    ...
    constructor(props) {
    	super(props);
    	this.clickHandler = this.clickHandler.bind(this);
    }

    ...
    <button onClick={ this.clickHandler }>Click</button>
    ...
    ```

4. Arrow function as class property

    ```jsx
    ...
    	
    clickHandler = () => {
    	this.setState({
    		message: "Goodbye"
    	});
    }

    ...
    ```

Note : Binding in the constructor and Arrow function as Class property i.e #3 and #4 are recommended methods.

### Conditional Rendering

 If else does not work inside JSX.  JSX is syntactic sugar for calling functions and object properties.

- Using element variables
- Using conditional operator
- Short circuit method

    ```jsx
    ...
    render() {
    	return this.state.isLoggedIn && <div>Welcome Vishwas</div>
    }
    ...
    ```

### Lifecycle Methods

- Mounting - When an instance of a component is being created and inserted into the DOM. 
*constructor, static getDerivedStateFromProps, render and componentDidMount*
- Updating - When a component is being re-rendered as a result of changes to either its props or state
*static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate*
- Unmounting - When a component is being removed from the DOM
*componentWillUnMount*
- Error Handling - When there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
*static getDerivedStateFromError and componentDidCatch*

### React Fragments

Helps to avoid adding the compulsory parent tag in the render method. Use case : In the table structure if the <td> are rendered from different component.

```jsx
...
return (
	<React.Fragments>
		<td>Name</td>
		<td>Age</td>
	</React.Fragments>
)
...

//  Shortcut is to simply add tags i.e

...
return (
	<>
		<td>Name</td>
		<td>Age</td>
	</>
)
...
```

### Refs

Refs provide a way to access DOM nodes or React elements created in the render method.

When to use Refs

- Managing focus, text selection or media playback etc.

Eg. On page load, focus on an input element.

```jsx
import React, { Component } from 'react';

class Ref extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus();
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default Ref;
```

### Render Props

The term "Render props" refers to a technique for sharing code between React Components using a prop whose value is a function.

### Context

Context provides a way to pass data through the components tree without having to pass props down manually at every level.

- Create the context

```jsx
import React from 'react';

const UserContext = React.createContext();

// You can pass a default value in the context
// const UserContext = React.createContext('defaultValue');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

```

- provider the context

```jsx
// Provider is responsible for providing value to all the 
// decendented components.
import { UserProvider } from 'context/UserContext';

...
	<UserProvider value="John Doe">
		<ComponenetA>
	</UserProvider>
...

```

- Consume the context

```jsx
import { UserConsumer } from 'context/UserContext';

...

	<UserConsumer>
		{
			(username) => {
				return <div>Welcome { username } </div>
			}
		}
	</UserConsumer>
...
```

### Hooks

Hooks allow you to use React features without having to write a class.

Eg. State of a Component

**Why Hooks?**

- We need to very well understand how ***this*** keyword works in javascript
- Remember to bind event handlers in class component
- Classes don't minify very well and make hot reloading very unreliable
- There is no particular way to reuse stateful component logic
- With Higher Order Components and Render Props, the above is addressed, but it makes the code harder to follow.

### Rules of using Hooks

- Only call Hooks at the Top Level. Don't call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React Functions - Call them from within React functional components and not just any regular Javascript functions.

### useState

- The useState hook lets you add state to the functional components
- In classes, the state is always an object.
- With the useState hook, the state doesn't have to be an object.
- The useState hook returns an array with 2 elements - The first element is the current value of the state and the second element is a state setter function.
- if the new state value depends on the previous state value, you can pass a function to the setter function.
- When dealing with object or arrays, always make sure to spread your state variable and then call the setter function