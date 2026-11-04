import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { treatments } from '../data/treatments';
import './ContentPages.css';

export function TreatmentsPage() {
  return (
    <>
      <PageHero eyebrow="The Nancy Effect™" title="All Treatments" description="Explore medical aesthetics, lasers and microneedling." />
      <section className="content-section">
        <div className="content-grid">
          {treatments.map(treatment => (
            <article className="content-card" key={treatment.slug}>
              <h2>{treatment.title}</h2>
              <p>{treatment.description}</p>
              <p><strong>From:</strong> {treatment.pricing}</p>
              <Link to={`/treatments/${treatment.slug}`}>View treatment</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}