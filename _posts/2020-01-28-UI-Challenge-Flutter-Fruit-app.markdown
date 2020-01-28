---
layout: post
title:  "Flutter Challenge #001 - Fruit APP"
categories: learning
excerpt :  "Recently, I have been reading and learning a lot of flutter and it was time I took up a challenge instead of following YouTube tutorials. Earlier I had religiously followed tutorials which really helped me get the required knowledge. Now it was time to shoot the get started bullet. I found this design on dribble, and immediately got into development."
---

## Flutter UI challenge #001 - Fruit App

Flutter is an amazing technology I enjoy. I had a dream of building mobile apps (Still it is a dream as I do not have any app) since the time of Android. I had tried several times to configure my computer so that I could start building an application. I even looked at JQuery Mobile and Cordova and Ionic because of my web dev background but the thrill of having a native application remained a dream. Until Flutter.

By no means, I am a professional, but these tiny steps fulfill the void. I wasn't confident at first but then later realized that I had to take a plunge towards getting started. Watching numerous YouTube tutorials helped me a lot.

I found this interesting design on [dribble](https://dribbble.com/shots/6439039-Fruit-App) of a fruit app. So I got started.

The best part about flutter is that it is super easy to setup on your computer. For several years, I have tried learning many programming languages, however the most basic step towards learning is setting up a development environment always seemed excruciating. However, with flutter it was a different ball game. 
Not to forget, the compile time. Within seconds, you can see the output of your code on the simulator. I found it fulfilling.

## The Setup

In VSCode, I do Ctrl + P and type Flutter new. Select the first option and create the project in the required directory. I then open main.dart and start the debugger which would open a emulator configured in the Android virtual device.

The most difficult step was to delete all the boilerplate code of main.dart. The screen was blank and so was I.

I started typing scaf.. and the editor would show its magic of intelligence and give me Scaffold and then I got my appBar and the body and so on and so forth. Within minutes I was building a mobile app on my own.


## What I learned

A lot. I had fun developing the app in flutter. I learned that
- Everything in flutter is a widget.
- You can achieve the same thing in different ways. What could be the most `optimum` solution, you will only learn through practice. For example, The fruit cards, I designed them in a `Container` widget with custom Borders and shadow. They could also be achieved using the `Card` widget.
- It is super easy to have a horizontal scroll or a vertical scroll in flutter.
- I created all the raw data in a model file trying to depict as if the information was coming from the API. I learned how to write class, how to instantiate arguments and some other lingo, which I don't remember now. Embarrassed and guilty.
- At one point, I was unsure how to achieve the limited border on the selected links. However, widgets to the rescue. I think I created a container widget with a border of 2px.

## Bonus

The design on dribble did not have a Cart functionality, and I was very much enjoying flutter, so I created my own cart functionality using the `Provider` package. I still have to dig deep into it, but what I learned is that `Provider` helps maintain the state in your flutter application. 
For the cart
- Created a chip like effect to show the number of items
- User can add item from the main landing page or can go to the fruit detail page and add the item from there.
- I had to write the logic of getting to know if the item is already added to the cart or not since user had option to add it from two different pages.
- I learned about `MediaQuery.of(context).size.width` and found it very useful. We would not have to worry about the different size smartphones.
- I added a simple Toaster or Notification widget and I enjoyed implementing that widget. Every time user added a fruit to their cart, the notification would be shown at the bottom of the screen.

## Failures

What I could not achieve or learn in depth
- I could not get the links and the image cards working together. If user clicked on a fruit link the card should slide on to the view. I tried figuring out, but in vain. Also, I had set a time limit on getting this app completed and I had already passed that limit. So I changed the priority and let go with that functionality.

### Home page

![Meetup](/assets/images/001_Flutter_Fruit_App/home_page_1.png){:class="img-fluid w-80"}

![Meetup](/assets/images/001_Flutter_Fruit_App/home_page_2.png){:class="img-fluid w-80"}

### Details Page

![Meetup](/assets/images/001_Flutter_Fruit_App/details_page.png){:class="img-fluid w-80"}

### Add to Cart

![Meetup](/assets/images/001_Flutter_Fruit_App/add_to_cart.png){:class="img-fluid w-80"}