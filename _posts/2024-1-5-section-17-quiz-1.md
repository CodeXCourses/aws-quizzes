---
layout: posts
title: 'Section 17 Quiz-1'
section: Section-17
lesson: 1
---

<!-- Content Covered Lesson-1 of Section-17 -->

## Question 1

What is the primary function of AWS Security Token Service (STS)?

- A) Managing long-term AWS credentials
  - Incorrect: AWS STS provides temporary, not long-term, credentials.
- B) Requesting temporary, limited-privilege credentials
  - Correct: AWS STS enables the creation of temporary, limited-privilege credentials for IAM users or federated users.
- C) Managing user identities in AWS Directory Services
  - Incorrect: This is a function of AWS Directory Services.
- D) Providing access to web and mobile applications
  - Incorrect: This is a function of Amazon Cognito.

<!-- pagebreak -->

## Question 2

Which feature of AWS STS helps minimize the risk of long-term credential compromise?

- A) Identity Federation
  - Incorrect: While useful, Identity Federation alone does not minimize the risk of long-term credential compromise.
- B) Temporary Credentials
  - Correct: Temporary credentials reduce the risk of long-term credentials being compromised by limiting their lifespan.
- C) IAM Roles for EC2
  - Incorrect: This feature provides temporary credentials for EC2, but the key feature for minimizing risk is the temporary nature of the credentials.
- D) Service Control Policies
  - Incorrect: SCPs manage permissions across accounts, not the duration of credentials.

<!-- pagebreak -->

## Question 3

Which use case is NOT a typical application of AWS STS?

- A) Identity Federation
  - Incorrect: Identity Federation is a common use case for AWS STS.
- B) IAM Roles for Cross-Account Access
  - Incorrect: IAM Roles for Cross-Account Access is a common use case for AWS STS.
- C) IAM Roles for Amazon EC2
  - Incorrect: IAM Roles for Amazon EC2 is a common use case for AWS STS.
- D) Long-term storage of credentials
  - Correct: AWS STS is not used for long-term storage of credentials; it provides temporary credentials.

<!-- pagebreak -->

## Question 4

In which scenario would you most likely use AWS STS?

- A) Managing a static website on S3
  - Incorrect: This scenario does not typically require temporary credentials.
- B) Providing temporary access to AWS resources for a mobile app user
  - Correct: AWS STS is ideal for providing temporary, limited-privilege credentials for mobile app users.
- C) Long-term data archiving
  - Incorrect: AWS STS is not used for long-term tasks.
- D) Setting up a VPC
  - Incorrect: Setting up a VPC does not typically involve temporary credentials.

<!-- pagebreak -->

## Question 5

What is a key benefit of using temporary credentials provided by AWS STS?

- A) Reduced cost of AWS services
  - Incorrect: AWS STS does not directly impact the cost of AWS services.
- B) Enhanced security by limiting credential lifespan
  - Correct: Temporary credentials enhance security by reducing the risk of long-term credentials being compromised.
- C) Improved network performance
  - Incorrect: AWS STS does not impact network performance.
- D) Simplified resource management
  - Incorrect: While useful, the primary benefit is enhanced security.

<!-- pagebreak -->

## Question 6

Which AWS service would you use to manage user identities for web and mobile apps?

- A) AWS STS
  - Incorrect: AWS STS provides temporary credentials, not user identity management.
- B) Amazon Cognito
  - Correct: Amazon Cognito manages user authentication and authorization for web and mobile apps.
- C) AWS Directory Services
  - Incorrect: AWS Directory Services integrates AWS resources with Microsoft AD.
- D) AWS IAM Identity Center
  - Incorrect: AWS IAM Identity Center provides SSO solutions, not direct user management for apps.

<!-- pagebreak -->

## Question 7

Which Amazon Cognito feature offers AWS credentials to access AWS services?

- A) User Pools
  - Incorrect: User Pools handle user sign-up and sign-in.
- B) Identity Pools (Federated Identities)
  - Correct: Identity Pools provide AWS credentials to access AWS services based on user identity.
- C) Social Identity Providers
  - Incorrect: Social Identity Providers integrate with Cognito for sign-in but do not provide AWS credentials.
- D) Temporary Security Credentials
  - Incorrect: Temporary Security Credentials are provided by AWS STS, not Amazon Cognito.

<!-- pagebreak -->

## Question 8

What is the primary function of AWS Directory Services?

- A) Managing AWS billing and costs
  - Incorrect: AWS Directory Services focuses on integrating AWS resources with Microsoft AD.
- B) Integrating AWS resources with Microsoft Active Directory
  - Correct: AWS Directory Services allows integration of AWS resources with Microsoft AD.
- C) Providing temporary security credentials
  - Incorrect: This function is provided by AWS STS.
- D) Managing web and mobile app user identities
  - Incorrect: Amazon Cognito manages user identities for web and mobile apps.

<!-- pagebreak -->

## Question 9

How does AWS Directory Services benefit organizations using Microsoft AD?

- A) By providing temporary AWS credentials
  - Incorrect: Temporary credentials are provided by AWS STS.
- B) By managing user identities for mobile apps
  - Incorrect: This is handled by Amazon Cognito.
- C) By enabling single sign-on (SSO) for AWS services
  - Correct: AWS Directory Services enables SSO for AWS services using existing Microsoft AD credentials.
- D) By optimizing network traffic
  - Incorrect: Network optimization is not the primary benefit of AWS Directory Services.

<!-- pagebreak -->

## Question 10

What does AWS IAM Identity Center provide?

- A) Detailed billing reports
  - Incorrect: Billing reports are provided by AWS Billing and Cost Management tools.
- B) Single sign-on (SSO) access to AWS accounts and business applications
  - Correct: AWS IAM Identity Center provides SSO access to AWS accounts and business applications.
- C) Temporary credentials for AWS resources
  - Incorrect: Temporary credentials are provided by AWS STS.
- D) User identity management for web and mobile apps
  - Incorrect: User identity management for apps is provided by Amazon Cognito.
