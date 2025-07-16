import { NavLink } from 'react-router-dom';
import './SidebarNav.css'; // Optional CSS file

function SidebarNav() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-title">ROAN HOWARD</NavLink>
      <div className="nav-links">
        <NavLink to="/cs">CS</NavLink>
        <NavLink to="/film">Film</NavLink>
        <NavLink to="/art">Art</NavLink>
      </div>
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
    </nav>
  );
}

export default SidebarNav;