---
layout: posts
title: 'Section 4 Quiz-2'
section: Section-4
lesson: 2
---

<!-- Content Covered Lesson-6, Lesson-10 of Section-4 -->

## Question 1:

What type of storage does EC2 instance store provide?

- A) Persistent storage

  - Incorrect: EC2 instance store provides ephemeral storage, not persistent storage.

- B) Ephemeral storage

  - Correct: EC2 instance store provides temporary, high-performance storage that is lost when the instance stops.

- C) Object storage
  - Incorrect: EC2 instance store is block storage, not object storage.
- D) Archival storage
  - Incorrect: EC2 instance store is not used for archival storage.
  <!-- pagebreak -->

## Question 2:

Which feature of Amazon EFS allows it to automatically adjust to the storage needs of your application?

- A) Pre-provisioned capacity

  - Incorrect: EFS does not require pre-provisioning of capacity.

- B) Automatic scaling

  - Correct: EFS automatically scales as you add or remove files.

- C) Manual scaling
  - Incorrect: EFS scales automatically, not manually.
- D) Fixed capacity
  - Incorrect: EFS does not have fixed capacity; it scales with usage.
  <!-- pagebreak -->

## Question 3:

What is the primary advantage of using EFS Infrequent Access (EFS-IA)?

- A) Faster access speeds

  - Incorrect: EFS-IA is designed for cost savings, not speed.

- B) Cost savings for infrequently accessed files

  - Correct: EFS-IA provides lower storage costs for files that are not accessed frequently.

- C) Enhanced security
  - Incorrect: EFS-IA focuses on cost savings, not specifically on enhanced security.
- D) Higher durability
  - Incorrect: EFS-IA has the same durability as standard EFS.
  <!-- pagebreak -->

## Question 4:

Which protocol is supported by Amazon FSx for Windows File Server?

- A) NFS

  - Incorrect: NFS is supported by FSx for Lustre, not FSx for Windows File Server.

- B) SMB

  - Correct: FSx for Windows File Server supports the SMB protocol.

- C) FTP
  - Incorrect: FSx for Windows File Server does not support FTP.
- D) HTTP
  - Incorrect: FSx for Windows File Server does not support HTTP.
  <!-- pagebreak -->

## Question 5:

What is a key feature of Amazon FSx for Lustre?

- A) Integration with Active Directory

  - Incorrect: Integration with Active Directory is a feature of FSx for Windows File Server.

- B) High-performance computing

  - Correct: FSx for Lustre is designed for high-performance computing applications.

- C) Web serving
  - Incorrect: FSx for Lustre is not specifically designed for web serving.
- D) Database storage
  - Incorrect: FSx for Lustre is optimized for data processing and analytics, not specifically for database storage.
  <!-- pagebreak -->

## Question 6:

How does Amazon EFS ensure high availability?

- A) By replicating data within a single Availability Zone

  - Incorrect: EFS replicates data across multiple Availability Zones, not just within one.

- B) By replicating data across multiple Availability Zones

  - Correct: EFS is designed to be highly available by replicating data across multiple Availability Zones.

- C) By storing data in Glacier
  - Incorrect: Glacier is used for archival storage, not for ensuring high availability of EFS.
- D) By using instance store
  - Incorrect: Instance store provides ephemeral storage, not high availability.
  <!-- pagebreak -->

## Question 7:

Which Amazon FSx variant is designed for Windows-based applications?

- A) FSx for Lustre

  - Incorrect: FSx for Lustre is designed for high-performance computing, not specifically for Windows-based applications.

- B) FSx for Windows File Server

  - Correct: FSx for Windows File Server is designed for Windows-based applications.

- C) FSx for NFS
  - Incorrect: FSx for NFS is not a variant of Amazon FSx.
- D) FSx for Hadoop
  - Incorrect: FSx does not have a variant specifically for Hadoop.
  <!-- pagebreak -->

## Question 8:

What is a primary use case for Amazon FSx for Lustre?

- A) Web hosting

  - Incorrect: FSx for Lustre is optimized for high-performance computing, not web hosting.

- B) High-performance data processing

  - Correct: FSx for Lustre is ideal for high-performance data processing applications.

- C) Email hosting
  - Incorrect: FSx for Lustre is not designed for email hosting.
- D) Backup storage
  - Incorrect: FSx for Lustre is not typically used for backup storage.
  <!-- pagebreak -->

## Question 9:

Which Amazon EFS feature helps manage costs for infrequently accessed files?

- A) EFS Backup

  - Incorrect: EFS Backup is for backing up data, not for managing costs of infrequent access.

- B) EFS Infrequent Access (EFS-IA)

  - Correct: EFS-IA is designed to reduce costs for infrequently accessed files.

- C) EFS Lifecycle Management
  - Incorrect: While related to managing data lifecycle, the specific feature for cost management is EFS-IA.
- D) EFS Archive
  - Incorrect: EFS does not have a specific "archive" feature; the cost-saving feature is EFS-IA.
  <!-- pagebreak -->

## Question 10:

Which of the following is a key benefit of using Amazon FSx?

- A) Manual hardware maintenance

  - Incorrect: Amazon FSx is fully managed, eliminating the need for manual hardware maintenance.

- B) Fully managed service

  - Correct: Amazon FSx is a fully managed service, reducing the operational overhead for file storage.

- C) Limited scalability
  - Incorrect: Amazon FSx is designed to be highly scalable.
- D) Single-AZ deployment only
  - Incorrect: Amazon FSx can be deployed across multiple Availability Zones for high availability.

