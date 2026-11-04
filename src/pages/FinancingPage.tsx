import { PageHero } from '../components/PageHero';
import './ContentPages.css';

export function FinancingPage() {
  return (
    <>
      <PageHero eyebrow="Payment Options" title="Medicard: Finance Your Treatment" description="Explore financing options for eligible aesthetic treatments." />
      <section className="content-section">
        <h2>Financing Made Simple</h2>
        <p>The original website describes an application and approval process through Medicard.</p>
        <ol>
          <li><strong>Apply:</strong> Submit an application to Medicard.</li>
          <li><strong>Approval:</strong> Medicard reviews your application and eligibility.</li>
          <li><strong>Choose a plan:</strong> Review available repayment terms and costs.</li>
          <li><strong>Book:</strong> Contact Nancy’s Medical Aesthetics after financing is confirmed.</li>
          <li><strong>Repay:</strong> Follow the agreed payment schedule with the lender.</li>
        </ol>
        <p><strong>Important:</strong> Rates, credit-check impact, approval timing, loan limits and financing terms must be verified directly with Medicard before publication. No application link has been added until the original URL is verified.</p>
      </section>
    </>
  );
}