import React, { useState, useEffect } from 'react';
import './Film.css';

export default function Film() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentFilmIndex, setCurrentFilmIndex] = useState(0);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);

  const recentFilms = [
    {
      id: 1,
      title: 'Alantics',
      image: '/Images/Alantics.jpg',
      rating: '★★★★★'
    },
    {
      id: 2,
      title: 'Harry Potter',
      image: '/Images/HarryPotter1.jpg',
      rating: '★★★★½'
    },
    {
      id: 3,
      title: 'La Haine',
      image: '/Images/Lahaine.jpg',
      rating: '★★★★★'
    },
    {
      id: 4,
      title: 'City of God',
      image: '/Images/Cityofgod.jpeg',
      rating: '★★★★★'
    },
    {
      id: 5,
      title: 'Place Beyond the Pines',
      image: '/Images/Placebeyondthepines.jpg',
      rating: '★★★★★'
    }
  ];

  const filmPapers = [
    {
      id: 1,
      title: 'Emotions of a Fading Generation: Mise-en-Scène and Narrative in Atlantics',
      pdf: '/Images/Alantics.pdf'
    },
    {
      id: 2,
      title: 'The Politics of Love in Motion: Music, Movement and Gender in Lovers Rock',
      pdf: '/Images/LoversRock.pdf'
    },
    {
      id: 3,
      title: 'Parasite: A False Dream',
      pdf: '/pdfs/impact-of-streaming.pdf'
    },
    {
      id: 4,
      title: 'Visual Effects and Storytelling',
      pdf: '/pdfs/visual-effects.pdf'
    }
  ];

  const handleWheel = (event) => {
    if (event.deltaX !== 0) {
      event.preventDefault();
      
      const newAccumulator = scrollAccumulator + event.deltaX;
      setScrollAccumulator(newAccumulator);

      const threshold = 20;

      if (Math.abs(newAccumulator) >= threshold) {
        if (newAccumulator > 0) {
          setCurrentFilmIndex((prev) => (prev + 1) % recentFilms.length);
        } else {
          setCurrentFilmIndex((prev) => (prev - 1 + recentFilms.length) % recentFilms.length);
        }
        setScrollAccumulator(0);
      }
    }
  };

  const handlePrevFilmClick = () => {
    setCurrentFilmIndex((prev) => (prev - 1 + recentFilms.length) % recentFilms.length);
  };

  const handleNextFilmClick = () => {
    setCurrentFilmIndex((prev) => (prev + 1) % recentFilms.length);
  };

  useEffect(() => {
    const wheelContainer = document.querySelector('.film-wheel-container');
    if (wheelContainer) {
      wheelContainer.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        wheelContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  const getPrevFilmIndex = () => (currentFilmIndex - 1 + recentFilms.length) % recentFilms.length;
  const getNextFilmIndex = () => (currentFilmIndex + 1) % recentFilms.length;

  return (
    <div className="film-page">
      <div className="film-content-left">
        <h2 className="film-section-header">About My Film Work</h2>
        <div className="film-interests-section">
          <p>
            I’m passionate about film and dedicate most of my weekend evenings to discovering new movies. 
            Over the years, I’ve reviewed numerous films on Letterboxd and authored several academic papers. You can explore my most recently watched films here.
          </p>
        </div>

        <h2 className="film-section-header">Film Papers</h2>
        <ul className="film-papers-list">
          {filmPapers.map((paper) => (
            <li key={paper.id}>
              <a href={paper.pdf} target="_blank" rel="noopener noreferrer">{paper.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="film-wheel-container">
        <div className="film-wheel-title">Recently Watched</div>
        <div className="film-wheel">
          <div className="film-preview-wrapper prev-film" onClick={handlePrevFilmClick}>
            <img 
              src={recentFilms[getPrevFilmIndex()].image} 
              alt={recentFilms[getPrevFilmIndex()].title}
            />
          </div>
          <img 
            src={recentFilms[currentFilmIndex].image} 
            alt={recentFilms[currentFilmIndex].title}
            className="main-film"
          />
          <div className="film-preview-wrapper next-film" onClick={handleNextFilmClick}>
            <img 
              src={recentFilms[getNextFilmIndex()].image} 
              alt={recentFilms[getNextFilmIndex()].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}