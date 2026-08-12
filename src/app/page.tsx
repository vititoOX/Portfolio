import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowRight, BriefcaseBusiness as Linkedin, Download, GitBranch as Github, MapPin } from "lucide-react";
import Link from "next/link";
import { ContactCopy } from "@/components/ContactCopy";
import { ProfileVisual } from "@/components/ProfileVisual";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences, complementaryExperience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { technologyGroups } from "@/data/technologies";

export default function Home() {
  const cvAvailable = existsSync(join(process.cwd(), "public", profile.assets.cv));

  return (
    <main>
      <section className="hero section-shell" id="inicio">
        <div className="hero-layout">
          <Reveal className="hero-copy">
            <p className="eyebrow">Portfolio profesional</p>
            <h1>{profile.name}<span aria-hidden="true">.</span></h1>
            <div className="role-badge">{profile.role}</div>
            <p className="hero-description">{profile.tagline}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">
                Ver proyectos <ArrowRight size={17} />
              </a>
              <a
                className="button button-secondary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
              {cvAvailable ? (
                <a className="button button-muted" href={profile.assets.cv} download>
                  Descargar CV <Download size={17} />
                </a>
              ) : null}
            </div>
            <div className="hero-socials">
              <span>
                <MapPin size={18} /> {profile.availability}
              </span>
            </div>
          </Reveal>
          <Reveal>
            <ProfileVisual imageAvailable={true} />
          </Reveal>
        </div>
      </section>

      <section className="content-section section-shell" id="sobre-mi">
        <Reveal>
          <SectionHeading index="01" kicker="Perfil" title="Sobre mí" />
        </Reveal>
        <Reveal>
          <div className="about-card brutal-card">
            <div className="about-copy">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="tag-list tag-list-strong">
              {profile.aboutSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="content-section section-shell" id="proyectos">
        <Reveal>
          <SectionHeading index="02" kicker="Trabajo seleccionado" title="Proyectos" />
        </Reveal>
        <div className="project-grid project-grid-featured">
          {projects.map((project, index) => (
            <Reveal key={project.slug} className={project.primary ? "project-reveal-featured" : undefined}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
        <Reveal className="center-action">
          <Link className="button button-secondary" href="/projects">
            Ver detalle de proyectos <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>

      <section className="content-section section-shell" id="tecnologias">
        <Reveal>
          <SectionHeading index="03" kicker="Stack técnico" title="Tecnologías" />
        </Reveal>
        <div className="technology-grid">
          {technologyGroups.map((group, index) => (
            <Reveal key={group.title}>
              <article className={`technology-card accent-${index + 1}`}>
                <span className="tech-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="tag-list tag-list-strong">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        background: index < 2 ? "rgba(255,255,255,.12)" : "rgba(17,19,26,.08)",
                        color: index < 2 ? "#f7f9ff" : "#11131a",
                        borderColor: index < 2 ? "rgba(255,255,255,.34)" : "rgba(17,19,26,.22)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="content-section section-shell" id="formacion">
        <Reveal>
          <SectionHeading index="04" kicker="Trayectoria" title="Formación y experiencia" />
        </Reveal>
        <div className="experience-layout">
          <div className="timeline">
            <Reveal>
              <article className="timeline-item brutal-card education-inline">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="experience-top">
                  <span>{profile.education.dates}</span>
                  <span className="type-tag">{profile.education.acronym}</span>
                </div>
                <h3>{profile.education.qualification}</h3>
                <p>{profile.education.status}</p>
              </article>
            </Reveal>
            {experiences.map((experience) => (
              <Reveal key={`${experience.company}-${experience.period}`}>
                <article className="timeline-item brutal-card">
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="experience-top">
                    <span>{experience.period}</span>
                    <span className="type-tag">{experience.type}</span>
                  </div>
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                  <p>{experience.description}</p>
                  {experience.technologies ? (
                    <div className="tag-list">
                      {experience.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <aside className="complementary-card brutal-card">
              <p className="eyebrow">Contexto previo</p>
              <h3>{complementaryExperience.title}</h3>
              <p>{complementaryExperience.description}</p>
              <ul>
                {complementaryExperience.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <div className="tag-list">
                {complementaryExperience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="section-shell">
          <Reveal>
            <SectionHeading index="05" kicker="Contacto" title="¿Hablamos?" />
          </Reveal>
          <Reveal>
            <div className="contact-card brutal-card">
              <div>
                <p className="contact-lead">
                  ¿Hablamos sobre cómo puedo aportar a tu equipo?
                </p>
                <a className="email-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <ContactCopy />
              </div>
              <div className="contact-links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={22} />
                  <span>
                    <small>Código y proyectos</small>
                    GitHub
                  </span>
                  <ArrowRight size={20} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={22} />
                  <span>
                    <small>Perfil profesional</small>
                    LinkedIn
                  </span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
