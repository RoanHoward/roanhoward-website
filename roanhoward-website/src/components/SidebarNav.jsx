import { NavLink } from 'react-router-dom';
import './SidebarNav.css';

export default function SidebarNav() {
  return (
    <nav className="topbar">
      <div className="nav-left">
        <NavLink to="/" className="site-name">Roan Howard</NavLink>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/resume">Resume</NavLink></li>
        <li><NavLink to="/cs">CS</NavLink></li>
        <li><NavLink to="/film">Film</NavLink></li>
        <li><NavLink to="/art">Art</NavLink></li>
      </ul>
    </nav>
  );
}