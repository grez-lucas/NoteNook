provider "aws" {
  region = var.aws_region
  access_key = var.aws_access_key
    secret_key = var.aws_secret_key
}

resource "aws_ecr_repository" "frontend" {
  name = var.ecr_repository_frontend
}

resource "aws_ecr_repository" "classnotes" {
  name = var.ecr_repository_classnotes
}

resource "aws_ecr_repository" "courses" {
  name = var.ecr_repository_courses
}

resource "aws_ecr_repository" "users" {
  name = var.ecr_repository_users
}

resource "aws_ecs_cluster" "notenook" {
  name = var.ecs_cluster
}

resource "aws_ecs_task_definition" "frontend" {
  family                   = "frontend"
  container_definitions   = file("${path.module}/ecs/frontend-container-definition.json")
}

resource "aws_ecs_task_definition" "classnotes" {
  family                   = "classnotes"
  container_definitions   = file("${path.module}/ecs/classnotes-container-definition.json")
}

resource "aws_ecs_task_definition" "courses" {
  family                   = "courses"
  container_definitions   = file("${path.module}/ecs/courses-container-definition.json")
}

resource "aws_ecs_task_definition" "users" {
  family                   = "users"
  container_definitions   = file("${path.module}/ecs/users-container-definition.json")
}

resource "aws_ecs_service" "frontend" {
  name            = var.ecs_service_frontend
  cluster         = aws_ecs_cluster.notenook.id
  task_definition = aws_ecs_task_definition.frontend.arn
  launch_type     = "EC2"  # Update this if using Fargate
  desired_count   = 1
}

resource "aws_ecs_service" "classnotes" {
  name            = var.ecs_service_classnotes
  cluster         = aws_ecs_cluster.notenook.id
  task_definition = aws_ecs_task_definition.classnotes.arn
  launch_type     = "EC2"  # Update this if using Fargate
  desired_count   = 1
}

resource "aws_ecs_service" "courses" {
  name            = var.ecs_service_courses
  cluster         = aws_ecs_cluster.notenook.id
  task_definition = aws_ecs_task_definition.courses.arn
  launch_type     = "EC2"  # Update this if using Fargate
  desired_count   = 1
}

resource "aws_ecs_service" "users" {
  name            = var.ecs_service_users
  cluster         = aws_ecs_cluster.notenook.id
  task_definition = aws_ecs_task_definition.users.arn
  launch_type     = "EC2"  # Update this if using Fargate
  desired_count   = 1
}
