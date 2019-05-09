---
layout: post
title:  "Fluent Python - Luciano Ramalho (Part 1)"
categories: book
excerpt: After think python, I wanted to get deeper into python and I found Fluent Python. This book is a gem. Very well explained concepts and the sample code are well written. I could practice all the code while reading the book.
---

After reading [Think python]({{ site.baseurl }}{% post_url 2019-04-30-Think-Python-By-Allen-Downey %}), I had to keep my energy growing for another python book. That is when I stumbled upon [Fluent Python](http://1.droppdf.com/files/X06AR/fluent-python-2015-.pdf). Fluent python is one step above the novice level and I clearly understand each and every concept that it tries to teach. Apart from that, I also practice the code samples explained in the book. So far I was able to strengthen my knowledge on list, tuples, dictionaries, sets etc. So far I have finished one-third of the book and thoroughly enjoyed it. This post is the first part of the all the references I found useful in Fluent python.

#### List Comprehensions and Generator Expressions

A quick way to build sequence is using List Comprehensions if the target is List or generator expressions for any other kind of sequence. 
List comprehensions build lists from sequences or any other iterable type by filtering and transforming items.

```python

>>> symbols = "ABCD"
>>> codes = [ord(symbol) for symbol in symbols]
>>> codes
[65, 66, 67]

```

List comprehensions can generate List from the cartesian product of two or more iterables.

```python

>>> colors = ["black", "white", "red"]
>>> sizes = ["L", "M", "S"]
>>> tshirts = [(color, size) for color in colors for size in sizes]
>>> tshirts
[('black', 'L'), ('black', 'M'), ('black', 'S'), ('white', 'L'), ('white', 'M'), ('white', 'S'), ('red', 'L'), ('red', 'M'), ('red', 'S')]

```

Generator expressions are used to initialize tuples, arrays and other types of sequences. Generator expressions saves memory because it yields items one by one using the iterator protocol instead of building a whole list just to feed another constructor. 

#### Tuples

Tuples can be used as immutable list as well as records with no field names

```python

>>> coordinates = (38.561, -118.4045)
>>> city, year, area = ("Tokyo", 2000, 8014)
>>> traveller_ids = [("USA", "3115678"), ("ESP", "1546547")]

```

#### Tuple unpacking or iterable unpacking

```python

>>> coordinates = (38.561, -118.4045)
>>> latitude, longitude = coordinates # Tuple unpacking

# An elegant application of tuple unpacking is swapping the values of variables without using a temporary variable:

>>> b, a = a, b

```

#### Using * to grab excess items

```python

>>> a, b, *rest = range(5)
>>> a, b, rest

```

#### Slicing

A common feature of list, tuple, str and all sequence types in Python is the support of slicing operations, which are more powerful than most people realize.

The syntax of slice is as follows
sequence[start:stop:step]

```python

>>> l = [0, 1, 2, 3, 4, 5]
>>> l[:2]
[1, 2]

>>> l[3:]
[3, 4, 5]

>>> l[0:0:2]
[1, 3, 5]

# You can also reverse a string using the slicing object
>>> s = "bicycle"
>>> s[::-1]
'elcycib'

```

#### List sort and sorted build in function

The sort method, sorts the list in place. It returns None which meanas it changes the target object and does not create a new list.  This
is an important Python API convention: functions or methods that change an object in-place should return None to make it clear to the caller that the object itself was changed, and no new object was created. 

In contrast, the built in function sorted creates a new list and returns it. 

Both list.sort and sorted take two optional keyword only arguments : key and reverse

reverse=True returns the items sorted in descending order.

key is one-argument function that will be applied to each item to produce its sorting key. Eg. key=str.lower, key=len

```python

>>> fruits = ["apple", "grapes", "bananana", "orange", "watermelon"]
>>> fruits.sort()
>>> fruits
['apple', 'bananana', 'grapes', 'orange', 'watermelon']
>>> sorted(fruits)
['apple', 'bananana', 'grapes', 'orange', 'watermelon']
>>> sorted(fruits, reverse=True)
['watermelon', 'orange', 'grapes', 'bananana', 'apple']
>>> sorted(fruits, key=len, reverse=True)
['watermelon', 'bananana', 'grapes', 'orange', 'apple']
>>> fruits
['apple', 'bananana', 'grapes', 'orange', 'watermelon']

```

List can contain objects of mixed types however, this feature is not particularly useful. If you sort on such list, it would give you error. Thus you cannot sort a list in python 3 unless they are comparable.
However, with the use of key optional argument, we can sort a mixed type of list. We need to decide whether all items need to be treated, like integers or strings.

```python

>>> l = [1, '5', 3, 8, '2', '0']
>>> sorted(l, key=int)
['0', 1, '2', 3, '5', 8]

```

Unlike list, Tuples hold items of different types. Each item is a field type independent on others.

#### Dictionaries

Different ways of creating dictionary in python.

```python

>>> a = dict(one=1, two=2, three=3)
>>> a
{'one': 1, 'two': 2, 'three': 3}

>>> b = dict(zip(["one", "two", "three"], [1, 2, 3]))
>>> b
{'one': 1, 'two': 2, 'three': 3}

>>> c = dict([("two", 2), ("three", 3), ("one", 1)])
>>> c
{'one': 1, 'two': 2, 'three': 3}

>>> a == b == c
True

```

Retrieving items in dictionary

```python

>>> d = dict(zip(["one", "two"],[1,2]))
>>> d
{'one': 1, 'two': 2}

# Using d[key] notation
>>> d["one"]
1

# Using d.get(key) notation
>>> d.get("one")
1

# If the key does not exists, a default value can be returned
>>> d.get("five", "N/A")
'N/A'
>>>

```

#### Set

A set is a collection of unique objects. A basic use case is removing duplication.

```python

>>> l = ["spam", "spam", "email", "spam"]
>>> set(l)
{'email', 'spam'}
>>> list(set(l))
['email', 'spam']

```

Having two sets a and b, a | b returns union, a & b computes the intersection and a - b computes the difference. 
For example, given a set of large number of e-mail addresses (haystack), we can get count of certain e-mail addresses (needles)

```python

# Long version without using set
found = 0
for n in needles:
    if n in haystack:
        found += 1


# Using set
>>> found = len(set(needles) & set(haystack))
3

# Intersection works like below as well
>>> needles = [1, 2, 3]
>>> haystack = [2, 3, 4, 5, 6]
>>> i = set(needles).intersection(set(haystack))
>>> i
{2, 3}

```