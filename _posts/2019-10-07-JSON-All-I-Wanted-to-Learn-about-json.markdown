---
layout: post
title:  "JSON - All I wanted to learn about JSON"
categories: learning
excerpt : We have been using JSON extensively in our projects, however it was time I revisit the roots and get to understand the nitty-gritty of JSON and also learn the correct terminologies related to JSON. As I read and learn more about JSON, I thought of posting my notes for quick reference. 
---

## What is JSON?
JSON or Javascript Object Notation is a lightweight data interchange format. 
A more precise definition could be that, JSON is a textual, language-indepedent data-exchange format, much like XML, CSV or YAML.
It is easy to read and write and most preferred data exchange format in the REST API world. The current web applications and mobile apps usually require communication over internet and hence JSON is used to transfer data.


## Data types that can be used with JSON?
- Number : We can use numbers i.e integers or floats. Any number that is not wrapped in double quotes can be considered a valid JSON format.
- String : String of unicode characters and we need to wrap it in double quotes
- Boolearn : True or false
- Array : Ordered list of 0 or more values. Array of numbers, boolean or strings.
- Object : We can also embedd objects that are unordered collection of key value pairs.
- Null : Empty value

So a valid JSON will have any of the above data types.

## JSON Syntax rules
A valid JSON will have key value pairs. For eg 
```javascript

{ "name" : "John Doe" }

```
Note: Above is a valid JSON if and only if both key and value have double quotes, in case of a Number/Boolean value, the double quotes are not required.

The MIME type should be "Application/json" when communicating with data over REST API.

## Valid JSON Example
```javascript

{
   "name":"John Doe",
   "age":35,
   "isMarried":true,
   "address":{
      "street":"7th Avenue",
      "city":"Florida",
      "country":"USA"
   },
   "occupation":[
      "Technical consultant",
      "Business owner",
      "Pianist"
   ]
}

```

The best way to validate a JSON format is to paste it in any online JSON formatter. Some of the gotchas are
- Ensure you end every key value with a Comma before starting a new pair.
- The last key value pair should not have a comma separation. This is applicable inside an Object or Array as well.

## Javascript Objects
Javascript Objects need not have double quoted Strings as keys. So, In Javascript, Object literals can have
String literals, number literals or identifier names as keys.

The values can be any valid javascript expression, including function definition and undefined.

The best approach to writing a Javascript Object literal is to not have keys as double quoted strings. Below is example of a Javascript Object. Please see that this is not a valid JSON object.

```javascript

var identity = {
    name : "John Doe",
    age : 35,
    getAddress : function(){
        return "7th Avenue, Florida"
    }
}

```

In above example, we can use this object and call the function. For eg.

```javascript

console.log(identity.getAddress());
// "7th Avenue, Florida"

```

## Using JSON in Javascript
Our data interchange format is usually JSON. However we want to be able to manipulate the JSON to as per our requirement on the application that we are building. Since the JSON response is of type String, we cannot do parsing with it on the front end.

To be able to use the JSON object, we need to stringify and parse it.

```javascript

var peopleObj = {
    "people" : [
        { "name" : "John Doe", "age" : 35 },
        { "name" : "Bob Ross", "age" : 25 },
        { "name" : "Jacob Wick", "age" : 18 },
        { "name" : "Robert Jr.", "age" : 32 },
    ]  
}

// If we want to send the above object to server, we need to Stringify it first
var sendToServer = JSON.stringify(peopleObj);

// stringify function will convert this Javascript object into a valid JSON format.
// "{"people":[{"name":"John Doe","age":35},{"name":"Bob Ross","age":25},
// {"name":"Jacob Wick","age":18},{"name":"Robert Jr.","age":32}]}"

```
Assume that we get a JSON response from a API call. We want to output all the names from our people array to the UI.

```javascript

// Using the XMLHttp to fetch from the API
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readystate == 4 && this.status == 200){
        var response = xhttp.responseText;

        // Now if we console response we should see the people array.
        console.log(response);
        // "{"people":[{"name":"John Doe","age":35},{"name":"Bob Ross","age":25},
        // {"name":"Jacob Wick","age":18},{"name":"Robert Jr.","age":32}]}"

        // However, if we say response.people, we would get a undefined. 
        // This means that the response is of type string and we need to convert it to a Javascript Object.
        // Let us parse the response
        var people = JSON.parse(response);

        // And now if we do 
        console.log(people);
        // We should see the correct object.
        // This returns a array with 4 objects.

        // We can loop over this object, apply various javascript array functions on it and it will
        // work fine. 
        for(let i = 0; i < people.length; i++){
            console.log(people[i].name);
        }

    }
}

// xhttp makes a get request to people.json which 
// returns us the people array in responseText
xhttp.open("GET", "people.json", true);
xhttp.send();

```

## Conclusion
We now understand the need for JSON serialization and deserialization. In our example above, 
JSON.stringify does the serialization and 
JSON.parse does the deserialization.

From [stackoverflow](https://stackoverflow.com/questions/3316762/what-is-deserialize-and-serialize-in-json)

When transmitting data or storing them in a file, the data are required to be byte strings, but complex objects are seldom in this format. Serialization can convert these complex objects into byte strings for such use. After the byte strings are transmitted, the receiver will have to recover the original object from the byte string. This is known as deserialization.


### Why are quotes mandatory in JSON?
The quotes are mandatory on JSON because in JavaScript (more exactly in ECMAScript 3rd. Edition), the usage of reserved words as property names is disallowed, for example:

```javascript

var o = { if: "foo" }; // SyntaxError in ES3

```

While, using a string literal as a property name (quoting the property name) gives no problems:

```javascript

var o = { "if": "foo" }; 

```