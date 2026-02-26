import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNav.css';
const NAV_LINKS = [
  { to: '/cs',      label: 'CS' },
  { to: '/film',    label: 'Film' },
  { to: '/art',     label: 'Art' },
  { to: '/travel',  label: 'Travel' },
  { to: '/tlingit', label: 'Tlingit' },
];

const ICON_LINKS = [
  { href: '/Images/Resume.pdf',                               label: 'Resume',  download: 'RoanHoward_Resume.pdf' },
  { href: 'http://www.linkedin.com/in/roan-howard-b7647a28b', label: 'LinkedIn',external: true  },
  { href: 'https://github.com/roanhoward',                    label: 'GitHub',  external: true  },
  { href: 'mailto:roanahoward@gmail.com',                     label: 'Email'                    },
];

function MagneticLink({ href, label, download, external, onClick }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  const sharedProps = {
    ref,
    className: 'nav-icon-link',
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
  };

  if (download)  return <a {...sharedProps} href={href} download={download}>{label}</a>;
  if (external)  return <a {...sharedProps} href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
  return <a {...sharedProps} href={href}>{label}</a>;
}

function SidebarNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <button
        className={`menu-button${menuOpen ? ' menu-button--open' : ''}`}
        onClick={() => setMenuOpen(p => !p)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className="nav-links">
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <NavLink to="/" className="nav-brand">ROAN HOWARD</NavLink>

      <div className="nav-icons">
        {ICON_LINKS.map(({ href, label, download, external }) => (
          <MagneticLink key={label} href={href} label={label} download={download} external={external} />
        ))}
      </div>

      <div className={`nav-dropdown${menuOpen ? ' nav-dropdown--open' : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink key={to} to={to} className="dropdown-link" onClick={close}>{label}</NavLink>
        ))}
        <div className="dropdown-divider" />
        {ICON_LINKS.map(({ href, label, download, external }) => (
          <MagneticLink key={label} href={href} label={label} download={download} external={external} onClick={close} />
        ))}
      </div>
    </nav>
  );
}

export default SidebarNav;
