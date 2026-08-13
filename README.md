# Portfolio — Víctor Pérez Sosa

[![CI](https://github.com/vititoOX/Portfolio/actions/workflows/ci.yml/badge.svg?branch=upload-local-branch)](https://github.com/vititoOX/Portfolio/actions/workflows/ci.yml)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white)

**Portfolio profesional de desarrollador full stack junior.**

Este proyecto reúne mi perfil técnico, experiencia, tecnologías y proyectos destacados en una interfaz responsive construida con Next.js, React y TypeScript.

### [Ver portfolio en producción](https://portfolio-vititooxs-projects.vercel.app)

## Qué incluye

- Presentación profesional y datos de contacto.
- Sección de tecnologías organizada por áreas.
- Proyectos destacados con páginas de detalle.
- Experiencia y formación.
- CV descargable.
- Diseño responsive con modo claro y oscuro.
- Metadatos preparados para compartir y posicionar el portfolio.
- Despliegue continuo en Vercel.
- Comprobación automática de lint y build con GitHub Actions.

## Stack

| Área | Tecnologías |
| --- | --- |
| Framework | Next.js 16 · App Router |
| Frontend | React 19 · TypeScript |
| Estilos | Tailwind CSS 4 |
| UI | Lucide React |
| Calidad | ESLint · GitHub Actions |
| Deploy | Vercel |

## Ejecución local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

Para validar una build de producción:

```bash
npm run lint
npm run build
npm start
```

## Estructura

```text
src/
├── app/              # Rutas, metadata y estilos globales
├── components/       # Componentes reutilizables
├── data/             # Contenido editable del portfolio
└── types/            # Tipos TypeScript compartidos

public/               # Recursos estáticos, fotografía y CV
```

## Contenido editable

La información del portfolio está separada de la presentación para facilitar su mantenimiento:

- Perfil y enlaces: `src/data/profile.ts`
- Proyectos: `src/data/projects.ts`
- Experiencia: `src/data/experience.ts`
- Tecnologías: `src/data/technologies.ts`

Las páginas de proyecto se generan desde los datos mediante la ruta dinámica `/projects/[slug]`.

## Proyectos relacionados

- [NominaHub](https://github.com/vititoOX/NominaHub) — ERP de empleados y nóminas con Angular, Flask y PostgreSQL.
- [CafesAPP](https://github.com/vititoOX/CafesAPP) — plataforma de pedidos para cafetería escolar con React, Express, Prisma y MySQL.

---

Este repositorio contiene el código fuente del portfolio desplegado públicamente en Vercel.
