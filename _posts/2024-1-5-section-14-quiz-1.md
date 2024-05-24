---
layout: posts
title: 'Section 14 Quiz-1'
section: Section-14
lesson: 1
---

## Question 1

What is AWS responsible for in the shared responsibility model?

- A) Protecting the guest operating system and application data
  - Incorrect: Protecting the guest operating system and application data is the customer's responsibility.
- B) Managing customer data and encryption keys
  - Incorrect: Managing customer data and encryption keys is the customer's responsibility.
- C) Securing the infrastructure that runs AWS services
  - Correct: AWS is responsible for securing the infrastructure that includes hardware, software, networking, and facilities.
- D) Configuring security groups and network firewalls
  - Incorrect: Configuring security groups and network firewalls is the customer's responsibility.

<!-- pagebreak -->

## Question 2

Which of the following is a responsibility of the customer in the AWS shared responsibility model?

- A) Physical security of the facilities
  - Incorrect: Physical security of the facilities is managed by AWS.
- B) Management of the guest operating system
  - Correct: Customers are responsible for managing the guest OS, including updates and security patches.
- C) Security of the cloud infrastructure
  - Incorrect: AWS is responsible for securing the cloud infrastructure.
- D) Managing the virtualization layer
  - Incorrect: AWS manages and controls the virtualization layer.

<!-- pagebreak -->

## Question 3

In Amazon EC2, who is responsible for data encryption?

- A) AWS
  - Incorrect: AWS provides the tools, but data encryption is the customer's responsibility.
- B) Customer
  - Correct: The customer is responsible for encrypting application data.
- C) Both AWS and the customer
  - Incorrect: While AWS provides the tools, the customer must implement encryption.
- D) Neither AWS nor the customer
  - Incorrect: The customer must ensure data encryption.

<!-- pagebreak -->

## Question 4

What does AWS manage in the context of Amazon RDS?

- A) Database security groups and rules
  - Incorrect: This is managed by the customer.
- B) Automated database patching
  - Correct: AWS is responsible for automated database patching.
- C) In-database user creation and permissions
  - Incorrect: This is the responsibility of the customer.
- D) Configuring databases to allow only SSL connections
  - Incorrect: The customer is responsible for configuring SSL connections.

<!-- pagebreak -->

## Question 5

What is an example of a shared control between AWS and the customer?

- A) Physical security
  - Incorrect: Physical security is an AWS responsibility.
- B) Awareness and training
  - Correct: Both AWS and the customer manage their own training programs.
- C) Guest operating system management
  - Incorrect: This is solely the customer's responsibility.
- D) Network infrastructure management
  - Incorrect: Network infrastructure management is an AWS responsibility.

<!-- pagebreak -->

## Question 6

Which AWS service automatically handles encryption for archived data?

- A) Amazon S3
  - Incorrect: S3 requires enabling encryption for buckets.
- B) Amazon RDS
  - Incorrect: RDS requires activation of encryption.
- C) Amazon S3 Glacier
  - Correct: Encryption is standard for archived data in S3 Glacier.
- D) Amazon EBS
  - Incorrect: EBS requires enabling encryption for volumes.

<!-- pagebreak -->

## Question 7

Who is responsible for managing IAM users and roles in AWS S3?

- A) AWS
  - Incorrect: AWS does not manage IAM users and roles for customers.
- B) Customer
  - Correct: The customer is responsible for managing IAM users and roles.
- C) Both AWS and the customer
  - Incorrect: Only the customer manages IAM users and roles.
- D) Neither AWS nor the customer
  - Incorrect: The customer must manage IAM users and roles.

<!-- pagebreak -->

## Question 8

For the exam, which service is known for automatically encrypting its logs?

- A) Amazon EC2
  - Incorrect: EC2 does not automatically encrypt its logs.
- B) AWS CloudTrail
  - Correct: CloudTrail logs are automatically encrypted.
- C) Amazon RDS
  - Incorrect: RDS requires activation of encryption.
- D) Amazon S3
  - Incorrect: S3 does not automatically encrypt logs; encryption must be enabled.

<!-- pagebreak -->

## Question 9

What must customers configure for security in Amazon S3?

- A) Data separation between customers
  - Incorrect: This is managed by AWS.
- B) Bucket configuration and policy settings
  - Correct: Customers are responsible for bucket configurations and policies.
- C) Ensuring data encryption
  - Incorrect: AWS ensures data encryption; customers need to enable it for their buckets.
- D) Physical security of storage facilities
  - Incorrect: Physical security is managed by AWS.

<!-- pagebreak -->

## Question 10

Who is responsible for managing the network firewall configurations in Amazon EC2?

- A) AWS
  - Incorrect: AWS does not manage network firewall configurations for customer instances.
- B) Customer
  - Correct: Customers are responsible for configuring network firewalls.
- C) Both AWS and the customer
  - Incorrect: Only the customer manages network firewall configurations.
- D) Neither AWS nor the customer
  - Incorrect: Customers must manage their network firewall configurations.
