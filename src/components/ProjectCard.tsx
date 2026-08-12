import { ArrowUpRight, GitBranch as Github } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types";
import { ProjectVisual } from "@/components/ProjectVisual";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card${project.primary ? " project-card-primary" : ""}`}>
      <ProjectVisual index={index} image={project.image} name={project.name} />
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.eyebrow}</span>
          {project.primary ? <span className="featured-tag">Principal</span> : null}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list" aria-label="Tecnologías">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-links">
          <Link href={`/projects/${project.slug}`}>
            Ver ficha <ArrowUpRight size={16} />
          </Link>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo <ArrowUpRight size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
