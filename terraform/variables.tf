variable "aws_access_key" {
  description = "AWS access key"
  type        = string
}

variable "aws_secret_key" {
    type = string
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default = "us-west-2"
}

variable "ecr_repository_frontend" {
  description = "ECR repository name for the frontend"
  type        = string
}

variable "ecr_repository_classnotes" {
  description = "ECR repository name for classnotes"
  type        = string
}

variable "ecr_repository_courses" {
  description = "ECR repository name for courses"
  type        = string
}

variable "ecr_repository_users" {
  description = "ECR repository name for users"
  type        = string
}

variable "ecs_service_frontend" {
  description = "ECS service name for the frontend"
  type        = string
}

variable "ecs_service_classnotes" {
  description = "ECS service name for classnotes"
  type        = string
}

variable "ecs_service_courses" {
  description = "ECS service name for courses"
  type        = string
}

variable "ecs_service_users" {
  description = "ECS service name for users"
  type        = string
}

variable "ecs_cluster" {
  description = "ECS cluster name"
  type        = string
}

terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 5.21.0"
        }
    }
}