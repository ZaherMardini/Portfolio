// Added React import to provide access to the React namespace for types like ReactNode
import React from 'react';

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: React.ReactNode;
}