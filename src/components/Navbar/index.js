import {Link} from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <nav className="nav">
      <h4 className="nav__title">ReactNotes</h4>
      <ul className="nav__list">
        <li><Link to="/">Note Manager</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
