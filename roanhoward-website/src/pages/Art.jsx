import React from 'react';
import './Art.css';

const Art = () => {
  return (
    <div className="art-container" style={{ position: 'relative', width: '100%', height: '1200px' }}>
      <div className="image-tile" style={{ width: '300px', position: 'absolute', top: '500px', left: '40px' }}>
        <img src="/Images/Charcoal.jpeg" alt="Control" />
      </div>
      <div className="image-tile" style={{ width: '250px', position: 'absolute', top: '15px', left: '400px' }}>
        <img src="/Images/Raven1.jpeg" alt="Raven I" />
      </div>
      <div className="image-tile" style={{ width: '260px', position: 'absolute', top: '15px', left: '680px' }}>
        <img src="/Images/Raven2.jpeg" alt="Raven II" />
      </div>
      <div className="image-tile" style={{ width: '270px', position: 'absolute', top: '15px', left: '980px' }}>
        <img src="/Images/Raven3.jpeg" alt="Raven III" />
      </div>
      <div className="image-tile" style={{ width: '300px', position: 'absolute', top: '15px', left: '40px' }}>
        <img src="/Images/Head Rest 6 copy.jpg" alt="Head Rest" />
      </div>
      <div className="image-tile" style={{ width: '320px', position: 'absolute', top: '265px', left: '1000px' }}>
        <img src="/Images/TrueNature.jpg" alt="True Nature" />
      </div>
      <div className="image-tile" style={{ width: '600px', position: 'absolute', top: '255px', left: '370px' }}>
        <img src="/Images/statment.png" alt="New Artwork" />
      </div>
    </div>
  );
};

export default Art;