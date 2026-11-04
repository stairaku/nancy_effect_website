import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { homeContent } from '../data/homeContent';
import './ContentPages.css';

export function TreatmentsPage() {
  return (
    <>
      <PageHero eyebrow="The Nancy Effect™" title="Treatments" description="Explore the treatments featured on Nancy’s previous homepage." />
      <section className="content-section">
        <div className="content-grid">
          {homeContent.treatments.map(treatment => (
            <article className="content-card" key={treatment.slug}>
              <h2>{treatment.title}</h2>
              <p>{treatment.description}</p>
              <Link to={`/treatments/${treatment.slug}`}>View treatment</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}