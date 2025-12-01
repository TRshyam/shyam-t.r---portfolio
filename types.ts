export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  points: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company?: string;
  period?: string;
  description: string;
  type: 'education' | 'work';
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  email?: string;
}