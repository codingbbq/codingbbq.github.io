---
layout: post
title:  "AWS - Cloud practitioner - Notes"
categories: learning
excerpt : AWS is in demand these days and I too wanted to understand what exactly it is. What better way to learn about AWS then follow along freecodecamp's 4 hour tutorial on the AWS Cloud practitioner certification. Watching this tutorial I learned about two things, what AWS is and whether I can sit through and complete a 4 hour long tutorial video? With the help of this video, I learned a ton about AWS and this post is just a note down of all the things that were taught. If you are interested in taking up that certification, I would recommend watching the tutorial on YouTube. 
---

### What is Cloud Computing?
Practice of using a network of remote servers hosted on the internet to store, manage and process data rather than a local server or personal computer.

Earlier, we were using On-Premise, which meant, an organization would have to own servers, hire IT personnel, pay for or rent real estate and take all the risk. Cloud computing on the other hand can be differentiated such that, someone else owns the servers, someone else hires the IT, someone else pay or rent the real estate. The only thing that organization needs to do is configure and code on those servers.

### Advantages of Cloud computing?
- Trade capital expense for variable expense. No upfront cost, no paying for data centers and servers. Pay on demand, pay only when you consume computing resources.

- Economies of scale. Usage from thousands of customers aggregated sharing of cost with other customers.

- Stop guessing capacity. No need to pay for idle or underutilized servers. Scale up or down to meet the current needs.

- Increase speed and agility. Launch resources within few clicks in minutes. 

- Stop spending money on running and maintaining data centers. Focus on your customers.

- Go global in minutes. Deploy app in multiple regions around the world.


### Types of Cloud Computing
- SaaS (Software as a Service) - A completed product run and managed by service provider. Eg. Gmail, Salesforce etc.

- PaaS (Platform as a service) - No need to provision, configure or understand H/W or OS. Eg. Heroku

- IaaS (Infrastructure as a service) - Basic building block for cloud IT. eg. AWS, Microsoft Azure.


### Cloud computing deployment models

**Cloud** : Fully utilizing cloud computing. Usually adopted by Startups, SaaS offerings and New projects & Companies. Eg. Squarespace, Dropbox

**Hybrid** : Use both Cloud and On-Premise. Eg. Banks, FinTech, Investment Mgmt etc.

**On-Premise** : Private cloud, Deploying resources on premise. Eg. Public sector, sensitive data and Insurance Companies.


### AWS Global Infrastructure

- Expanding global infrastructure to help customers achieve lower latency and higher throughput.

**Regions** : Geographically distinct location and has multiple data centers (AZ's). Each region has at least 2 AZ's. AWS largest region is US-EAST.

**Availability Zones** : An AZ is a data center owned and operated by AWS in which AWS services run. AZ are represented by region code followed by a letter identifier. Eg. US-EAST-1a
*Multi AZ* : Distributing your instance across multiple AZs allow failover configuration for handling request when one goes down. Less than 10ms latency between AZ.

**Edge Location** : Datacenter owned by a trusted partner of AWS. Get data fast/Upload data fast to AWS. An edge location is a data center owned by a trusted partner of AWS which has a direct connection to the AWS network. These locations serve request for *Cloudfront* and *Route53*. Request going to either of these services will be routed to the nearest edge location automatically. 

**S3 Transfer Acceleration** traffic and **API Gateway** endpoint traffic also use the AWS edge network. This allows for low latency no matter where the end user is geographically located. 


### Gov Cloud locations

AWS Gov Cloud regions allow customers to host sensitive controlled unclassified information and other types of regulated workloads. GovCloud regions are operated by employees who are US Citizens on US soil. They are accessible to US entities and root a/c holders who pass a screening process.

Eg. Fed RAMP high baseline, DOJ's criminal justice info system security policy. ITAR - US International traffic in Arms Regulation.


### AWS walkthrough and technical terms understanding.

- Creating AWS account.

- Billing preferences

- Budgets -> Allow to tell you if going above budget and forecast cost.

- Cloudwatch : Billing alarms, 10 free alarms and 1000 free email notifications.

- Change IAM user sign-in. IAM stands for Identity and Access Management.

- Activate MFA or Multi factor Authentication for root account

- Create multiple IAM to manage user.

- Setup password policy.

- **Elastic cloud compute** : Launch server -> EC2 console -> Launch instance and Instance type

- Amazon Machine Image (AMI)

- Auto scaling group (ASG) - Ensure that multiple services running meet demand of whatever traffic you have.

- Elastic load balancer (ELP) - The idea is if more traffic, load balancer will distribute the traffic to multiple instances. ELP can be classified as 
  a. Application load balancer, usually for HTTP and HTTPs
  b. Network load balancer, usually for TCP, TLP and UDP
  c. Classic load balancer.

- S3 or Simple storage service - It has something called as Bucket, a place to contain your files.

- Cloudfront - used as CDN (Content distribution network). Stable content for quick access.

- Relational database service or RDS

- Lamda : How to run lamda functions. Lambda get triggered from variety of services.


### EC2 Pricing modal
- **On Demand** (*least commitment*) : When you launch a EC2 instance, it is by default on-demand. On demand has no upfront payment and no long term commitment. You are charged by the hour or by the minute (Varies based on EC2 instance type).
On demand is for application where the workload is for short term, spikey or unpredictable. When you have a new application for development or you want to run an experiment.

- **Reserved upto 75% off** (Best long term) : Steady state or predictable usage. Commit to EC2 over a 1 or 3 year term. Can resell unused reserved instances.
Designed for application that have a steady state, predictable usage or require reserved capacity. Reduced pricing is based on term and class offering and payment options.

  - Cannot change RI attributes

- **Spot upto 90%** (Biggest savings) : Required spare computing capacity. Flexible start and end times. Can handle interruptions. Usually for non critical background jobs.


- **Dedicated** (Most expensive) : Dedicated servers, can be on demand or reserved. When you need a guarantee of isolated hardware. Usually for enterprise requirements.