---
layout: posts
title: 'Section 10 Quiz-1'
section: Section-10
lesson: 1
---

<!-- Content Covered Lessons-1 to 9 of Section-10 -->

## Question 1:

What is one of the primary benefits of deploying applications globally using AWS?

- A) Reduced cost of server maintenance
  - Incorrect: Global deployment can sometimes increase costs due to data transfer and replication.
- B) Improved Latency and Performance
  - Correct: Deploying applications closer to end users reduces latency and improves performance.
- C) Easier management of application code
  - Incorrect: Global deployment focuses on performance and availability rather than code management.
- D) Simplified application development
  - Incorrect: While AWS provides tools to simplify development, the main benefit of global deployment is performance and availability.

<!-- pagebreak -->

## Question 2:

Which AWS service is used to route end users to Internet applications by translating names like www.example.com into IP addresses?

- A) Amazon CloudFront
  - Incorrect: CloudFront is a CDN for delivering content.
- B) AWS Outposts
  - Incorrect: Outposts extend AWS infrastructure to on-premises locations.
- C) Amazon Route 53
  - Correct: Route 53 is a scalable DNS web service.
- D) AWS Global Accelerator
  - Incorrect: Global Accelerator optimizes routing of traffic to applications.

<!-- pagebreak -->

## Question 3:

Which Route 53 routing policy directs traffic based on the lowest network latency for end users?

- A) Simple Routing
  - Incorrect: Simple routing directs traffic to a single resource without considering latency.
- B) Weighted Routing
  - Incorrect: Weighted routing distributes traffic based on assigned weights.
- C) Latency Routing
  - Correct: Latency routing directs traffic based on the lowest network latency.
- D) Failover Routing
  - Incorrect: Failover routing directs traffic to a secondary resource if the primary is unhealthy.

<!-- pagebreak -->

## Question 4:

What is the main function of Amazon CloudFront?

- A) To route end users to Internet applications
  - Incorrect: This is the function of Amazon Route 53.
- B) To deliver content with low latency and high transfer speeds
  - Correct: CloudFront is a CDN designed to deliver content globally with low latency.
- C) To manage DNS records
  - Incorrect: This is the function of Amazon Route 53.
- D) To extend AWS services on-premises
  - Incorrect: This is the function of AWS Outposts.

<!-- pagebreak -->

## Question 5:

How does S3 Transfer Acceleration improve file upload speed to S3?

- A) By storing files in edge locations
  - Correct: Files are first uploaded to an edge location closest to the user, then transferred to S3 over optimized network paths.
- B) By compressing files during upload
  - Incorrect: S3 Transfer Acceleration does not rely on file compression for speed.
- C) By using dedicated upload servers
  - Incorrect: It uses edge locations, not dedicated upload servers.
- D) By reducing file size before upload
  - Incorrect: The service does not alter the file size.

<!-- pagebreak -->

## Question 6:

What key feature does AWS Global Accelerator provide?

- A) Content caching at edge locations
  - Incorrect: This is a feature of Amazon CloudFront.
- B) Static IP addresses for applications
  - Correct: Global Accelerator provides two fixed Anycast IP addresses that route traffic through the AWS global network.
- C) Storage of static content
  - Incorrect: This is not a feature of Global Accelerator.
- D) Management of DNS records
  - Incorrect: This is the function of Amazon Route 53.

<!-- pagebreak -->

## Question 7:

What is a primary benefit of AWS Outposts?

- A) Automated deployment of serverless applications
  - Incorrect: Outposts focus on extending AWS infrastructure on-premises, not specifically serverless applications.
- B) Local extension of AWS services
  - Correct: Outposts extend AWS infrastructure and services to on-premises locations for low latency and local data processing.
- C) Global content delivery
  - Incorrect: This is the function of Amazon CloudFront.
- D) Dynamic traffic routing
  - Incorrect: This is the function of AWS Global Accelerator.

<!-- pagebreak -->

## Question 8:

Which AWS service is specifically designed to leverage 5G technology for ultra-low latency applications?

- A) AWS CloudFront
  - Incorrect: CloudFront is a CDN for content delivery.
- B) AWS Wavelength
  - Correct: Wavelength brings AWS services to the edge of the 5G network for ultra-low latency.
- C) AWS Outposts
  - Incorrect: Outposts extend AWS services to on-premises locations.
- D) AWS Local Zones
  - Incorrect: Local Zones extend AWS services to specific geographic areas for low-latency applications.

<!-- pagebreak -->

## Question 9:

What is a key use case for AWS Local Zones?

- A) Extending AWS infrastructure on-premises
  - Incorrect: This is the function of AWS Outposts.
- B) Delivering content globally with low latency
  - Incorrect: This is the function of Amazon CloudFront.
- C) Running latency-sensitive applications closer to end-users
  - Correct: Local Zones are used to run latency-sensitive applications closer to end-users in specific geographic areas.
- D) Providing static IP addresses for applications
  - Incorrect: This is a feature of AWS Global Accelerator.

<!-- pagebreak -->

## Question 10:

In a multi-region architecture, what is an active-active setup?

- A) A setup where one region is active and another is on standby
  - Incorrect: This describes an active-passive setup.
- B) A setup where all regions are active and can handle both read and write operations
  - Correct: Active-active setup means all regions are active and can handle both read and write operations.
- C) A setup where data is only read from a secondary region
  - Incorrect: This is a characteristic of an active-passive setup.
- D) A setup where resources are duplicated in each region
  - Incorrect: This does not fully describe the active-active architecture, which involves active handling of operations in all regions.
