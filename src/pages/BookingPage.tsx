import { PageHero } from '../components/PageHero';
import './ContentPages.css';

export function BookingPage() {
  return (
    <>
      <PageHero eyebrow="Medical Aesthetics" title="Book Your Appointment" description="All treatments are by appointment only. Walk-ins are not available." />
      <section className="content-section">
        <h2>How to Book Your Appointment</h2>
        <h3>Laser & Microneedling</h3>
        <p>The original site directs clients to an online booking portal. We will add the verified portal link before publishing.</p>
        <h3>New Medical Aesthetics Clients</h3>
        <p>Complete a New Client Inquiry Form with your aesthetic goals and budget. Lauren, Nancy’s patient coordinator, will contact you within two business days to discuss possible treatment options.</p>
        <h3>Existing Clients</h3>
        <p>Send a direct message to <a href="https://www.instagram.com/nurseinjectornancy/">@nurseinjectornancy</a> or call/text <a href="tel:+16048339560">604-833-9560</a>.</p>
        <h2>Consultation Process</h2>
        <ol>
          <li><strong>Inquiry:</strong> Submit your goals and concerns for review.</li>
          <li><strong>Consultation & deposit:</strong> If appropriate, schedule an in-person medical consultation. The original site lists a $157.50 deposit credited toward treatment.</li>
          <li><strong>In-clinic assessment:</strong> Nancy completes a final medical evaluation and determines whether treatment is suitable.</li>
        </ol>
        <p>A consultation does not include treatment time. Ask in advance if you would like treatment on the same day.</p>
        <h2>Booking Policies</h2>
        <h3>Deposit Requirement</h3>
        <p>The original website states that all new and existing clients require a $157.50 non-refundable deposit, applied toward treatment.</p>
        <h3>Appointment Availability</h3>
        <p>Appointments are only confirmed when the deposit is received; quoted availability can change.</p>
        <h3>Cancellation Policy</h3>
        <p>At least 48 hours’ notice is required; cancellations within that window forfeit the deposit.</p>
        <h3>Rescheduling Policy</h3>
        <p>One reschedule is permitted without forfeiting the deposit when requested at least 48 hours in advance. A second reschedule forfeits the deposit.</p>
        <h3>Late / No-Show Policy</h3>
        <p>The original site provides a 15-minute grace period and describes deposit forfeiture for arrivals after 15 minutes. Specific handling of arrivals within the grace period depends on the next client’s arrival.</p>
        <h2>Questions Before Booking?</h2>
        <p>Call or text <a href="tel:+16048339560">604-833-9560</a> · Monday–Friday, 10:00 AM–5:00 PM</p>
        <p><strong>Pending:</strong> Original inquiry form, booking portal link, and Nancy’s approval of current policies.</p>
      </section>
    </>
  );
}