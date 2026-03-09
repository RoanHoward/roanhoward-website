import { useState } from 'react';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './CS.css';

const PROJECTS = [
  {
    title: 'https://www.thedailybrainiac.com',
    year: 'February 2026',
    description: 'Built and deployed a full-stack daily word game using Next.js, PostgreSQL, and OpenAI GPT-4o, featuring real-time AI answer validation, automated bot simulation, and a Vercel cron pipeline for daily content delivery. Engineered a serverless REST API with Prisma ORM and Supabase, implementing NextAuth v5 with Google OAuth, transactional email via Resend, CDN caching, and open-ended input handling at scale.',
    tech: ['Supabase', 'GPT-4o'],
    image: '/Images/brainiac.png',
    github: 'https://thedailybrainiac.com',
    createdIndex: '05',
  },
  {
    title: 'Stanfanator',
    year: 'March 2025',
    description: 'A probability-based person-guessing game where users identify Stanford students from dynamically generated clues. Full-stack: React frontend, Node.js middleware, Python Flask backend.',
    tech: ['Python', 'Flask'],
    image: '/Images/stanfanator.png',
    github: '',
    createdIndex: '01',
  },
  {
    title: 'Robot Referee',
    year: 'February 2026',
    description: 'In 12 hours, built a video-reasoning robotics referee designed around the Stanford IPRL Lab data set using Python, FastAPI backend, Next.js frontend, Cosmos Reason API, OpenAI vision models, structured JSON evaluation schemas, and Dockerized local deployment, automatically auditing robot demonstration videos against goal and rule constraints.',
    tech: ['Python', 'Cosmos Reason API'],
    image: '/Images/RobotRef.png',
    github: 'https://github.com/RoanHoward/referee',
    createdIndex: '03',
  },
  {
    title: 'Valid',
    year: 'Febuary 2026',
    description: 'In 24 hours, engineered AI-powered semantic search using OpenAI embeddings and PostgreSQL pgvector to match user queries. Built full-stack anonymous polling system with Next.js 14, Supabase, and TypeScript enabling real-time voting, community-driven summaries via GPT-4, and browser fingerprinting for fraud prevention.',
    tech: ['OpenAI embeddings','Supabase'],
    image: '/Images/Valid.png',
    github: 'https://github.com/RoanHoward/valid',
    createdIndex: '04',
  },
  {
    title: 'Personal Website',
    year: 'June 2025',
    description: 'Built this site from scratch using React and Vite — a personal lab for experimenting with modern UI patterns, scroll animations, and design systems.',
    tech: ['React', 'Vite', 'CSS'],
    image: '/Images/Personal_website.png',
    github: 'https://roanhoward.com',
    createdIndex: '02',
  },
  {
    title: 'Movie Service Agent',
    year: 'February 2026',
    description: 'Engineered a multi-tool LLM agent leveraging DSPy ReAct, Mixtral-8x7B, and cosine-similarity collaborative filtering for real-time movie recommendations and ticket booking. Augmented agent with Agentic RAG capabilities via SerpAPI retrieval and Mem0 semantic memory using Qdrant vector store and Alibaba-NLP dense embeddings on Together AI.',
    tech: ['DSPy','SerpAPI','Together AI'],
    image: '/Images/Pa_7.png',
    github: '',
    createdIndex: '06',
  },
  {
    title: 'Enterprise Support Agent,',
    year: 'March 2026',
    description: 'Built an Agentic RAG chatbot using Claude Sonnet Anthropic SDK, FAISS vector search, and sentence-transformers for semantic retrieval with citation-grounded responses. Implemented native tool use with multi-turn memory, FastAPI backend, and a React/Vite/Tailwind dashboard UI.',
    tech: ['Claude Sonnet'],
    image: '/Images/Support_genie.png',
    github: 'https://github.com/RoanHoward/SupportGenie',
    createdIndex: '07',
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


function highlightTech(description, tech) {
  if (!tech || tech.length === 0) return [description];

  const escaped = tech.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(description)) !== null) {
    if (match.index > lastIndex) {
      parts.push(description.slice(lastIndex, match.index));
    }
    parts.push(
      <mark key={match.index} className="tech-highlight">{match[0]}</mark>
    );
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < description.length) {
    parts.push(description.slice(lastIndex));
  }

  return parts;
}

export default function CS() {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const [sortAsc, setSortAsc] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const skillsRef = useStaggerReveal();

  const visibleProjects = PROJECTS
    .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const diff = parseInt(a.createdIndex, 10) - parseInt(b.createdIndex, 10);
      return sortAsc ? diff : -diff;
    });

  return (
    <div className="cs-page">
      {/* Header */}
      <header className="cs-header section">
        <p className="cs-label">Engineering</p>
        <h1 className="cs-title">Personal Projects</h1>
        <p className="cs-subtitle">Selected work in web, systems, and research.</p>
      </header>

      {/* Projects — terminal table */}
      <section className="cs-projects section">
        {/* Filter bar */}
        <div className="cs-filter-bar">
          <button
            className="cs-filter-bar__sort"
            onClick={() => setSortAsc(prev => !prev)}
          >
            {sortAsc ? '↑' : '↓'}
          </button>
          <input
            type="text"
            className="cs-filter-bar__search"
            placeholder="SEARCH_"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Column header row */}
        <div className="cs-projects__header">
          <span>#</span>
          <span>Project</span>
          <span className="cs-projects__header-year" style={{ textAlign: 'right' }}>Year</span>
          <span className="cs-projects__header-gh" style={{ textAlign: 'center' }}>Src</span>
          <span className="cs-projects__header-img" style={{ textAlign: 'center' }}>Img</span>
        </div>

        {/* Project rows */}
        {visibleProjects.map((p) => (
          <div
            key={p.title}
            className={`cs-project-row${hoveredTitle === p.title ? ' cs-project-row--active' : ''}`}
            onMouseEnter={() => setHoveredTitle(p.title)}
            onMouseLeave={() => setHoveredTitle(null)}
          >
            <span className="cs-project-row__index">{p.createdIndex}</span>
            <div className="cs-project-row__info">
              <p className="cs-project-row__title">{p.title}</p>
              <p className="cs-project-row__desc">
                {highlightTech(p.description, p.tech)}
              </p>
            </div>
            <span className="cs-project-row__year cs-project-row__year--desktop">{p.year}</span>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-project-row__gh cs-project-row__gh--desktop"
            >
              [ Link ]
            </a>
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="cs-project-row__thumb cs-project-row__thumb--desktop"
            />
          </div>
        ))}

        {/* Blinking cursor */}
        <div className="cs-cursor" aria-hidden="true">█</div>
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
