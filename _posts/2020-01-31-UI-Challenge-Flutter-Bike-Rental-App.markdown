---
layout: post
title:  "Flutter Challenge #003 - Bike Rental App"
categories: learning
excerpt :  "The bike search app looked simple, and I was motivated to work on it because it had a carousal and a date picker feature which I wanted to learn. Flutter is everything widgets and it is easy to glue everything together to quickly get a beautiful app ready."
---

[Dribble](https://dribbble.com/shots/5601042-Startup-Mentors-Founders-Social-App-Day-329-365-Project365) of Original design

[Flutter Code](https://github.com/codingbbq/mentors_social_app) on gitHub

## What I learned/ What went well

- First thing I googled was, best folder structure practice for Flutter development. I wanted the code to be organized and well strutured. I clicked on the first result, a medium post. The article was straight forward and it made sense to structure the app in a simple, well to understand format. So I created a folder structure as follows.
    lib
    -- components
    -- models
    -- routes
    -- screens
    -- theme

- Components would comprise of code that is repeated and used at multiple places. 
- Models is where I define the data sructure for the application. For example, assuming that all the data will be coming from an API, what would be key value pairs.
- routes for defining the routing in the app. I particularly like the named routes because they make the code looks clean and readable.
- screens is all the pages in the app
- In theme folder, I put all the repeated styles so I do not have to write them again and again.

![Bike Rental App](/assets/images/bike_rental/003_Bike_Rental_App.png){:class="img-fluid w-100"}

- I particulary spent good amount of time getting the date picker and time picker working. Flutter has `showDatePicker` and `showTimePicker` widgets which accepts data of type `DateTime` and `TimeOfDay`. The widgets needs to be called in `asnyc` and `await` because the return is a `Future`. User will click on an icon to open the Date picker using `showDatePicker` and until user interacts and selects a date, the widget should be running. We therefore need a `Future` return type.

- We used a `gridview` widget to display the selections/choices on the lading page. I could have used a simple row and column widget but wanted to check out the gridview widget. To make the choices selectable, we used `InkWell` widget. The best part is, it gives that ripple effect when user taps on the area of selection.

- I don't remember the exact error message, but we faced issues with the gridview because it could not calculate the height upto which it should be displayed. Stackoverflow suggested that we use the `shrinkWrap` property on the `gridview`.

- `padding` and `margin` properties have `EdgeInsets` function on which I mostly use `symmetric` method.

- Because we are using named routes, we need to use `Navigator.pushNamed(context, '/bike', arguments: bike);`. It is very easy to pass arguments to be used in the page to which we are routing to. We pass the `bike` object, and to use this object in the new page we need to use the code 
`final BikeSearch bike = ModalRoute.of(context).settings.arguments;`

- I wanted to implement the Carousal and not through any package. I found this detailed code on github which used the `pageView` widget which in turn used a controller. I did not attempt to understand the logic completely.

- I used the `floatingActionButton` property of the `scaffold` to get the fixed button. Also it was easy to get the 

## What did not go well / Failures

- I did not implement the selection logic. Could have used the internal setState function to just check what is clicked and change the UI on selection. I think i did it for the frui app and could have taken the reference from there.

- Even though I implemented the datepicker and timepicker, I could not get it to view on the UI in the format I wanted. I even used the `intl` package for formatting the date but somehow it did not work. 

- I was too tired to get the realistic images and settled the entire app with just one image. Getting the image and turning it into a transparent png takes a lot of time. 

## Open Questions

- Get the formatting of datepicker and timepicker working
- Understand how the carousal works

### Home Page

<img src="./assets/images/bike_rental/01_selection.png" />       <img src="./assets/images/bike_rental/02_date_selection.png" />

### Search

<img src="./assets/images/bike_rental/03_search.png" />       <img src="./assets/images/bike_rental/04_filter_selection.png" />

### Bike Details

<img src="./assets/images/bike_rental/05_bike_details_1.png" />       <img src="./assets/images/bike_rental/05_bike_details_2.png" />