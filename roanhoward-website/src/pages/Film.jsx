import React from 'react';
import './Film.css';

function Film() {
  return (
    <div>
      <div className="film-hero">
        <h1>"Sorry, my Prada's at the cleaners"</h1>
        <h2>I love Film, I've authored of over 300+ reviews <br /> and a few papers too...</h2>
      </div>

      <div className="review-section">
        <h2>Latest Academic Papers</h2>
        <div className="review-grid">
          <div className="review-card">
            <img src="/Images/emotions.png" alt="Mythic Quest" />
            <h3>Emotions of a Fading Generation: Mise-en-Scène and Narrative in Atlantics</h3>
          </div>
          <div className="review-card">
            <img src="/Images/poli.png" alt="Adolescence" />
            <h3>The Politics of Love in Motion: Music, Movement and Gender in Lovers Rock</h3>
          </div>
          <div className="review-card">
            <img src="/Images/parasite.png" alt="The Traitors" />
            <h3>A Dream Deferred: Bong Joon-ho and Parasite</h3>
          </div>
        </div>
      </div>

      <div className="review-section">
        <h2>Recently Watched</h2>
        <div className="review-grid">
          <div className="review-card">
            <img src="/Images/Lahaine.jpg" alt="Mythic Quest" />
            <h3>LA HAINEt</h3>
          </div>
          <div className="review-card">
            <img src="/Images/Cityofgod.jpeg" alt="Adolescence" />
            <h3>City of Gode</h3>
          </div>
          <div className="review-card">
            <img src="/Images/Placebeyondthepines.jpg" alt="The Traitors" />
            <h3>The Place Beyond The Pines</h3>
          </div>
          <div className="review-card">
            <img src="/Images/HarryPotter1.jpg" alt="The Umbrella Academy" />
            <h3>Harry Potter and the Sorcerer's Stone</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Film;