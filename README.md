# Portfolio web profesional

Portfolio web profesional construido con Next.js, React y TypeScript. Presenta un perfil técnico, experiencia, tecnologías y proyectos destacados en una interfaz moderna.

## Tecnologías

- Next.js 16 con App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## Instalación

```bash
npm install
npm run dev
```

Accede a la aplicación en [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run lint
npm run build
npm start
```

## Estructura del proyecto

```text
src/
  app/              Rutas, metadata y estilos globales
  components/       Componentes reutilizables
  data/             Contenido editable del portfolio
  types/            Tipos TypeScript compartidos
public/              Recursos estáticos
```

## Contenido editable

- Perfil y enlaces: `src/data/profile.ts`
- Proyectos: `src/data/projects.ts`
- Experiencia: `src/data/experience.ts`
- Tecnologías: `src/data/technologies.ts`

Los datos del portfolio se generan desde `src/data` y las páginas de proyecto se crean automáticamente en `/projects/[slug]`.

## Despliegue

El proyecto está listo para desplegarse en cualquier plataforma compatible con Next.js.
