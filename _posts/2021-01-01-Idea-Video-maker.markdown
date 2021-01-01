---
layout: post
title:  "Ideating - Video maker"
categories: essays
excerpt: What if we could merge all your photos and videos for a given period into one video? Using a completely automated script. There are video editors like Adobe premier pro but sometimes you just want to merge all your photos/videos into one large video to be able to view after several years. This post is me ideating over a random thought but something that I would really want to use myself.
---

# Ideating for a Video maker

We use cellphones to capture photos and videos. We capture these moments to be able to cherish them in near future. However with time, we loose track of them and it becomes difficult to look for those videos when we really want.

Google photos has this really good feature to upload all your content, keep it in sync. It also has this ML algorithm that creates some 1minute videos for you and so on. 

However, with recent changes in their terms of service if you have reached the limit of 15GB in your google storage, you will no longer be allowed to upload any new high quality content for free.

The advantage of google photos is that it creates amazing stories based on dates, for example, you can view the photos that were clicked this day that year. Also, all the photos/videos get saved based on date and so I can easily create albums out of it. That being said, you are now restricted and most of all, the quality is a concern.

### **Problem:**

Google photos will no longer be free

You will not be able to upload high quality pictures on google photos once 15GB storage has crossed.

### **Idea:**

**Creating a large 20-30 minute video out of your photos and videos taken over a period of 30 days**.

- So you click photos and videos and then save on your computer.
- The program will pick up all the videos/photos from particular dates (1 month for eg.), merge all the photos/videos date wise, add some music/animation to it and generate the output.
- You can also create notes and they will be inserted in the video as and when specified. For eg, you want to have a note before start of any day's video, you can create a text file with that date and the program will create an image out of it and insert it in the video.
- Currently with that merged 30 minute video, I should be able to upload it to YouTube and share that link with anyone who is interested or keep it private etc.

### **Why?**

- Instead of having several thousand photos/videos, you have an organized video per every month or specified date.
- Keep track of so many photos is tedious
- You could use Adobe premiere pro or any other video editor however if the basis merging is done by an automated script, why not?
- At first use of software like Adobe premier pro sounds amazing, however if you really think about it, the mere thought of opening a resource hungry application and then learning the basics of it and then doing processing consumes tons of time.

### **What about other ready to use, free to use collage maker apps?**

- If they are free, they have watermark.
- I do not want animation etc in my videos. I just want to combine several photos videos based on date and watch it like a movie.
- Collage makers etc requires your attention. Just like premier pro, you will have to drag/drop videos etc, add animation, add text etc. Sometimes the output will not be as desired.

### **Steps**

- Use python for this program
- A folder will have all the photos and videos
- The script would find all the files based on date of creation and then combine them one by one into a large video

### **Challenges**

- Consider the video resolution and the format?
- Consider different resolution types such as portrait and landscape?
- Video over a video? For example the photo is a 1048X1048 and videos are of different resolution, how would that be treated in the final output.
- What should be the size of the output video? With latest gadgets, a mere 2 minute video takes up almost 1GB file size. Should we first downgrade the video and then merge it?

All the best!!!