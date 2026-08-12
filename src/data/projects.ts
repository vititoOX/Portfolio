import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "NominaHub — ERP de nóminas y recursos humanos",
    slug: "nominahub",
    eyebrow: "Proyecto principal",
    description:
      "Aplicación full stack para la gestión de empleados, nóminas y documentación, con control de acceso por roles y generación de PDFs.",
    longDescription:
      "ERP full stack orientado a la gestión de empleados, nóminas y documentación interna. Combina una SPA en Angular con una API REST en Flask, autenticación JWT, control de acceso por roles y generación documental automatizada.",
    technologies: [
      "Angular 18",
      "TypeScript",
      "Python",
      "Flask",
      "PostgreSQL",
      "Docker",
      "JWT",
      "RBAC",
      "PrimeNG",
      "PrimeFlex",
      "Jinja2",
      "WeasyPrint",
      "SQLAlchemy",
      "APIs REST",
      "Git/GitHub",
    ],
    github: "https://github.com/vititoOX/NominaHub",
    featured: true,
    primary: true,
    status: "published",
    image: "/FotoPortadaNominaHub.png",
    screenshots: [],
    details: {
      problem:
        "Centralizar la gestión de empleados, nóminas y documentación en un único sistema, con acceso diferenciado según el rol de cada usuario.",
      solution:
        "Aplicación full stack con frontend en Angular y backend en Flask, modelado de datos en PostgreSQL y despliegue containerizado con Docker.",
      contribution:
        "Desarrollo full stack del proyecto: diseño del modelo de datos, API REST, autenticación JWT, control de acceso basado en roles, interfaz de usuario y generación de documentación en PDF.",
      challenges:
        "Coordinar frontend y backend, aplicar RBAC de forma coherente, validar cálculos monetarios con Decimal y generar PDFs fiables con Jinja2 y WeasyPrint.",
      learnings:
        "Integración real entre capas, importancia de la seguridad en autenticación y autorización, modelado de datos relacional y generación documental en un flujo de negocio completo.",
    },
  },
  {
    name: "Cafetería Escolar — Interfaz web para gestión y pedidos",
    slug: "cafeteria-escolar",
    eyebrow: "Proyecto colaborativo",
    description:
      "Aplicación web frontend para una cafetería escolar, centrada en una experiencia de uso clara para el entorno educativo.",
    longDescription:
      "Proyecto colaborativo centrado en la interfaz frontend de una aplicación web para cafetería escolar. Prioriza una experiencia de uso clara y accesible para el entorno educativo.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "React Router",
      "Lucide React",
    ],
    github:
      "https://github.com/FanNum1CynthiaJudithAfonsoGarcia/Cafeteraescolarapp",
    featured: true,
    primary: false,
    status: "published",
    image: "/FotoPortadaCafeApp.png",
    screenshots: [],
    details: {
      problem:
        "Ofrecer una interfaz web clara para la gestión y los pedidos en el entorno de una cafetería escolar.",
      solution:
        "Aplicación frontend con React y Vite, componentes de Material UI, estilos con Tailwind CSS y navegación con React Router.",
      contribution:
        "Proyecto colaborativo frontend. Stack con React y Vite, TypeScript, Material UI para componentes, Tailwind CSS para estilos, React Router para navegación entre vistas y Lucide React para iconografía.",
      challenges:
        "Integrar Material UI y Tailwind CSS manteniendo coherencia visual, estructurar rutas con React Router y componer la interfaz con componentes reutilizables en TypeScript.",
      learnings:
        "Uso práctico de React con Vite, composición de interfaces con Material UI, estilado con Tailwind CSS y organización de la navegación con React Router en un proyecto compartido.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
