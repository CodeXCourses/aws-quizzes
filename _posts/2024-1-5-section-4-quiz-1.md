---
layout: posts
title: 'Section 4 Quiz-1'
section: Section-4
lesson: 1
---

<!-- Content Covered Lesson-1, Lesson-5 of Section-4 -->

## Question 1:

What is Amazon Elastic Block Store (EBS) primarily used for?

- A) Object storage

  - Incorrect: EBS is a block storage service, not object storage.

- B) Block-level storage for EC2 instances

  - Correct: EBS provides block-level storage for EC2 instances.

- C) Archival storage

  - Incorrect: EBS is not specifically designed for archival storage.

- D) Content delivery
  - Incorrect: EBS is not used for content delivery.
  <!-- pagebreak -->

## Question 2:

What feature of EBS allows you to take point-in-time backups of your volumes?

- A) Multi-Attach

  - Incorrect: Multi-Attach allows an EBS volume to be attached to multiple instances.

- B) Snapshots

  - Correct: Snapshots allow you to take point-in-time backups of your volumes.

- C) Resize on the fly
  - Incorrect: Resize on the fly allows you to change the size of your EBS volumes without downtime.
- D) Lifecycle policies
  - Incorrect: Lifecycle policies manage the transition of objects between different storage classes.
  <!-- pagebreak -->

## Question 3:

How does EBS ensure high availability and durability?

- A) By replicating data across multiple regions

  - Incorrect: EBS replicates data within the same Availability Zone, not across multiple regions.

- B) By replicating data within the same Availability Zone

  - Correct: EBS volumes are automatically replicated within their Availability Zone.

- C) By using S3 for backups
  - Incorrect: EBS uses snapshots stored in S3 for backups, but the high availability and durability come from replication within the AZ.
- D) By using Glacier for archival
  - Incorrect: Glacier is used for long-term archival storage, not for ensuring high availability and durability of EBS volumes.
  <!-- pagebreak -->

## Question 4:

What happens when you enable the "Delete on Termination" setting for an EBS volume?

- A) The volume is automatically backed up

  - Incorrect: "Delete on Termination" does not involve automatic backups.

- B) The volume is deleted when the instance is terminated

  - Correct: The volume is deleted when the instance it is attached to is terminated.

- C) The volume is detached from the instance but remains in the account
  - Incorrect: The volume is deleted, not just detached.
- D) The volume's data is automatically encrypted
  - Incorrect: "Delete on Termination" does not affect encryption settings.
  <!-- pagebreak -->

## Question 5:

What is a key advantage of using EBS Snapshots?

- A) They provide immediate access to data

  - Incorrect: Snapshots may take time to restore and do not provide immediate access.

- B) They are incremental and storage-efficient

  - Correct: EBS Snapshots are incremental, meaning they only store changes since the last snapshot, making them storage-efficient.

- C) They can be used for real-time data processing
  - Incorrect: Snapshots are used for backups and restoring data, not real-time processing.
- D) They are cheaper than EBS volumes
  - Incorrect: Snapshots are a backup feature and their cost depends on storage usage.
  <!-- pagebreak -->

## Question 6:

What type of storage is typically used for the root volume of an EC2 instance?

- A) S3

  - Incorrect: S3 is object storage, not typically used for root volumes.

- B) EBS

  - Correct: EBS is commonly used for the root volume of an EC2 instance.

- C) Instance Store
  - Incorrect: Instance Store provides ephemeral storage, not typically used for root volumes.
- D) Glacier
  - Incorrect: Glacier is for archival storage, not root volumes.
  <!-- pagebreak -->

## Question 7:

How can you change the "Delete on Termination" setting for an EBS volume?

- A) During the instance launch process only

  - Incorrect: The setting can be changed both during and after instance launch.

- B) Only after the instance is launched

  - Incorrect: The setting can be changed both during and after instance launch.

- C) Both during and after the instance launch process

  - Correct: The "Delete on Termination" setting can be changed during and after the instance launch process.

- D) It cannot be changed once set
  - Incorrect: The setting can be modified even after it is initially set.
  <!-- pagebreak -->

## Question 8:

Which of the following is NOT a component of an Amazon Machine Image (AMI)?

- A) Root file system

  - Incorrect: The root file system is a component of an AMI.

- B) Applications

  - Incorrect: Pre-installed applications are a component of an AMI.

- C) Configuration settings

  - Incorrect: Custom system configurations are a component of an AMI.

- D) EBS Snapshot
  - Correct: An EBS Snapshot is not a direct component of an AMI, though AMIs are created from snapshots.
  <!-- pagebreak -->

## Question 9:

What is the benefit of using EC2 Image Builder?

- A) Provides cheaper storage for EBS volumes

  - Incorrect: EC2 Image Builder does not affect EBS storage costs.

- B) Automates the creation and management of custom AMIs

  - Correct: EC2 Image Builder automates the process of creating, testing, and distributing custom AMIs.

- C) Allows for real-time data processing
  - Incorrect: EC2 Image Builder is used for creating AMIs, not real-time data processing.
- D) Increases the performance of EC2 instances
  - Incorrect: EC2 Image Builder does not directly affect the performance of EC2 instances.
  <!-- pagebreak -->

## Question 10:

What feature of EBS allows a volume to be attached to multiple instances simultaneously?

- A) EBS Snapshot

  - Incorrect: Snapshots are for backups, not for attaching volumes to multiple instances.

- B) Multi-Attach

  - Correct: Multi-Attach allows a single EBS volume to be attached to multiple instances simultaneously.

- C) Elastic Load Balancer
  - Incorrect: Elastic Load Balancer distributes traffic but does not handle EBS volume attachments.
- D) Auto Scaling
  - Incorrect: Auto Scaling adjusts the number of instances, not EBS volume attachments.
