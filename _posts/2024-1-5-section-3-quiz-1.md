---
layout: posts
title: 'Section 3 Quiz-1'
section: Section-3
lesson: 1
---

<!-- Content Covered Lesson-1 to Lesson-4 of Section-3 -->

## Question 1:

What is Amazon EC2 primarily used for?

- A) Running serverless functions
  - Incorrect: This is the function of AWS Lambda.
- B) Renting virtual computers to run applications
  - Correct: EC2 allows users to rent virtual computers to run their applications.
- C) Hosting relational databases
  - Incorrect: This is the function of Amazon RDS.
- D) Providing a content delivery network
  - Incorrect: This is the function of Amazon CloudFront.

<!-- pagebreak -->

## Question 2:

Which of the following is a key benefit of using Amazon EC2?

- A) Only paying for the compute time used
  - Correct: EC2's cost-effectiveness comes from paying only for the compute time used.
- B) Guaranteed uptime of 100%
  - Incorrect: No service guarantees 100% uptime.
- C) Free tier for unlimited use
  - Incorrect: The free tier is limited.
- D) Automatic compliance with all regulations
  - Incorrect: Compliance requires specific configurations and settings.

<!-- pagebreak -->

## Question 3:

What role do security groups play in AWS EC2?

- A) They manage user permissions within the AWS Management Console.
  - Incorrect: This is the role of IAM.
- B) They act as virtual firewalls to control traffic to EC2 instances.
  - Correct: Security groups control inbound and outbound traffic to EC2 instances.
- C) They provide automatic backups for EC2 instances.
  - Incorrect: Backups are managed by EBS snapshots or other services.
- D) They monitor EC2 instance health.
  - Incorrect: Health monitoring is done through CloudWatch.

<!-- pagebreak -->

## Question 4:

What is the default behavior of outbound rules in EC2 security groups?

- A) Block all outbound traffic
  - Incorrect: This is not the default setting.
- B) Allow all outbound traffic
  - Correct: By default, most security groups allow all outbound traffic.
- C) Allow only HTTP and HTTPS traffic
  - Incorrect: This is not the default setting.
- D) Allow only traffic within the VPC
  - Incorrect: This is not the default setting.

<!-- pagebreak -->

## Question 5:

Which type of EC2 instance is ideal for applications requiring high memory to CPU ratio?

- A) General Purpose Instances
  - Incorrect: These are balanced in terms of resources.
- B) Compute Optimized Instances
  - Incorrect: These are designed for compute-intensive applications.
- C) Memory Optimized Instances
  - Correct: Memory optimized instances are ideal for applications requiring high memory to CPU ratio.
- D) Storage Optimized Instances
  - Incorrect: These are designed for high-throughput and low-latency access to data.

<!-- pagebreak -->

## Question 6:

Which EC2 instance purchasing option is best for workloads with predictable usage patterns over a long period?

- A) On-Demand Instances
  - Incorrect: These are best for short workloads.
- B) Spot Instances
  - Incorrect: These are best for short-duration workloads with cost savings.
- C) Reserved Instances
  - Correct: Reserved Instances are suitable for long-term, predictable workloads.
- D) Dedicated Hosts
  - Incorrect: These are for regulatory compliance and control over instance placement.

<!-- pagebreak -->

## Question 7:

What is the main advantage of using Spot Instances?

- A) Guaranteed instance availability
  - Incorrect: Spot Instances can be terminated by AWS with short notice.
- B) Highest cost savings for short-duration workloads
  - Correct: Spot Instances offer the highest cost savings for short-duration workloads.
- C) Ability to change instance type during the reservation period
  - Incorrect: This is a feature of Convertible Reserved Instances.
- D) Persistent storage through EBS
  - Incorrect: This is not specific to Spot Instances.

<!-- pagebreak -->

## Question 8:

Which of the following is true about EC2 Dedicated Hosts?

- A) They offer the lowest cost option for EC2 instances
  - Incorrect: Dedicated Hosts are typically more expensive due to the dedicated hardware.
- B) They allow booking of an entire physical server for regulatory compliance
  - Correct: Dedicated Hosts allow booking of an entire physical server, useful for compliance.
- C) They are designed for applications with high network throughput
  - Incorrect: This describes Networking Optimized Instances.
- D) They automatically scale with traffic
  - Incorrect: Scaling is managed through Auto Scaling Groups.

<!-- pagebreak -->

## Question 9:

Which instance type family is suitable for applications that require high-throughput and low-latency access to data?

- A) General Purpose Instances
  - Incorrect: These offer a balance of resources.
- B) Compute Optimized Instances
  - Incorrect: These are designed for compute-bound applications.
- C) Memory Optimized Instances
  - Incorrect: These are for memory-intensive workloads.
- D) Storage Optimized Instances
  - Correct: Storage Optimized Instances are designed for high-throughput and low-latency access to data.

<!-- pagebreak -->

## Question 10:

What is a key feature of the Application Load Balancer (ALB) in AWS?

- A) It operates at the transport layer (Layer 4).
  - Incorrect: This describes the Network Load Balancer (NLB).
- B) It supports content-based routing.
  - Correct: ALB operates at the application layer (Layer 7) and supports content-based routing.
- C) It can handle millions of requests per second.
  - Incorrect: This is a feature of the Network Load Balancer (NLB).
- D) It is the original load balancer offered by AWS.
  - Incorrect: This describes the Classic Load Balancer (CLB).
