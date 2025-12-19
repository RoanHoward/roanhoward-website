import React from 'react';
import './Film.css';

function Film() {
  return (
    <div>
      <div className="film-hero">
        <h1>I love Film <br /> I've authored <br /> over 300+ reviews <br /> and a few papers too...</h1>
      </div>

      <div className="review-section">
        <h2>Latest Academic Papers</h2>
        <div className="review-grid">
          <div className="review-card">
            <img src="/Images/emotions.png" alt="Atlantics" loading="lazy" />
            <h3>
              Emotions of a Fading Generation: Mise-en-Scène and Narrative in Atlantics
              <a href="/Images/Alantics.pdf" download className="pdf-link"> [pdf]</a>
            </h3>
          </div>
          <div className="review-card">
            <img src="/Images/poli.png" alt="Lovers Rock" loading="lazy" />
            <h3>
              The Politics of Love in Motion: Music, Movement and Gender in Lovers Rock
              <a href="/Images/LoversRock.pdf" download className="pdf-link"> [pdf]</a>
            </h3>
          </div>
          <div className="review-card">
            <img src="/Images/parasite.png" alt="Parasite" loading="lazy" />
            <h3>
              A Dream Deferred: Bong Joon-ho and Parasite
              <a href="/Images/Dream_Deferred.pdf" download className="pdf-link"> [pdf]</a>
            </h3>
          </div>
        </div>
      </div>

      <div className="review-section">
        <h2>Recently Watched</h2>
        <div className="movie-scroll-container">
          {[
            { img: '/Images/Lahaine.jpg', title: 'La Haine' },
            { img: '/Images/Cityofgod.jpeg', title: 'City of God' },
            { img: '/Images/Placebeyondthepines.jpg', title: 'The Place Beyond the Pines' },
            { img: '/Images/HarryPotter1.jpg', title: "Harry Potter and the Sorcerer's Stone" },
            { img: '/Images/mama.jpg', title: 'Y Tu Mamá También' },
            { img: '/Images/Monty.jpg', title: 'The Monty Python' },
            { img: '/Images/mood.webp', title: 'In the Mood for Love' },
            { img: '/Images/waves.jpg', title: 'Wavest' },
            { img: '/Images/Momento.jpg', title: 'Momento' }
          ].map((movie, index) => (
            <div className="scroll-movie-card" key={index}>
              <img src={movie.img} alt={movie.title} loading="lazy" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Film;