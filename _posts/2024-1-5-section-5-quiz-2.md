---
layout: posts
title: 'Section 5 Quiz-2'
section: Section-5
lesson: 2
---

<!-- Content Covered Lesson-4, Lesson-5, Lesson-6 of Section-5 -->

## Question 1:

What is the primary benefit of using manual scaling for Auto Scaling Groups (ASGs)?

- A) It requires no manual intervention
  - Incorrect: Manual scaling requires direct control.
- B) It provides full control over the scaling process
  - Correct: Manual scaling gives you direct control over the number of instances.
- C) It automatically adjusts to changing demands
  - Incorrect: Manual scaling does not respond automatically to changes in demand.
- D) It schedules scaling actions based on known patterns
  - Incorrect: This describes scheduled scaling, not manual scaling.

<!-- pagebreak -->

## Question 2:

Which dynamic scaling method adjusts the number of EC2 instances to maintain a target value for a specified metric?

- A) Simple / Step Scaling
  - Incorrect: This method adjusts instances incrementally based on CloudWatch alarms.
- B) Target Tracking Scaling
  - Correct: Target tracking scaling maintains a target value for a specified metric.
- C) Predictive Scaling
  - Incorrect: Predictive scaling uses machine learning to predict future traffic.
- D) Scheduled Scaling
  - Incorrect: Scheduled scaling occurs at specific times based on known patterns.

<!-- pagebreak -->

## Question 3:

What is the primary advantage of using step scaling for Auto Scaling Groups?

- A) Maintains a target value for a specified metric
  - Incorrect: This describes target tracking scaling.
- B) Schedules scaling actions based on known usage patterns
  - Incorrect: This describes scheduled scaling.
- C) Adjusts instances incrementally in response to CloudWatch alarms
  - Correct: Step scaling adjusts the number of instances incrementally based on CloudWatch alarms.
- D) Provides full manual control over scaling activities
  - Incorrect: This describes manual scaling.

<!-- pagebreak -->

## Question 4:

Which scaling strategy is best suited for workloads with predictable, cyclical patterns?

- A) Manual Scaling
  - Incorrect: Manual scaling requires direct control, not suitable for predictable patterns.
- B) Dynamic Scaling
  - Incorrect: Dynamic scaling responds to changing demand, not fixed patterns.
- C) Scheduled Scaling
  - Correct: Scheduled scaling is ideal for workloads with predictable, cyclical patterns.
- D) Predictive Scaling
  - Incorrect: Predictive scaling uses machine learning for future traffic predictions.

<!-- pagebreak -->

## Question 5:

How do you implement dynamic scaling using AWS Management Console?

- A) Adjust the desired capacity manually
  - Incorrect: This describes manual scaling.
- B) Define scaling policies and CloudWatch alarms
  - Correct: Implement dynamic scaling by creating scaling policies and defining CloudWatch alarms.
- C) Schedule scaling actions at specific times
  - Incorrect: This describes scheduled scaling.
- D) Set up machine learning models
  - Incorrect: This describes predictive scaling.

<!-- pagebreak -->

## Question 6:

What is the key feature of predictive scaling in Auto Scaling Groups?

- A) Manually adjusting the number of instances
  - Incorrect: Predictive scaling does not require manual adjustments.
- B) Using CloudWatch alarms for scaling
  - Incorrect: This describes simple/step scaling.
- C) Scheduling scaling actions at fixed times
  - Incorrect: This describes scheduled scaling.
- D) Utilizing machine learning to predict future traffic
  - Correct: Predictive scaling uses machine learning to predict future traffic and schedules scaling actions.

<!-- pagebreak -->

## Question 7:

Which type of load balancer is best for advanced request routing in modern application architectures?

- A) Network Load Balancer (NLB)
  - Incorrect: NLB is optimized for low latency and high throughput.
- B) Application Load Balancer (ALB)
  - Correct: ALB is best for advanced request routing in modern application architectures.
- C) Gateway Load Balancer (GLB)
  - Incorrect: GLB is ideal for integrating virtual network appliances.
- D) Classic Load Balancer (CLB)
  - Incorrect: CLB provides basic load balancing and is considered a legacy option.

<!-- pagebreak -->

## Question 8:

What is the purpose of Elastic Load Balancing (ELB) in AWS?

- A) To provide persistent storage for EC2 instances
  - Incorrect: This describes EBS, not ELB.
- B) To automatically distribute incoming traffic across multiple targets
  - Correct: ELB distributes incoming traffic across multiple targets for fault tolerance and high availability.
- C) To manage virtual firewalls for EC2 instances
  - Incorrect: This describes security groups, not ELB.
- D) To automate the creation of custom AMIs
  - Incorrect: This describes EC2 Image Builder, not ELB.

<!-- pagebreak -->

## Question 9:

Which ELB type is optimized for low latency and high throughput?

- A) Application Load Balancer (ALB)
  - Incorrect: ALB is optimized for advanced request routing.
- B) Network Load Balancer (NLB)
  - Correct: NLB is optimized for low latency and high throughput.
- C) Gateway Load Balancer (GLB)
  - Incorrect: GLB is designed for integrating virtual network appliances.
- D) Classic Load Balancer (CLB)
  - Incorrect: CLB provides basic load balancing and is considered a legacy option.

<!-- pagebreak -->

## Question 10:

What is a key benefit of using Auto Scaling Groups (ASGs)?

- A) Ensures continuous data backup
  - Incorrect: This is not the primary benefit of ASGs.
- B) Provides a scalable and highly available system
  - Correct: ASGs help create a scalable and highly available system.
- C) Reduces the need for security groups
  - Incorrect: ASGs do not affect the need for security groups.
- D) Limits the number of instances to a fixed amount
  - Incorrect: ASGs increase flexibility, not limit instances.
