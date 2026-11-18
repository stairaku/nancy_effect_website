import { PageHero } from '../components/PageHero';
import { clinicContact } from '../data/clinicContact';
import './ContentPages.css';

export function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact & Booking" title="Book Your Appointment" description="Treatments are by appointment only; walk-ins are not available." />
      <section className="content-section">
        <h2>Contact {clinicContact.name}</h2>
        <p>{clinicContact.address}</p>
        <p>Call or text: <a href={clinicContact.phoneHref}>{clinicContact.phoneDisplay}</a></p>
        <p>{clinicContact.hours}</p>
        <p>Instagram: <a href={clinicContact.instagramUrl} target="_blank" rel="noopener noreferrer">{clinicContact.instagramHandle}</a></p>
        <h2>How to Book</h2>
        <h3>Laser & Microneedling</h3>
        <p>The original website directs clients to an online booking portal. Its booking URL needs verification before we link it here.</p>
        <h3>New Medical Aesthetics Clients</h3>
        <p>Complete the New Client Inquiry Form to share your goals and budget. Lauren, the patient coordinator, will contact you within two business days. The original form requires a separate migration.</p>
        <h3>Existing Clients</h3>
        <p>Send a direct message on Instagram or call/text <a href={clinicContact.phoneHref}>{clinicContact.phoneDisplay}</a>.</p>
        <h2>Booking Policies</h2>
        <p>A $157.50 non-refundable deposit is required and credited toward treatment. Appointments are confirmed when the deposit is received.</p>
        <p>Cancellations require at least 48 hours’ notice. Late cancellations forfeit the deposit.</p>
        <p>One reschedule is permitted without forfeiting the deposit if requested at least 48 hours before the appointment. Further reschedules may forfeit it.</p>
        <p><em>Booking policies and deposit amount must be reconfirmed by Nancy before publication.</em></p>
      </section>
    </>
  );
}
