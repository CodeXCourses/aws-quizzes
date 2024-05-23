---
layout: posts
title: 'Section 2 Quiz-2'
section: Section-2
lesson: 2
---

<!-- Content Covered Lesson-6, Lesson-7 of Section-2 -->

## Question 1:

What is a key benefit of enabling versioning in an S3 bucket?

- A) Reduced storage costs

  - Incorrect: Enabling versioning may increase storage costs as multiple versions of objects are stored.

- B) Improved data retrieval speed

  - Incorrect: Versioning does not directly improve data retrieval speed.

- C) Protection against accidental deletions

  - Correct: Versioning protects against unintended deletions and overwrites by keeping multiple versions of an object.

- D) Automatic data encryption
  - Incorrect: Versioning does not automatically encrypt data.
  <!-- pagebreak -->

## Question 2:

What must be enabled on both the source and destination buckets to use S3 Cross-Region Replication (CRR)?

- A) Server-Side Encryption

  - Incorrect: While encryption is a good practice, it is not required to enable replication.

- B) Logging

  - Incorrect: Logging is useful for monitoring but is not required for replication.

- C) Versioning

  - Correct: Versioning must be enabled on both the source and destination buckets for CRR to function.

- D) Bucket Policies
  - Incorrect: Bucket policies manage access control but are not specifically required for enabling replication.
  <!-- pagebreak -->

## Question 3:

Which S3 storage class is most suitable for data that is accessed less frequently but requires rapid access when needed?

- A) S3 Standard

  - Incorrect: S3 Standard is designed for frequently accessed data.

- B) S3 Intelligent-Tiering

  - Incorrect: S3 Intelligent-Tiering automatically moves data between two access tiers but may not be the most cost-effective for infrequently accessed data.

- C) S3 Standard-IA

  - Correct: S3 Standard-IA is suitable for infrequently accessed data that still requires rapid access.

- D) S3 Glacier
  - Incorrect: S3 Glacier is designed for archival storage with longer retrieval times.
  <!-- pagebreak -->

## Question 4:

What happens to objects in an S3 bucket when versioning is suspended?

- A) All previous versions are deleted

  - Incorrect: Suspending versioning does not delete existing versions.

- B) New versions of objects are not created

  - Correct: When versioning is suspended, new versions are not created; instead, subsequent uploads will overwrite the current version.

- C) The bucket is converted to read-only mode
  - Incorrect: Suspending versioning does not change the read/write status of the bucket.
  <!-- pagebreak -->

## Question 5:

Which of the following is a valid use case for S3 Same-Region Replication (SRR)?

- A) Reducing latency for global users

  - Incorrect: SRR is not designed to reduce latency for global users; this is a use case for CRR.

- B) Aggregating logs into a central bucket

  - Correct: SRR is useful for aggregating logs into a central bucket within the same region.

- C) Complying with data residency requirements
  - Incorrect: Complying with data residency requirements is a use case for CRR, not SRR.
  <!-- pagebreak -->

## Question 6:

What is the default storage class for objects uploaded to Amazon S3?

- A) S3 Standard

  - Correct: By default, objects uploaded to Amazon S3 are stored in the S3 Standard storage class.

- B) S3 Standard-IA

  - Incorrect: S3 Standard-IA is not the default storage class.

- C) S3 Glacier
  - Incorrect: S3 Glacier is not the default storage class.
  <!-- pagebreak -->

## Question 7:

How does S3 Intelligent-Tiering optimize storage costs?

- A) By compressing data before storage

  - Incorrect: S3 Intelligent-Tiering does not compress data to optimize costs.

- B) By automatically moving data between different access tiers based on access patterns

  - Correct: S3 Intelligent-Tiering optimizes storage costs by moving data between frequent and infrequent access tiers based on changing access patterns.

- C) By deleting infrequently accessed data
  - Incorrect: S3 Intelligent-Tiering does not delete data but optimizes storage costs through tiering.
  <!-- pagebreak -->

## Question 8:

Which S3 storage class is designed for archival storage with retrieval times ranging from minutes to hours?

- A) S3 Standard

  - Incorrect: S3 Standard is for frequently accessed data.

- B) S3 Intelligent-Tiering

  - Incorrect: S3 Intelligent-Tiering is not specifically designed for archival storage.

- C) S3 Glacier

  - Correct: S3 Glacier is designed for archival storage with retrieval times ranging from minutes to hours.

- D) S3 Standard-IA
  - Incorrect: S3 Standard-IA is for infrequently accessed data that requires rapid access.
  <!-- pagebreak -->

## Question 9:

Which feature of Amazon S3 allows you to roll back to any previous version of an object?

- A) Cross-Region Replication

  - Incorrect: Cross-Region Replication replicates objects to another region but does not provide version rollback.

- B) Versioning

  - Correct: Versioning allows you to roll back to any previous version of an object.

- C) Lifecycle Policies
  - Incorrect: Lifecycle Policies manage the storage class transitions and expiration of objects, not version rollback.
  <!-- pagebreak -->

## Question 10:

What is a prerequisite for enabling S3 Cross-Region Replication (CRR)?

- A) Both source and destination buckets must have server-side encryption enabled

  - Incorrect: While encryption is a best practice, it is not a prerequisite for CRR.

- B) Both source and destination buckets must have versioning enabled

  - Correct: Versioning must be enabled on both the source and destination buckets to use CRR.

- C) Both source and destination buckets must be in the same AWS account
  - Incorrect: CRR can be set up between buckets in different AWS accounts as well.
