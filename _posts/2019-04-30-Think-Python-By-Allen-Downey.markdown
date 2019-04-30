---
layout: post
title:  "Think Python - Allen Downey"
categories: book
excerpt: I wanted to learn python and what good book to get started then Think Python. I have been on and off with python for a long time, but this time I wanted to dedicate time reading a book, instead of watching a youtube video.
---

![Think Python](/assets/images/Think-Python.jpg){:class="rounded pr-3 float-left"} Reading this book [Think Python](http://greenteapress.com/thinkpython/thinkpython.pdf) was a good exposure to learning python. The book is very precise and the concepts are well explained. I have been reading about python on and off and watching many youtube tutorials, but this time, I wanted to read a book. Reading makes you deciplined and you yourself are responsible for being consistent. 

Below are some of the important points taken from the book for my personal reference.

---

Python is a high level langulage which needs to be converted to low level language for computer to understand.

Interpreters and Compilers are two kinds of programs that process a high level language to a low level language.

Interpreter => Takes a high level program, processes it little at a time, performing computations

Compiler => Takes a high level program, translates it completely before the program starts running. The high level program is called as the Source code and the translated program is called object code or executable. Once the program is compiled, you can execute it repeatadly without further translation.

Python programs are executed by Interpreter and there are two ways to use the interpreter, 1. Interactive mode and 2. Script mode.

#### Commenting in python

We can use the # before a statement to show a comment. Also we can use docstring or """ to begin and end a multiline comment.
docstring are basically documentation strings that should be used in a descriptive manner to explain what your program is trying to achieve.

```python

# This is a single line comment

""" This is a multiline comment.
Another line of comment comes here """

```

#### Function Definitions

```python

def print_lyrics():
    print("I'm a lumberjack, and I'm okay.")
    print("I sleep all night and I work all day.")

# We call the function
print_lyrics() 

```

In python, `def` is the keyword for any function definition. The header is the first line and it should end with a colon. The body contains the statements that we need to execute when the function will be called. Please note the Indentation for each statements in the body.


#### Importing Modules

Python provides two ways to import modules.

```python

# Import the math module
import math

# If we want to print the value of pi
print(math.pi)

```

```python

# Using the from statement
from math import pi

#if we want to print the value of pi
print(pi)

```

#### Python conditional execution

Similar to other programming languages, we have If statements in python. However one interesting statement is `pass`.
The pass statement in Python is used when a statement is required syntactically but you do not want any command or code to execute. The pass statement is a null operation; nothing happens when it executes.

```python

if x < 0:
    pass

```

#### Keyboard Input

In python 3, we can use the input methond to accept inputs from user

```python

name = input("What is your name?\n")

```

#### Checking and verifying the type

Python lets us use the "type()" method to find the type of particular literal.
We can also verify the type using the `isinstance(6, int)` method which checks if 6 is of type integer and returns a boolean.

```python

>>> type(6)
<class 'int'>

>>> isinstance(6, int)
True

```

#### Slicing in strings

Python has a very interesting way of slicing a string

```python

# It prints "Jo" i.e from 0th position to 1st position excluding the 2nd index
>>> name = "John"
>>> print(name[0:2])
Jo

```

#### Strings are Immutable

This means that you cannot change an existing string

```python

>>> greetings = "Hello word"
>>> greetings[0] = "J"
TypeError: 'str' object does not support item assignment

```


#### The in Operator

The word in is a boolean operator that takes two strings and returns True if the first appears as a substring in the second.

```python

>>> "a" in "banana"
True

```

#### Read files

A python program that reads a file and prints first 20 lines

```python

fin = open("words.txt")
count = 0
for line in fin:
    count = count + 1
    print(line.strip())
    if count >= 20:
        break

```

#### List

A List is a sequence of values.

```python

# Python list of items that are of type string, int etc
name = ["John", "Jane", "James", 1, 2, 3]

```

Unlike string, List are mutable. We can use the brackets notation [] to read, modify the values in the list.

#### Traversing List

```python

food = ["cheese", "apple", "pizza"]

# We can use the in operator to read through the list
for item in food:
    print(item)

# In case if we want to modify the list
for i in range(len(food)):
    food[i] = food[i] * (i + 1)

print(food)

# ['a', 'bb', 'ccc']

```

#### List Operations

You can combine two list using + operator and you can * multiplies the items in the list

```python

# Combine two list items
list1 = [1, 2, 3, 4]
list2 = [4, 5, 6, 7]
print(list1 + list2)
# [1, 2, 3, 4, 4, 5, 6, 7]

# Multiply items in the list
l = [1, 2, 3]
print(l * 2)
# [1, 2, 3, 1, 2, 3]

```

#### Reduce, Map and Filter
Reduce: A processing pattern that traverses a sequence and accumulates the elements into
a single result.

Map: A processing pattern that traverses a sequence and performs an operation on each
element.

Filter: A processing pattern that traverses a list and selects the elements that satisfy some
criterion.

#### Dictionaries

Dictionary is like list, but more general. In dictionary, the indices can be of any type unline in List where the indices are always integers.
The order of items in dictionary is unpredictable.

```python

d = dict()
d["one"] = "uno"
d["two"] = "dos"
d["three"] = "tres"

print(d)

# {'one': 'uno', 'two': 'dos', 'three': 'tres'}

```

You can use the len function to get the key-value pairs length. You can use the in operator on dictionary specifically only on keys, which returns boolean. The in operator does not work on the value. To see if certain value appears in the dictionary, we can use the values() method and then use the in operator.

```python

# len
>>> len(d)
# 3

# in operator
>>> "one" in d
True
>>> "uno" in d
False

# Check for values
>>> val = d.values()
>>> "Uno" in val
True

```

Dictionaries have a method called get that takes a key and a default value. If the key appears in the dictionary, get returns the corresponding value; otherwise it returns the default value.

#### Tuples

A Tuple is a sequence of values. The values can be any type, and they are indexed by integers, so in that respect tuples are a lot like list. The important difference is that tuples are immutable.

```python

>>> t = "a", "b", "c", "d"

>>> q = ("a", "b", "c", "d")

>>> t1 = "a", # A tuple with just one item. Observe the comma in the end.

# However, a value in the parenthesis is not a tuple. See below
>>> t2 = ("a")
>>> type(t2)
<class 'str'>

# We can use the built-in function to create a tuple.
a = tuple()

# See below piece of code
>>> t = tuple('lupins')
>>> print(t)
('l', 'u', 'p', 'i', 'n', 's')

```

You cannot modify the element of the tuple.

##### Tuple assignment

```python

>>> a, b = 1, 2
>>>a, b
(1,2)

>>> addr = "monty@python.org"
>>> uname, domain = addr.split('@')
>>> uname, domain
(monty, python.org)

```

The left side is a tuple of variables; the right side is a tuple of expressions. Each value is assigned to its respective variable. All the expressions on the right side are evaluated before any of the assignments.

##### Tuples as return values

Functions return just one value, but if the return value is a tuple, it may be considered same as returning multiple values. 

##### Variable length argument tuple

Function can take variable number of arguments. A parameter name that begins with * gathers arguments as tuples. 

```python

def printall(*args):
    print(args)

printall(1,2,3.0)

# (1,2,3.0)

```

##### List and Tuples

zip is a built-in function that takes two or more sequences and “zips” them into a list of tuples where each tuple contains one element from each sequence.
Below example zip's a string and a list

```python

>>> s = "abc"
>>> t = [0, 1, 2]
>>> m = zip(s, t)
>>> list(m)
[('a', 1), ('b', 2), ('c', 3)]

```
An interesting thing to note here is in python 3, the zip returns a zip object. Searching SO, [I found this useful link as to why zip returns a zip object instead of list](https://stackoverflow.com/questions/19777612/python-range-and-zip-object-type).

##### Dictionaries and Tuples

Dictionaries have a method called as items that returns a list of tuples where each tuple is a key-value pair. The method items() returns an iterator which can behave like a list.

```python

>>> d = { "a" : 0, "b" : 2, "c" : 3}
>>> print(list(d.items()))
[('b', 2), ('a', 1), ('c', 2)]

```

You can use a list of tuple to initialize a dictionary. 

```python

>>> t = [("a", 0), ("b", 1), ("c", 2)]
>>> d = dict(t)
>>> print(d)
{'b': 1, 'a': 0, 'c': 2}

```

Combining dict with zip yields a concise way to create a dictionary

```python

>>> d = dict(zip("abc", range(3)))
>>> print(d)
{'b': 1, 'a': 0, 'c': 2}

```

##### Comparing tuples

The relational operators work with tuples and other sequences; Python starts by comparing the first element from each sequence. If they are equal, it goes on to the next elements, and so on, until it finds elements that differ. Subsequent elements are not considered (even if they are really big).


##### Sequences of sequence

In many contexts, the different kinds of sequences (strings, lists and tuples) can be used interchangeably. So how and why do you choose one over the others?
Lists are more common than tuples, mostly because they are mutable. But there are a few cases where you might prefer tuples:

- In some contexts, like a return statement, it is syntactically simpler to create a tuple than a list. In other contexts, you might prefer a list.
- If you want to use a sequence as a dictionary key, you have to use an immutable type like a tuple or string.
- If you are passing a sequence as an argument to a function, using tuples reduces the potential for unexpected behavior due to aliasing.

#### Formatters

Usually used to organize data. 

Syntax: {}.format(value)

```python

print("{} is the best programming language".format("python"))

# It can accept multiple formatters in the form of tuple
print("we are using {} version {}".format("python", 3))

# Since the values are indexed based, we can use the index to display
print("We are using version {1} of {0}".format("python", 3))

# We can also specify type for our parameters
# Below example we convert from decimal to binary
print("The {0} of 100 is {1:b}"
        .format("binary", 100)) 

```

#### Modules

Any files that contains a python code can be imported as modules. Modules usually defines new functions but it does'nt execute them. Programs that will be imported as modules usually use the following idiom:

```python

if __name__ == "__main__":
    print("Test cases for the module here")

```

__name__ is a built-in variable that is set when the program starts. If the program is running as a script, __name__ has the value "__main__"; in that case, the test code is executed. Otherwise, if the module is being imported, the test code is skipped.

#### Classes and Objects

##### User defined types

A user defined type is called a Class. Creating a new object is called Instantiation and the object is an instance of the class. 

##### The __init__ method

This is a special method that gets invoked when an object is instantiated. 

##### The __str__ method

This is a special method that returns a string representation of an object. When you print an object python invokes the __str__ method. 

##### Polymorphism

We can write functions that work correctly for arguments with different types. Such functions are called polymorphic. Polymorphism can facilitate code reuse. 