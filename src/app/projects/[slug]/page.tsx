import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, GitBranch as Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  return project ? { title: project.name, description: project.description } : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const detailItems = [
    ["Problema", project.details.problem], ["Solución", project.details.solution], ["Mi participación", project.details.contribution],
    ["Dificultades", project.details.challenges], ["Aprendizajes", project.details.learnings],
  ];

  return (
    <main className="subpage project-detail section-shell">
      <Link className="back-link" href="/projects"><ArrowLeft size={17} /> Todos los proyectos</Link>
      <div className="detail-hero">
        <div><p className="eyebrow">{project.eyebrow}</p><h1>{project.name}<span>.</span></h1><p>{project.longDescription}</p><div className="tag-list tag-list-strong">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
        <ProjectVisual index={index} image={project.image} name={project.name} />
      </div>
      {project.status === "pending" ? <div className="pending-banner"><strong>Ficha preparada</strong><span>El contenido real de este proyecto todavía está pendiente de añadir.</span></div> : null}
      <div className="detail-grid">{detailItems.map(([title, content]) => <article className="brutal-card" key={title}><h2>{title}</h2><p>{content}</p></article>)}</div>
      <section className="screenshots-block"><h2>Capturas</h2>{project.screenshots.length ? <div className="screenshot-grid">{project.screenshots.map((screenshot) => <div className="screenshot-placeholder" key={screenshot}>{screenshot}</div>)}</div> : <div className="empty-state">Capturas pendientes de añadir</div>}</section>
      {(project.github || project.demo) ? <div className="detail-actions">{project.github ? <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a> : null}{project.demo ? <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">Ver demo <ArrowUpRight size={17} /></a> : null}</div> : null}
    </main>
  );
}
