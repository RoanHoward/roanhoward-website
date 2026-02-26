import { useStaggerReveal } from '../hooks/useScrollReveal';
import './CS.css';

const PROJECTS = [
  {
    image: '/Images/Personal_website.png',
    year: '2023–Present',
    title: 'Personal Website',
    description: 'Built this site from scratch using React and Vite, styled with custom CSS to showcase technical projects, writing, and art. Designed for performance with code splitting, lazy loading, and aggressive caching via Vercel.',
    tags: ['React', 'Vite', 'CSS', 'Vercel'],
    link: null,
    imageLeft: true,
  },
  {
    image: '/Images/stanfanator.png',
    year: '2024',
    title: 'Stanfanator',
    description: 'Probability-based person-guessing game where users identify Stanford students from dynamically generated clues. React + Node.js frontend backed by a Python Flask API connected to a live database.',
    tags: ['React', 'Node.js', 'Python', 'Flask'],
    link: null,
    imageLeft: false,
  },
];

const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Java', 'C#', 'Python', 'Flask', 'SQL', 'PostgreSQL'],
  },
  {
    category: 'Data / AI',
    items: ['PyTorch', 'NumPy', 'Scikit-learn', 'Pandas'],
  },
  {
    category: 'Tooling',
    items: ['Git', 'GitHub Actions', 'Docker', 'Azure', 'Linux', 'Selenium'],
  },
];

export default function CS() {
  const projectsRef = useStaggerReveal();
  const skillsRef = useStaggerReveal();

  return (
    <div className="cs-page">
      {/* Header */}
      <header className="cs-header section">
        <p className="cs-label">Engineering</p>
        <h1 className="cs-title">Personal Projects</h1>
        <p className="cs-subtitle">Selected work in web, systems, and research.</p>
      </header>

      {/* Projects */}
      <section className="cs-projects section" ref={projectsRef}>
        {PROJECTS.map((p, i) => (
          <div key={i} className={`cs-project${p.imageLeft ? '' : ' cs-project--reverse'}`}>
            <div className="cs-project__image-wrap reveal-clip">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="cs-project__image"
              />
            </div>
            <div className="cs-project__info">
              <p className="cs-project__year reveal">{p.year}</p>
              <h2 className="cs-project__title reveal" style={{ transitionDelay: '0.08s' }}>{p.title}</h2>
              <p className="cs-project__desc reveal" style={{ transitionDelay: '0.16s' }}>{p.description}</p>
              <div className="cs-project__tags reveal" style={{ transitionDelay: '0.24s' }}>
                {p.tags.map(tag => <span key={tag} className="cs-tag">{tag}</span>)}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="cs-link reveal" style={{ transitionDelay: '0.32s' }}>
                  View project
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="cs-skills" ref={skillsRef}>
        <div className="cs-skills__inner section">
          {SKILLS.map((col, i) => (
            <div key={i} className="cs-skills__col reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <p className="cs-skills__category">{col.category}</p>
              <ul className="cs-skills__list">
                {col.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
