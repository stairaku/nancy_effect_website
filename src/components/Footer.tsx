import { Link } from 'react-router-dom';
import './Footer.css';
import nurseNancyLogo from '../assets/images/nurse-nancy-logo-dark.svg';

export function Footer() {
  return (
  <footer className="site-footer">
    <div className="footer-container">
    <div className="footer-brand">
      <img
        src={nurseNancyLogo}
        alt="Nurse Nancy Medical Aesthetics"
        className="footer-logo"
      />
      <p>555 6th St, Unit 240,</p>
      <p>New Westminster,</p>
      <p> BC V3L 5H1</p>
      <p>(604) 833-9560</p>
      <p>nancysmedicalaesthetics@gmail.com</p>
    </div>
    <div className="footer-navigation">
      <h3>Navigation</h3>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <div className="footer-treatments">
      <h3>Treatments</h3>
      <Link to="/treatments/dermal-fillers">Dermal Fillers</Link>
      <Link to="/treatments/neuromodulators">Neuromodulators</Link>
      <Link to="/treatments/laser-treatments">Laser Treatments</Link>
    </div>
    <div className="footer-connect">
      <h3>Book & Connect</h3>
      <Link to="/book">Book an Appointment</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2026 The Nancy Effect™</p>
    <p>Privacy Policy</p>
    <p>Terms of Service</p>
  </div>
</footer>
  );
}