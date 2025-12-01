import { Experience, Project, SkillCategory, SocialLinks } from "./types";

export const SOCIAL_LINKS: SocialLinks = {
  linkedin: "https://www.linkedin.com/in/shyamtr/",
  github: "https://github.com/TRshyam",
  email: "shyamraveedran@gmail.com",
};

export const HERO_CONTENT = {
  name: "Shyam T.R",
  title: "AI Research Engineer",
  tagline: "I build practical AI systems for perception, tracking, and real-time inference.",
};

export const ABOUT_CONTENT = `I’m Shyam T.R, an AI research engineer at iGrad AI Labs. I work on vision models and production-grade real-time systems. My recent work includes surgical tool analysis, sports tracking, and automated behavior monitoring. I enjoy solving problems where accuracy, speed, and deployment matter.`;

export const FUTURE_GOALS = `I'm planning to pursue a master's degree in Germany in areas like AI, robotics, and autonomous systems. I’m especially interested in perception pipelines, ROS-based systems, and intelligent automation. I’m preparing for research roles and internships in computer vision and deep learning while improving my academic foundation and applied experience.`;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Deep Learning",
    skills: ["PyTorch", "YOLOv8", "Detectron2", "U-Net", "DeepLabV3+", "Mask R-CNN"],
  },
  {
    category: "Computer Vision",
    skills: [
      "Segmentation",
      "Object Detection",
      "Tracking",
      "Edge Detection",
      "Contour Analysis",
      "Pixel-to-mm Measurement",
    ],
  },
  {
    category: "Backend & APIs",
    skills: ["Flask", "FastAPI", "REST APIs"],
  },
  {
    category: "Frontend & Tooling",
    skills: ["React", "OpenCV", "Git", "Cloud Concepts", "Dashboards"],
  },
  {
    category: "Professional Skills",
    skills: ["Research Thinking", "Clear Communication", "Collaboration", "Fast Learning"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "surgical-tool",
    title: "Surgical Tool Classification & Measurement",
    description:
      "A system that segments surgical tools and classifies them based on calibrated pixel-to-mm size measurements.",
    techStack: ["YOLOv8", "U-Net", "Flask", "OpenCV", "React"],
    points: [
      "Used instance segmentation instead of basic bounding boxes.",
      "Measured tool dimensions in millimeters for classification.",
      "Integrated model outputs with a Flask backend and live camera stream.",
    ],
  },
  {
    id: "cricket-tracking",
    title: "Cricket Ball Tracking & 3D Trajectory",
    description:
      "A real-time system for detecting, tracking, and predicting cricket ball trajectory.",
    techStack: ["Detectron2", "OpenCV", "Kalman Filter", "DeepSORT"],
    points: [
      "Segmented and tracked the ball across video frames.",
      "Used a Kalman filter and DeepSORT to improve stability and continuity.",
      "Mapped 2D detections to 3D pitch coordinates through calibration.",
    ],
  },
  {
    id: "cattle-behavior",
    title: "Cattle Behavior Analytics Dashboard",
    description:
      "A dashboard that visualizes behavioral patterns like standing, lying, and eating.",
    techStack: ["React", "Flask", "Visualization"],
    points: [
      "Processed and displayed behavior patterns for multiple animals.",
      "Applied grouping based on lying and eating duration.",
      "Backend exposed processed analytics through an API.",
    ],
  },
  {
    id: "greenkaufen",
    title: "Greenkaufen – Eco-friendly E-commerce",
    description:
      "A prototype e-commerce platform focused on sustainable products and analytics.",
    techStack: ["Flask", "Python", "Analytics"],
    points: [
      "Evaluated one year of product-level sales data for trends.",
      "Designed the system with sustainability as a core focus.",
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
    description:
      "Working on a computer vision pipeline involving model training, segmentation, evaluation, and real-time inference.",
  },
  {
    id: "bachelors",
    type: "education",
    role: "Bachelor's in Engineering (AI & Data Science)",
    company: "Nandha Engineering College",
    description:
      "Relevant coursework: Computer Vision, Machine Learning, Deep Learning, and Data Structures.",
  },
];
