import { useState } from 'react';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Art.css';

const ARTWORKS = [
  {
    file: 'Charcoal.jpeg',
    alt: 'Control',
    title: 'Control',
    medium: 'Frottage / Charcoal',
    year: '2025',
    statement: 'Control is a frottage piece and my first-ever art project. I completed this 6-foot-long self-portrait in my first art class at Stanford during the Winter 2025 quarter.',
  },
  {
    file: 'Head Rest 6 copy.jpg',
    alt: 'Head Rest',
    title: 'Head Rest',
    medium: 'Soft Sculpture / Speaker',
    year: '2025',
    statement: 'Head Rest is a 7.5× enlarged, stuffed car headrest. The soft sculpture contains a speaker that plays car sounds, inviting the audience into the drifting, half-asleep state of falling asleep in the back seat.',
  },
  {
    file: 'Raven1.jpeg',
    alt: 'Raven I',
    title: 'Raven I',
    medium: 'Print',
    year: '2025',
    statement: 'This first print of a triptych is an homage to the Tlingit story Raven Steals the Sun.',
  },
  {
    file: 'TrueNature.jpg',
    alt: 'True Nature',
    title: 'True Nature',
    medium: 'Soft Sculpture',
    year: '2025',
    statement: 'A hand-sewn, stuffed log.',
  },
  {
    file: 'Raven2.jpeg',
    alt: 'Raven II',
    title: 'Raven II',
    medium: 'Print',
    year: '2025',
    statement: 'Raven II is the second print of the triptych.',
  },
  {
    file: 'Howard_InstallationView.jpeg',
    alt: 'Traffic Light',
    title: 'Traffic Light',
    medium: 'Wood Sculpture',
    year: '2025',
    statement: 'My first wood sculpture, learning the basics and tools of the wood shop.',
  },
  {
    file: 'Raven3.jpeg',
    alt: 'Raven III',
    title: 'Raven III',
    medium: 'Print',
    year: '2025',
    statement: 'Raven III is the third and final print of the triptych.',
  },
];

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

export default function Art() {
  const [selected, setSelected] = useState(null);
  const galleryRef = useStaggerReveal();

  const open = (artwork) => setSelected(artwork);
  const close = () => setSelected(null);

  return (
    <div className="art-page">
      {/* Header */}
      <header className="art-header section">
        <p className="art-label">Visual Art</p>
        <h1 className="art-title">Selected Works</h1>
        <p className="art-subtitle">Stanford Art Practice, 2025.</p>
      </header>

      {/* Masonry gallery */}
      <section className="art-gallery section" ref={galleryRef}>
        {ARTWORKS.map((aw, i) => (
          <button
            key={i}
            className="art-tile reveal"
            style={{ transitionDelay: `${i * 0.06}s` }}
            onClick={() => open(aw)}
            aria-label={`View ${aw.title}`}
          >
            <img
              src={`/Images/${aw.file}`}
              alt={aw.alt}
              loading="lazy"
              className="art-tile__img"
            />
            <div className="art-tile__overlay">
              <p className="art-tile__name">{aw.title}</p>
              <p className="art-tile__medium">{aw.medium}</p>
            </div>
          </button>
        ))}
      </section>

      {/* Modal */}
      {selected && (
        <div className="art-modal-backdrop" onClick={close}>
          <div className="art-modal" onClick={(e) => e.stopPropagation()}>
            <button className="art-modal__close" onClick={close} aria-label="Close">
              <CloseIcon />
            </button>
            <div className="art-modal__image-col">
              <img src={`/Images/${selected.file}`} alt={selected.alt} className="art-modal__img" />
            </div>
            <div className="art-modal__info">
              <p className="art-modal__meta">{selected.medium} · {selected.year}</p>
              <h2 className="art-modal__title">{selected.title}</h2>
              <p className="art-modal__statement">{selected.statement}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
