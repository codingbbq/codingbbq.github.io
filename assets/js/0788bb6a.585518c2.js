"use strict";(self.webpackChunkcodingbbq_github_io=self.webpackChunkcodingbbq_github_io||[]).push([[3967],{7236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"JavaScript/constructor-functions","title":"How does the new keyword work with a function that is not a class in JavaScript?","description":"The JavaScript\'s new keyword can be used by both classes and functions. In JavaScript functions can be used as constructors to create objects, even if they are not explicitly defined in class.","source":"@site/docs/JavaScript/constructor-functions.md","sourceDirName":"JavaScript","slug":"/JavaScript/constructor-functions","permalink":"/docs/JavaScript/constructor-functions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"JavaScript Closures","permalink":"/docs/JavaScript/closures"},"next":{"title":"Event Loop In JavaScript","permalink":"/docs/JavaScript/event-loop-javascript"}}');var o=t(4848),c=t(8453);const i={},r="How does the new keyword work with a function that is not a class in JavaScript?",a={},d=[{value:"Using new with Constructor Functions",id:"using-new-with-constructor-functions",level:2},{value:"Using new with Classes",id:"using-new-with-classes",level:2},{value:"Summary",id:"summary",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsxs)(n.h1,{id:"how-does-the-new-keyword-work-with-a-function-that-is-not-a-class-in-javascript",children:["How does the ",(0,o.jsx)(n.code,{children:"new"})," keyword work with a function that is not a class in JavaScript?"]})}),"\n",(0,o.jsxs)(n.p,{children:["The JavaScript's ",(0,o.jsx)(n.code,{children:"new"})," keyword can be used by both classes and functions. In JavaScript functions can be used as constructors to create objects, even if they are not explicitly defined in class."]}),"\n",(0,o.jsx)(n.h2,{id:"using-new-with-constructor-functions",children:"Using new with Constructor Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Before ES6 introduced the ",(0,o.jsx)(n.code,{children:"class"})," syntax, JavaScript developers used functions to define objects using the pattern known as Constructor Functions. The ",(0,o.jsx)(n.code,{children:"new"})," keyword is used to create an instance of an object from the constructor function"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function Person() {\r\n    console.log("Person");\r\n}\r\n\r\nconst me = new Person(); // Person\n'})}),"\n",(0,o.jsx)(n.p,{children:"When you use the new keyword with a function:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A new empty object is created."}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"this"})," keyword within the function is bound to this new object."]}),"\n",(0,o.jsxs)(n.li,{children:["The function is executed, and properties or methods can be added to ",(0,o.jsx)(n.code,{children:"this"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The function implicitly returns ",(0,o.jsx)(n.code,{children:"this"}),", the new object."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"using-new-with-classes",children:"Using new with Classes"}),"\n",(0,o.jsx)(n.p,{children:"classes are syntactic sugar over constructor functions. They provide a more intuitive and organized way to create objects and support features like inheritance."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'class Person {\r\n    constructor() {\r\n        console.log("Person");\r\n    }\r\n}\r\n\r\nconst me = new Person(); // Person\n'})}),"\n",(0,o.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"You can use the new keyword with the Person function because, in JavaScript, functions can act as constructors. The new keyword creates a new object, binds this to it, and executes the function, allowing you to initialize properties or methods on the object. This pattern has been widely used in JavaScript before the introduction of ES6 classes."})]})}function l(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(6540);const o={},c=s.createContext(o);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);