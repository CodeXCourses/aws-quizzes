---
layout: posts
title: 'Section 11 Quiz-2'
section: Section-11
lesson: 2
---

<!-- Content Covered Lessons-6 to 10 of Section-11 -->

## Question 1:

Which AWS service is designed for pub/sub messaging, enabling multiple subscribers to receive the same message?

- A) Amazon SQS
  - Incorrect: SQS is a queuing service, not designed for pub/sub messaging.
- B) Amazon SNS
  - Correct: Amazon SNS is designed for pub/sub messaging, allowing multiple subscribers to receive the same message.
- C) Amazon MQ
  - Incorrect: MQ is a managed message broker service, not specifically for pub/sub messaging.
- D) Amazon Kinesis
  - Incorrect: Kinesis is designed for real-time data streaming, not specifically for pub/sub messaging.

<!-- pagebreak -->

## Question 2:

What is a primary use case for Amazon SQS?

- A) Real-time analytics and event processing.
  - Incorrect: This is a primary use case for Amazon Kinesis.
- B) Sending notifications to multiple subscribers.
  - Incorrect: This is a primary use case for Amazon SNS.
- C) Decoupling application components to enhance fault tolerance and scalability.
  - Correct: Amazon SQS is primarily used to decouple application components, enhancing fault tolerance and scalability.
- D) Managing legacy applications with specific messaging protocols.
  - Incorrect: This is a primary use case for Amazon MQ.

<!-- pagebreak -->

## Question 3:

Which AWS service should be used for real-time data streaming and processing?

- A) Amazon SQS
  - Incorrect: SQS is a queuing service, not designed for real-time data streaming.
- B) Amazon SNS
  - Incorrect: SNS is a notification service, not designed for real-time data streaming.
- C) Amazon MQ
  - Incorrect: MQ is a managed message broker service, not specifically for real-time data streaming.
- D) Amazon Kinesis
  - Correct: Amazon Kinesis is designed for real-time data streaming and processing.

<!-- pagebreak -->

## Question 4:

Which feature is unique to Amazon MQ compared to Amazon SQS and SNS?

- A) Managed message broker service.
  - Correct: Amazon MQ offers a managed message broker service that supports industry-standard messaging protocols.
- B) Pub/sub messaging with multiple subscribers.
  - Incorrect: This is a feature of Amazon SNS.
- C) Real-time data streaming.
  - Incorrect: This is a feature of Amazon Kinesis.
- D) Message durability for up to 14 days.
  - Incorrect: This is a feature of Amazon SQS.

<!-- pagebreak -->

## Question 5:

Which AWS service is ideal for applications that need to send notifications to users via email, SMS, or HTTP endpoints?

- A) Amazon SQS
  - Incorrect: SQS is not designed for sending notifications to users via email, SMS, or HTTP endpoints.
- B) Amazon SNS
  - Correct: Amazon SNS is ideal for sending notifications to users via email, SMS, or HTTP endpoints.
- C) Amazon Kinesis
  - Incorrect: Kinesis is designed for real-time data streaming, not for sending notifications to users.
- D) Amazon MQ
  - Incorrect: MQ is a managed message broker service, not designed specifically for sending notifications to users.

<!-- pagebreak -->

## Question 6:

For which of the following scenarios is Amazon SQS the most appropriate service?

- A) Collecting and processing large streams of real-time data.
  - Incorrect: This scenario is best suited for Amazon Kinesis.
- B) Sending the same message to multiple subscribers in real time.
  - Incorrect: This scenario is best suited for Amazon SNS.
- C) Decoupling microservices in a distributed system.
  - Correct: Amazon SQS is most appropriate for decoupling microservices in a distributed system.
- D) Migrating traditional messaging systems to the cloud without changing application code.
  - Incorrect: This scenario is best suited for Amazon MQ.

<!-- pagebreak -->

## Question 7:

What is the main advantage of using Amazon Kinesis for data processing?

- A) Long-term message storage.
  - Incorrect: Kinesis is not designed for long-term message storage.
- B) Real-time data streaming and processing.
  - Correct: The main advantage of Amazon Kinesis is real-time data streaming and processing.
- C) Sending notifications to multiple users.
  - Incorrect: This is a feature of Amazon SNS.
- D) Managed message broker for legacy applications.
  - Incorrect: This is a feature of Amazon MQ.

<!-- pagebreak -->

## Question 8:

Which AWS service allows for decoupling of application components by using a message queue?

- A) Amazon SNS
  - Incorrect: SNS is a pub/sub notification service, not a message queue.
- B) Amazon Kinesis
  - Incorrect: Kinesis is a real-time data streaming service, not a message queue.
- C) Amazon MQ
  - Incorrect: MQ is a managed message broker, not specifically a message queue.
- D) Amazon SQS
  - Correct: Amazon SQS allows for decoupling of application components by using a message queue.

<!-- pagebreak -->

## Question 9:

Which AWS service is most suitable for migrating applications using industry-standard messaging protocols to the cloud?

- A) Amazon SQS
  - Incorrect: SQS does not support industry-standard messaging protocols.
- B) Amazon SNS
  - Incorrect: SNS is a notification service, not suitable for industry-standard messaging protocols.
- C) Amazon Kinesis
  - Incorrect: Kinesis is for real-time data streaming, not for industry-standard messaging protocols.
- D) Amazon MQ
  - Correct: Amazon MQ is most suitable for migrating applications using industry-standard messaging protocols to the cloud.

<!-- pagebreak -->

## Question 10:

What is a significant feature of Amazon SNS that distinguishes it from Amazon SQS?

- A) Message queuing for decoupling application components.
  - Incorrect: This is a feature of Amazon SQS.
- B) Pub/sub messaging that allows multiple subscribers to receive the same message.
  - Correct: Amazon SNS supports pub/sub messaging, allowing multiple subscribers to receive the same message.
- C) Real-time data processing.
  - Incorrect: Real-time data processing is a feature of Amazon Kinesis.
- D) Managed message broker with protocol support.
  - Incorrect: This is a feature of Amazon MQ.
