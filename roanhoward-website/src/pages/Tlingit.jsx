import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Tlingit.css';

const PAPERS = [];
const EVENTS = [];

export default function Tlingit() {
  const contentRef = useStaggerReveal();

  return (
    <div className="tlingit-page">
      {/* Hero */}
      <section className="tlingit-hero">
        <div className="tlingit-hero__texture" />
        <div className="tlingit-hero__content">
          <h1 className="tlingit-hero__greeting">
            "My name is Aaskuwut eesh"
          </h1>
        </div>
      </section>

      {/* Body */}
      <div className="tlingit-body" ref={contentRef}>

        {/* Introduction */}
        <section className="tlingit-intro section">
          <div className="tlingit-divider reveal" />
          <p className="tlingit-intro__text reveal" style={{ transitionDelay: '0.1s' }}>
            I am Alaskan Native, of the Raven moiety and the People of the Copper River Clan.
            This page is dedicated to that part of my identity: my language, my clan, my story.
            It is a work in progress, like all things worth building.
          </p>
        </section>

        {/* Papers */}
        <section className="tlingit-section section">
          <p className="tlingit-label reveal">Writing</p>
          <h2 className="tlingit-section__title reveal" style={{ transitionDelay: '0.08s' }}>Papers</h2>

          {PAPERS.length === 0 ? (
            <p className="tlingit-empty reveal" style={{ transitionDelay: '0.16s' }}>
              Papers coming soon.
            </p>
          ) : (
            <div className="tlingit-papers">
              {PAPERS.map((p, i) => (
                <div key={i} className="tlingit-paper-row reveal">
                  <span className="tlingit-paper__index">{String(i + 1).padStart(2, '0')}</span>
                  <div className="tlingit-paper__info">
                    <p className="tlingit-paper__title">{p.title}</p>
                    <p className="tlingit-paper__year">{p.year}</p>
                  </div>
                  {p.pdf && (
                    <a href={p.pdf} download className="tlingit-paper__dl">PDF</a>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Events */}
        <section className="tlingit-section section">
          <p className="tlingit-label reveal">Community</p>
          <h2 className="tlingit-section__title reveal" style={{ transitionDelay: '0.08s' }}>Events</h2>

          {EVENTS.length === 0 ? (
            <p className="tlingit-empty reveal" style={{ transitionDelay: '0.16s' }}>
              Events coming soon.
            </p>
          ) : (
            <div className="tlingit-events">
              {EVENTS.map((e, i) => (
                <div key={i} className="tlingit-event-card reveal">
                  <p className="tlingit-event__date">{e.date}</p>
                  <p className="tlingit-event__name">{e.name}</p>
                  <p className="tlingit-event__location">{e.location}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
