import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { homeContent } from '../data/homeContent';
import './ContentPages.css';

export function HomePage() {
  const { hero, treatments, about, testimonials, location, closing } = homeContent;
  return (
    <>
      <Hero eyebrow="The Nancy Effect™" title={hero.headline} description={hero.description} />
      <section className="content-section">
        <h2>Explore our Treatments</h2>
        <div className="content-grid">
          {treatments.map(treatment => (
            <article className="content-card" key={treatment.slug}>
              <h3>{treatment.title}</h3>
              <p>{treatment.description}</p>
              <Link to="/treatments">Explore treatments</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section">
        <p className="content-eyebrow">{about.eyebrow}</p>
        <h2>{about.headline}</h2>
        <p>{about.description}</p>
        <Link to="/about">About Nancy</Link>
      </section>
      <section className="content-section">
        <p className="content-eyebrow">{testimonials.eyebrow}</p>
        <h2>{testimonials.headline}</h2>
        <p>Client reviews will be added after verifying the original testimonials.</p>
      </section>
      <section className="content-section">
        <h2>Getting Here</h2>
        <address>{location.address}</address>
        <p>{location.driving}</p>
        <p>{location.transit}</p>
      </section>
      <section className="content-section">
        <h2>{closing.headline}</h2>
        <p>{closing.description}</p>
        <Link to="/contact">Contact Nancy</Link>
      </section>
    </>
  );
}