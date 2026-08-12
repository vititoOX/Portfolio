"use client";

import { BriefcaseBusiness as Linkedin, GitBranch as Github, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  ["Sobre mí", "/#sobre-mi"],
  ["Proyectos", "/#proyectos"],
  ["Tecnologías", "/#tecnologias"],
  ["Formación", "/#formacion"],
  ["Contacto", "/#contacto"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          Portfolio <span aria-hidden="true">/&gt;</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="icon-button desktop-social"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            className="icon-button desktop-social"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            className="icon-button desktop-social"
            href={`mailto:${profile.email}`}
            aria-label="Enviar un email"
          >
            <Mail size={18} />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="icon-button menu-toggle"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Navegación móvil"
      >
        {navItems.map(([label, href], index) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span> {label}
          </Link>
        ))}
        <div className="mobile-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </nav>
    </header>
  );
}
