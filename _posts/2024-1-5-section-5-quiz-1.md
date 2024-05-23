---
layout: posts
title: 'Section 5 Quiz-1'
section: Section-5
lesson: 1
---

<!-- Content Covered Lesson-1 of Section-5 -->

## Question 1:

What does high availability refer to in cloud computing?

- A) The ability to scale horizontally
  - Incorrect: High availability focuses on minimizing downtime.
- B) The ability to operate continuously without significant downtime
  - Correct: High availability ensures that a system operates continuously without significant downtime.
- C) The ability to increase the capacity of existing resources
  - Incorrect: This describes vertical scaling.
- D) The ability to balance traffic across multiple targets
  - Incorrect: This describes load balancing.

<!-- pagebreak -->

## Question 2:

What is horizontal scaling in cloud computing?

- A) Increasing the capacity of existing resources
  - Incorrect: This describes vertical scaling.
- B) Adding more resources of the same type to increase capacity
  - Correct: Horizontal scaling involves adding more resources of the same type to increase capacity.
- C) Using multiple call centers in different locations
  - Incorrect: This is an example of high availability.
- D) Improving the efficiency of existing resources
  - Incorrect: This describes vertical scaling.

<!-- pagebreak -->

## Question 3:

What is an example of vertical scaling in a call center?

- A) Hiring more call representatives
  - Incorrect: This describes horizontal scaling.
- B) Giving existing call representatives better tools
  - Correct: Vertical scaling involves giving existing representatives better tools, like more powerful computers or additional phone lines.
- C) Opening new call centers in different locations
  - Incorrect: This is an example of high availability.
- D) Distributing calls across multiple representatives
  - Incorrect: This could describe horizontal scaling or load balancing.

---

layout: posts
title: 'Elastic Load Balancing (ELB) and the Four Types of Load Balancers in AWS'
section: Section-5
lesson: 2

---

<!-- Content Covered Lesson-2 of Section-5 -->

## Question 4:

Which type of load balancer operates at the application layer (Layer 7) of the OSI model?

- A) Network Load Balancer (NLB)
  - Incorrect: NLB operates at the transport layer (Layer 4).
- B) Gateway Load Balancer (GLB)
  - Incorrect: GLB typically operates at the network layer (Layer 3).
- C) Application Load Balancer (ALB)
  - Correct: ALB operates at the application layer (Layer 7).
- D) Classic Load Balancer (CLB)
  - Incorrect: CLB operates at both Layer 4 and Layer 7 but lacks advanced routing features.

<!-- pagebreak -->

## Question 5:

Which load balancer is optimized for low latency and high throughput?

- A) Application Load Balancer (ALB)
  - Incorrect: ALB is optimized for HTTP/HTTPS traffic.
- B) Network Load Balancer (NLB)
  - Correct: NLB is designed for high performance and low latency.
- C) Gateway Load Balancer (GLB)
  - Incorrect: GLB is aimed at managing virtual appliances.
- D) Classic Load Balancer (CLB)
  - Incorrect: CLB is a legacy option with fewer features compared to ALB and NLB.

<!-- pagebreak -->

## Question 6:

Which AWS load balancer type is designed for managing virtual appliances?

- A) Application Load Balancer (ALB)
  - Incorrect: ALB is for HTTP/HTTPS traffic.
- B) Network Load Balancer (NLB)
  - Incorrect: NLB is for TCP/UDP traffic.
- C) Gateway Load Balancer (GLB)
  - Correct: GLB is designed for managing virtual appliances.
- D) Classic Load Balancer (CLB)
  - Incorrect: CLB is a general-purpose load balancer.

---

layout: posts
title: 'Auto Scaling Groups (ASGs) Overview'
section: Section-5
lesson: 3

---

<!-- Content Covered Lesson-3 of Section-5 -->

## Question 7:

What is the primary purpose of Auto Scaling Groups (ASGs) in AWS?

- A) To manage user access to AWS resources
  - Incorrect: This is the role of IAM.
- B) To ensure the correct amount of EC2 instances to handle application load
  - Correct: ASGs ensure that you have the correct amount of EC2 instances available to handle the load for your application.
- C) To manage security groups and firewall settings
  - Incorrect: Security groups manage firewall settings.
- D) To monitor the health of AWS services
  - Incorrect: This is the role of CloudWatch.

<!-- pagebreak -->

## Question 8:

Which feature of ASGs allows you to schedule specific times to scale your application's capacity?

- A) Dynamic Scaling
  - Incorrect: Dynamic Scaling adjusts based on demand or metrics.
- B) Health Checks
  - Incorrect: Health Checks monitor the health of instances.
- C) Scheduled Scaling
  - Correct: Scheduled Scaling allows you to specify times to scale your application's capacity.
- D) Load Balancing
  - Incorrect: Load Balancing distributes traffic across instances.

<!-- pagebreak -->

## Question 9:

What are the steps involved in creating an Auto Scaling Group?

- A) Create an IAM role, configure security groups, set up CloudWatch alarms
  - Incorrect: These are related steps but not the direct steps for ASG.
- B) Create a launch configuration, specify desired capacity, set scaling policies
  - Correct: The steps are creating a launch configuration, specifying the desired capacity, and setting scaling policies.
- C) Launch an EC2 instance, set up billing alerts, configure SNS topics
  - Incorrect: These steps are not directly related to ASG creation.
- D) Configure VPC settings, create S3 buckets, set up IAM policies
  - Incorrect: These steps are not relevant to ASG creation.

<!-- pagebreak -->

## Question 10:

What is a key benefit of using Auto Scaling Groups for web applications?

- A) Increased storage capacity
  - Incorrect: This benefit is not specific to ASGs.
- B) Variable traffic management
  - Correct: ASGs are ideal for managing variable traffic by adjusting capacity based on real-time demand.
- C) Enhanced security settings
  - Incorrect: Security groups manage security settings.
- D) Simplified database management
  - Incorrect: This benefit is not specific to ASGs.
