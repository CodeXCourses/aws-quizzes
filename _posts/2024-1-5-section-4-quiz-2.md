---
layout: posts
title: 'Section 4 Quiz-2'
section: Section-4
lesson: 2
---

<!-- Content Covered Lesson-10 of Section-4 -->

## Question 1:

What is the primary purpose of Amazon Elastic Block Store (EBS)?

- A) To provide scalable file storage for multiple EC2 instances
  - Incorrect: This describes Amazon EFS, not EBS.
- B) To provide high-performance block storage for EC2 instances
  - Correct: EBS is designed for high-performance block storage for EC2.
- C) To distribute incoming traffic across multiple EC2 instances
  - Incorrect: This is the function of an Elastic Load Balancer (ELB).
- D) To provide a fully managed database service
  - Incorrect: This describes Amazon RDS, not EBS.

<!-- pagebreak -->

## Question 2:

What does the "Delete on Termination" setting do in Amazon EBS?

- A) Automatically detaches the volume from the instance
  - Incorrect: The volume is not simply detached; it is deleted.
- B) Automatically deletes the volume when the instance is terminated
  - Correct: "Delete on Termination" ensures the volume is deleted with the instance.
- C) Backs up the volume to S3
  - Incorrect: This is not related to the "Delete on Termination" setting.
- D) Archives the volume for future use
  - Incorrect: The volume is deleted, not archived.

<!-- pagebreak -->

## Question 3:

What is an EBS Snapshot?

- A) A real-time replication of an EBS volume
  - Incorrect: Snapshots are point-in-time backups, not real-time replications.
- B) A point-in-time backup of an EBS volume
  - Correct: Snapshots capture the state of an EBS volume at a specific point in time.
- C) A copy of an EC2 instance configuration
  - Incorrect: This describes an AMI, not an EBS Snapshot.
- D) An automated scaling configuration for EBS volumes
  - Incorrect: Snapshots are for backups, not scaling.

<!-- pagebreak -->

## Question 4:

What is the benefit of the EBS Snapshot Archive?

- A) Faster snapshot creation
  - Incorrect: The archive does not affect snapshot creation speed.
- B) Lower storage costs for infrequently accessed snapshots
  - Correct: The archive offers 75% cheaper storage for infrequently accessed snapshots.
- C) Improved data availability
  - Incorrect: The primary benefit is cost reduction, not availability.
- D) Instantaneous data recovery
  - Incorrect: Data recovery from the archive takes longer.

<!-- pagebreak -->

## Question 5:

What is an Amazon Machine Image (AMI)?

- A) A template for creating EC2 instances
  - Correct: An AMI is a pre-configured template for creating EC2 instances.
- B) A backup of an EBS volume
  - Incorrect: This describes an EBS Snapshot, not an AMI.
- C) A type of EC2 instance storage
  - Incorrect: An AMI is not a type of storage; it's a template.
- D) A service for scaling EC2 instances
  - Incorrect: An AMI is a template, not a scaling service.

<!-- pagebreak -->

## Question 6:

What is the role of EC2 Image Builder?

- A) To automate the creation, testing, and distribution of custom AMIs
  - Correct: EC2 Image Builder automates the entire lifecycle of custom AMIs.
- B) To manage block-level storage for EC2 instances
  - Incorrect: This describes EBS, not EC2 Image Builder.
- C) To distribute incoming traffic across multiple EC2 instances
  - Incorrect: This describes an ELB, not EC2 Image Builder.
- D) To provide ephemeral storage for EC2 instances
  - Incorrect: This describes an EC2 Instance Store, not EC2 Image Builder.

<!-- pagebreak -->

## Question 7:

What is a characteristic of EC2 instance store?

- A) It provides persistent storage across instance reboots
  - Incorrect: Instance store data is lost when the instance stops or terminates.
- B) It offers high throughput and low latency
  - Correct: Instance store offers high performance for temporary data.
- C) It can be attached to multiple EC2 instances simultaneously
  - Incorrect: This is a feature of EBS Multi-Attach, not instance store.
- D) It automatically backs up data to Amazon S3
  - Incorrect: Instance store does not have automatic backups to S3.

<!-- pagebreak -->

## Question 8:

What is a key feature of Amazon Elastic File System (EFS)?

- A) It provides block-level storage for EC2 instances
  - Incorrect: This describes EBS, not EFS.
- B) It offers a shared file system accessible by multiple instances
  - Correct: EFS provides a scalable and shared file system for multiple instances.
- C) It is designed for high-performance computing tasks
  - Incorrect: This describes FSx for Lustre, not EFS.
- D) It provides automatic load balancing for web applications
  - Incorrect: This is a feature of ELB, not EFS.

<!-- pagebreak -->

## Question 9:

What is the primary benefit of Amazon EFS Infrequent Access (EFS-IA)?

- A) Higher performance for frequently accessed files
  - Incorrect: EFS-IA is for infrequently accessed files, not higher performance.
- B) Lower storage costs for infrequently accessed files
  - Correct: EFS-IA offers cost-effective storage for files not accessed frequently.
- C) Improved data replication across regions
  - Incorrect: EFS-IA focuses on cost savings, not cross-region replication.
- D) Automated scaling of compute resources
  - Incorrect: EFS-IA deals with storage, not compute scaling.

<!-- pagebreak -->

## Question 10:

Which variant of Amazon FSx is optimized for high-performance computing?

- A) FSx for Windows File Server
  - Incorrect: This is optimized for Windows-based applications.
- B) FSx for Lustre
  - Correct: FSx for Lustre is designed for high-performance computing.
- C) FSx for NFS
  - Incorrect: FSx for NFS is not a variant offered by AWS.
- D) FSx for NetApp
  - Incorrect: FSx for NetApp is not a variant offered by AWS.
