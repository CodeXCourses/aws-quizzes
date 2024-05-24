---
layout: posts
title: 'Section 14 Quiz-2'
section: Section-14
lesson: 2
---

<!-- Content Covered Lesson-11 to Lesson-20 of Section-14 -->

## Question 1

What is Amazon GuardDuty primarily used for?

- A) Managing AWS billing
  - Incorrect: Amazon GuardDuty is focused on security monitoring, not billing management.
- B) Continuous threat detection
  - Correct: Amazon GuardDuty provides continuous monitoring for security threats using machine learning and threat intelligence.
- C) Cloud infrastructure deployment
  - Incorrect: GuardDuty does not manage cloud infrastructure deployment.
- D) Software development lifecycle management
  - Incorrect: GuardDuty is not involved in managing the software development lifecycle.

<!-- pagebreak -->

## Question 2

Which of the following data sources does GuardDuty NOT analyze?

- A) CloudTrail Event Logs
  - Incorrect: GuardDuty analyzes CloudTrail Event Logs for unusual API calls.
- B) VPC Flow Logs
  - Incorrect: VPC Flow Logs are used by GuardDuty to detect abnormal traffic patterns.
- C) DNS Logs
  - Incorrect: DNS Logs are analyzed by GuardDuty to identify compromised instances.
- D) Application Load Balancer Logs
  - Correct: GuardDuty does not analyze Application Load Balancer Logs; it focuses on CloudTrail, VPC Flow Logs, and DNS Logs.

<!-- pagebreak -->

## Question 3

Which AWS service can GuardDuty findings be sent to for automated response?

- A) Amazon RDS
  - Incorrect: Amazon RDS is a database service and does not handle GuardDuty findings.
- B) Amazon EventBridge
  - Correct: GuardDuty findings can be sent to Amazon EventBridge to trigger automated responses.
- C) AWS Lambda
  - Incorrect: While Lambda can be used to process responses, findings are initially sent to EventBridge.
- D) Amazon SNS
  - Incorrect: SNS can send notifications, but findings are first integrated with EventBridge.

<!-- pagebreak -->

## Question 4

Which type of threat is specifically detected by GuardDuty related to cryptocurrency?

- A) SQL injection
  - Incorrect: GuardDuty does not specifically target SQL injection attacks related to cryptocurrency.
- B) Phishing attempts
  - Incorrect: GuardDuty may detect phishing, but it's not specific to cryptocurrency.
- C) Cryptocurrency mining
  - Correct: GuardDuty is designed to recognize and alert on instances compromised for cryptocurrency mining.
- D) Cross-site scripting
  - Incorrect: GuardDuty does not focus on cross-site scripting for cryptocurrency.

<!-- pagebreak -->

## Question 5

Which service provides a comprehensive view of security alerts and compliance status across AWS accounts?

- A) Amazon Macie
  - Incorrect: Macie focuses on data security and privacy, not overall security alerts.
- B) AWS Security Hub
  - Correct: AWS Security Hub aggregates security alerts and compliance status across multiple AWS accounts.
- C) AWS Config
  - Incorrect: AWS Config tracks resource configurations and compliance, not security alerts.
- D) AWS Inspector
  - Incorrect: AWS Inspector assesses applications for vulnerabilities but does not aggregate overall security alerts.

<!-- pagebreak -->

## Question 6

What is the primary purpose of AWS Config?

- A) Managing compute resources
  - Incorrect: AWS Config does not manage compute resources directly.
- B) Auditing and evaluating resource configurations
  - Correct: AWS Config assesses, audits, and evaluates the configurations of AWS resources.
- C) Storing application code
  - Incorrect: AWS Config does not store application code.
- D) Providing machine learning models
  - Incorrect: AWS Config does not provide machine learning models.

<!-- pagebreak -->

## Question 7

Which AWS service automatically assesses applications for vulnerabilities?

- A) Amazon GuardDuty
  - Incorrect: GuardDuty is focused on threat detection, not vulnerability assessments.
- B) AWS Inspector
  - Correct: AWS Inspector performs automated security assessments for vulnerabilities.
- C) AWS Macie
  - Incorrect: Macie classifies and protects sensitive data, not assessing vulnerabilities.
- D) Amazon Detective
  - Incorrect: Detective is used for investigating and analyzing security issues, not assessing vulnerabilities.

<!-- pagebreak -->

## Question 8

Which AWS service uses machine learning to discover and protect sensitive data in S3 buckets?

- A) AWS Config
  - Incorrect: AWS Config does not focus on data discovery in S3.
- B) AWS Shield
  - Incorrect: AWS Shield provides DDoS protection, not data discovery.
- C) Amazon Macie
  - Correct: Amazon Macie uses machine learning to discover, classify, and protect sensitive data in S3.
- D) AWS Firewall Manager
  - Incorrect: Firewall Manager is used for managing firewall rules, not data discovery.

<!-- pagebreak -->

## Question 9

Which service helps identify the root cause of security issues using advanced analysis?

- A) Amazon Macie
  - Incorrect: Macie focuses on data security and classification, not root cause analysis.
- B) AWS GuardDuty
  - Incorrect: GuardDuty detects threats but does not provide root cause analysis.
- C) Amazon Detective
  - Correct: Amazon Detective helps analyze and identify the root cause of security issues using advanced analysis.
- D) AWS Inspector
  - Incorrect: Inspector assesses vulnerabilities but does not focus on root cause analysis.

<!-- pagebreak -->

## Question 10

What is the main role of AWS IAM Access Analyzer?

- A) Monitor network traffic
  - Incorrect: IAM Access Analyzer does not monitor network traffic.
- B) Identify resource sharing with external entities
  - Correct: IAM Access Analyzer helps identify AWS resources shared with external entities.
- C) Provide DDoS protection
  - Incorrect: IAM Access Analyzer does not provide DDoS protection.
- D) Analyze application performance
  - Incorrect: IAM Access Analyzer does not analyze application performance.
