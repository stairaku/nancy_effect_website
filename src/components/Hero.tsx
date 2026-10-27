import './Hero.css';
import { HeroMedia } from './HeroMedia';

type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  actionLabel,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__media">
        <HeroMedia />
      </div>

      <div className="hero__content">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}

        <h1 className="hero__title">{title}</h1>

        {description && (
          <p className="hero__description">{description}</p>
        )}

        {actionLabel && (
          <button className="hero__action">
            {actionLabel} →
          </button>
        )}
      </div>
    </section>
  );
}