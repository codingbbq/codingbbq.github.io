"use strict";(self.webpackChunkcodingbbq_github_io=self.webpackChunkcodingbbq_github_io||[]).push([[9393],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var l=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=l.createContext({}),c=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return l.createElement(s.Provider,{value:n},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(t),u=i,d=f["".concat(s,".").concat(u)]||f[u]||y[u]||r;return t?l.createElement(d,o(o({ref:n},p),{},{components:t})):l.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[f]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<r;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var l=t(8168),i=(t(6540),t(5680));const r={slug:"polyfill.js",title:"Deciphering Polyfill.io Service vs. Polyfill.js",tags:["personal","software","experience"]},o="Deciphering Polyfill.io Service vs. Polyfill.js",a={permalink:"/blog/polyfill.js",source:"@site/blog/2024-07-01-polyfill-io-service-and-polyfill-js.md",title:"Deciphering Polyfill.io Service vs. Polyfill.js",description:"In light of recent events, there's been some confusion about the polyfill.io service and polyfill.js. This article aims to clarify the differences and address some concerns.",date:"2024-07-01T00:00:00.000Z",formattedDate:"July 1, 2024",tags:[{label:"personal",permalink:"/blog/tags/personal"},{label:"software",permalink:"/blog/tags/software"},{label:"experience",permalink:"/blog/tags/experience"}],readingTime:1.645,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"polyfill.js",title:"Deciphering Polyfill.io Service vs. Polyfill.js",tags:["personal","software","experience"]},nextItem:{title:"Lessons in Software Simplification - From AngularJS to Vanilla JS",permalink:"/blog/software-simplification"}},s={authorsImageUrls:[]},c=[{value:"The Polyfill.io Incident",id:"the-polyfillio-incident",level:2},{value:"Understanding Polyfills",id:"understanding-polyfills",level:2},{value:"The Role of CDNs",id:"the-role-of-cdns",level:2},{value:"The Case for External Services",id:"the-case-for-external-services",level:2},{value:"Angular&#39;s polyfill.js",id:"angulars-polyfilljs",level:2}],p={toc:c},f="wrapper";function y(e){let{components:n,...t}=e;return(0,i.yg)(f,(0,l.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In light of recent events, there's been some confusion about the polyfill.io service and polyfill.js. This article aims to clarify the differences and address some concerns."),(0,i.yg)("h2",{id:"the-polyfillio-incident"},"The Polyfill.io Incident"),(0,i.yg)("p",null,"News recently surfaced about the polyfill.io service injecting malicious code into JavaScript assets fetched from their domain. ",(0,i.yg)("a",{parentName:"p",href:"https://dev.to/snyk/polyfill-supply-chain-attack-embeds-malware-in-javascript-cdn-assets-55d6"},"This article")," provides a detailed account of the incident."),(0,i.yg)("h2",{id:"understanding-polyfills"},"Understanding Polyfills"),(0,i.yg)("p",null,"According to MDN, a polyfill is a code snippet, typically JavaScript on the web, that provides modern functionality on older browsers lacking native support. For instance, if you want to use the latest JavaScript APIs like array ",(0,i.yg)("inlineCode",{parentName:"p"},"filter")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"map"),"\u2014supported by Chrome but not IE7\u2014you'd need a polyfill to ensure seamless functionality."),(0,i.yg)("h2",{id:"the-role-of-cdns"},"The Role of CDNs"),(0,i.yg)("p",null,"A Content Delivery Network (CDN) is a system of interconnected servers that accelerate webpage loading for data-heavy applications. Commonly used static assets like jQuery, AngularJS, React, and Bootstrap.css reside on CDNs. Web applications can directly use these assets, saving on network and storage costs while enhancing application performance."),(0,i.yg)("p",null,"When a user in Location X visits your web application, the static files needed are downloaded from the nearest CDN to Location X, reducing latency and improving performance."),(0,i.yg)("h2",{id:"the-case-for-external-services"},"The Case for External Services"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://kentcdodds.com/blog/polyfill-as-needed-with-polyfill-service"},"This blog post")," provides an excellent discussion on using polyfill as a service. The main argument is that shipping polyfills for every feature can lead to unnecessary downloads for users with modern browsers. This can negatively impact performance and user experience.\nAn external service can help by shipping only the relevant polyfills based on the requesting browser's user agent."),(0,i.yg)("h2",{id:"angulars-polyfilljs"},"Angular's polyfill.js"),(0,i.yg)("p",null,"Angular's build system generates optimized, production-ready code files, including a file named polyfill.js. There's been confusion about whether this polyfill.js is related to the polyfill.io incident.\nThe answer is a resounding NO. "),(0,i.yg)("p",null,"Angular's polyfill.js is a file generated by the Angular build system for polyfilling required functionalities. It doesn't use any of the polyfill.io services to generate this build file, unless you're using the service in your source code."))}y.isMDXComponent=!0}}]);