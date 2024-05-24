---
layout: posts
title: 'Section 12 Quiz-1'
section: Section-12
lesson: 1
---

<!-- Content Covered Lessons-1 through 7 of Section-12 -->

## Question 1:

Which AWS service provides monitoring data in the form of logs, metrics, and events?

- A) AWS X-Ray
  - Incorrect: X-Ray is used for tracing and debugging applications, not for providing logs, metrics, and events.
- B) Amazon CloudWatch
  - Correct: Amazon CloudWatch provides monitoring data in the form of logs, metrics, and events.
- C) Amazon SNS
  - Incorrect: SNS is a notification service, not used for providing logs, metrics, and events.
- D) Amazon SQS
  - Incorrect: SQS is a queuing service, not for providing logs, metrics, and events.

<!-- pagebreak -->

## Question 2:

What is the default monitoring interval for Amazon CloudWatch metrics?

- A) 1 minute
  - Incorrect: 1 minute intervals are available with Detailed Monitoring, which incurs an additional charge.
- B) 2 minutes
  - Incorrect: CloudWatch does not use a 2-minute interval for default metrics.
- C) 3 minutes
  - Incorrect: CloudWatch does not use a 3-minute interval for default metrics.
- D) 5 minutes
  - Correct: The default monitoring interval for CloudWatch metrics is 5 minutes.

<!-- pagebreak -->

## Question 3:

Which CloudWatch feature can take action such as sending notifications or adjusting resources based on metrics?

- A) CloudWatch Logs
  - Incorrect: CloudWatch Logs is used for monitoring, storing, and accessing log files.
- B) CloudWatch Alarms
  - Correct: CloudWatch Alarms can take action such as sending notifications or adjusting resources based on metrics.
- C) CloudWatch Events
  - Incorrect: CloudWatch Events (now Amazon EventBridge) is used for event-driven computing.
- D) CloudWatch Metrics
  - Incorrect: CloudWatch Metrics are used to record operations of different AWS services but do not take action themselves.

<!-- pagebreak -->

## Question 4:

Which metric is specifically available only in the `us-east-1` region?

- A) EC2 CPU Utilization
  - Incorrect: EC2 CPU Utilization is available in all regions.
- B) S3 BucketSizeBytes
  - Incorrect: S3 BucketSizeBytes is available in all regions.
- C) Billing: Total Estimated Charge
  - Correct: The Billing: Total Estimated Charge metric is only available in the `us-east-1` region.
- D) EBS Disk Read/Writes
  - Incorrect: EBS Disk Read/Writes are available in all regions.

<!-- pagebreak -->

## Question 5:

What is required for EC2 instances to send log data to CloudWatch Logs?

- A) Enabling Detailed Monitoring
  - Incorrect: Detailed Monitoring enables 1-minute intervals for metrics, not log data transmission.
- B) Installing CloudWatch Logs Agent
  - Correct: Installing and configuring the CloudWatch Logs Agent is required for EC2 instances to send log data to CloudWatch Logs.
- C) Using AWS X-Ray
  - Incorrect: AWS X-Ray is used for tracing and debugging, not for sending log data to CloudWatch Logs.
- D) Configuring SNS Notifications
  - Incorrect: SNS Notifications are used for sending notifications, not for sending log data to CloudWatch Logs.

<!-- pagebreak -->

## Question 6:

Which component of Amazon EventBridge acts as the central hub for all events?

- A) Event Rule
  - Incorrect: Event rules define what happens when an event matches certain criteria.
- B) Event Target
  - Incorrect: Event targets are the AWS services or resources that respond to the event.
- C) Event Bus
  - Correct: The Event Bus acts as the central hub for all events in Amazon EventBridge.
- D) Event Source
  - Incorrect: Event sources are where events originate from.

<!-- pagebreak -->

## Question 7:

Which AWS service is specifically designed to help developers analyze and debug production, distributed applications?

- A) AWS X-Ray
  - Correct: AWS X-Ray is designed to help developers analyze and debug production, distributed applications.
- B) Amazon CloudWatch Logs
  - Incorrect: CloudWatch Logs is used for monitoring, storing, and accessing log files.
- C) Amazon SNS
  - Incorrect: SNS is a notification service.
- D) Amazon SQS
  - Incorrect: SQS is a queuing service.

<!-- pagebreak -->

## Question 8:

What type of analysis does Amazon CodeGuru Profiler provide?

- A) Static code analysis
  - Incorrect: Static code analysis is provided by Amazon CodeGuru Reviewer.
- B) Runtime performance analysis
  - Correct: Amazon CodeGuru Profiler provides runtime performance analysis.
- C) Log analysis
  - Incorrect: Log analysis is provided by Amazon CloudWatch Logs.
- D) Event analysis
  - Incorrect: Event analysis is handled by Amazon EventBridge.

<!-- pagebreak -->

## Question 9:

Which AWS Health Dashboard provides a personalized view of the health of AWS services impacting your specific account?

- A) AWS Health Dashboard - Service History
  - Incorrect: This provides a view of AWS service health across all regions.
- B) AWS Health Dashboard — Your Account
  - Correct: This provides a personalized view of the health of AWS services impacting your specific account.
- C) CloudWatch Alarms Dashboard
  - Incorrect: This is not a type of AWS Health Dashboard.
- D) CloudWatch Metrics Dashboard
  - Incorrect: This is not a type of AWS Health Dashboard.

<!-- pagebreak -->

## Question 10:

Which AWS service supports event replay and archiving for debugging and replaying missed events?

- A) AWS X-Ray
  - Incorrect: AWS X-Ray is used for tracing and debugging applications.
- B) Amazon CloudWatch Logs
  - Incorrect: CloudWatch Logs is used for monitoring, storing, and accessing log files.
- C) Amazon EventBridge
  - Correct: Amazon EventBridge supports event replay and archiving for debugging and replaying missed events.
- D) Amazon SNS
  - Incorrect: SNS is a notification service.

---
