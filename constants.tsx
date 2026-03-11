
import React from 'react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    title: "E-commerce API (games store)",
    description: "A RESTful e-commerce backend API built with Laravel, focused on real-world business logic such as guest cart handling, cart merging on authentication.",
    techStack: ["PHP", "Laravel", "MySQL", "Postman", "Sanctum authentication"],
    githubUrl: "https://github.com/ZaherMardini/Game-store-API"
  },
  {
    title: "AutoLicence (in progress)",
    description: "A Laravel-based web application that simulates the workflow of a driving license authority. The system allows administrators to manage applicants, process license-related services, and schedule driving tests.",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "Breeze toolkit", "Alpine.js", "MySql"],
    githubUrl: "https://github.com/ZaherMardini/AutoLlicence"
  },
];

export const SKILLS = [
  "PHP",
  "Laravel",
  "MySQL",
  "REST APIs",
  "Git",
  "Postman",
  "Database Design",
  "API Documentation"
];
