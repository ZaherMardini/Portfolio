
import React from 'react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    title: "SecureAuth API Gateway",
    description: "A robust REST API built to handle multi-factor authentication and JWT-based session management. Focused on security benchmarks and high-concurrency handling.",
    techStack: ["PHP 8.2", "Laravel", "MySQL", "Redis", "Docker"],
    githubUrl: "https://github.com/example/secure-auth-api"
  },
  {
    title: "InventorySync Engine",
    description: "Real-time inventory synchronization microservice for e-commerce platforms. Features automated stock reconciliation and high-performance SQL query optimization.",
    techStack: ["PHP", "MySQL", "Postman", "Git", "RESTful Patterns"],
    githubUrl: "https://github.com/example/inventory-sync"
  }
];

export const SKILLS = [
  "PHP",
  "Laravel",
  "MySQL",
  "REST APIs",
  "Git",
  "Postman",
  "Unit Testing",
  "Database Design",
  "API Documentation"
];
