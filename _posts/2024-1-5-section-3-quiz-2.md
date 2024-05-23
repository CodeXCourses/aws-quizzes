---
layout: posts
title: 'Section 3 Quiz-2'
section: Section-3
lesson: 2
---

<!-- Content Covered Lesson-5 of Section-3 -->

## Question 1:

What is the primary purpose of Amazon EC2?

- A) Hosting static websites
  - Incorrect: This can be done using Amazon S3.
- B) Renting virtual computers for various applications
  - Correct: EC2 allows you to rent virtual computers over the internet, providing flexibility and scalability for your computing needs.
- C) Providing a database service
  - Incorrect: This is the function of Amazon RDS.
- D) Managing DNS services
  - Incorrect: This is the function of Amazon Route 53.

<!-- pagebreak -->

## Question 2:

What is the first step in launching an EC2 instance?

- A) Installing a web server
  - Incorrect: This is done after launching the instance.
- B) Creating a key pair for secure SSH access
  - Incorrect: This is part of the launch process but not the first step.
- C) Accessing EC2 services
  - Correct: The first step involves accessing EC2 services from the AWS Management Console.
- D) Configuring security groups
  - Incorrect: This is part of the instance setup process.

<!-- pagebreak -->

## Question 3:

What is the purpose of creating a key pair when launching an EC2 instance?

- A) To configure security groups
  - Incorrect: Security groups are configured separately.
- B) To secure login information for SSH access
  - Correct: A key pair is created to provide secure SSH access to the EC2 instance.
- C) To set up network interfaces
  - Incorrect: Network interfaces are configured separately.
- D) To launch multiple instances
  - Incorrect: The key pair is not related to launching multiple instances.

<!-- pagebreak -->

## Question 4:

Which web server is commonly installed to serve a basic `index.html` file on an EC2 instance?

- A) Nginx
  - Incorrect: While Nginx can be used, the lesson specifically mentions Apache.
- B) Apache
  - Correct: Apache is commonly installed to serve a basic `index.html` file.
- C) IIS
  - Incorrect: IIS is a web server used in Windows environments.
- D) Lighttpd
  - Incorrect: Lighttpd is less commonly used compared to Apache.

<!-- pagebreak -->

## Question 5:

Which type of EC2 instance is best suited for memory-intensive workloads?

- A) General Purpose Instances
  - Incorrect: These offer a balance of resources.
- B) Compute Optimized Instances
  - Incorrect: These are designed for compute-intensive applications.
- C) Memory Optimized Instances
  - Correct: Memory Optimized Instances are ideal for memory-intensive workloads.
- D) Storage Optimized Instances
  - Incorrect: These are designed for high-throughput and low-latency access to data.

<!-- pagebreak -->

## Question 6:

What is the primary function of security groups in AWS EC2?

- A) They provide persistent storage.
  - Incorrect: EBS provides persistent storage.
- B) They act as virtual firewalls.
  - Correct: Security groups act as virtual firewalls that control both inbound and outbound traffic to an EC2 instance.
- C) They manage user permissions.
  - Incorrect: IAM manages user permissions.
- D) They monitor EC2 instance health.
  - Incorrect: Health monitoring is done through CloudWatch.

<!-- pagebreak -->

## Question 7:

Which of the following describes the process of connecting to an EC2 instance using SSH?

- A) Using a key pair to securely access the instance
  - Correct: Connecting via SSH involves using a key pair for secure access.
- B) Configuring security groups
  - Incorrect: This is part of the setup process but not specific to SSH.
- C) Installing a web server
  - Incorrect: This is done after connecting.
- D) Creating an IAM role
  - Incorrect: IAM roles are related to permissions but not specific to SSH access.

<!-- pagebreak -->

## Question 8:

Which EC2 instance purchasing option offers the greatest flexibility without long-term commitment?

- A) On-Demand Instances
  - Correct: On-Demand Instances offer the greatest flexibility without requiring a long-term commitment.
- B) Reserved Instances
  - Incorrect: These are for long-term use with significant savings.
- C) Spot Instances
  - Incorrect: These are for short-duration workloads with cost savings.
- D) Dedicated Hosts
  - Incorrect: These are for regulatory compliance and control over instance placement.

<!-- pagebreak -->

## Question 9:

What is the primary advantage of using Spot Instances?

- A) Guaranteed availability
  - Incorrect: Spot Instances can be terminated by AWS with short notice.
- B) Highest cost savings for short-duration workloads
  - Correct: Spot Instances offer the highest cost savings for short-duration workloads.
- C) Ability to change instance type
  - Incorrect: This is a feature of Convertible Reserved Instances.
- D) Persistent storage
  - Incorrect: This is not specific to Spot Instances.

<!-- pagebreak -->

## Question 10:

Which EC2 instance type is optimized for high network throughput and low latency?

- A) General Purpose Instances
  - Incorrect: These offer a balance of resources.
- B) Compute Optimized Instances
  - Incorrect: These are designed for compute-intensive applications.
- C) Memory Optimized Instances
  - Incorrect: These are for memory-intensive workloads.
- D) Networking Optimized Instances
  - Correct: Networking Optimized Instances are designed for high network throughput and low latency.
