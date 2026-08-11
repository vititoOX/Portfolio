export function SectionHeading({ index, title, kicker }: { index: string; title: string; kicker?: string }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <div>
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h2>{title}</h2>
      </div>
    </div>
  );
}

