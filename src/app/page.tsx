import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowRight, BriefcaseBusiness as Linkedin, Download, GitBranch as Github, Mail, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { ContactCopy } from "@/components/ContactCopy";
import { ProfileVisual } from "@/components/ProfileVisual";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechnologyMarquee } from "@/components/TechnologyMarquee";
import { experiences, complementaryExperience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { technologyGroups } from "@/data/technologies";

export default function Home() {
  const cvAvailable = existsSync(join(process.cwd(), "public", profile.assets.cv));
  const photoAvailable = existsSync(join(process.cwd(), "public", profile.assets.photo));

  return (
    <main>
      <section className="hero section-shell" id="inicio">
        <div className="hero-layout">
          <Reveal className="hero-visual"><ProfileVisual imageAvailable={photoAvailable} /></Reveal>
          <Reveal className="hero-copy">
            <p className="eyebrow">Hola, soy</p>
            <h1>{profile.firstName}<span aria-hidden="true">.</span></h1>
            <div className="role-badge">{profile.role}</div>
            <p className="hero-description">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">Ver proyectos <ArrowRight size={17} /></a>
              <a className="button button-secondary" href="#contacto">Contactar <Mail size={17} /></a>
              {cvAvailable ? (
                <a className="button button-muted" href={profile.assets.cv} download>Descargar CV <Download size={17} /></a>
              ) : (
                <span className="button button-muted is-disabled" aria-disabled="true" title="Añade el PDF en public/cv-victor-perez-sosa.pdf">
                  Descargar CV <small>Pendiente</small>
                </span>
              )}
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <span><MapPin size={18} /> {profile.location}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <TechnologyMarquee />

      <section className="content-section section-shell" id="proyectos">
        <Reveal><SectionHeading index="01" kicker="Trabajo seleccionado" title="Proyectos destacados" /></Reveal>
        <div className="project-grid">
          {projects.filter((project) => project.featured).map((project, index) => (
            <Reveal key={project.slug}><ProjectCard project={project} index={index} /></Reveal>
          ))}
        </div>
        <Reveal className="center-action">
          <Link className="button button-secondary" href="/projects">Ver todos los proyectos <ArrowRight size={17} /></Link>
        </Reveal>
      </section>

      <section className="content-section section-shell" id="sobre-mi">
        <Reveal><SectionHeading index="02" kicker="Perfil" title="Sobre mí" /></Reveal>
        <Reveal>
          <div className="about-card brutal-card">
            <div className="about-title">
              <span><Sparkles size={22} /></span>
              <h3>Desarrollo + comunicación</h3>
            </div>
            <div className="about-copy">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="tag-list tag-list-strong">{profile.aboutSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </Reveal>
      </section>

      <section className="content-section section-shell" id="experiencia">
        <Reveal><SectionHeading index="03" kicker="Trayectoria" title="Experiencia" /></Reveal>
        <div className="experience-layout">
          <div className="timeline">
            {experiences.map((experience) => (
              <Reveal key={`${experience.company}-${experience.period}`}>
                <article className="timeline-item brutal-card">
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="experience-top"><span>{experience.period}</span><span className="type-tag">{experience.type}</span></div>
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                  <p>{experience.description}</p>
                  {experience.technologies ? <div className="tag-list">{experience.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div> : null}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <aside className="complementary-card brutal-card">
              <p className="eyebrow">Valor añadido</p>
              <h3>{complementaryExperience.title}</h3>
              <p>{complementaryExperience.description}</p>
              <ul>{complementaryExperience.areas.map((area) => <li key={area}>{area}</li>)}</ul>
              <div className="tag-list">{complementaryExperience.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="content-section section-shell" id="tecnologias">
        <Reveal><SectionHeading index="04" kicker="Stack técnico" title="Tecnologías" /></Reveal>
        <div className="technology-grid">
          {technologyGroups.map((group, index) => (
            <Reveal key={group.title}>
              <article className={`technology-card accent-${index + 1}`}>
                <span className="tech-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="tag-list tag-list-strong">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="content-section section-shell" id="formacion">
        <Reveal><SectionHeading index="05" kicker="Formación" title="Base académica" /></Reveal>
        <Reveal>
          <article className="education-card brutal-card">
            <span className="education-acronym">{profile.education.acronym}</span>
            <div>
              <p className="eyebrow">{profile.education.status}</p>
              <h3>{profile.education.qualification}</h3>
              <p className="pending-data">Centro educativo y fechas: información pendiente de añadir.</p>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="contact-section" id="contacto">
        <div className="section-shell">
          <Reveal><SectionHeading index="06" kicker="Contacto" title="¿Hablamos?" /></Reveal>
          <Reveal>
            <div className="contact-card brutal-card">
              <div>
                <p className="contact-lead">Estoy abierto a nuevas oportunidades profesionales y proyectos donde pueda seguir creciendo como desarrollador.</p>
                <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a>
                <ContactCopy />
              </div>
              <div className="contact-links">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={22} /><span><small>Código y proyectos</small>GitHub</span><ArrowRight size={20} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={22} /><span><small>Perfil profesional</small>LinkedIn</span><ArrowRight size={20} /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
