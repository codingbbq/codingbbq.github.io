---
layout: post
title:  "Executing two functions on windows.onload"
categories: learning
excerpt : Sometimes enhancing a decade old code is nerve wrecking. However the learnings are worth documenting. Recently, I had to enhance an existing project with a new feature. It was a popup window being called from an iframe which in turn called another iframe. That should be easy. The difficult part was to get it working on IE11. Pun intended.
---

Recently I came across this task to make some UI changes to an existing popup window which was an iframe and it in turn called another iframe. THe window would open in the iframe, so we added a parameter in the URI and from the main page called the URL search params. If the URI had that query parameter, we would execute our code.

However, we wanted the UI changes on page load event. We wanted to attach a class to the body tag and apply style changes.

```javascript

// Search in URI for a parameter. Found this online. Do not have reference.
function getURLParam(paramName) {
  var paramValue = {};
  var matchedValue = null;
  var urlString = location.search.substring(1);
  var pattern = /([^&=]+)=([^&]*)/g;
  while (matchedValue = pattern.exec(urlString)) {
    if (decodeURIComponent(matchedValue[1]) === paramName) {
      return decodeURIComponent(matchedValue[2]);
    }
  }
}

window.onload = function () {
   //If the popup is opened from angular, we need to apply a different styling.
   var classValue = getURLParam('class');
   if(classValue) {
      document.getElementsByTagName("body")[0].classList.add(classValue);
   } 
};

```

### The problem//

Even though the above code works well, it somehow broke the existing functionality. The first time popup was opened, I could see the UI changes reflect. However, the functionality did not work. If we refreshed the popup, then everything worked.

After researching, it was obvious that there was another function being called on the window.onload and since there were two functions defined on window.onload, only one function worked. 

### The Solution//

- Check if window.onload has any function initialized to it. If yes, then execute that function first, followed by the new function.
- To check the initialization, we assigned window.onload to a variable. 

```javascript

var prev_handler = window.onload;
window.onload = function () {
   if (prev_handler) {
      prev_handler();
   }
   anotherWindowOnloadFunction();
};

```

- If we want to call two functions sequentially on window.onload, the best approach would be

```javascript

window.onload = function(){
  callFunctionOne();
  callFunctionTwo();
}

```

I found both the solutions on [StackOverflow](https://stackoverflow.com/questions/16683176/add-two-functions-to-window-onload)