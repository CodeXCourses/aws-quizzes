---
layout: posts
title: 'Section 5 Quiz-1'
section: Section-5
lesson: 1
---

<!-- Content Covered Lesson-1 to Lesson-3 of Section-5 -->

## Question 1

What is high availability in cloud computing?

- A) Adding more resources to an existing system to increase its capacity
  - Incorrect: This describes vertical scaling.
- B) Ensuring a system operates continuously without significant downtime
  - Correct: High availability refers to the ability of a system to operate continuously and minimize downtime.
- C) Distributing incoming traffic across multiple servers
  - Incorrect: This describes load balancing.
- D) Increasing the power of existing resources
  - Incorrect: This describes vertical scaling.

<!-- pagebreak -->

## Question 2

What is horizontal scaling?

- A) Adding more powerful resources to an existing system
  - Incorrect: This describes vertical scaling.
- B) Adding more resources of the same type to increase capacity
  - Correct: Horizontal scaling involves adding more resources of the same type to handle increased load.
- C) Reducing the number of resources to save costs
  - Incorrect: This is not a description of horizontal scaling.
- D) Ensuring a system operates continuously without significant downtime
  - Incorrect: This describes high availability.

<!-- pagebreak -->

## Question 3

What is an example of vertical scaling in a call center?

- A) Hiring more call representatives to handle additional calls
  - Incorrect: This describes horizontal scaling.
- B) Giving existing call representatives more powerful computers
  - Correct: Vertical scaling involves increasing the capacity of existing resources, such as providing better tools to call representatives.
- C) Opening new call centers in different locations
  - Incorrect: This describes an aspect of high availability.
- D) Implementing load balancing to distribute calls evenly
  - Incorrect: This describes load balancing.

<!-- pagebreak -->

## Question 4

Why is horizontal scaling common in cloud computing?

- A) It is cheaper than vertical scaling
  - Incorrect: Horizontal scaling is flexible and scalable but not necessarily cheaper.
- B) It allows for incremental scaling and redundancy
  - Correct: Horizontal scaling allows for adding resources as needed, providing flexibility and redundancy.
- C) It focuses on increasing the power of existing resources
  - Incorrect: This describes vertical scaling.
- D) It ensures a system operates continuously without downtime
  - Incorrect: This describes high availability.

<!-- pagebreak -->

## Question 5

What is a key benefit of combining horizontal and vertical scaling?

- A) Reducing the number of resources needed
  - Incorrect: Combining both types of scaling does not necessarily reduce resources.
- B) Maximizing performance and flexibility
  - Correct: Combining horizontal and vertical scaling maximizes performance and flexibility by addressing different aspects of scaling.
- C) Simplifying the management of resources
  - Incorrect: Combining scaling methods may not simplify management.
- D) Ensuring minimal resource usage
  - Incorrect: The focus is on performance and flexibility, not minimal resource usage.

<!-- pagebreak -->

## Question 6

What does Elastic Load Balancing (ELB) do?

- A) Increases the power of existing instances
  - Incorrect: This describes vertical scaling.
- B) Automatically distributes incoming traffic across multiple targets
  - Correct: ELB distributes incoming application traffic across multiple targets to ensure high availability and fault tolerance.
- C) Provides temporary security credentials for users
  - Incorrect: This is a feature of AWS STS.
- D) Manages user identities and enables single sign-on
  - Incorrect: This is a feature of AWS Directory Services.

<!-- pagebreak -->

## Question 7

Which type of load balancer operates at the application layer (Layer 7)?

- A) Network Load Balancer (NLB)
  - Incorrect: NLB operates at the transport layer (Layer 4).
- B) Gateway Load Balancer (GLB)
  - Incorrect: GLB operates at the network layer.
- C) Application Load Balancer (ALB)
  - Correct: ALB operates at the application layer (Layer 7) and handles HTTP/HTTPS traffic.
- D) Classic Load Balancer (CLB)
  - Incorrect: While CLB can operate at Layer 7, it is considered a legacy option with fewer features compared to ALB.

<!-- pagebreak -->

## Question 8

What is a key feature of the Network Load Balancer (NLB)?

- A) Content-based routing
  - Incorrect: Content-based routing is a feature of the Application Load Balancer (ALB).
- B) Handling millions of requests per second with low latency
  - Correct: NLB is designed for high performance and low latency, handling millions of requests per second.
- C) Managing virtual appliances
  - Incorrect: Managing virtual appliances is a feature of the Gateway Load Balancer (GLB).
- D) Supporting both HTTP/HTTPS and TCP/SSL traffic
  - Incorrect: While NLB supports TCP/UDP traffic, CLB supports both HTTP/HTTPS and TCP/SSL traffic.

<!-- pagebreak -->

## Question 9

Which type of load balancer is suitable for managing virtual appliances like firewalls?

- A) Application Load Balancer (ALB)
  - Incorrect: ALB is used for HTTP/HTTPS traffic.
- B) Network Load Balancer (NLB)
  - Incorrect: NLB is designed for high performance and low latency.
- C) Gateway Load Balancer (GLB)
  - Correct: GLB is designed for managing virtual appliances such as firewalls and intrusion detection systems.
- D) Classic Load Balancer (CLB)
  - Incorrect: CLB is considered a legacy option and not specifically designed for virtual appliances.

<!-- pagebreak -->

## Question 10

What is the role of Auto Scaling Groups (ASGs) in AWS?

- A) To provide a single sign-on solution
  - Incorrect: This is a feature of IAM Identity Center.
- B) To ensure the correct amount of EC2 instances are available to handle the load
  - Correct: ASGs automatically adjust the number of EC2 instances based on demand or metrics to maintain performance and efficiency.
- C) To manage user identities and permissions
  - Incorrect: This is a feature of IAM.
- D) To distribute incoming traffic across multiple targets
  - Incorrect: This is the role of Elastic Load Balancing (ELB).
