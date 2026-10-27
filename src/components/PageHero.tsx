import './PageHero.css';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        {eyebrow && (
          <p className="page-hero__eyebrow">{eyebrow}</p>
        )}

        <h1 className="page-hero__title">{title}</h1>

        {description && (
          <p className="page-hero__description">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}