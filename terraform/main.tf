provider "aws" {
  region = "us-east-1"
}

resource "aws_ecr_repository" "frontend" {
  name = "react-frontend"
}

resource "aws_ecr_repository" "backend" {
  name = "nestjs-backend"
}

module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "my-cluster"
  cluster_version = "1.27"
  subnets         = ["subnet-1", "subnet-2", "subnet-3"]
  vpc_id          = "your-vpc-id"

  node_groups = {
    eks_nodes = {
      desired_capacity = 2
      max_capacity     = 3
      min_capacity     = 1
      instance_types   = ["t3.medium"]
    }
  }
}
