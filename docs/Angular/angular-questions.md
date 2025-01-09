#### Q. What is component based architecture ?
- A component is an user interface which can be reused
- Components communicate with each other
- You can define/design a component that can be used by you or other developers

#### Q. Explain the term interpolation?
- Interpolation means displaying the variables you have in the Typescript file inside the HTML. You have to use the double curly braces that displays the value dynamically.

#### Q. What is the purpose of decorator @NgModule?
- The @NgModule decorator provides a way to organize the Angular Application by grouping components, directives and services in a single file. So the app becomes easy to maintain. 

#### Q. What is property binding, explain the difference between interpolation v/s property binding?
-Property binding is an approach where you set properties for the HTML elements or directives to do things like toggle button features or set paths programmetically or share values among the components.

```
<img [src]="imgSrc" />
```
Interpolation treats all the data types as strings. So whenever you want to concat or bind string values, interpolation is better option.
If you want to set element's property to a non-string data value, then use property binding.

```
<h1>{{ msg }}</h1>
```

#### Q. Explain the data flow in event binding?
In event binding the information or the data flows from the DOM to the component. When the click event is triggered, the bound method from the component gets called and the data gets passed respectively. 
```
<button type="submit" (click)="display('Welcome')">Submit</button>
```

#### Q. Difference between event binding v/s property binding?
In event binding, data is sent from the DOM to the component.
In property binding, we send the data from component to the DOM.

#### Q. What is the $event object in Angular?
In Angular, $event is a special variable that represents the event object associated with a user action, such as clicks, key presses, or mouse movements. By passing $event to event handler methods in your component, you gain access to detailed information about the event that occurred.

```
<button (click)="handleClick($event)">Click Me!</button>
```

#### Q. What is two way binding and why do we use it ?
Two way binding allows for simultaneous updates between component's properties and the user interface. When a user interacts with the UI, such as typing in an input field, the changes are automatically propagated back to the component's model. Similarly, if the model changes programmatically, those changes are reflected in the UI without requiring additional code to manage these updates.
```
<input [(ngModel)]="userName">
```
To utilize ngModel, you must include the FormsModule in your Angular module's imports. This is crucial because, without this module, Angular will not recognize ngModel, leading to errors such as "Can't bind to 'ngModel' since it isn't a known property of 'input'" 

#### Q. Directives in Angular
They are essentially classes that can modify the appearance or behavior of DOM elements, enabling dynamic and interactive web applications.

Types of Directives in Angular
1) Structural Directives : Alter the layout of the DOM by adding or removing elements based on conditions. Eg. *ngIf, *ngFor etc.
2) Attribute Directives : Responsible for changing the behavior or appearance of HTML elements.
Eg. ngClass, ngStyle, ngModel
3) Component Directives : These are essentially directives with templates. A component directive encapsulates both the UI and its behavior. They are defined using the @component decorator. Eg. `<app-header>`, `<user-profile>` etc. 

#### Q. What is the use of `<ng-container>` directive?
`ng-container` is a special structural element in Angular that allows developers to group elements together or apply structural directives without introducing additional HTML elements into the DOM. This feature is particularly useful for managing layouts and maintaining clean, semantic markup.

```
<ng-container *ngFor="let item of items">
  <li *ngIf="item.active">{{ item.name }}</li>
</ng-container>
```

#### Q. What is the `<ng-template>` directive?
The `<ng-template>` directive is used to define a block of code that can be reused or rendered multiple times inside the document.
By placing a reference variable inside the <ng-template>, you can access its content.

```
<div *ngIf="isLoggedIn; else loginTemplate">
  <h1>Welcome back!</h1>
</div>
<ng-template #loginTemplate>
  <h1>Please log in.</h1>
</ng-template>
```

The *ngTemplateOutlet directive is a structural directive used for rendering templates dynamically inside the same or different components.
```
<ng-template #show let-msg="showMessage">
    <p>{{msg}}</p>
</ng-template>
<ng-container *ngTemplateOutlet="show; context: { showMessage: 'This is the context message'}"></ng-container>
```
This code snippet is an example of how to use Angular's ng-template and ngTemplateOutlet directives to dynamically insert a template with a specific context.

```
<ng-template #show let-msg="showMessage">:
```

- This defines an Angular template with a reference variable #show.
- The let-msg="showMessage" syntax is used to define a local template variable msg that gets its value from the showMessage property of the context object provided when the template is rendered.
- Inside the template, there is a paragraph element `<p>{{msg}}</p>`, which will display the value of msg.

```
<ng-container *ngTemplateOutlet="show; context: { showMessage: 'This is the context message'}"></ng-container>:
```

- This ng-container element uses the `*ngTemplateOutlet` directive to insert the show template into the DOM.
- The context property is used to pass an object to the template. In this case, the object `{ showMessage: 'This is the context message' }` is passed.
- The showMessage property of this context object is mapped to the msg variable inside the template.


- When the ng-container is rendered, Angular will look for the template referenced by #show.
- It will then render this template and bind the showMessage property from the context object to the msg variable inside the template.
- As a result, the paragraph element inside the template will display the text "This is the context message".

#### Q. How does Angular Instantiate Component Classes ?
In Angular, component classes are instantiated automatically by the framework, which handles the instantiation process behind the scenes. This means that you do not explicitly use the new keyword to create instances of your component classes. Here's how this process works and why it happens:

**Dependency Injection (DI):**<br/>
Angular uses a powerful dependency injection system to manage the lifecycle of components and services. When you declare a component in an Angular module, Angular's injector is responsible for creating instances of that component.

**Class Instantiation:**<br/>
When Angular needs to create a component (for example, when navigating to a route that requires that component), it calls the constructor of the class using the new keyword internally. This is part of Angular's framework logic and is not visible in your application code.

**Component Metadata:**<br/>
Each component is decorated with the @Component decorator, which provides Angular with metadata about the component, including its selector, template, styles, and dependencies. The DI system uses this metadata to know how to instantiate the component.

**Lifecycle Hooks:**<br/>
After instantiation, Angular invokes lifecycle hooks (like ngOnInit, ngOnChanges, etc.) that allow you to perform additional initialization logic once the component is created.

#### Q. ngOnInit Life cycle hook
- `ngOnInit` lifecycle hook is implemented by importing `OnInit` interface in typescript file.
- Called only ONCE during the component's lifecycle
- Normally `ngOnInit` is called AFTER `ngOnChanges` is called.
- Whenever the `ngOnInit()` call is made by Angular - it indicates that Angular is done creating the component and whatever initialization code is written inside the `ngOnInit()` hook is executed at that moment.
- The constructor() is the first lifecycle method that is executed before any other lifecycle methods. This means that the component has not been fully created yet and only the component class has been instantiated.

##### Use `constructor()` When:
- You need to initialize class members.
- You want to inject dependencies (services) that your component will use.
- You don't need to access any input properties or perform any operations that require the component's view to be fully initialized.

##### Use `ngOnInit()` When:
- You need to perform initialization tasks that require access to input properties (e.g., fetching data based on an input value).
- You want to interact with the DOM or perform operations that depend on the component being fully set up.
- You need to set up subscriptions or other asynchronous operations that should only start after the component is initialized.

#### Q. Explain the `ngDoCheck()` lifecycle hook
- The `ngDoCheck()` lifecycle hook is used for performing a custom change detection and responding to the changes in a component.
- It allows us to implement our own change detection algorithm for a given component.

- Never use `ngOnChanges()` and `ngDoCheck()` in same component, it causes unwanted behavior and increases code complexity.

##### What is the difference between `ngOnChanges()` and `ngDoCheck()`?
`ngOnChanges()`
- **When It Is Called:** This hook is invoked whenever Angular detects a change to an input property that is decorated with @Input(). It is called before the component's view is updated.
- **Parameters:** It receives a SimpleChanges object that contains the current and previous values of the changed inputs.
- **Use Case:** This hook is suitable for scenarios where you need to perform actions based on specific changes in input properties, such as fetching new data when an input value changes.

`ngDoCheck()`
- **When It Is Called:** This hook is called during every change detection cycle, immediately after ngOnChanges() and ngOnInit(). It allows developers to implement custom change detection logic.
- **Use Case:** It is useful for detecting deep changes in objects or arrays that Angular's default change detection might miss, such as when modifying properties of an object or pushing items into an array without changing the reference.

#### Q. Explain the `ngAfterContentInit()` lifecycle hook?
- The `ngAfterContentInit()` life cycle hook is invoked whenever there is some content projected into the component.
- **Content Projection** - is a way to pass the HTML or CSS content from the parent component to the child component by using the `<ng-content />`   directive.

##### Key Features of ngAfterContentInit
**Timing:**
- `ngAfterContentInit()` is called once after the first change detection cycle, immediately after the projected content (content passed from a parent component) has been initialized.
- It occurs after `ngOnInit`, and it ensures that all `@ContentChild` and `@ContentChildren` properties are also initialized.

**Use Cases:**
- This hook is ideal for scenarios where you need to perform actions based on the projected content, such as accessing or manipulating it through `@ContentChild` or `@ContentChildren`.
- It allows you to safely interact with the projected content, knowing that it has been fully rendered and initialized.

**Accessing Projected Content:**
- You can use this hook to access elements that have been projected into your component and perform operations on them, such as reading their properties or applying styles.

#### Q. Explain the `ngAfterContentChecked()` lifecycle hook?
- The `ngAfterContentChecked()` lifecycle hook in Angular is called after Angular has checked the projected content of a component.
- `ngAfterContentChecked()` is invoked after the `ngAfterContentInit()` hook and after every subsequent call to `ngDoCheck()`. It allows you to respond to changes in the projected content during each change detection cycle.
- It is often used for validation, logging, or triggering additional updates based on the state of the projected content.
- This hook is called frequently (after every change detection cycle), placing heavy logic inside it can lead to performance issues.

#### Q. Explain the `ngAfterViewInit()` hook in Angular?
- The `ngAfterViewInit()` hook is called when the Angular finishes the initialization of the view in the DOM i.e both the component and the template have been rendered and ready to be used.

##### Use case for `ngAfterViewInit()` lifecycle hook.
- **Accessing viewChild properties.**<br />
This hook is ideal for accessing properties that are decorated with `@ViewChild` or `@ViewChildren`. Since these properties are only available after the view has been initialized, any logic that requires them should be placed in this hook.

- **Manipulating the DOM**<br />
If you need to perform DOM manipulations or apply styles after the view is rendered, ngAfterViewInit is the appropriate place to do so. This ensures that your manipulations occur only after Angular has finished rendering the component.

- **Initializing Third-Party Libraries**<br />
When integrating third-party libraries that require access to DOM elements (like charts or sliders), you can initialize them in ngAfterViewInit. This ensures that the elements are available when you try to initialize the library.

- **Setting Up Subscriptions:**<br />
If you need to set up subscriptions to observables that depend on the view being fully initialized, doing so in this hook ensures that all necessary elements are available.

#### Q. Explain the `ngAfterViewChecked()` hook in Angular?
- The `ngAfterViewChecked()` lifecycle hook in Angular is called after the Angular framework has checked the component's views and its child views for changes. This hook is invoked after every change detection cycle for the component's view, making it a valuable tool for responding to updates in the view.
- `ngAfterViewChecked()` is executed after the ngAfterViewInit lifecycle hook and after every subsequent change detection cycle.

#### Q. Explain the `ngOnDestroy()` life cycle hook in Angular?
The `ngOnDestroy()` lifecycle hook in Angular is a crucial part of the component lifecycle that is called just before a component is removed from the DOM and destroyed. This hook provides an opportunity to perform cleanup tasks, ensuring that resources are properly released and that potential memory leaks are avoided.

- The ngOnDestroy hook is invoked immediately before Angular destroys the component. This occurs when the component is no longer needed, such as when navigating away from a route or when the component is conditionally removed from the view.

**Use cases for `ngOnDestroy()`**<br />
- Unsubscribing from Observables: If a component subscribes to observables (e.g., from services or event emitters), it is essential to unsubscribe in ngOnDestroy to prevent memory leaks.

- Clearing Timers or Intervals: If you have set up timers or intervals using setTimeout or setInterval, you should clear them in this hook to avoid executing code after the component has been destroyed.

- Detaching Event Listeners: If you manually attach event listeners to DOM elements, you should remove those listeners in ngOnDestroy to prevent memory leaks and unintended behavior.

 - Resetting Variables: You can reset any variables or states that are no longer needed when the component is destroyed.

#### Q. How to pass data from Parent Component to Child Component?
- By using the `@Input()`decorator.

#### Q. How do you pass data from Child to Parent Component?
- By using the `@Output()` decorator. When the property is decorated with `@Output` decorator - that property raises an event to notify the parent about the change. 
```
@Output() myEvent = new EventEmitter();
```
EventEmitter is always used in conjuction with @Output decorator. The @Output will raise an event from the child component that has to be observed by the parent component.

#### Q. Decorators in Angular
- A decorator is a special type of function that can be attached to a class, method, accessor, property, or parameter. It allows developers to add additional functionality or modify the behavior of the decorated element at runtime.
- Angular has 4 types of Decorators. 
    1) Class Decorators
    - @NgModule
    - @Component
    - @Injectable
    - @Directive
    - @Pipe

    2) Property Decorators
    - @Input
    - @Output
    - @HostBinding
    - @ContentChild
    - @ContentChildren
    - @ViewChild
    - @ViewChildren

    3) Parameter Decorators
    - @Inject
    - @Self
    - @SkipSelf
    - @Optional
    - @Host

    4) Method Decorators
    - @HostListener

#### Q. What is the difference between `@ViewChild` and `@ContentChild` decorators?
- `@ViewChild` is used to access a child component or element directly within the template of the current component.
- `@ContentChild` is used to access content projected into the current component through  content projection.

#### Q. Which lifecycle hook is commonly used with the @ContentChild and explain the reason?
The lifecycle hook commonly used with the `@ContentChild` decorator in Angular is `ngAfterContentInit()`.
- **Initialization of Projected Content:**<br />
The ngAfterContentInit hook is called once after Angular has fully initialized the content projected into the component. This is crucial because it allows you to safely access and manipulate the projected content that has been injected into the component via `<ng-content>`.

- **Accessing Content Queries:**<br />
When you use `@ContentChild` to query for a reference to a projected element, you need to ensure that the content is fully initialized before trying to access it. The `ngAfterContentInit()` hook provides this guarantee, allowing you to interact with the queried elements without running into issues like accessing undefined properties.

- **Lifecycle Sequence:**<br />
The lifecycle sequence ensures that all external content is rendered before ngAfterContentInit is called. This means that any logic that depends on the presence or state of the projected content can be safely executed in this hook.

#### Q. What are pipes in Angular ?
Pipes are simple functions that accept an input value, process it, and return a transformed value. They can be applied to any expression in an Angular template using the pipe operator (|).

**Transformation:** <br />
Pipes transform data for display purposes. They do not modify the original data but change how it appears to the user.

**Chaining:** <br />
Multiple pipes can be chained together to apply several transformations in sequence. For example:
```
<p>{{ 12345 | currency:'USD':true:'1.2-2' }}</p>
```

**Arguments:**<br />
Pipes can accept optional parameters to customize their behavior. For example:
```
<p>{{ dateValue | date:'fullDate' }}</p>
```

#### Q. What are services in Angular?
- Services in Angular are TypeScript classes that provide specific functionalities or handle common logic across an application. They are typically used to perform tasks such as fetching data from APIs, managing state, or encapsulating business logic.

- Services are instantiated only once during the lifetime of an application. This means that all components that inject a service share the same instance, allowing for consistent state management and data sharing.

- Angular uses Dependency Injection (DI) to provide instances of services to components or other services. This allows for a clean separation of concerns and promotes reusability.
A depedency doesn't have to be a service. It could be a function or a value or even a pipe. So any injectable entity that is injected as a dependency in the application, can be termed as Dependency Injection.

- You can consider a component as a reusable interface and service as a reusable logic.

#### Q. In Angular forms, what is the difference between form state dirty and pristine ?
Dirty becomes true when user interacts with the control and modifies its value. It indicates the control's value has been changed since it was initially loaded. A control is considered dirty when it has been touched and altered by the user.

Pristine stays true till the control has not been interacted with - by the user. Its value remains unchanged since it was initialized or loaded. It indicates the control is in its original state i.e unchanged state.


