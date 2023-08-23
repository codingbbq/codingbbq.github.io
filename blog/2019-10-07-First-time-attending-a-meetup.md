---
slug: attending-meetup
title:  "First time attending a meetup - My Experience"
tags: [learning, personal, meetup] 
---

A group of individuals with common interest plan to meet to share their knowledge and network. This is my definition of a Meetup. I have read several blogs about meetup's but never attended any. I did not plan anything nor did I know about this meetup until a day before. It was just on the spur of the moment. I am glad, I attended this meetup and hence sharing my experience through this blog post.  

I have no clue what made me register on the meetup.com website. It was Friday evening, I was about to wrap up my daily office work. I pointed my browser to meetup.com and registered. The website popped at me a meetup that was happening on Saturday 05th of Oct 2019 from 10.00 AM to 12.00 PM. The host were sharing their experience about <b>React with Typescript == React on Steroids</b>. Interesting. I wanted to learn about it. Unfortunately, RSVP were closed. "I could always watch about such topic on YouTube", I thought.

Surprisingly, someone in the comment had mentioned that no need of RSVP, everyone is welcome. I did not have any excuse but attend.

<!-- truncate -->

## What is a Meetup?
Like minded individuals get together on a decided place at a particular time. They share knowledge and their experience on a particular topic. Technology related meetups are usually hosted by companies on their premises.
It is well proven fact that if you want to remember something that you have learned, the best way is to teach and share that knowledge.
In the technology domain, there are multiple ways of doing the same thing. The most optimized way is preferred. Thus, when well experienced individuals from different companies/domain get together to learn and share their knowledge, there is bound to have an amazing learning experience. 

In a Meetup, we discuss, share, learn and unlearn.

![Meetup](./assets/images/equal-experts-meetup.jpg)

## My Experience
The meetup was hosted by "Equal Experts". The topic of discussion was "React with Typescript == React on Steroids".  At first, I was sceptical about attending the meetup, but the moment I entered their premises, I was convinced. They had a very pleasant workspace, huge monitors and the projector and mic system were already in place. The speakers were ready. On time. I filled in my basic information and made myself comfortable to the nearest empty seat.

## The best part
The discussion. I could feel the sync between the topic and the questions that the participants asked related to the topic. It was streamlined by the organizers and everyone was heard. I believe the most important factor in a small group discussion is that everyone wants to be part of the discussion and be heard. We all want to contribute our knowledge and share our experiences. I guess, that is why story telling has its existence.

In the meetup, I found myself engrossed in the stories and experiences that were shared.

## What I learned?
- Typescript is truly important in a large project which has multiple developers. Angular 2+ realized the importance of Typescript and took a leap towards it. React has an amazing community which provides @Type definitions for it. 
- Creating a custom type means you will have to write an interface. Despite of knowing this, I asked this question to reconfirm my knowledge. Let's say you want to create a custom type `Accounts`, you would be creating an interface which would have all the properties that you need in that custom type. 
- You can have a union of two Types associated to an object. Let's say there is an `Employee` object that needs to have two custom types, i.e `Accounts` and `AccountNumber`. We can use the `&` operator to allow both the types assigned to `Employee`. I had earlier experienced this situation where some property were not present in my interface definition and I was confused whether edit the existing interface or create a new interface including the new properties. So I could relate the importance of the `&` operator. 
- Typescript is just a icing on the cake. It is used during the development time to help developer write error free code. The IDE intelli-sense would shout at you with the red squiglly lines in case you introduced any issues in the code. When the code is build and pushed to production, all your typescript code is scrapped out. Thus, it is important to note that you should include your TypeScript in the dev-dependencies in the package.json file. 

## Example

Let us consider below example. We are creating an interface which means we are creating a custom type. So `SquareConfig` is a type which will have two properties `color` and `width`.  `color` will always be of type `string` and `width` will always be of type `number`. The `?` after the property name means that these are optional properties. 

```javascript

interface SquareConfig {
    color?: string;
    width?: number;
}

```

After we create our custom type, we use it in below function. So the `createSquare` function accepts one parameter/argument `config` and it's type should be `SquareConfig`. 
Now notice the code after the closing bracket of function name, before the `{` bracket, i.e `: {color: string, area: number}`. This represents the return type of the function. What it means that the function should always return an object which will have a property `color` of type `string` and `area` which is of type `number`.

```javascript

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});


```

From above example we learn that, when defining a function we can construct in such a way that helps us identify the type of parameter and its return type. This in turn helps us during development time. So for example, let's say another developer uses this function somewhere in their code. When writing the code, they will be prompted by the intellisense that the arguments should be of type `SqaureConfig`. 

## Conclusion
YouTube will always be there with amazing resources. But Meetup takes the learning experience one step above. First of all, getting out of your bed on a Saturday, breaking the comfort zone of meeting unknown people is itself a huge leap. Next comes, how good a listener you are. Do you get distracted? Can you relate the topics under discussion with your current work? Do you have any questions? How well you frame your questions? When to ask your doubts? All this may sound a lot of work, but trust me, over time it will be helpful. I am sure, it will definitely help me.

Apart from personal development, I enjoyed the culture. The host had ordered Pizza for everyone and that is when we networked. We shared our experiences in the project with the current technology. There were open questions that everyone opinionated about. All in all, it was time well spent.