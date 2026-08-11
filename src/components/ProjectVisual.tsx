import { Braces, Terminal } from "lucide-react";

export function ProjectVisual({ index, image, name }: { index: number; image?: string; name: string }) {
  if (image) {
    return <div className="project-visual project-image" style={{ backgroundImage: `url(${image})` }} role="img" aria-label={`Portada de ${name}`} />;
  }

  return (
    <div className={`project-visual visual-${(index % 3) + 1}`} aria-label={`Portada provisional de ${name}`}>
      <span className="visual-grid" aria-hidden="true" />
      <span className="visual-icon" aria-hidden="true">{index % 2 === 0 ? <Terminal /> : <Braces />}</span>
      <strong>0{index + 1}</strong>
      <small>PORTADA PENDIENTE</small>
    </div>
  );
}

