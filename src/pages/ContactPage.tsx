import { PageHero } from '../components/PageHero';
import './ContentPages.css';

export function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact & Booking" title="Book Your Appointment" description="Treatments are by appointment only; walk-ins are not available." />
      <section className="content-section">
        <h2>Contact Nancy’s Medical Aesthetics</h2>
        <p>555 6th St, Unit 240, New Westminster, BC V3L 5H1</p>
        <p>Call or text: <a href="tel:+16048339560">604-833-9560</a></p>
        <p>Monday–Friday, 10:00 AM–5:00 PM</p>
        <p>Instagram: <a href="https://www.instagram.com/nurseinjectornancy/" target="_blank" rel="noreferrer">@nurseinjectornancy</a></p>
        <h2>How to Book</h2>
        <h3>Laser & Microneedling</h3>
        <p>The original website directs clients to an online booking portal. Its booking URL needs verification before we link it here.</p>
        <h3>New Medical Aesthetics Clients</h3>
        <p>Complete the New Client Inquiry Form to share your goals and budget. Lauren, the patient coordinator, will contact you within two business days. The original form requires a separate migration.</p>
        <h3>Existing Clients</h3>
        <p>Send a direct message on Instagram or call/text 604-833-9560.</p>
        <h2>Booking Policies</h2>
        <p>A $157.50 non-refundable deposit is required and credited toward treatment. Appointments are confirmed when the deposit is received.</p>
        <p>Cancellations require at least 48 hours’ notice. Late cancellations forfeit the deposit.</p>
        <p>One reschedule is permitted without forfeiting the deposit if requested at least 48 hours before the appointment. Further reschedules may forfeit it.</p>
        <p><em>Booking policies and deposit amount must be reconfirmed by Nancy before publication.</em></p>
      </section>
    </>
  );
}