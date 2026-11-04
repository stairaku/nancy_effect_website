import { PageHero } from '../components/PageHero';
import './ContentPages.css';

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Nurse Injector Nancy" description="Meet Nancy Luong, owner and nurse injector at Nancy’s Medical Aesthetics." />
      <section className="content-section">
        <h2>Nancy’s Medical Aesthetics</h2>
        <p>Our approach focuses on individualized aesthetic treatment planning and skin health.</p>
        <h3>Meet the Team</h3>
        <p><strong>Nancy Luong</strong> — Owner, Injector</p>
        <p><strong>Jessica Singh, NP(F)</strong> — Medical Director</p>
        <p><strong>Lauren Loh</strong> — Patient Coordinator</p>
        <p><em>Team roles and biographies are pending Nancy’s confirmation before publication.</em></p>
      </section>
    </>
  );
}