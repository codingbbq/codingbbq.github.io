### Amazon Cloud Practitioner


#### Q. Which of these is not an essential characteristics of cloud technology?
- Customers pay only for what they use
- Resources are accessed over the internet
- Many resource are hosted on the same hardware
- Resources can change size quickly as needed

**Resources are accessed over the internet** *(You can also have cloud access over your private network)*

--- 

#### Q. What are TWO benefits for business when using the cloud?
- Don't have to anticipate capacity
- Don't have to configure firewalls
- Can adapt quickly to changing market demands
- Can outsource all development responsibilities
- Can outsource all mainteance responsibilites

**Don't have to anticipate capacity** <br />
**Can adapt quickly to changing market demands**

---

#### Q. Which of the following is a benefit of using the AWS well-architected framework?
- It provides prescriptive guidance of how to migrate to AWS
- It automates the creation of virtual resources
- It helps identify and remediate security and complaince risks in the cloud.
- It guarantees cost savings for all workloads

**It helps identify and remediate security and complaince risks in hte cloud**

---

#### Q. If a company is reviewing its disaster recovery procedures for opportunities to improve their recovery metrics, which pillar of the well-architected framework are they working with?
- Cost optimization
- Reliability
- Security
- Sustainability

**Reliability**

---

#### Q. Which of the following is classified as CapEx?
- Purchase of physical server
- Bill for cloud server
- Employee training event
- Property insurance premium

**Purchase of physical server**

---

#### Q. Which design strategy ensures your website is always available?
- Disposability
- Elasticity
- Scalability
- Redundancy

**Redundancy** (Having multiple copies of something, so if one fails other copy continues to ensure that your website is always available)

---

#### Q. Which of the following data transfers is free in AWS?
- Data across AWS regions
- Data from the internet into an AWS region
- Data within an AWS Region across Availability Zones
- Data from an AWS region to the internet

**Data from the internet int an AWS region**

---

#### Q. Which CAF (Cloud adoption framework) phase first demonstrates business value ?
- Launch
- Scale
- Envision
- Align

**Launch**

---

#### Q. Which AWS resources access option would allow a web server instnace to pull data from a database ?
- API
- IaC
- CLI
- SDK

**API**

---

#### Q. What can a developer do with an access key?
- Administrative access to adjust other user accounts from CLI
- Programmatic access to te root user account from the Management console
- Administrative access to Organization accounts from the Management console
- Permissioned access to the developer's account from a CLI

**Permissioned access to the developer's account from a CLI**

---

#### Q. Which cloud deployment model is most often the result of a temporary transitional phase ?
- Public cloud
- Multi - cloud
- Community cloud
- Hybrid cloud

**Hybrid cloud**

---

#### Q. Which cloud connectivity option offers the highest security?
- Client VPN
- Public internet
- Direct connect
- Site-to-site VPN

**Direct connect** (Direct connect does not have built in encryption)

---

#### Q. A company needs an inexpensive way to avoid having a single point of failure in their server cluster. Which of the following is the least expensive option to meet this requirement?
- Spread the cluster across multiple Regions
- Spread the cluster across multiple AZs
- Spread the cluster across multiple racks
- Spread the cluster across multiple hosts

**Spread the cluster across multiple AZs**

--- 

#### Q. Whcih service should you use to publish software update files while minimizing download time for users throughout the world?
- Wavelength
- CloudFront
- Global Accelerator
- Outposts

**cloudFront** 

---

#### Q. A social media company wants to get user traffic onto AWS's private infrastructure as quickly as possible. Which service will meet this needs?
- Wavelength
- CloudFront
- Global Accelerator
- Outposts

**Global Accelerator**

---

#### Q. Which configuration option in EC2 determines how much RAM the instance gets?
- Storage
- AMI
- Tag
- Type

**Type**

---

#### Q. A company's stateless data processing workload frequently leaves EC2 capacity unused. Which EC2 pricing option would fix the problem?
- Spot
- Reserved
- On-Demand
- Dedicated

**Spot**

---

#### Q. Where are container images stored for creating new container clusters?
- Repositroy
- EC2 instance store
- Marketplace
- Kubernetes

**Repository**

---

#### Q. When to use serverless?
- Just build your code
- Only pay when your code runs
- Run code closer to user
- Inherently scalable
- Update to code, not to server

**All of above**

---

#### Q. When NOT to use serverless?
- Troubleshooting troubles
- Long run limitations (Lamda functions can run upto 15 minutes)
- Cold starts
- Security concerns
- Legacy conversions

**All of above**

---

#### Q. Which of the following configurations most determines how much it costs to run a Lamda function?
- Trigger source
- Memory
- Destination target
- Tag

**Memory**

---

#### Q. Which type of scaling would increase the size of the instance's resources?
- Scale up
- Scale down
- Scale in
- Scale out

**Scale up**

---

#### Q. With which of the following services can automatic scaling of hosts NOT be handled using auto-scaling policies set by the customer?
- EC2 spot fleets
- EC2 ASGs
- RDS tables
- DynamoDB throughput

**RDS tables**

---

#### Q. When setting up a Database migration in AWS, which service do you start with?
- RDS
- SCT
- DMS
- SQL

**DMS (Database Migration service)**

---

#### Q. Which database service is optimized to handle OLAP workloads but does not handle OLTP workloads?
- RDS
- RedShift
- Aurora
- DMS

**RedShift (RDS and Aurora can also be used for OLAP as well as OLTP)**

---

#### Q. To ge the most automation built into your database deployment make sure to use _______
- RDS
- Aurora
- EC2
- MySQL

**Aurora**

---

#### Q. Which task is AWS responsibility when using RDS?
- Adding data to database
- Controlling database access
- Placing DB instance in a VPC
- Patching DB instance's OS

**Patching DB instance's OS**

---

#### Q. Which AWS service is designed around non-relational key-value pairs?
- RedShift
- Aurora
- DynamoDB
- RDS

**DynamoDB**

---

#### Q. You've setup a new website on EC2 instance. What AWS service can you use to publish your new website address so customers can find you?
- EC2
- Route 53
- VPC
- API Gateway

**Route 53**

---

#### Q. Which of the following group is logically the smallest?
- Availability zone
- Region
- Subnet
- VPC

**Subnet**

---

#### Q. What kind of resources does NACL protect?
- VPC
- EC2 instance
- S3 bucket
- Subnet

**Subnet**

---

#### Q. Which two services or features can be used to configure protections on virual network interface?
- NACL
- WAF
- Firewall manager
- Security group

**Firewall manager & Security group**

---

#### Q. Which service helps reduce latency for users sending information to a server?
- Cloudfront
- Global Accelerator
- Origin Shield
- Cloudfront Functions

**Global Accelerator**

---

#### Q. What kind of storage is cloud-native by design?
- File system storage
- Object storage
- Offline storage
- Block storage

**Object storage**

---

#### Q. What kind of items are saved inside S3 bucket?
- Blocks
- Folders
- Object
- Volumes

**Object**

---

#### Q. Which storage could serve as a boot device for Linux EC2 instances?
- FSx for windows
- EFS
- FSx for OpenZFS
- EBS

**EBS (Elastic Boot Store)**

---

#### Q. Which service is required to enable encryption of EBS volumes?
- ELB
- KMS
- EC2
- S3

**KMS (Key management service)**

---

#### Q. Which process directly provides high availability of a service?
- Lifecycle management
- Automatic archival
- Disaster recovery
- Backup

**Disaster recovery**

---

#### Q. Which of these is most likely a critical component of DR design?
- AMI
- ARN
- DDOS
- NACL

**AMI (Amazon Machine Image)**

---

#### Q. Which S3 storage tier would emphasize low cost over durability?
- Glacier Archive
- Intelligent tiering
- Standard
- One zone-IA

**One zone-IA**

---

#### Q. Which AWS service helps Alexa's voice sound personable?
- Lex
- Polly
- Comprehend
- Rekognition

**Polly**

---

#### Q. What service is used to run ETL (Extract, Transform and Load) jobs?
- Glue
- Kinesis Data streams
- QuickSight
- Athena

**Glue**

---

#### Q. Which service can provide a way for AWS services to message a human administrator?
- Step Functions
- Kinesis
- SQS (Simple Queue Service)
- SNS (Simple Notification Service)

**SNS (Simple Notification Service)**

---

#### Q. A school needs to provide virtual desktops to their students. Students should be ableto sae files across sessions, but each session should sart with a fresh instance. Which service meets theses requirements with the least administrative overhead?
- EC2
- Connect
- AppStream 2.0
- WorkSpaces Web

**AppStream 2.0**

---

#### Q. Which service actually puts your code on, say, an EC2 instance to make your app available to your users?
- CodeArtifact
- CodeBuild
- CodeCommit
- CodeDeploy

**CodeDeploy**

---

#### Q. A company needs to give query access to app users without requiring users to understand anything of the backend structure. Which service will meet this need?
- Amplify (Dev can focus on frontend, while backend control is given easily)
- AppSync (connects the application to datasources so that users can query)
- Cognito (Managing user authentication for customers)
- Device Farm (Is testing devices)

**AppSync**

---
