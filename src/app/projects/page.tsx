import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de desarrollo de software full stack con énfasis en soluciones web y experiencia de usuario.",
};

export default function ProjectsPage() {
  return (
    <main className="subpage section-shell">
      <Link className="back-link" href="/#proyectos">
        <ArrowLeft size={17} /> Volver al portfolio
      </Link>
      <div className="subpage-heading">
        <p className="eyebrow">Portfolio / Proyectos</p>
        <h1>
          Proyectos
          <span>.</span>
        </h1>
        <p>
          Dos proyectos que muestran mi enfoque full stack y mi trabajo en interfaces web,
          con detalle sobre el problema, la solución y el aprendizaje técnico.
        </p>
      </div>
      <div className="project-grid project-grid-featured">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
