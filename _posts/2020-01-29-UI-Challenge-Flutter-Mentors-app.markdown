---
layout: post
title:  "Flutter Challenge #002 - Mentors Social App"
categories: learning
excerpt :  "Another challenge that I pursued in Flutter was the Mentors Social App. I found the design on dribble and loved it. Flutter is everything widgets and this new design had several new widgets I could learn and implement. I was looking forward to getting the bottom Navigation bar functional."
---

## Flutter UI challenge #002 - Mentors Social App

[Dribble](https://dribbble.com/shots/5601042-Startup-Mentors-Founders-Social-App-Day-329-365-Project365) of Original design

[Flutter Code](https://github.com/codingbbq/mentors_social_app) on gitHub

## What I learned

- I learned about the `BottomNavigationBar` widget. It accepts an `items` parameter of type List of `BottomNavigationBarItem`. I could have put the list items in its own modal file.
- The App Design had a different looking header for each page. So the `AppBar` widget had to be configured accordingly. For example, the updates page has a logo and all other pages show a title instead of logo. It was interesting to get it functional. I used `setState` via a `statefull` widget.
- I learned about the `Stack` and `Positioned` widget and could relate them clearly with CSS `position` property.

### Custom dropdown

- It was fun getting that custom looking dropdown with rounded borders and icons. I used a `Container` widget to get the desired look. Some of the properties I used were `padding`, `margin`, `BoxDecoration` etc. 
- `BoxDecoration` has a parameter called as `boxShadow` which accepts a List of type `BoxShadow`. I wonder why does it expect a List?
- We then give the `child` of `Container` a `DropdownButton` widget. The `DropdownButton` widget expects the `items` of type list. I used a modal to list all the dropdown items and then called it with `map` on my main file. I found it a little difficult to get the dropdown items working but was able to google my way through.

```dart

child: DropdownButton(
    underline: SizedBox(), // To remove the underline
    icon: Icon(null), // Remove the default down arrow icon
    value: _value,
    onChanged: (Filter newValue) {
    setState(() {
        _value = newValue;
    });
    },
    items: filters.map<DropdownMenuItem<Filter>>((Filter filter) {
    return DropdownMenuItem<Filter>(
        value: filter,
        child: Row(
        children: <Widget>[
            filter.icon,
            SizedBox(width: 10),
            Text(
                filter.filterName,
            )
        ],
        ),
    );
}).toList(),


```


### Circular Avatar image with a verified icon

```dart

Container(
    width: 60,
    height: 60,
    decoration: BoxDecoration(
    shape: BoxShape.circle,
    image: DecorationImage(
        fit: BoxFit.cover,
        image: AssetImage(
        "assets/images/profile/guest1.jpg"
        )
    )
    ),
    child: OverflowBox(
    minWidth: 14,
    minHeight: 14,
    alignment: Alignment(1.30, 0.8),
    child: // Verified Profile
    Container(
        width: 20,
        height: 20,
        decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: Colors.orange,
        border: Border.all(
            color: Colors.white,
            width: 2.0
        )
        ),
        child: Icon(
        Icons.done,
        size: 14.0,
        color: Colors.white,
        ),
    ),
    ),
),

```

If you see the [design](https://dribbble.com/shots/5601042-Startup-Mentors-Founders-Social-App-Day-329-365-Project365), we have a profile image with a verified icon. At first I tried using the Stack widget with Positioned but somehow I was could not get it working. StackOverflow helped with the solution (posted above). We settled with `OverflowBox` widget and its `Alignment` property.

## What went well
- We tried to get many of the data on the App via the modals simulating as if the data was coming from API. 
    - The dropdown data along with its Icon
    - Individual Profile details which included profile image, about, social media statistics, links etc.
- In my first challenge I had used Container to get a Card like UI, for Mentors App, I used the `Card` widget and it was good experience.

## What did not go well / Failures
- Ran out of the time limit and could not get the Updates page with dynamic data. In the original design there were 3 types of cards on the updates page. I hard coded 2 types with constant data.
- I did not refactor the code for the profile image with verified icon. This same UI was being used at three different places with a different size. I could have extracted the code into its own widget and provide some dynamic parameters to adjust size.

## Open Questions

- What is the difference between `Image.Assets` and `AssetImage` function and which function to use when?
- Why does `boxShadow` expect a `<BoxShadow>[]` in `BoxDecoration`?
