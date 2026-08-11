export const profile = {
  name: "Víctor Pérez Sosa",
  firstName: "Víctor",
  role: "Full Stack Developer Junior",
  location: "Gran Canaria, España",
  email: "ihavedepression3@gmail.com",
  github: "https://github.com/vititoOX",
  linkedin: "https://www.linkedin.com/in/víctor-pérez-sosa-5960b1356/",
  summary:
    "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma con experiencia práctica en desarrollo web. Me interesa crear soluciones útiles, mantenibles y bien estructuradas, combinando conocimientos técnicos con capacidad de comunicación y resolución de problemas.",
  about: [
    "Mi formación está centrada en el desarrollo de software, pero mi trayectoria profesional también me ha permitido desarrollar habilidades de comunicación, resolución de problemas y trato directo con clientes.",
    "Esta combinación me permite entender no solo cómo construir una solución técnica, sino también las necesidades de las personas que van a utilizarla.",
    "Busco continuar creciendo profesionalmente dentro del desarrollo de software, participando en proyectos reales y ampliando mis conocimientos técnicos.",
  ],
  aboutSkills: [
    "Desarrollo",
    "Resolución de problemas",
    "Comunicación",
    "Trabajo en equipo",
    "Orientación al cliente",
  ],
  education: {
    qualification:
      "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
    acronym: "DAM",
    status: "Finalizado",
    institution: null as string | null,
    dates: null as string | null,
  },
  assets: {
    photo: "/images/victor.webp",
    cv: "/cv-victor-perez-sosa.pdf",
  },
} as const;
