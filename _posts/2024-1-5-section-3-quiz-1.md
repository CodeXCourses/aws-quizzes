---
layout: posts
title: 'Section 3 Quiz-1'
section: Section-3
lesson: 1
---

<!-- Content Covered Lesson-1, Lesson-3 of Section-3 -->

## Question 1:

What is Amazon EC2 primarily used for?

- A) Object storage

  - Incorrect: Amazon EC2 is used for compute capacity, not object storage.

- B) Running virtual servers

  - Correct: Amazon EC2 is used to rent virtual computers on which users can run their own applications.

- C) Database hosting
  - Incorrect: While EC2 can host databases, its primary function is providing virtual servers.
- D) Content delivery
  - Incorrect: Amazon EC2 is not primarily used for content delivery.
  <!-- pagebreak -->

## Question 2:

Which feature of EC2 allows you to scale computing capacity up or down within minutes?

- A) Elastic Block Store

  - Incorrect: Elastic Block Store (EBS) provides storage for EC2 instances but does not handle scaling.

- B) Auto Scaling

  - Correct: Auto Scaling allows you to automatically increase or decrease capacity within minutes.

- C) Elastic Load Balancing
  - Incorrect: Elastic Load Balancing distributes incoming traffic across multiple EC2 instances but does not directly scale them.
- D) AWS Lambda
  - Incorrect: AWS Lambda is used for serverless computing, not scaling EC2 instances.
  <!-- pagebreak -->

## Question 3:

What type of storage does EC2 provide for persistent data?

- A) Instance Store

  - Incorrect: Instance Store provides temporary storage that is lost when the instance is stopped or terminated.

- B) Elastic Block Store (EBS)

  - Correct: EBS provides persistent block storage that remains even after the instance is terminated.

- C) S3
  - Incorrect: S3 is an object storage service, not specifically for EC2 instance storage.
- D) Glacier
  - Incorrect: Glacier is an archival storage service, not used for storing persistent data on EC2 instances.
  <!-- pagebreak -->

## Question 4:

Which EC2 instance type is best suited for compute-bound applications?

- A) General Purpose Instances

  - Incorrect: General Purpose Instances provide a balance of compute, memory, and networking resources.

- B) Compute Optimized Instances

  - Correct: Compute Optimized Instances are designed for applications that need high compute power.

- C) Memory Optimized Instances
  - Incorrect: Memory Optimized Instances are best for memory-intensive applications.
- D) Storage Optimized Instances
  - Incorrect: Storage Optimized Instances are designed for high-throughput and low-latency access to data.
  <!-- pagebreak -->

## Question 5:

What is the purpose of a security group in AWS EC2?

- A) To manage user access to the AWS Management Console

  - Incorrect: IAM policies manage user access to the AWS Management Console.

- B) To define network traffic rules for EC2 instances

  - Correct: Security groups act as virtual firewalls to control inbound and outbound traffic to EC2 instances.

- C) To encrypt data at rest
  - Incorrect: Security groups do not handle data encryption; this is managed by EBS and other services.
- D) To monitor application performance
  - Incorrect: Security groups are not used for monitoring performance.
  <!-- pagebreak -->

## Question 6:

How can you allow only specific IP addresses to access your EC2 instance?

- A) By configuring Auto Scaling

  - Incorrect: Auto Scaling manages the number of instances, not access control.

- B) By setting rules in the security group

  - Correct: Security groups allow you to specify rules to permit or deny access based on IP addresses.

- C) By using Elastic Load Balancing
  - Incorrect: Elastic Load Balancing distributes traffic but does not handle IP-based access control.
- D) By creating an IAM role
  - Incorrect: IAM roles are used for granting permissions to AWS services, not for controlling network traffic to EC2 instances.
  <!-- pagebreak -->

## Question 7:

Which EC2 instance type is designed for applications that process large datasets in memory?

- A) General Purpose Instances

  - Incorrect: General Purpose Instances provide a balance of resources.

- B) Compute Optimized Instances

  - Incorrect: Compute Optimized Instances are designed for compute-bound applications.

- C) Memory Optimized Instances

  - Correct: Memory Optimized Instances are ideal for memory-intensive applications.

- D) Storage Optimized Instances
  - Incorrect: Storage Optimized Instances are for high-throughput data access.
  <!-- pagebreak -->

## Question 8:

What is the default setting for outbound traffic in a security group?

- A) Denied

  - Incorrect: By default, security groups allow all outbound traffic.

- B) Allowed

  - Correct: By default, security groups allow all outbound traffic.

- C) Restricted to specific ports
  - Incorrect: The default setting is to allow all outbound traffic, not restrict it to specific ports.
- D) Restricted to specific IP addresses
  - Incorrect: The default setting is to allow all outbound traffic, not restrict it to specific IP addresses.
  <!-- pagebreak -->

## Question 9:

What kind of storage is ephemeral and is lost when an EC2 instance is stopped or terminated?

- A) S3

  - Incorrect: S3 is a persistent object storage service.

- B) EBS

  - Incorrect: EBS provides persistent block storage.

- C) Instance Store

  - Correct: Instance Store provides temporary block-level storage that is lost when the instance is stopped or terminated.

- D) Glacier
  - Incorrect: Glacier is used for archival storage, not temporary storage.
  <!-- pagebreak -->

## Question 10:

Which instance type would you choose for a high-performance computing (HPC) application?

- A) General Purpose Instances

  - Incorrect: General Purpose Instances are suitable for a variety of workloads but not specifically optimized for HPC.

- B) Compute Optimized Instances

  - Correct: Compute Optimized Instances are designed for applications requiring high compute power, such as HPC.

- C) Memory Optimized Instances
  - Incorrect: Memory Optimized Instances are better suited for memory-intensive applications.
- D) Storage Optimized Instances
  - Incorrect: Storage Optimized Instances are designed for high-throughput data access, not HPC.
