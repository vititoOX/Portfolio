import { BriefcaseBusiness as Linkedin, GitBranch as Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p>© 2026 · Portfolio desarrollado con Next.js + TypeScript</p>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
