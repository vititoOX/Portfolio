import { marqueeTechnologies } from "@/data/technologies";

function MarqueeGroup() {
  return (
    <div className="marquee-group">
      {marqueeTechnologies.map((technology) => (
        <span key={technology}><i aria-hidden="true" />{technology}</span>
      ))}
    </div>
  );
}

export function TechnologyMarquee() {
  return (
    <div className="marquee" aria-label={`Tecnologías: ${marqueeTechnologies.join(", ")}`}>
      <div className="marquee-track" aria-hidden="true">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}

