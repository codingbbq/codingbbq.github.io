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
Designed for application that have a steady state, predictable usage or require reserved capacity. Reduced pricing is based on term and class offering and payment options. Cannot change RI attributes. Commit to a 1 Year or 3 Year contract. The longer the term, the greater savings. You reserve instances for specific time periods. Eg. Once a week for a few hours. RI's can be shared between multiple accounts within an organization.

- **Spot upto 90%** (Biggest savings) : Required spare computing capacity. Flexible start and end times. Can handle interruptions. Usually for non critical background jobs.
AWS has unused compute capacity that they want to maximize the utility of their idle servers. It's like when a hotel offers discount for to fill vacant suits.
Spit instance provide discount 90% compared to on-demand. Spot instance can be terminated if the computing capacity is needed by on-demand customers.
Designed for applications that have flexible start and end times or applications that are only feasible at very low compute costs.

*AWS Batch* is an easy and convenient way to use spot pricing.

*Termination condition* - Instances can be terminated by AWS at anytime.

- **Dedicated** (Most expensive) : Dedicated servers, can be on demand or reserved. When you need a guarantee of isolated hardware. Usually for enterprise requirements.
Designed to meet regulatory requirements. When you have strict server bound licensing that won't support multi tenancy or cloud deployments.

*Multi tenant* : When multiple customers are running workload on the same hardware. Virtual isolation separates customers.

*Single tenant* : When single customers has dedicated hardware. Physical isolation separates customers.

The dedicated model is offered in both on-demand and Reserved. Enterprises and large organizations may have security concerns or obligations against sharing the same hardware with other AWS customers. Hence such modal suits them.

### The Free services
Many AWS services do not incur a cost. Eg. IAM which is used to create user, groups, roles etc. There are other services which are free but in turn provision other services that cost money. Eg. Auto scaling, CloudFormation, Elastic Beanstalk, Amplify. 


### AWS support plans

*Basic Plan* : It is the default plan when create an account. Email support only for billing and account. 

*Developer Plan* : Tech support via Email. It cost $20 USD per month. It does not include third party systems.

*Business Plan* : Tech support via chat, phone. 24/7. It supports third party and cost $100 USD per month. 

*Enterprise Plan* : It is $15,000 per month with 2 dedicated resources and response within 15 minutes. 

The basic and Developer plans include 7 Trusted Advisor checks whereas the Business and Enterprise plan have all the AWS Trusted advisor checks.


### AWS Marketplace
Curated digital catalogue with thousands of software listings from independent software vendors. If the product is charged, it becomes part of your AWS bill and once you pay, AWS marketplace pays the provider. Products can be offered as 
- Amazon Machine Images (AMI)
- AWS CloudFormation templates
- Software as a Service offerings
- Web ACL
- AWS WAF Rules

### AWS Trusted advisor
- Advises you on security, saving money, performance, service limits and fault tolerance. Think of it like an automated checklist of practices on AWS.

### Cost optimization
- Amazon EC2 reserved instance optimization
- Low utilization of Amazon EC2 instance
- Idle load balancers
- Unassociated Elastic IP Addresses

### Consolidated Billing
This means that you get one bill for all your accounts. In an organization you will have a AWS master a/c using which you will create multiple member a/c. AWS provides a consolidated billing and payment method across multiple AWS accounts into one bill. For billing, AWS treats all the a/c in an organization as if they were one a/c. You can designate one master account that pays the charges of all the other member a/c. Consolidated billing is offered at no additional cost. With consolidated billing, the more you use, the more you save.

### AWS Cost explorer
The AWS cost explorer lets you visualize, understand and manage AWS costs and usage over time. Default reports help you gain insight into your cost drivers and usage trends.

### AWS Budgets
Plan your service usage, service cost and instance reservations. First 2 budgets are free of charge. Each budget is $0.02 per day ~ $0.60 per month and there is a 20,000 budget limit.
AWS Budget give you the ability to setup alerts if you exceed or are approaching your defined budget.
You can create cost, usage reservation budget. The budgets can be tracked at monthly, Quarterly or yearly levels with customization of start and end dates. AWS alerts support EC2, RDS, Redshift and ElasticCache reservations.

### TCO Calculator
- Total cost of ownership (TCO) allows you to estimate how much you would save when moving to AWS from on-premise. TCO provides a detailed set of reports that can be used in an executive presentations.

### AWS Landing zones
Helps enterprises quickly setup a secure, AWS multi account. Provides you with a baseline environment to get started with a multi account architecture.

### AWS Account Vending machine (AVM)
Automatically provision and configure new accounts via service catalog template. Uses single-sign-on (SSO) for managing and accessing accounts.

### Resource groups and Tagging
*Tags* are words on phrases that act as metadata for organizing your AWS resources.

*Resource groups* are collection of resources that share one or more tags

Resource groups can display details about a group of resource based on
- Metrics
- Alarms
- Configuration settings

## AWS Quick starts
- Pre-built templates by AWS and AWS partners to help and deploy popular stacks on AWS.
- Reduce hundreds of manual procedure into just a few steps

A quick start is composed of 3 steps
- Reserve architecture for the deployment
- AWS cloudFormation templates that automate and configure the deployment
- A deployment guide explaining the architecture and implementation in detail

### Organization and Accounts

*Organization* allows you to centrally manage billing, control access, compliance, security and share resources across your AWS control. 

*Root account user* is a single sign in identity that has complete access to all AWS services and resources in an account. Each account has a root account user. 

*Organization unit* are group of AWS accounts within an organization which can also contain other organizational units - creating a hierarchy. 

*Service control policies* give central control over the allowed permissions for all accounts in your organization, helping to ensure your accounts stay with your organization guidelines.

### AWS Networking

*Region* is a geographical location of your network.

*Availability zones* is the data center of your AWS resources.

*VPC* is logically isolated section of AWS cloud where you can launch AWS resources

*Internet gateway* Enable access to internet

*Route tables* determine where network traffic from your subnets are directed

*NACL* acts as a firewall at the subnet level

*Security groups* acts as a firewall at instance level

*Subnets* a logical partition of an IP network into multiple, smaller network segments

### Database services

- *Dynamo DB* : NoSQL key/value database

- *Document DB* : NoSQL document DB that is MongoDB compatible.

- *RDS* : Relational DB service that supports multiple engines - MySQL, Postgres, MariaDB, Oracle, MSSQL, Aurora

- *Neptune* : Managed graph DB

- *Redshift* : Columnar DB, Petabyte warehouse

- *Elastic Cache* : Redis or Memcached DB


### Provisioning Services

- *Elastic Beanstalk* : Service for deploying and scaling web application and services developed with java, php, node.js, python, ruby, go and docker.

- *Ops Works* : Configuration management service that provides managerial instances of chef and puppet

- *CloudFormation* : Infrastructure as code, JSON and YAML

- *AWS Quickstart* :  Pre made packages that can launch and configure your AWS computer, n/w, storage and other services.

- *AWS Marketplace* : A digital catalogue of thousands of software listings from independent software vendors you can use to find, buy, test and deploy software.


### Computing services

- *EC2* : Elastic cloud computing, highly configurable server eg, CPU, Memory, N/W, OS

- *ECS* : Elastic container service, docker as a service, highly scalable, high performance container orchestration that supports docker container, pay for EC2 instances.

- *Fargate* : Microservices where you don't think about infrastructure. Pay per task.

- *EKS* : Kubernetes as a service, easy to deploy, manage and scale containerized applications using Kubernetes.

- *Lambda serverless function* : Run code without provisioning or managing servers. You only pay for compute time you consume.

- *Elastic beanstalk* orchestrates various AWS services, including EC2, S3, simple notification service (SNS), CloudWatch, Auto Scaling and Elastic load balancers.

- *AWS Batch* : Plans, schedules and execute your batch computing workloads across the full range of AWS compute services and features, such as Amazon EC2 and spot instances.