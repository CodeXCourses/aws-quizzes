---
layout: posts
title: 'Section 2 Quiz-1'
section: Section-2
lesson: 1
---

<!-- Content Covered Lesson-1, Lesson-5 of Section-2 -->

## Question 1:

What is the primary purpose of Amazon S3?

- A) To provide block storage for EC2 instances

  - Incorrect: Amazon S3 is an object storage service, not a block storage service.

- B) To host databases

  - Incorrect: Amazon S3 is not intended for hosting databases, although it can store database backups.

- C) To provide scalable object storage with high durability and availability

  - Correct: Amazon S3 is designed to offer scalable object storage with 99.999999999% durability and 99.99% availability.

- D) To run serverless applications
  - Incorrect: S3 is used for storage, not for running serverless applications.
  <!-- pagebreak -->

## Question 2:

Which Amazon S3 storage class is ideal for data that is accessed frequently?

- A) S3 Standard

  - Correct: S3 Standard is designed for frequently accessed data.

- B) S3 Standard-IA

  - Incorrect: S3 Standard-IA is for infrequently accessed data.

- C) S3 Glacier

  - Incorrect: S3 Glacier is designed for archival storage.

- D) S3 One Zone-IA
  - Incorrect: S3 One Zone-IA is for infrequently accessed data stored in a single Availability Zone.
  <!-- pagebreak -->

## Question 3:

What does Amazon S3 use to ensure high durability of data?

- A) Replication to a single data center

  - Incorrect: Amazon S3 replicates data across multiple Availability Zones, not just a single data center.

- B) Frequent backups to on-premises storage

  - Incorrect: Data is replicated within AWS infrastructure, not backed up to on-premises storage.

- C) Replication across multiple Availability Zones

  - Correct: Amazon S3 ensures high durability by replicating data across multiple Availability Zones.

- D) Storing data in a single Availability Zone
  - Incorrect: Storing data in a single Availability Zone does not ensure high durability.
  <!-- pagebreak -->

## Question 4:

Which feature of Amazon S3 allows you to manage access to buckets and objects?

- A) Elastic Load Balancer

  - Incorrect: Elastic Load Balancer is used for distributing incoming application traffic across multiple targets.

- B) IAM Policies and Bucket Policies

  - Correct: IAM Policies and Bucket Policies are used to manage access to S3 buckets and objects.

- C) Auto Scaling

  - Incorrect: Auto Scaling is used for dynamically adjusting the number of EC2 instances.

- D) VPC Peering
  - Incorrect: VPC Peering is used to connect VPCs, not for managing access to S3 buckets.
  <!-- pagebreak -->

## Question 5:

How can you enforce encryption of objects uploaded to an S3 bucket?

- A) By using AWS Lambda

  - Incorrect: AWS Lambda is used for running code in response to events, not directly for enforcing S3 encryption.

- B) By configuring an EC2 instance

  - Incorrect: EC2 instance configuration does not directly enforce S3 bucket encryption.

- C) By setting a bucket policy

  - Correct: You can enforce encryption of objects by setting a bucket policy that requires encryption.

- D) By using AWS CloudTrail
  - Incorrect: AWS CloudTrail is used for logging and monitoring API calls, not for enforcing encryption.
  <!-- pagebreak -->

## Question 6:

Which Amazon S3 feature enables the recovery of deleted or overwritten objects?

- A) Transfer Acceleration

  - Incorrect: Transfer Acceleration speeds up data transfer to and from S3.

- B) Versioning

  - Correct: Versioning allows the recovery of deleted or overwritten objects.

- C) Lifecycle Policies

  - Incorrect: Lifecycle Policies manage the transition of objects between different storage classes.

- D) Object Lock
  - Incorrect: Object Lock is used to prevent objects from being deleted or overwritten, not to recover them.
  <!-- pagebreak -->

## Question 7:

What is a primary benefit of using S3 Transfer Acceleration?

- A) Reduces storage costs

  - Incorrect: S3 Transfer Acceleration does not reduce storage costs but increases data transfer speed.

- B) Provides additional security features

  - Incorrect: While S3 Transfer Acceleration is secure, its primary benefit is speed, not additional security features.

- C) Speeds up uploads and downloads to S3

  - Correct: S3 Transfer Acceleration uses Amazon CloudFront's globally distributed edge locations to speed up data transfer.

- D) Simplifies data management
  - Incorrect: S3 Transfer Acceleration is focused on speeding up data transfers, not on simplifying data management.
  <!-- pagebreak -->

## Question 8:

Which S3 storage class is best suited for long-term archival with infrequent access?

- A) S3 Standard

  - Incorrect: S3 Standard is for frequently accessed data.

- B) S3 Glacier

  - Correct: S3 Glacier is designed for long-term archival storage with infrequent access.

- C) S3 Intelligent-Tiering

  - Incorrect: S3 Intelligent-Tiering automatically moves data between access tiers but is not specifically for long-term archival.

- D) S3 Standard-IA
  - Incorrect: S3 Standard-IA is for infrequently accessed data that requires rapid access.
  <!-- pagebreak -->

## Question 9:

What is the purpose of S3 Lifecycle Policies?

- A) To replicate objects across regions

  - Incorrect: Lifecycle Policies are not used for replication.

- B) To automatically transition objects to different storage classes

  - Correct: S3 Lifecycle Policies manage the automatic transition of objects between different storage classes based on specified criteria.

- C) To control access to S3 objects

  - Incorrect: Access control is managed by IAM Policies and Bucket Policies, not Lifecycle Policies.

- D) To delete objects immediately after creation
  - Incorrect: Lifecycle Policies do not immediately delete objects; they manage their lifecycle over time.
  <!-- pagebreak -->

## Question 10:

How does Amazon S3 ensure data security in transit?

- A) By using data compression

  - Incorrect: Compression does not ensure data security in transit.

- B) By using IAM roles

  - Incorrect: IAM roles manage access permissions but do not directly secure data in transit.

- C) By using HTTPS

  - Correct: Amazon S3 uses HTTPS to encrypt data in transit.

- D) By using firewalls
  - Incorrect: Firewalls help in managing network security but do not directly encrypt data in transit.
