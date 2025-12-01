import { Experience, Project, SkillCategory, SocialLinks } from "./types";
import { Github, Linkedin, Mail, Code, Brain, Database, Terminal, Layers } from "lucide-react";

export const SOCIAL_LINKS: SocialLinks = {
  linkedin: "https://www.linkedin.com/in/shyamtr/",
  github: "https://github.com/TRshyam",
  email: "shyamraveedran@gmail.com", // Placeholder
};

export const HERO_CONTENT = {
  name: "Shyam T.R",
  title: "AI Research Engineer",
  tagline: "I build practical AI systems in computer vision, deep learning, and real-time analytics.",
};

export const ABOUT_CONTENT = `I’m Shyam T.R, an AI research engineer focused on computer vision and deep learning. I like building real-world systems like surgical tool analysis, sports tracking, and behavior monitoring. I care about clean implementations, reliable models, and solving problems that actually help people and businesses.`;

export const FUTURE_GOALS = `I’m interested in research-oriented roles in computer vision and deep learning, and I’m preparing for opportunities like AI internships and roles at companies such as Sony Research India. I’m also learning German as I plan to move to Germany, and I’m exploring ideas around hosting, storage, and private server services for businesses.`;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Deep Learning",
    skills: ["PyTorch", "YOLOv8", "Detectron2", "U-Net", "DeepLabV3+", "Mask R-CNN"],
  },
  {
    category: "Computer Vision",
    skills: ["Segmentation", "Object Detection", "Tracking", "Edge Detection", "Contour Analysis", "Pixel-to-mm Measurement"],
  },
  {
    category: "Backend & APIs",
    skills: ["Flask","FastAPI", "REST APIs"],
  },
  {
    category: "Frontend & Tools",
    skills: ["React", "OpenCV", "Git", "Cloud Concepts", "Dashboards"],
  },
  {
    category: "Soft Skills",
    skills: ["Research Thinking", "Clear Communication", "Team Collaboration", "Fast Learner"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "surgical-tool",
    title: "Surgical Tool Classification & Measurement",
    description: "System to detect and segment surgical tools, then measure their size for classification.",
    techStack: ["YOLOv8", "U-Net", "Flask", "OpenCV", "React"],
    points: [
      "Segmented tools instead of only using bounding boxes.",
      "Converted pixels to millimeters for tool height/width.",
      "Integrated with a Flask backend and real-time camera feed.",
    ],
  },
  {
    id: "cricket-tracking",
    title: "Cricket Ball Tracking & 3D Trajectory",
    description: "Computer vision system to detect, track, and predict a cricket ball’s motion.",
    techStack: ["Detectron2", "OpenCV", "Kalman Filter", "DeepSORT"],
    points: [
      "Segmented the cricket ball and tracked it across frames.",
      "Used a Kalman filter and DeepSORT for prediction and tracking.",
      "Converted 2D coordinates to 3D pitch coordinates with calibration.",
    ],
  },
  {
    id: "cattle-behavior",
    title: "Cattle Behavior Analytics Dashboard",
    description: "Dashboard to visualize cattle behaviors like standing, lying, and eating.",
    techStack: ["React", "Flask", "Data Visualization"],
    points: [
      "Visualized data for multiple cows over time.",
      "Grouped behaviors by lying/eating time.",
      "Backend served insights from processed data.",
    ],
  },
  {
    id: "greenkaufen",
    title: "Greenkaufen – Eco-friendly E-commerce",
    description: "Prototype of an eco-friendly e-commerce platform focusing on sustainability.",
    techStack: ["Flask", "Python", "Analytics"],
    points: [
      "Analysed one year of sales data across ~30 products.",
      "Focus on sustainability and product impact.",
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "ai-research-project",
    type: "work",
    role: "AI Research Engineer",
    company: "IGrad AI Labs", 
    period: "Dec 2024 - Present",
    description: "Worked on a computer vision project involving segmentation, detection, model training, evaluation, and real-time inference.",
  },
  {
    id: "bachelors",
    type: "education",
    role: "Bachelor’s in Engineering",
    company: "Nandha Engineering College", // Placeholder as specific college wasn't provided
    description: "Relevant Coursework: Computer Vision, Machine Learning, Deep Learning, Data Structures.",
  },
];