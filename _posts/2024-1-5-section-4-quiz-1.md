---
layout: posts
title: 'Section 4 Quiz-1'
section: Section-4
lesson: 1
---

<!-- Content Covered Lesson-1, Lesson-2, Lesson-3, Lesson-4, Lesson-5, Lesson-6, Lesson-7, Lesson-8, Lesson-9 of Section-4 -->

## Question 1:

What is the primary function of Amazon Elastic Block Store (EBS)?

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

What happens to an EBS volume when the "Delete on Termination" setting is enabled?

- A) The volume is automatically detached from the instance
  - Incorrect: The volume is not simply detached; it is deleted.
- B) The volume is automatically deleted when the instance is terminated
  - Correct: "Delete on Termination" ensures the volume is deleted with the instance.
- C) The volume is backed up to S3
  - Incorrect: This is not related to the "Delete on Termination" setting.
- D) The volume is archived for future use
  - Incorrect: The volume is deleted, not archived.

<!-- pagebreak -->

## Question 3:

Which feature of EBS allows for point-in-time backups of volumes?

- A) EBS Replication
  - Incorrect: EBS does not have a feature called replication for backups.
- B) EBS Snapshots
  - Correct: EBS Snapshots allow for point-in-time backups.
- C) EBS Archiving
  - Incorrect: Archiving is not a primary feature of EBS.
- D) EBS Mirroring
  - Incorrect: EBS does not use mirroring for backups.

<!-- pagebreak -->

## Question 4:

What is the benefit of using the EBS Snapshot Archive?

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

Which AWS service simplifies the creation, management, and deployment of custom AMIs?

- A) Amazon EC2
  - Incorrect: EC2 runs instances but does not simplify AMI creation.
- B) AWS Lambda
  - Incorrect: Lambda is for serverless functions, not AMI creation.
- C) EC2 Image Builder
  - Correct: EC2 Image Builder automates the creation and management of custom AMIs.
- D) AWS CloudFormation
  - Incorrect: CloudFormation is for managing AWS resources using templates.

<!-- pagebreak -->

## Question 6:

Which type of storage is ephemeral and loses data if the instance is stopped or terminated?

- A) Amazon EFS
  - Incorrect: EFS is persistent file storage.
- B) Amazon S3
  - Incorrect: S3 is persistent object storage.
- C) EC2 Instance Store
  - Correct: Instance store is ephemeral and loses data when the instance stops.
- D) Amazon RDS
  - Incorrect: RDS is a managed database service with persistent storage.

<!-- pagebreak -->

## Question 7:

Which performance mode of Amazon EFS is suitable for general-purpose file storage and web serving?

- A) Max I/O
  - Incorrect: Max I/O is for large-scale, high-throughput applications.
- B) General Purpose
  - Correct: General Purpose is ideal for general file storage and web serving.
- C) Provisioned Throughput
  - Incorrect: This is not a performance mode but a throughput option.
- D) Bursting Throughput
  - Incorrect: This is a throughput option, not a performance mode.

<!-- pagebreak -->

## Question 8:

What is a key feature of Amazon EFS Infrequent Access (EFS-IA)?

- A) Higher performance than standard EFS
  - Incorrect: EFS-IA is not about higher performance.
- B) Lower storage costs for infrequently accessed files
  - Correct: EFS-IA offers cost-effective storage for less frequently accessed files.
- C) Automated backup to S3
  - Incorrect: EFS-IA does not automatically back up to S3.
- D) Enhanced data availability
  - Incorrect: The focus is on cost savings, not enhanced availability.

<!-- pagebreak -->

## Question 9:

Which variant of Amazon FSx is optimized for Windows-based applications?

- A) FSx for Lustre
  - Incorrect: Lustre is optimized for high-performance computing, not Windows.
- B) FSx for NFS
  - Incorrect: FSx for NFS is not a variant offered by AWS.
- C) FSx for Windows File Server
  - Correct: FSx for Windows File Server is optimized for Windows-based applications.
- D) FSx for NetApp
  - Incorrect: FSx for NetApp is not a variant offered by AWS.

<!-- pagebreak -->

## Question 10:

Which service is best for managing temporary high-performance storage for EC2 instances?

- A) Amazon EBS
  - Incorrect: EBS is persistent storage.
- B) Amazon S3
  - Incorrect: S3 is persistent object storage.
- C) EC2 Instance Store
  - Correct: EC2 Instance Store is for temporary high-performance storage.
- D) Amazon EFS
  - Incorrect: EFS is persistent file storage.
