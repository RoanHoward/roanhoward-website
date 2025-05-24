import { NavLink } from 'react-router-dom';

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
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}