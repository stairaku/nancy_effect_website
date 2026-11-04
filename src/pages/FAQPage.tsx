import { PageHero } from '../components/PageHero';
import './ContentPages.css';

const faqs = [
  { topic: 'Wrinkle Relaxing Injections', items: [
    ['What are neuromodulators?', 'They temporarily relax targeted facial muscles to soften expression lines. The treatment plan and dosage are individualized.'],
    ['How are they different from dermal fillers?', 'Wrinkle relaxers reduce targeted muscle movement, while dermal fillers add volume.'],
    ['How many units will I need?', 'Nancy will recommend an amount based on your goals and an in-person assessment.'],
    ['When will I see results?', 'The original website states that changes may begin within seven days, with results assessed around day fourteen.'],
    ['How long do results last?', 'The original website estimates approximately three to five months; individual results vary.'],
  ]},
  { topic: 'Dermal Fillers', items: [
    ['What are dermal fillers?', 'Injectable treatments used to restore or enhance volume and facial contours.'],
    ['Which areas can be treated?', 'The original website lists lips, cheeks, jawline, chin, smile lines, under eyes and temples. Suitability requires assessment.'],
    ['How much do fillers cost?', 'The original website lists treatments starting at $650 per syringe; pricing needs confirmation.'],
    ['How many syringes will I need?', 'Nancy will recommend a plan after consultation.'],
    ['How long do results last?', 'The original website estimates six to eighteen months, depending on product and treatment area.'],
  ]},
  { topic: 'Laser & Microneedling', items: [
    ['How many sessions will I need?', 'The number depends on the treatment and individual goals; Nancy can recommend a schedule during consultation.'],
    ['Is there downtime?', 'Redness, swelling or peeling may occur depending on the procedure. Individual recovery varies.'],
    ['Who is a suitable candidate?', 'Suitability and contraindications should be reviewed with the treating clinician before booking.'],
  ]},
];

export function FAQPage() {
  return (
    <>
      <PageHero eyebrow="Help & Information" title="Frequently Asked Questions" description="Answers to common questions about treatments at Nancy’s Medical Aesthetics." />
      <section className="content-section">
        {faqs.map(group => (
          <div key={group.topic}>
            <h2>{group.topic}</h2>
            {group.items.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        ))}
        <p><em>Draft answers adapted from the original site. Medical and pricing details require clinical review.</em></p>
      </section>
    </>
  );
}