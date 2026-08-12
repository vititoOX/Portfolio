import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, GitBranch as Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  return project ? { title: project.name, description: project.description } : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const detailItems = [
    ["Problema", project.details.problem],
    ["Solución", project.details.solution],
    ["Enfoque y participación", project.details.contribution],
    ["Aprendizajes técnicos", project.details.learnings],
  ] as const;

  return (
    <main className="subpage project-detail section-shell">
      <Link className="back-link" href="/#proyectos">
        <ArrowLeft size={17} /> Volver a proyectos
      </Link>
      <div className="detail-hero">
        <div>
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>
            {project.name}
            <span>.</span>
          </h1>
          <p>{project.longDescription}</p>
          <div className="tag-list tag-list-strong">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
        <ProjectVisual index={index} image={project.image} name={project.name} />
      </div>
      <div className="detail-grid">
        {detailItems.map(([title, content]) => (
          <article className="brutal-card" key={title}>
            <h2>{title}</h2>
            <p>{content}</p>
          </article>
        ))}
      </div>
      {project.github ? (
        <div className="detail-actions">
          <a
            className="button button-secondary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> Ver en GitHub
          </a>
          {project.demo ? (
            <a
              className="button button-primary"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Ver demo <ArrowUpRight size={17} />
            </a>
          ) : null}
        </div>
      ) : null}
    </main>
  );
}
