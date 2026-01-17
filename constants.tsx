
import React from 'react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    title: "ZGit (in progress)",
    description: "Simplified Git system from scratch, focusing on file system persistence, content-addressable storage, hashing, and command-line tooling.",
    techStack: ["C++"],
    githubUrl: "#"
  },
  {
    title: "E-commerce API (games store)",
    description: "A RESTful e-commerce backend API built with Laravel, focused on real-world business logic such as guest cart handling, cart merging on authentication.",
    techStack: ["PHP", "Laravel", "MySQL", "Postman", "Sanctum authentication"],
    githubUrl: "https://github.com/ZaherMardini/Game-store-API"
  },
  {
    title: "Medium clone",
    description: "A simple imitation of the blog site Medium, built with Laravel and Blade templates. This project demonstrates core backend development skills.",
    techStack: ["PHP", "Sqlite", "Tailwind CSS", "Breeze toolkit", "Alpine.js"],
    githubUrl: "https://github.com/ZaherMardini/Medium_clone"
  }
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
