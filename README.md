# Portfolio de Víctor Pérez Sosa

Portfolio profesional de Víctor Pérez Sosa, Full Stack Developer Junior en Gran Canaria. El sitio presenta su perfil técnico, experiencia, tecnologías, formación y proyectos con una identidad visual neo-brutalista.

## Tecnologías

- Next.js 16 con App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para comprobar la versión de producción:

```bash
npm run lint
npm run build
npm start
```

## Estructura

```text
src/
  app/              Rutas, metadata y estilos globales
  components/       Componentes reutilizables
  data/             Contenido editable del portfolio
  types/            Tipos TypeScript compartidos
public/              Recursos estáticos
```

## Actualizar el contenido

- Datos personales, enlaces, textos y formación: `src/data/profile.ts`
- Proyectos: `src/data/projects.ts`
- Experiencia: `src/data/experience.ts`
- Tecnologías: `src/data/technologies.ts`

Cada objeto de `projects.ts` admite nombre, slug, descripción, portada, tecnologías, GitHub, demo, estado destacado, explicación larga, capturas, problema, solución, participación, dificultades y aprendizajes. Las páginas individuales se generan automáticamente en `/projects/[slug]`.

## Foto y CV

- Añade la fotografía profesional en `public/images/victor.webp`. Mientras no exista se muestra un placeholder cuidado.
- Añade el CV en `public/cv-victor-perez-sosa.pdf`. Mientras no exista el botón aparece desactivado y no genera un enlace roto.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. Importa el repositorio en Vercel.
3. Vercel detectará Next.js automáticamente; no hacen falta ajustes adicionales.
4. Sustituye `https://portfolio.vercel.app` en `src/app/layout.tsx` por el dominio definitivo para completar la metadata canónica.

No se incluye ningún número de teléfono ni se han inventado proyectos, fechas, empresas o responsabilidades.
