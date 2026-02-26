import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Film.css';

const PAPERS = [
  {
    index: '01',
    poster: '/Images/emotions.png',
    film: 'Atlantics',
    director: 'Mati Diop',
    title: 'Emotions of a Fading Generation: Mise-en-Scène and Narrative in Atlantics',
    pdf: '/Images/Alantics.pdf',
  },
  {
    index: '02',
    poster: '/Images/poli.png',
    film: 'Lovers Rock',
    director: 'Steve McQueen',
    title: 'The Politics of Love in Motion: Music, Movement and Gender in Lovers Rock',
    pdf: '/Images/LoversRock.pdf',
  },
  {
    index: '03',
    poster: '/Images/parasite.png',
    film: 'Parasite',
    director: 'Bong Joon-ho',
    title: 'A Dream Deferred: Bong Joon-ho and Parasite',
    pdf: '/Images/Dream_Deferred.pdf',
  },
];


function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

export default function Film() {
  const papersRef = useStaggerReveal();

  return (
    <div className="film-page">
      {/* Hero */}
      <section className="film-hero">
        <div className="film-hero__overlay" />
        <div className="film-hero__content">
          <h1 className="film-hero__title">
            300+ reviews.<br />A few papers too.
          </h1>
        </div>
      </section>

      {/* Papers */}
      <section className="film-papers section" ref={papersRef}>
        <p className="film-section-label reveal">Academic Papers</p>
        <div className="film-papers__list">
          {PAPERS.map((p) => (
            <div key={p.index} className="film-paper-row reveal">
              <span className="film-paper__index">{p.index}</span>
              <div className="film-paper__poster-wrap">
                <img src={p.poster} alt={p.film} loading="lazy" className="film-paper__poster" />
              </div>
              <div className="film-paper__info">
                <p className="film-paper__film">{p.film} <span className="film-paper__director">· {p.director}</span></p>
                <p className="film-paper__title">{p.title}</p>
              </div>
              <a href={p.pdf} download className="film-paper__dl">
                <DownloadIcon /> PDF
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
