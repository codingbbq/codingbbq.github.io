---
layout: post
title:  "Flutter - Creating a custom shaped floating button."
categories: learning
excerpt :  "Recently, I came across a situation where I had to create a simple rectangular button floating on the screen. I had heard about the floating button widget and I thought it would be a good fit. However, the FloatingButton are always circular. So I had to google my way in creating a custom button suitable for my needs. I am posting the code here for my future reference and for anyone who might need to use such button"
---

## Rectangular Floating button

In my quest to master flutter, these days I try to implement simple mobile app designs to Flutter. I came across this screen which required to have a "Book Now" button at the bottom of the screen, however floating and in fixed position. I thought, Flutter's FloatingButton widget would be useful here. However, I could not figure out how to get the shape of my desire. Google to the rescue.

## What we did?

Scaffold allows a floating action button widget. Because in flutter everything is widget, we could use a container widget to define the shape of our choice. Below is the code.

```dart
import 'package:flutter/material.dart';

class Bike extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        title: Text(
          "Custom Floating Action Button",
        ),
      ),
      body: Container(
        child: Text("Floating Action Button")
      ),
      floatingActionButton: Container(
        width: MediaQuery.of(context).size.width * 0.70,
        decoration: BoxDecoration(
          borderRadius:  BorderRadius.circular(20.0),
        ),
        child: FloatingActionButton.extended(
          backgroundColor: Color(0xFF2980b9),
          onPressed: (){},
          elevation: 0,
          label: Text(
            "BOOK NOW",
            style: TextStyle(
              fontSize: 18.0
            ),
          ),
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}
```