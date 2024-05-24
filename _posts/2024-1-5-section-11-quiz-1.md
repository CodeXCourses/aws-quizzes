---
layout: posts
title: 'Section 11 Quiz-1'
section: Section-11
lesson: 1
---

<!-- Content Covered Lessons-1 to 5 of Section-11 -->

## Question 1:

What is the primary characteristic of synchronous communication in cloud architectures?

- A) Processes messages asynchronously without waiting for a response.
  - Incorrect: Synchronous communication involves waiting for a response.
- B) The calling service waits for the called service to complete the operation and return the response.
  - Correct: In synchronous communication, one component waits for a response before continuing its process.
- C) Utilizes message queues to handle high load efficiently.
  - Incorrect: This is characteristic of asynchronous communication.
- D) Allows decoupling of components to improve scalability.
  - Incorrect: Decoupling and scalability are benefits of asynchronous communication.

<!-- pagebreak -->

## Question 2:

Which AWS service is best suited for decoupling components and ensuring messages are processed exactly once in the correct order?

- A) Amazon SQS with Standard Queues
  - Incorrect: Standard queues do not guarantee exact order or exactly-once processing.
- B) Amazon SQS with FIFO Queues
  - Correct: FIFO queues ensure messages are processed exactly once, in the exact order they are sent.
- C) Amazon SNS
  - Incorrect: SNS is used for pub/sub messaging, not for guaranteeing order or exactly-once processing.
- D) Amazon MQ
  - Incorrect: While Amazon MQ supports messaging protocols, it does not specifically focus on exactly-once or ordered message processing like SQS FIFO queues.

<!-- pagebreak -->

## Question 3:

What is a significant benefit of using asynchronous communication in cloud applications?

- A) Immediate response to user requests.
  - Incorrect: Immediate response is characteristic of synchronous communication.
- B) Reduced coupling between sending and receiving components.
  - Correct: Asynchronous communication reduces coupling and enhances scalability by handling requests independently.
- C) Direct dependency between request and response.
  - Incorrect: Direct dependency is a feature of synchronous communication.
- D) Handling all requests in real-time.
  - Incorrect: Asynchronous communication allows for delayed processing.

<!-- pagebreak -->

## Question 4:

Which AWS service is designed for real-time processing of large streams of data?

- A) Amazon SQS
  - Incorrect: SQS is a message queuing service, not specifically designed for real-time data streams.
- B) Amazon Kinesis
  - Correct: Amazon Kinesis is designed for real-time processing of large data streams.
- C) Amazon SNS
  - Incorrect: SNS is a notification service, not designed for real-time data streaming.
- D) Amazon MQ
  - Incorrect: MQ is a managed message broker service, not specifically for real-time data streams.

<!-- pagebreak -->

## Question 5:

When would you use Amazon Simple Notification Service (SNS)?

- A) To handle real-time data processing from IoT devices.
  - Incorrect: Real-time data processing is best handled by Amazon Kinesis.
- B) To send notifications to multiple subscribers.
  - Correct: SNS is ideal for sending notifications to multiple subscribers using a publish/subscribe model.
- C) To manage message queues with strict order and exactly-once processing.
  - Incorrect: This is a feature of Amazon SQS FIFO queues.
- D) To migrate legacy applications using standard messaging protocols.
  - Incorrect: This scenario is suited for Amazon MQ.

<!-- pagebreak -->

## Question 6:

Which AWS service would you choose for managing legacy applications that rely on traditional messaging protocols?

- A) Amazon SQS
  - Incorrect: SQS does not support traditional messaging protocols like AMQP or MQTT.
- B) Amazon SNS
  - Incorrect: SNS is a pub/sub service and does not support traditional messaging protocols.
- C) Amazon Kinesis
  - Incorrect: Kinesis is for real-time data streaming, not for traditional messaging protocols.
- D) Amazon MQ
  - Correct: Amazon MQ supports legacy messaging protocols such as AMQP, MQTT, and STOMP.

<!-- pagebreak -->

## Question 7:

What is the main difference between Amazon SQS and Amazon MQ?

- A) SQS supports traditional messaging protocols like AMQP and MQTT.
  - Incorrect: SQS does not support traditional messaging protocols; Amazon MQ does.
- B) Amazon MQ automatically scales to handle any number of messages.
  - Incorrect: Amazon MQ does not scale as automatically and seamlessly as SQS.
- C) Amazon MQ supports both queues and topics within the same service.
  - Correct: Amazon MQ supports both queues and topics, similar to SQS and SNS but within a single service.
- D) SQS is better suited for legacy applications requiring specific messaging protocols.
  - Incorrect: Amazon MQ is better suited for legacy applications with specific messaging protocols.

<!-- pagebreak -->

## Question 8:

Which AWS service is ideal for load leveling to manage request load for backend systems?

- A) Amazon SNS
  - Incorrect: SNS is used for notifications and pub/sub messaging, not for load leveling.
- B) Amazon Kinesis
  - Incorrect: Kinesis is used for real-time data streaming.
- C) Amazon MQ
  - Incorrect: While MQ can handle messaging, it is not specifically designed for load leveling.
- D) Amazon SQS
  - Correct: SQS is ideal for load leveling, acting as a buffer to manage request load for backend systems.

<!-- pagebreak -->

## Question 9:

In which scenario would you prefer using Amazon Kinesis over Amazon SQS?

- A) When needing to ensure messages are processed exactly once in order.
  - Incorrect: This is best handled by SQS FIFO queues.
- B) When requiring real-time processing of streaming data.
  - Correct: Amazon Kinesis is designed for real-time processing of streaming data.
- C) When sending notifications to multiple subscribers.
  - Incorrect: Sending notifications to multiple subscribers is best handled by Amazon SNS.
- D) When using legacy applications that need specific messaging protocols.
  - Incorrect: Legacy applications needing specific messaging protocols should use Amazon MQ.

<!-- pagebreak -->

## Question 10:

What is a significant feature of Amazon MQ that supports high availability?

- A) FIFO queues for ordered message processing.
  - Incorrect: FIFO queues are a feature of Amazon SQS, not MQ.
- B) Multi-AZ deployment with automatic failover.
  - Correct: Amazon MQ supports high availability through multi-AZ deployment with automatic failover.
- C) Real-time data streaming.
  - Incorrect: Real-time data streaming is a feature of Amazon Kinesis.
- D) Pub/sub messaging for notifications.
  - Incorrect: Pub/sub messaging is a feature of Amazon SNS.
