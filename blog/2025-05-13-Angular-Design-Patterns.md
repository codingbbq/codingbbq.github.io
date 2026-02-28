---
slug: angular-design-patterns
title: "Angular Design Patterns and Best Practices"
tags: [upskilling, learning, book-reading]
---

## Angular Design Patterns and Best Practices

### Why choose Angular ?
1) Batteries Included
- Angular development team has already made serveral decisions for you.

2) Google Support
- Angular is backed by Google, which means it has a large community and a lot of resources available.

3) Community
- Angular has a large community of developers who are willing to help you with any questions you may have.

4) Tooling
- Eg. Angular CLI, Testing

5) Typescript
- TypeScript is a superset of the JavaScript language that adds type checking and other features to the language, ensuring a better developer experience and security for web development.

6) RxJS
- Library for reactive programming using Observables, which makes it easier to work with asynchronous data streams.
- RxJS also provides mechanism for state management, which is a common requirement in modern web applications.

7) Webpack
- Webpack is a very powerful and versatile bundler, and it is thanks to it that the framework manages to make some interesting optimizations such as tree shaking and lazy loading of bundles

### Organising your application ?
The basis for organizing your application is the Angular module.
An Angular module is a typescript class marked with decorator @NgModule that contains the metadata 
- declarations: components, directives, and pipes that belong to this module
- providers: In this attribute, we can register the classes we want to inject using Angular's dependency injector system, normally used for services
- imports: other modules that this module depends on. We should not import components or services.
- exports: components, directives, and pipes that can be used in the templates of components in other modules

#### Modules Type
- Business Domain Module: For example, a module for user management or product management.
- Component Module: The purpose of this module is to group directive components and pipes that will be reused by business domain components and even other components.


### Avoiding anti-patterns - Single Module App
The problems with Single Module applications 
- Disorganized folder structure
- Bundle size and Build time optimizations are not effective
- Components maintainability and update issues

### Shared Module Pattern
- Eg. HttpModule
- SharedModule is a module that contains components, directives, and pipes that will be used in multiple modules.

### Improving the size of your app - Lazy loading
- Lazy loading is a technique that allows you to load modules only when they are needed, rather than loading them all at once when the application starts.
- This can significantly reduce the initial load time of your application and improve performance.
- To implement lazy loading, you can use the `loadChildren` property in the route configuration of your application.

### Communication between components - inputs and outputs.
- Inputs and outputs are used to pass data between components.
- Inputs are used to pass data from a parent component to a child component, while outputs are used to pass data from a child component to a parent component.

### Advantages of TrackBy attribute
- TrackBy is an Angular directive that allows you to optimize the performance of your application by reducing the number of DOM manipulations.
- It is used in conjunction with the `*ngFor` directive to track the identity of items in a list.
- By using TrackBy, Angular can identify which items have changed, been added, or removed from the list, and only update those items in the DOM.
- Enables animations when removing and adding items from the collection
- Retains any DOM-specific UI state, such as focus and text selection, when the collection changes

### Communication between components using services
- A characteristics of Angular services is that by default, every service instantiated by the dependency injection mechanism has the same reference; that is, a new object is not created, but reused.
- Dependency injection mechanism implements the Singleton pattern, which means that only one instance of the service is created and shared across the application.

### Forms in Angular
- Template Driven Forms: These are forms that are defined in the template and are more suitable for simple forms. They are easier to set up and require less code. They require the `FormsModule` to be imported in the module.
- Reactive Forms: These are forms that are defined in the component class and are more suitable for complex forms. They provide more control over the form and allow for more advanced validation. They require the `ReactiveFormsModule` to be imported in the module.

### Injecting services
- Services can be injected into components, directives, and other services using the `@Injectable` decorator.
- In Angular, the inject() function and the constructor-based dependency injection are two ways to inject services, but they differ in how and when they are used.

1) constructor-based dependency injection
- Services are injected into a component, directive or another serivce via the constructor
- The dependency is resolved and injected when the class is instantiated.

2) `inject()` function
- The inject() function is a way to inject dependencies at runtime, allowing for more flexibility and dynamic behavior.
- It can be used in places where constructor injection is not possible, such as in a factory function or a standalone component.

### Interceptor design pattern
- An interceptor is a service that can intercept HTTP requests and responses, allowing you to modify them before they are sent or received.
- Attaching the token to the request with an interceptor
- Changing the request route
- Creating a loader
- Notifying success
- Measuring the performance of a request

### Reactivity with RxJS
- One of the most difficult tasks is dealing with the asynchronous nature of web applications.
1) Observables : We use observables for asynchronous processing that does not return a value but a collection of values that can be distributed over time as events.



