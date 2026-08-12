export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectDetails = {
  problem: string;
  solution: string;
  contribution: string;
  challenges: string;
  learnings: string;
};

export type Project = {
  name: string;
  slug: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  primary?: boolean;
  status: "pending" | "published";
  screenshots: string[];
  details: ProjectDetails;
};

export type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  technologies?: string[];
  featured?: boolean;
};

