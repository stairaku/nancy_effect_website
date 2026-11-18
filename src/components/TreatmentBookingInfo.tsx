import { Link } from 'react-router-dom';
import { clinicContact } from '../data/clinicContact';

/** Shared draft booking and deposit information. Nancy must confirm current policy before launch. */
export function TreatmentBookingInfo() {
  return (
    <section className="content-section" aria-labelledby="treatment-booking-heading">
      <h2 id="treatment-booking-heading">How to Book</h2>
      <p>All treatments are by appointment only. New medical aesthetics clients should complete the new-client inquiry process; existing clients may contact the clinic directly.</p>
      <p>Call or text <a href={clinicContact.phoneHref}>{clinicContact.phoneDisplay}</a>, or message <a href={clinicContact.instagramUrl} target="_blank" rel="noopener noreferrer">{clinicContact.instagramHandle}</a> on Instagram.</p>
      <h2>Deposit & Cancellation Policy</h2>
      <p>The original site lists a $157.50 non-refundable deposit credited toward treatment, with at least 48 hours' notice required for cancellations or rescheduling. These terms require Nancy's approval before publication.</p>
      <p><Link to="/book">Full booking information and policies</Link></p>
    </section>
  );
}
