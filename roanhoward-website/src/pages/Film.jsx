import React from 'react';
import './Film.css';

function Film() {
  return (
    <div>
      <div className="film-hero">
        <h1>"Sorry, my Prada's at the cleaners"</h1>
        <h2>I love Film, I've authored over 300+ reviews <br /> and a few papers too...</h2>
      </div>

      <div className="review-section">
        <h2>Latest Academic Papers</h2>
        <div className="review-grid">
          <div className="review-card">
            <img src="/Images/emotions.png" alt="Atlantics" />
            <h3>Emotions of a Fading Generation: Mise-en-Scène and Narrative in Atlantics</h3>
          </div>
          <div className="review-card">
            <img src="/Images/poli.png" alt="Lovers Rock" />
            <h3>The Politics of Love in Motion: Music, Movement and Gender in Lovers Rock</h3>
          </div>
          <div className="review-card">
            <img src="/Images/parasite.png" alt="Parasite" />
            <h3>A Dream Deferred: Bong Joon-ho and Parasite</h3>
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
              <img src={movie.img} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Film;