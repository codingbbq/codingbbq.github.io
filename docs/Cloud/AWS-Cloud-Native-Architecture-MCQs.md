# 📝 AWS Cloud-Native Architecture: 100 Revision MCQs

Welcome to the **AWS Cloud-Native Architecture MCQ Revision Guide**! This test contains 100 multiple-choice questions designed to test and refresh your knowledge across all 6 core domains of modern AWS architecture.

---

## 📑 Quick Navigation
* [Part 1: Network & Security Architecture (Q1 – Q18)](#part-1-network--security-architecture)
* [Part 2: Compute & Microservices (Q19 – Q35)](#part-2-compute--microservices)
* [Part 3: Databases & Caching (Q36 – Q52)](#part-3-databases--caching)
* [Part 4: Messaging & Event-Driven Design (Q53 – Q68)](#part-4-messaging--event-driven-design)
* [Part 5: Storage, Frontend, & Global Delivery (Q69 – Q84)](#part-5-storage-frontend--global-delivery)
* [Part 6: DevOps, Observability & Architecture (Q85 – Q100)](#part-6-devops-observability--architecture)
* [Answer Key & Detailed Explanations](#answer-key--detailed-explanations)

---

## Part 1: Network & Security Architecture

#### Q1. What is the recommended best practice for injecting production secrets into Amazon ECS containers?
- A) Hardcode secrets into `.env` files and commit them to Git.
- B) Store secrets in AWS Systems Manager Parameter Store and let ECS inject them via Task Definitions.
- C) Fetch secrets manually using the AWS SDK inside your application startup logic.
- D) Store secrets as unencrypted plain text in the container Dockerfile.

#### Q2. Why should database instances (e.g., RDS PostgreSQL) be deployed in Private Subnets within a VPC?
- A) Private subnets make databases run faster by bypassing encryption.
- B) Resources in private subnets do not receive public IP addresses, preventing direct internet routing.
- C) RDS databases can only be created in private subnets; public subnets do not support RDS.
- D) Private subnets automatically back up database data every 5 minutes.

#### Q3. A user opens Chrome DevTools and sees an API request to `https://api.myapp.com/orders`. What does this endpoint actually represent?
- A) The public IP address of the ECS container hosting the Order microservice.
- B) The private IP address of the database inside the VPC.
- C) The public entry point (API Gateway or Load Balancer) that acts as the guarded front door.
- D) The direct MAC address of the underlying EC2 physical host.

#### Q4. What is the primary difference between an IAM Policy and an IAM Role?
- A) A Policy is a temporary identity; a Role is a JSON document.
- B) A Policy defines permissions in a JSON document; a Role is an identity assumed to gain those permissions temporarily.
- C) Roles can only be used by human users, while Policies are only used by AWS services.
- D) Policies cost money, whereas IAM Roles are free of charge.

#### Q5. Which Amazon Cognito component is responsible for authenticating users, managing password resets, and issuing JWTs?
- A) Cognito Identity Pools
- B) Cognito User Pools
- C) Cognito Sync
- D) AWS IAM Identity Center

#### Q6. What is the primary function of Amazon Cognito Identity Pools (Federated Identities)?
- A) Storing user passwords securely in an encrypted database.
- B) Exchanging an authentication token (e.g., JWT) for temporary AWS IAM permissions.
- C) Providing web application firewall protection against SQL injections.
- D) Sending multi-factor authentication (MFA) SMS codes.

#### Q7. Which AWS service specifically inspects incoming HTTP/HTTPS traffic to block SQL injection and Cross-Site Scripting (XSS) attacks?
- A) AWS Shield
- B) AWS WAF (Web Application Firewall)
- C) AWS Network Firewall
- D) Amazon GuardDuty

#### Q8. How does AWS Shield Protect your applications?
- A) By inspecting SQL queries for missing `WHERE` clauses.
- B) By offering automatic DDoS (Distributed Denial of Service) protection at the network and transport layers.
- C) By encrypting S3 buckets at rest.
- D) By automatically fixing syntax errors in Node.js code.

#### Q9. What does "Encryption at Rest" guarantee?
- A) Data is encrypted while traveling across public fiber-optic cables.
- B) Data is encrypted when physically written to underlying storage disks/drives.
- C) Data can only be accessed during non-business hours.
- D) API responses sent to the user browser are encrypted using SSL/TLS.

#### Q10. Which service acts as the central cryptographic key management facility in AWS for encrypting S3 buckets and RDS databases?
- A) AWS Secrets Manager
- B) AWS Systems Manager Parameter Store
- C) AWS KMS (Key Management Service)
- D) AWS Certificate Manager (ACM)

#### Q11. An application task running on ECS needs permission to read files from an S3 bucket. How should this permission be granted?
- A) Store permanent IAM Access Keys inside the container environment variables.
- B) Attach an IAM Policy to an IAM Task Role and assign that Role to the ECS Task Definition.
- C) Make the S3 bucket completely public so any container can access it.
- D) Hardcode the AWS Root account credentials inside the application code.

#### Q12. What network component inside a VPC allows resources in a Private Subnet to initiate outbound connections to the internet (e.g., for software patches) while blocking inbound connections from the internet?
- A) Internet Gateway (IGW)
- B) NAT Gateway
- C) VPC Peering Connection
- D) Transit Gateway

#### Q13. Which VPC security feature operates at the subnet level and is stateless?
- A) Security Groups
- B) Network Access Control Lists (NACLs)
- C) Route Tables
- D) AWS WAF

#### Q14. Which VPC security feature operates at the individual instance/ENI level and is stateful?
- A) Network Access Control Lists (NACLs)
- B) Security Groups
- C) Internet Gateways
- D) VPC Flow Logs

#### Q15. You want to store a database password that needs automatic 30-day rotation. Which AWS service is best suited for this requirement?
- A) AWS Systems Manager Parameter Store (Standard)
- B) AWS Secrets Manager
- C) Amazon S3 with Object Lock
- D) AWS KMS

#### Q16. In an API Gateway configuration, what header is typically used by client applications to pass a Cognito JWT token for route authorization?
- A) `X-Forwarded-For`
- B) `Content-Type`
- C) `Authorization`
- D) `Host`

#### Q17. How does API Gateway prevent malicious users from overwhelming your backend microservices with millions of public requests?
- A) By automatically shutting down ECS tasks when traffic is high.
- B) By enforcing configurable Throttling and Rate Limiting rules at the stage or route level.
- C) By deleting the database automatically during traffic spikes.
- D) By requiring CAPTCHA on every single API endpoint.

#### Q18. What is the default access behavior of a newly created Security Group in a VPC?
- A) Allows all inbound traffic and blocks all outbound traffic.
- B) Blocks all inbound traffic and allows all outbound traffic.
- C) Allows all inbound and outbound traffic.
- D) Blocks all inbound and outbound traffic.

---

## Part 2: Compute & Microservices

#### Q19. What is the key operational difference between AWS EC2 and AWS Fargate?
- A) EC2 requires you to manage VM instances and OS patches; Fargate provides serverless compute where AWS manages the underlying instances.
- B) EC2 only runs Windows; Fargate only runs Linux.
- C) EC2 is serverless; Fargate requires manual server provisioning.
- D) EC2 cannot run Docker containers; Fargate can only run Python scripts.

#### Q20. What is Amazon ECS?
- A) A serverless SQL database engine.
- B) A fully managed container orchestration service that executes and scales Docker containers.
- C) A domain name registration service.
- D) A physical hardware device installed in local data centers.

#### Q21. Where are Docker container images stored before being pulled by Amazon ECS tasks?
- A) Amazon S3 Glacier
- B) Amazon ECR (Elastic Container Registry)
- C) AWS CodeCommit
- D) Amazon Elastic Block Store (EBS)

#### Q22. How does an Application Load Balancer (ALB) determine whether an ECS task is ready to receive traffic?
- A) By checking if the container has been running for at least 10 minutes.
- B) By sending periodic HTTP/HTTPS health checks to a designated path (e.g., `/health`) on the container.
- C) By measuring the CPU temperature of the host server.
- D) By inspecting the git commit history of the application.

#### Q23. What happens when an ECS task running on Fargate fails its ALB health checks repeatedly?
- A) The ALB stops the entire VPC.
- B) ECS terminates the unhealthy task and launches a new task instance to maintain the desired count.
- C) The database is automatically restored to a previous snapshot.
- D) An email is sent to AWS support to manually reboot the server.

#### Q24. Which AWS service is best suited for executing short-lived, event-driven functions without provisioning any container infrastructure?
- A) Amazon EC2
- B) AWS Lambda
- C) Amazon ECS
- D) AWS Elastic Beanstalk

#### Q25. What causes a "Cold Start" in AWS Lambda?
- A) Running Lambda functions inside a refrigerated data center.
- B) The delay that occurs when Lambda provisions a new execution environment upon receiving a request after being idle.
- C) Compiling TypeScript code into JavaScript during runtime.
- D) Downloading files from S3 Glacier.

#### Q26. How can you virtually eliminate Cold Starts for latency-sensitive AWS Lambda functions?
- A) By upgrading your AWS Support plan to Enterprise.
- B) By configuring Provisioned Concurrency to keep execution environments warm.
- C) By increasing the Lambda timeout to 15 minutes.
- D) By converting the Lambda function into an S3 bucket.

#### Q27. What is the maximum execution timeout limit for a single AWS Lambda function invocation?
- A) 30 seconds
- B) 5 minutes
- C) 15 minutes
- D) 1 hour

#### Q28. When deploying microservices using the "Database-per-Service" pattern, how should microservices share data?
- A) By querying each other's databases directly via SQL joins.
- B) Strictly via well-defined APIs or asynchronous events.
- C) By sharing a single central PostgreSQL database.
- D) By dumping CSV files into a shared S3 bucket every minute.

#### Q29. Which component in API Gateway connects public REST routes directly to private resources inside a VPC without exposing them publicly?
- A) NAT Gateway
- B) VPC Link
- C) Internet Gateway
- D) Route 53

#### Q30. What layer of the OSI model does an Application Load Balancer (ALB) operate on?
- A) Layer 3 (Network)
- B) Layer 4 (Transport)
- C) Layer 7 (Application)
- D) Layer 2 (Data Link)

#### Q31. What is the role of an ECS "Task Definition"?
- A) A shell script that installs Docker on an EC2 instance.
- B) A JSON blueprint describing container configurations (Docker image, CPU/Memory, environment variables, port mappings).
- C) A firewall rule set for VPC subnets.
- D) A billing report detailing monthly container costs.

#### Q32. What deployment strategy does ECS use by default to ensure zero downtime during service updates?
- A) In-place deployment with 100% downtime window.
- B) Rolling update (launching new version tasks before stopping old version tasks).
- C) Recreating the entire VPC from scratch.
- D) Blue/Green deployment using manual DNS modification.

#### Q33. In AWS Lambda, how is compute capacity (CPU power and network bandwidth) allocated to your function?
- A) You configure CPU cores explicitly (e.g., 2 cores, 4 cores).
- B) CPU capacity scales proportionally based on the amount of Memory (RAM) you allocate.
- C) CPU power is always fixed at 1 GHz for all functions.
- D) You must attach an EC2 instance to grant CPU power to Lambda.

#### Q34. What is the primary difference between API Gateway REST APIs and API Gateway HTTP APIs?
- A) REST APIs are faster and cheaper than HTTP APIs.
- B) HTTP APIs are lighter, faster, and significantly cheaper, but offer fewer enterprise features than REST APIs.
- C) HTTP APIs do not support CORS or custom domains.
- D) REST APIs can only be accessed using XML formats.

#### Q35. What feature allows an ALB to route requests to different microservices based on the URL path (e.g., `/orders` vs `/products`)?
- A) Host-based routing
- B) Path-based routing
- C) Round-robin load balancing
- D) Sticky sessions

---

## Part 3: Databases & Caching

#### Q36. Which database model does Amazon DynamoDB use?
- A) Relational SQL model
- B) Graph database model
- C) Fully managed Key-Value and Document NoSQL model
- D) Columnar Data Warehouse model

#### Q37. What type of database transaction support does Amazon RDS PostgreSQL provide?
- A) Full multi-table ACID compliance
- B) Eventual consistency only
- C) No transaction support
- D) Read-only transactions

#### Q38. How does Amazon DynamoDB scale to handle massive throughput spikes (such as Black Friday traffic)?
- A) By automatically upgrading the underlying EC2 instance size from t3.micro to m5.24xlarge.
- B) Through serverless horizontal partitioning and automatic capacity scaling.
- C) By requiring developers to manually add read replicas during sales.
- D) DynamoDB cannot scale automatically; it caps out at 1,000 requests per second.

#### Q39. In an e-commerce application, why is DynamoDB an ideal choice for a Shopping Cart service?
- A) Shopping carts require complex multi-table SQL JOIN queries.
- B) Shopping cart data access is key-value based (User ID -> Cart JSON) and benefits from features like TTL for abandoned carts.
- C) DynamoDB is cheaper than S3 for storing large video files.
- D) DynamoDB automatically sends promotional emails to customers.

#### Q40. What is the purpose of DynamoDB Time to Live (TTL)?
- A) To automatically delete items after a specified timestamp without consuming write throughput.
- B) To measure how fast queries execute in milliseconds.
- C) To reboot the database every 24 hours.
- D) To set an expiration date on AWS access keys.

#### Q41. Where is API Gateway HTTP Response Caching stored?
- A) Inside the user's local web browser cache.
- B) At the API Gateway stage level in dedicated memory outside your VPC.
- C) On the hard drives of your private RDS database instances.
- D) Inside Amazon S3 Glacier.

#### Q42. Is API Gateway Caching read-only or read-write?
- A) Read-Write (applications can write custom data structures to it via code).
- B) Read-Only (it caches static HTTP GET responses returned from backend targets).
- C) Write-Only (it accepts logs from client browsers).
- D) It depends on whether you use Node.js or Python.

#### Q43. What is Amazon ElastiCache?
- A) A managed in-memory cache engine supporting Redis/Valkey and Memcached.
- B) A serverless file storage system for EC2.
- C) A tool for caching S3 bucket deployment scripts.
- D) An automatic code optimizer for Python microservices.

#### Q44. How does an application benefit from using the "Write-Behind" (Write-Back) caching pattern with ElastiCache Redis?
- A) High-frequency writes hit sub-millisecond in-memory Redis first, and are flushed asynchronously to disk databases in batches.
- B) Data is written directly to S3 Glacier before touching Redis.
- C) Writes bypass RAM and go straight to tape backups.
- D) It eliminates the need for any database.

#### Q45. Why is standard SQL `LIKE %search_term%` inefficient for full-text search in e-commerce product catalogs?
- A) PostgreSQL does not support the `LIKE` operator.
- B) Full table scans cripple relational database performance, and SQL lacks typo-tolerance, stemming, and relevance scoring.
- C) SQL queries can only return integer values.
- D) Search terms cannot contain vowels in SQL.

#### Q46. Which AWS service is specifically designed for rich full-text search, fuzzy typo matching, and faceted filtering?
- A) Amazon Redshift
- B) Amazon OpenSearch Service
- C) Amazon ElastiCache
- D) Amazon Neptune

#### Q47. What is the primary operational trade-off of using Amazon RDS Read Replicas?
- A) Read Replicas increase write performance by 500%.
- B) Read Replicas use asynchronous replication, meaning read queries might experience slight "replication lag" (eventual consistency).
- C) Read Replicas convert relational data into NoSQL format.
- D) Read Replicas cannot be deployed in a different Availability Zone.

#### Q48. What is Amazon Aurora?
- A) An open-source NoSQL document database built by Apache.
- B) An enterprise-class, AWS-designed relational database engine compatible with MySQL and PostgreSQL, delivering up to 5x performance.
- C) A client-side JavaScript caching library.
- D) A tape-based backup storage system.

#### Q49. What DynamoDB feature allows you to query attributes outside of the primary key schema efficiently?
- A) Foreign Key Constraints
- B) Secondary Indexes (Global Secondary Indexes - GSI / Local Secondary Indexes - LSI)
- C) SQL Views
- D) Table Scans

#### Q50. What is the Maximum individual item size limit in Amazon DynamoDB?
- A) 1 MB
- B) 400 KB
- C) 10 MB
- D) Unlimited

#### Q51. In Amazon ElastiCache for Redis, what command provides atomic decrement operations suitable for real-time inventory management?
- A) `UPDATE`
- B) `DECR` / `DECRBY`
- C) `REMOVE`
- D) `SELECT`

#### Q52. What happens when an API Gateway Cache TTL expires for a cached route?
- A) API Gateway permanently deletes the endpoint route.
- B) The next request results in a "Cache Miss", causing API Gateway to fetch fresh data from the backend microservice and refresh the cache.
- C) API Gateway throws a `500 Internal Server Error`.
- D) The backend database is automatically rebooted.

---

## Part 4: Messaging & Event-Driven Design

#### Q53. What messaging pattern is implemented when an Amazon SNS Topic delivers a single event to multiple Amazon SQS Queues simultaneously?
- A) Request-Response pattern
- B) Fan-out pattern
- C) Point-to-Point pattern
- D) Monolithic batch pattern

#### Q54. How does asynchronous event-driven messaging improve microservice resilience?
- A) If a downstream consumer service crashes, the message broker (SQS) holds the message safely until the consumer recovers.
- B) Messages automatically fix bugs in the receiving microservice code.
- C) Event-driven architectures eliminate the need for databases.
- D) Messages bypass all VPC security rules.

#### Q55. What happens to a message in an Amazon SQS queue after a worker microservice finishes reading and processing it?
- A) SQS automatically deletes it instantly upon reading.
- B) The worker microservice must explicitly send a DeleteMessage API call to remove it from the queue.
- C) The message is archived in S3 Glacier automatically.
- D) The message is sent back to the publisher.

#### Q56. What is the purpose of an SQS Dead Letter Queue (DLQ)?
- A) To store deleted customer email addresses.
- B) To isolate messages that fail to process successfully after a specified number of retry attempts.
- C) To speed up queue throughput during peak sales.
- D) To encrypt messages using post-quantum cryptography.

#### Q57. What is the fundamental difference between Amazon SQS and Apache Kafka (Amazon MSK)?
- A) SQS is an append-only log; Kafka deletes messages immediately after they are read.
- B) SQS is a transient message queue (messages deleted after processing); Kafka is a distributed immutable event streaming log where events can be replayed.
- C) SQS requires managing EC2 broker nodes; Kafka is strictly single-threaded.
- D) SQS only supports XML payloads; Kafka only supports CSV payloads.

#### Q58. Which AWS service provides a serverless event bus that can route events based on deep JSON payload content matching rules?
- A) Amazon SNS
- B) AWS EventBridge
- C) Amazon SQS
- D) AWS AppSync

#### Q59. What is a key limitation of Amazon SQS Standard Queues regarding message ordering?
- A) Standard queues guarantee strict ordering at all times.
- B) Standard queues offer "best-effort" ordering, meaning messages may occasionally arrive out of sequence.
- C) Standard queues can only process one message per hour.
- D) Standard queues do not allow JSON messages.

#### Q60. When must you use an Amazon SQS FIFO Queue instead of a Standard Queue?
- A) When you need infinite throughput above 1,000,000 messages per second.
- B) When strict order of operations and "exactly-once" processing are required (e.g., financial transactions).
- C) When you want to store messages for longer than 14 days.
- D) When sending video files to S3.

#### Q61. What is the maximum message retention period supported by Amazon SQS?
- A) 1 hour
- B) 24 hours
- C) 14 days
- D) Indefinitely

#### Q62. What AWS service orchestrates multi-step microservice workflows using visual state machines (implementing the Saga Pattern)?
- A) AWS Glue
- B) AWS Step Functions
- C) AWS Batch
- D) AWS Elastic Beanstalk

#### Q63. In AWS Step Functions, what is a "Compensation Transaction"?
- A) Paying AWS for server usage.
- B) A rollback step executed to undo previous successful operations if a subsequent step in the workflow fails.
- C) Converting USD to EUR during payment processing.
- D) An automatic discount applied to customer carts.

#### Q64. What SQS parameter prevents multiple worker instances from processing the exact same message concurrently?
- A) MessageDeduplicationId
- B) Visibility Timeout
- C) Delivery Delay
- D) ReceiveMessageWaitTime

#### Q65. What is SQS Long Polling?
- A) Polling a queue from a different AWS Region.
- B) Setting `ReceiveMessageWaitTimeSeconds > 0` to reduce empty responses and lower costs by waiting for messages to arrive in the queue.
- C) Keeping messages in the queue for 14 years.
- D) Using a 5G network connection to read queues.

#### Q66. How does AWS EventBridge Schema Registry help microservice developers?
- A) It automatically generates TypeScript/Java code structures for events published to the event bus.
- B) It encrypts database tables using KMS keys.
- C) It converts SQL queries into GraphQL endpoints.
- D) It checks git repositories for syntax errors.

#### Q67. What is the Amazon SQS default Visibility Timeout?
- A) 0 seconds
- B) 30 seconds
- C) 12 hours
- D) 14 days

#### Q68. Can an Amazon SNS Topic deliver messages directly to an AWS Lambda function?
- A) No, SNS can only deliver to SQS queues.
- B) Yes, SNS supports native subscription targets including Lambda, SQS, HTTP endpoints, and Email.
- C) Yes, but only if Lambda is written in C++.
- D) No, Lambda cannot process events.

---

## Part 5: Storage, Frontend, & Global Delivery

#### Q69. Why CANNOT a pure Next.js Server-Side Rendered (SSR) page be hosted solely on Amazon S3?
- A) S3 does not support domain names.
- B) S3 is a static object store with no compute engine to execute Node.js server code dynamically on requests.
- C) S3 files are limited to 10 KB in size.
- D) S3 automatically deletes HTML files after 24 hours.

#### Q70. How does Incremental Static Regeneration (ISR) work in Next.js when deployed on AWS?
- A) S3 serves pre-rendered static HTML, and a background Lambda function regenerates specific pages when expired, overwriting the static file in S3/CDN.
- B) The browser renders all HTML using WebAssembly.
- C) The database regenerates its tables every 60 seconds.
- D) All pages are rendered on the user's mobile device only.

#### Q71. What S3 Storage Class offers the lowest cost storage for data that is rarely accessed and can tolerate retrieval times of several hours?
- A) S3 Standard
- B) S3 Intelligent-Tiering
- C) S3 Glacier Deep Archive
- D) S3 Standard-Infrequent Access (S3 Standard-IA)

#### Q72. What S3 feature automatically moves objects between storage classes based on access patterns or object age?
- A) S3 Versioning
- B) S3 Lifecycle Policies
- C) S3 Transfer Acceleration
- D) S3 Replication

#### Q73. What is the role of Amazon CloudFront in a web application architecture?
- A) A managed MySQL database engine.
- B) A global Content Delivery Network (CDN) that caches static assets and dynamic content at edge locations worldwide.
- C) A Docker container builder.
- D) A private VPN client for remote workers.

#### Q74. How does Amazon CloudFront reduce latency for global users visiting a site hosted in a single AWS Region?
- A) By moving the primary database closer to the user.
- B) By serving cached assets directly from the Edge Location closest to the requesting user.
- C) By increasing the internet speed of the user's ISP.
- D) By compressing all images into text files.

#### Q75. Which Amazon Route 53 routing policy directs user traffic to the AWS Region that provides the lowest network latency for that specific user?
- A) Weighted Routing
- B) Latency-Based Routing
- C) Geolocation Routing
- D) Failover Routing

#### Q76. How does Amazon Route 53 Failover Routing assist in Disaster Recovery?
- A) It automatically reboots failed EC2 instances.
- B) It routes traffic to a primary endpoint, but automatically redirects traffic to a secondary disaster recovery site if health checks fail.
- C) It creates daily database backups in S3.
- D) It emails the DevOps team when a site goes down.

#### Q77. What AWS service enables private connectivity between your VPC and AWS services (like S3) without using an Internet Gateway or NAT Gateway?
- A) AWS Direct Connect
- B) VPC Endpoints (AWS PrivateLink)
- C) Amazon Route 53
- D) AWS Transit Gateway

#### Q78. What is the maximum single object upload size supported by Amazon S3 using a single PUT operation?
- A) 100 MB
- B) 5 GB
- C) 5 TB
- D) Unlimited

#### Q79. What is the maximum total size of an individual object that can be stored in Amazon S3?
- A) 5 GB
- B) 5 TB
- C) 50 TB
- D) Unlimited

#### Q80. What feature of Amazon S3 allows you to recover accidentally deleted or overwritten files?
- A) S3 Object Lock
- B) S3 Versioning
- C) S3 CORS
- D) S3 Inventory

#### Q81. What is an S3 Presigned URL used for?
- A) Granting temporary read or write access to a private S3 object without modifying bucket permissions or requiring IAM credentials.
- B) Transferring domain names to Route 53.
- C) Encrypting database connections.
- D) Speeding up React build times.

#### Q82. How does CloudFront handle HTTPS security for custom domain names (e.g., `https://www.mysite.com`)?
- A) CloudFront integrates directly with AWS Certificate Manager (ACM) to provision and auto-renew free SSL/TLS certificates.
- B) CloudFront requires users to buy physical security dongles.
- C) CloudFront does not support HTTPS.
- D) Users must manually install certificates on every Edge Location.

#### Q83. What S3 feature must be enabled to allow a React Single Page Application (CSR) hosted on S3 to make API calls to a different domain name?
- A) S3 Transfer Acceleration
- B) Cross-Origin Resource Sharing (CORS)
- C) S3 Requester Pays
- D) S3 Analytics

#### Q84. What is the primary benefit of S3 Intelligent-Tiering?
- A) It automatically moves objects between access tiers based on changing access patterns without operational overhead or retrieval fees.
- B) It automatically rewrites code in S3 files.
- C) It converts images to WebP format automatically.
- D) It provides free unlimited storage.

---

## Part 6: DevOps, Observability & Architecture

#### Q85. What are the "Three Pillars of Observability"?
- A) Compute, Storage, and Networking
- B) Logs, Metrics, and Traces
- C) CPU, Memory, and Disk
- D) Dev, Staging, and Production

#### Q86. Which AWS service provides distributed tracing capabilities, allowing developers to track requests as they travel across microservices?
- A) Amazon CloudWatch Logs
- B) AWS X-Ray
- C) Amazon Inspector
- D) AWS CloudTrail

#### Q87. What is the core difference between Amazon CloudWatch and AWS CloudTrail?
- A) CloudWatch monitors performance metrics and application logs; CloudTrail records AWS API activity and account management audit trails.
- B) CloudWatch is for billing; CloudTrail is for running containers.
- C) CloudWatch is open-source; CloudTrail is built by Microsoft.
- D) They are identical services with different names.

#### Q88. How do Grafana and Sentry differ in their monitoring roles?
- A) Grafana provides system-level metrics visualization; Sentry provides code-level application exception and crash reporting.
- B) Grafana is for databases; Sentry is for CSS styling.
- C) Grafana replaces AWS Lambda; Sentry replaces S3.
- D) Grafana only runs on Windows; Sentry only runs on Mac.

#### Q89. What is "Infrastructure as Code" (IaC)?
- A) Writing HTML code inside server hardware.
- B) Managing and provisioning cloud infrastructure through machine-readable definition files rather than manual console clicking.
- C) Running Python scripts on local laptops without cloud connections.
- D) Using AI to write application software automatically.

#### Q90. What is the key difference between HashiCorp Terraform and AWS CDK?
- A) Terraform uses declarative configuration language (HCL); AWS CDK allows defining infrastructure using imperative programming languages (TypeScript, Python).
- B) Terraform is owned by AWS; CDK is open-source.
- C) Terraform cannot build VPCs; CDK can only build S3 buckets.
- D) CDK requires manual physical wiring in data centers.

#### Q91. In an AWS CI/CD pipeline, what service is responsible for running unit tests and compiling Docker images?
- A) AWS CodePipeline
- B) AWS CodeBuild
- C) AWS CodeDeploy
- D) AWS CodeCommit

#### Q92. What AWS CI/CD service orchestrates the workflow steps between source control, build, and deployment stages?
- A) AWS CodePipeline
- B) AWS CodeArtifact
- C) Amazon ECR
- D) AWS Cloud9

#### Q93. What is an AWS "Region"?
- A) A single physical server rack inside a data center.
- B) A physical geographic location in the world that contains multiple isolated Availability Zones (AZs).
- C) A logical grouping of IAM users.
- D) A network domain name.

#### Q94. What is an AWS "Availability Zone" (AZ)?
- A) A country boundary.
- B) One or more discrete physical data centers with independent power, cooling, and networking within a Region.
- C) A virtual folder inside an S3 bucket.
- D) A software license tier.

#### Q95. Why should production workloads be deployed across "Multi-AZ"?
- A) To increase software licensing costs.
- B) To ensure high availability and fault tolerance if a physical data center experiences an outage.
- C) To make API calls run in reverse.
- D) Multi-AZ is required by international law.

#### Q96. How many Pillars comprise the AWS Well-Architected Framework?
- A) 3
- B) 5
- C) 6
- D) 10

#### Q97. Which of the following is NOT one of the AWS Well-Architected Framework Pillars?
- A) Security
- B) Cost Optimization
- C) Monolithic Maximization
- D) Operational Excellence

#### Q98. What does the "Least Privilege" security principle dictate?
- A) Give users and services complete Administrator access by default to avoid permission errors.
- B) Grant only the minimum necessary permissions required to perform a specific task, and no more.
- C) Never grant permissions to anyone under any circumstances.
- D) Rotate passwords every 10 minutes manually.

#### Q99. What AWS service continuously monitors your AWS accounts and workloads for malicious activity and unauthorized behavior using machine learning?
- A) AWS Config
- B) Amazon GuardDuty
- C) AWS Artifact
- D) AWS Trusted Advisor

#### Q100. What AWS tool provides real-time recommendations to help you optimize cost, security, performance, and fault tolerance against AWS best practices?
- A) AWS Management Console
- B) AWS Trusted Advisor
- C) AWS CloudFormation
- D) Amazon EventBridge

---

## Answer Key & Detailed Explanations

### Part 1: Network & Security Architecture
1. **B** — *ECS Task Definitions allow native secret injection from SSM Parameter Store or Secrets Manager directly into environment variables without hardcoding.*
2. **B** — *Private subnets do not route to the public internet, preventing external bad actors from directly reaching data layers.*
3. **C** — *Public URLs resolve to API Gateway or Load Balancers acting as security guards at the VPC boundary.*
4. **B** — *Policies are JSON permission documents; Roles are temporary identities assumed by compute resources or users.*
5. **B** — *User Pools manage authentication, user registration, and issue JWT tokens.*
6. **B** — *Identity Pools exchange valid authentication tokens (JWTs) for temporary AWS IAM credentials.*
7. **B** — *AWS WAF inspects Layer 7 HTTP payloads for web exploits like SQLi and XSS.*
8. **B** — *AWS Shield provides automated DDoS defense at Layer 3/4 (Standard) and Layer 7 (Advanced).*
9. **B** — *Encryption at rest scrambles physical bits stored on underlying SSDs/disks.*
10. **C** — *KMS manages master encryption keys across AWS services.*
11. **B** — *ECS Task Roles supply temporary IAM credentials to container instances safely.*
12. **B** — *NAT Gateways enable private subnet instances to access the internet while blocking inbound traffic.*
13. **B** — *NACLs are stateless firewalls at the subnet boundary.*
14. **B** — *Security Groups are stateful firewalls at the Elastic Network Interface (ENI) level.*
15. **B** — *Secrets Manager natively handles automatic key rotation via Lambda.*
16. **C** — *HTTP clients pass authentication tokens via the standard `Authorization: Bearer <token>` header.*
17. **B** — *API Gateway enforces stage/route throttling and burst limits to protect backends.*
18. **B** — *Security Groups default to blocking all inbound traffic and allowing all outbound traffic.*

### Part 2: Compute & Microservices
19. **A** — *EC2 is IaaS (you manage VMs); Fargate is serverless compute (AWS manages host infrastructure).*
20. **B** — *ECS is a container orchestration engine for Docker containers.*
21. **B** — *Amazon ECR is the private Docker registry service in AWS.*
22. **B** — *ALB sends periodic HTTP health check ping requests to containers.*
23. **B** — *ECS automatically replaces failed tasks to maintain desired task counts.*
24. **B** — *AWS Lambda executes event-driven code without server management.*
25. **B** — *Cold starts occur when Lambda provisions a fresh execution environment upon receiving an idle request.*
26. **B** — *Provisioned Concurrency maintains pre-initialized execution environments.*
27. **C** — *Lambda execution time is capped at 15 minutes max per invocation.*
28. **B** — *Microservices must communicate via APIs or events to remain loosely coupled.*
29. **B** — *VPC Links connect API Gateway to internal ALBs/NLBs privately.*
30. **C** — *ALB is a Layer 7 Application Load Balancer inspecting HTTP/HTTPS headers.*
31. **B** — *Task Definitions serve as JSON container deployment blueprints.*
32. **B** — *ECS rolling updates launch new containers before draining old ones for zero downtime.*
33. **B** — *Allocating more RAM to Lambda automatically allocates proportional CPU power.*
34. **B** — *HTTP APIs are built for low latency and lower cost with subset REST features.*
35. **B** — *Path-based routing evaluates URL request routes.*

### Part 3: Databases & Caching
36. **C** — *DynamoDB is a fully managed NoSQL key-value/document database.*
37. **A** — *RDS PostgreSQL provides full multi-table ACID guarantees.*
38. **B** — *DynamoDB auto-scales storage and throughput horizontally.*
39. **B** — *Cart operations are simple key-value lookups ideal for DynamoDB document storage and TTL.*
40. **A** — *TTL automatically purges expired items without consuming write units.*
41. **B** — *API Gateway Caching allocates memory at the stage edge outside the VPC.*
42. **B** — *API Gateway Cache is a read-only HTTP response snapshot store.*
43. **A** — *ElastiCache provides managed in-memory caching (Redis/Valkey/Memcached).*
44. **A** — *Write-behind buffers high-speed RAM writes before background database syncing.*
45. **B** — *SQL `LIKE` causes full table scans without full-text relevance or typo handling.*
46. **B** — *Amazon OpenSearch is purpose-built for fast full-text search.*
47. **B** — *Read Replicas replicate asynchronously, introducing potential minor replication lag.*
48. **B** — *Aurora is AWS's high-performance MySQL/PostgreSQL compatible database.*
49. **B** — *GSIs allow querying non-primary key attributes efficiently.*
50. **B** — *DynamoDB hard item size limit is 400 KB.*
51. **B** — *`DECR` / `DECRBY` execute atomic decrements in Redis.*
52. **B** — *Expired TTL triggers a cache miss, pulling fresh data from the backend.*

### Part 4: Messaging & Event-Driven Design
53. **B** — *Publishing 1 SNS topic event to N SQS queues is the Fan-out pattern.*
54. **A** — *SQS queues buffer events safely during consumer outages.*
55. **B** — *Workers must issue `DeleteMessage` to confirm successful processing.*
56. **B** — *DLQs hold unprocessable "poison pill" messages for debugging.*
57. **B** — *SQS is a transient queue; Kafka is an append-only replayable event log.*
58. **B** — *EventBridge matches and routes events based on JSON rule criteria.*
59. **B** — *Standard queues offer best-effort ordering; FIFO guarantees strict order.*
60. **B** — *FIFO queues guarantee strict ordering and exactly-once processing.*
61. **C** — *SQS message retention limit is 14 days maximum.*
62. **B** — *AWS Step Functions orchestrates state machines and Sagas.*
63. **B** — *Compensation transactions undo steps if subsequent Saga steps fail.*
64. **B** — *Visibility Timeout hides in-flight messages from other workers.*
65. **B** — *Long polling waits for messages before returning, reducing empty responses/costs.*
66. **A** — *Schema Registry converts event structures directly into code objects.*
67. **B** — *Default SQS Visibility Timeout is 30 seconds.*
68. **B** — *SNS natively supports Lambda, SQS, Email, and HTTP targets.*

### Part 5: Storage, Frontend, & Global Delivery
69. **B** — *S3 is static storage; pure SSR requires Node.js compute (Lambda/ECS).*
70. **A** — *ISR regenerates static pages in background Lambda and updates S3/CDN.*
71. **C** — *S3 Glacier Deep Archive offers the lowest cost archival storage.*
72. **B** — *S3 Lifecycle Policies automate object transitions across storage tiers.*
73. **B** — *CloudFront is AWS's global Content Delivery Network.*
74. **B** — *CloudFront serves data from local global Edge Locations.*
75. **B** — *Latency-Based Routing routes users to the lowest latency Region.*
76. **B** — *Failover routing automatically redirects traffic upon health check failures.*
77. **B** — *VPC Endpoints route traffic to AWS services internally via PrivateLink.*
78. **B** — *Single PUT limit in S3 is 5 GB (use Multipart for larger).*
79. **B** — *Maximum total size of a single object in S3 is 5 TB.*
80. **B** — *S3 Versioning preserves, retrieves, and restores prior object versions.*
81. **A** — *Presigned URLs grant temporary authenticated access to private objects.*
82. **A** — *CloudFront integrates with ACM for free, managed SSL/TLS certificates.*
83. **B** — *CORS headers must be enabled for cross-domain browser API calls.*
84. **A** — *Intelligent-Tiering automatically optimizes costs for unknown access patterns.*

### Part 6: DevOps, Observability & Architecture
85. **B** — *The 3 Pillars of Observability are Logs, Metrics, and Traces.*
86. **B** — *AWS X-Ray provides end-to-end distributed transaction tracing.*
87. **A** — *CloudWatch monitors application metrics/logs; CloudTrail audits API calls.*
88. **A** — *Grafana visualizes infrastructure metrics; Sentry tracks code exceptions.*
89. **B** — *IaC provisions infrastructure declaratively/programmatically via code.*
90. **A** — *Terraform uses HCL; AWS CDK uses imperative languages like TypeScript.*
91. **B** — *AWS CodeBuild compiles code, runs tests, and creates Docker images.*
92. **A** — *AWS CodePipeline orchestrates the continuous delivery workflow.*
93. **B** — *A Region is a geographic area containing multiple isolated AZs.*
94. **B** — *An AZ consists of discrete physical data centers within a Region.*
95. **B** — *Multi-AZ deployment ensures fault tolerance against data center outages.*
96. **C** — *The Well-Architected Framework consists of 6 Pillars.*
97. **C** — *Monolithic Maximization is not a pillar.*
98. **B** — *Least Privilege grants only the minimal permissions required for tasks.*
99. **B** — *Amazon GuardDuty provides ML-driven threat detection and monitoring.*
100. **B** — *AWS Trusted Advisor gives real-time best practice recommendations.*
