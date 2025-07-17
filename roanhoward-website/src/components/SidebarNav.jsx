import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNav.css';

function SidebarNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      {/* Hamburger button for mobile */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Left-side links */}
      <div className="nav-links">
        <NavLink to="/cs">CS</NavLink>
        <NavLink to="/film">Film</NavLink>
        <NavLink to="/art">Art</NavLink>
      </div>

      {/* Center title */}
      <NavLink to="/" className="nav-title">ROAN HOWARD</NavLink>

      {/* Right-side icons */}
      <div className="nav-icons">
        <a href="/Images/Resume.pdf" download className="nav-icon">
          <img src="/Images/resume_icon.png" alt="Download Resume" />
        </a>
        <a href="https://www.linkedin.com/in/roanhoward" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <img src="/Images/linkedin.jpg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/roanhoward" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <img src="/Images/github1.png" alt="GitHub" />
        </a>
        <a href="mailto:roan.howard@example.com" className="nav-icon">
          <img src="/Images/email1.jpg" alt="Email" />
        </a>
      </div>

      {/* Dropdown menu for small screens */}
      <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
        <NavLink to="/cs" onClick={toggleMenu}>CS</NavLink>
        <NavLink to="/film" onClick={toggleMenu}>Film</NavLink>
        <NavLink to="/art" onClick={toggleMenu}>Art</NavLink>
        <a href="/Images/Resume.pdf" download>Download Resume</a>
        <a href="https://www.linkedin.com/in/roanhoward" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/roanhoward" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:roan.howard@example.com">Email</a>
      </div>
    </nav>
  );
}

export default SidebarNav;