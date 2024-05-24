---
layout: posts
title: 'Section 8 Quiz-2'
section: Section-8
lesson: 2
---

<!-- Content Covered Lesson-4, Lesson-5, Lesson-6 of Section-8 -->

## Question 1:

What does "serverless" imply in the context of AWS?

- A) No servers are involved
  - Incorrect: Servers are involved, but they are managed by the cloud provider.
- B) Developers do not need to manage servers
  - Correct: Serverless means the cloud provider handles server management, scaling, and maintenance.
- C) Applications run without any infrastructure
  - Incorrect: Applications still require infrastructure, but it's managed by the cloud provider.
- D) It only applies to AWS Lambda
  - Incorrect: Serverless applies to a broader range of services, not just Lambda.

<!-- pagebreak -->

## Question 2:

Which AWS service is a key-value and document database that offers single-digit millisecond performance at any scale?

- A) Amazon S3
  - Incorrect: S3 is an object storage service, not a database.
- B) Amazon DynamoDB
  - Correct: DynamoDB is a key-value and document database known for its low latency performance.
- C) AWS Fargate
  - Incorrect: Fargate is a serverless compute engine for containers.
- D) AWS Lambda
  - Incorrect: Lambda is a serverless compute service for running code without provisioning servers.

<!-- pagebreak -->

## Question 3:

What is a key benefit of using Docker in application deployment?

- A) Manual dependency management
  - Incorrect: Docker simplifies dependency management by packaging everything needed to run an application into a container.
- B) Inconsistent application environments
  - Incorrect: Docker ensures consistent environments across different platforms.
- C) Simplified packaging and portability of applications
  - Correct: Docker packages applications with all their dependencies, ensuring they run consistently in any environment.
- D) Requires traditional deployment methods
  - Incorrect: Docker abstracts traditional deployment complexities.

<!-- pagebreak -->

## Question 4:

Which AWS service allows you to store, manage, and deploy Docker container images?

- A) Amazon S3
  - Incorrect: S3 is not specifically designed for Docker images.
- B) Amazon ECR
  - Correct: Amazon Elastic Container Registry (ECR) is a Docker container registry service.
- C) AWS Lambda
  - Incorrect: Lambda is for running code, not for managing container images.
- D) Amazon RDS
  - Incorrect: RDS is a relational database service, not a container registry.

<!-- pagebreak -->

## Question 5:

When should you consider using AWS Fargate?

- A) When you need to manage the underlying EC2 instances
  - Incorrect: Fargate is serverless and does not require managing EC2 instances.
- B) When you need a serverless compute engine for containers
  - Correct: Fargate is a serverless compute engine that removes the need to manage servers.
- C) When you require a traditional VM environment
  - Incorrect: Fargate abstracts the server environment, focusing on containers.
- D) When you need a private Docker registry
  - Incorrect: ECR is used for managing Docker registries.

<!-- pagebreak -->

## Question 6:

What is the main purpose of AWS Fargate?

- A) Provision and manage EC2 instances for container workloads
  - Incorrect: Fargate eliminates the need to manage EC2 instances.
- B) Run serverless compute for containers without managing servers
  - Correct: Fargate runs containers without requiring the user to manage the underlying servers.
- C) Provide an interface for deploying virtual machines
  - Incorrect: Fargate is focused on container deployment, not VMs.
- D) Manage container storage solutions
  - Incorrect: Fargate focuses on compute, not storage management.

<!-- pagebreak -->

## Question 7:

In AWS, which service provides a fully managed container orchestration platform?

- A) Amazon S3
  - Incorrect: S3 is for object storage, not container orchestration.
- B) Amazon ECS
  - Correct: Amazon Elastic Container Service (ECS) is a fully managed container orchestration service.
- C) AWS Lambda
  - Incorrect: Lambda is a serverless compute service, not a container orchestration platform.
- D) Amazon RDS
  - Incorrect: RDS is a managed relational database service, not for containers.

<!-- pagebreak -->

## Question 8:

What does Amazon ECR provide in the context of AWS container services?

- A) An in-memory data store
  - Incorrect: ECR is not an in-memory data store.
- B) A registry for storing Docker container images
  - Correct: ECR is a service for storing, managing, and deploying Docker container images.
- C) A compute service for running Docker containers
  - Incorrect: ECR is for storing images; ECS or Fargate run the containers.
- D) A serverless compute engine
  - Incorrect: ECR is a container registry, not a compute engine.

<!-- pagebreak -->

## Question 9:

Which service should be used for running Docker containers without managing the underlying infrastructure?

- A) Amazon EC2
  - Incorrect: EC2 requires managing the server infrastructure.
- B) AWS Fargate
  - Correct: Fargate runs Docker containers without the need to manage underlying servers.
- C) Amazon RDS
  - Incorrect: RDS is for databases, not Docker containers.
- D) Amazon S3
  - Incorrect: S3 is for object storage, not running containers.

<!-- pagebreak -->

## Question 10:

Which AWS service integrates with ECS to provide a private repository for Docker images?

- A) AWS Lambda
  - Incorrect: Lambda is for running code, not a Docker registry.
- B) Amazon ECR
  - Correct: Amazon Elastic Container Registry (ECR) integrates with ECS to provide a private Docker image repository.
- C) Amazon S3
  - Incorrect: S3 is not a Docker image registry.
- D) Amazon RDS
  - Incorrect: RDS is a relational database service.
