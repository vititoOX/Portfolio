import type { Project } from "@/types";

const pendingDetails = {
  problem: "Información pendiente de añadir.",
  solution: "Información pendiente de añadir.",
  contribution: "Información pendiente de añadir.",
  challenges: "Información pendiente de añadir.",
  learnings: "Información pendiente de añadir.",
};

export const projects: Project[] = [
  {
    name: "Proyecto 01",
    slug: "proyecto-01",
    eyebrow: "Próximamente",
    description:
      "Este espacio está preparado para presentar un proyecto real, su objetivo y el valor aportado.",
    longDescription:
      "La información de este proyecto está pendiente. Edita este objeto en src/data/projects.ts cuando tengas los datos definitivos.",
    technologies: ["Tecnología pendiente"],
    featured: true,
    status: "pending",
    screenshots: [],
    details: pendingDetails,
  },
  {
    name: "Proyecto 02",
    slug: "proyecto-02",
    eyebrow: "Información pendiente",
    description:
      "Tarjeta preparada para documentar el problema, la solución y tu participación sin inventar información.",
    longDescription:
      "La información de este proyecto está pendiente. Edita este objeto en src/data/projects.ts cuando tengas los datos definitivos.",
    technologies: ["Stack pendiente"],
    featured: true,
    status: "pending",
    screenshots: [],
    details: pendingDetails,
  },
  {
    name: "Proyecto 03",
    slug: "proyecto-03",
    eyebrow: "Próximamente",
    description:
      "Una tercera ficha lista para incorporar capturas, repositorio, demo y aprendizajes más adelante.",
    longDescription:
      "La información de este proyecto está pendiente. Edita este objeto en src/data/projects.ts cuando tengas los datos definitivos.",
    technologies: ["Por definir"],
    featured: true,
    status: "pending",
    screenshots: [],
    details: pendingDetails,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

