import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { treatments } from '../data/treatments';
import './ContentPages.css';

export function TreatmentDetailPage() {
  const { slug } = useParams();
  const treatment = treatments.find(item => item.slug === slug);
  if (!treatment) {
    return <section className="content-section"><h1>Treatment not found</h1><Link to="/treatments">Back to treatments</Link></section>;
  }
  return (
    <>
      <PageHero eyebrow="Treatments" title={treatment.title} description={treatment.description} />
      <section className="content-section">
        <h2>Service Details</h2>
        <dl>
          <dt>Duration</dt><dd>{treatment.duration}</dd>
          <dt>Downtime</dt><dd>{treatment.downtime}</dd>
          <dt>Pricing</dt><dd>{treatment.pricing}</dd>
        </dl>
        <p>Details and pricing are subject to confirmation with Nancy before publication.</p>
        <Link to="/contact">Contact Nancy</Link>
      </section>
    </>
  );
}