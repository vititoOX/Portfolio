import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Proyectos", description: "Proyectos de desarrollo de software de Víctor Pérez Sosa." };

export default function ProjectsPage() {
  return (
    <main className="subpage section-shell">
      <Link className="back-link" href="/#proyectos"><ArrowLeft size={17} /> Volver al portfolio</Link>
      <div className="subpage-heading"><p className="eyebrow">Portfolio / Proyectos</p><h1>Todos los proyectos<span>.</span></h1><p>Esta sección está preparada para crecer. Los datos actuales son placeholders claramente identificados y se editan desde un único archivo.</p></div>
      <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
    </main>
  );
}

