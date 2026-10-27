import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className='site-header'>
      <Link className='site-logo' to="/">The Nancy Effect™</Link>

      <nav className='site-nav'>
        <Link to="/the-nancy-effect">The Nancy Effect</Link>
        <Link to="/treatments">Treatments</Link>
        <Link to="/results">Results</Link>
        <Link to="/about">About Nancy</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}