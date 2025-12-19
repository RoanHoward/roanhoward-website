import React, { useState } from 'react';
import './Art.css';

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const artworkData = {
    'Charcoal.jpeg': {
      title: 'Control',
      statement: 'Control is a frottage piece and my first-ever art project. I completed this 6-foot-long self-portrait in my first art class at Stanford during the Winter 2025 quarter.'
    },
    'Raven1.jpeg': {
      title: 'Raven I',
      statement: 'This first print of a triptych is an homage to the Tlingit story Raven Steals the Sun.'
    },
    'Raven2.jpeg': {
      title: 'Raven II',
      statement: 'Raven II is the second print of the triptych.'
    },
    'Raven3.jpeg': {
      title: 'Raven III',
      statement: 'Raven III is the third print of the triptych.'
    },
    'Head Rest 6 copy.jpg': {
      title: 'Head Rest',
      statement: 'Head Rest is a 7.5× enlarged, stuffed car headrest. The soft sculpture contains a speaker that plays car sounds, inviting the audience into the drifting, half-asleep state of falling asleep in the back seat.'
    },
    'TrueNature.jpg': {
      title: 'True Nature',
      statement: 'A hand-sewn, stuffed log.'
    },
    'statment.png': {
      title: '',
      statement: ''
    },
    'Howard_InstallationView.jpeg': {
      title: 'Traffic Light',
      statement: 'My first Wood Sculpture, just learning the basics and tools of the wood shop.'
    }
  };

  const handleImageClick = (imageSrc, imageAlt) => {
    const imageName = imageSrc.split('/').pop();
    setSelectedImage({
      src: imageSrc,
      alt: imageAlt,
      ...artworkData[imageName]
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="art-container" style={{ position: 'relative', width: '100%', height: '1200px' }}>
        <div className="image-tile" style={{ width: '300px', position: 'absolute', top: '500px', left: '40px' }}>
          <img 
            src="/Images/Charcoal.jpeg" 
            alt="Control" 
            loading="lazy"
            onClick={() => handleImageClick('/Images/Charcoal.jpeg', 'Control')}
          />
        </div>
        <div className="image-tile" style={{ width: '250px', position: 'absolute', top: '15px', left: '400px' }}>
          <img 
            src="/Images/Raven1.jpeg" 
            alt="Raven I" 
            loading="lazy"
            onClick={() => handleImageClick('/Images/Raven1.jpeg', 'Raven I')}
          />
        </div>
        <div className="image-tile" style={{ width: '260px', position: 'absolute', top: '15px', left: '680px' }}>
          <img 
            src="/Images/Raven2.jpeg" 
            alt="Raven II" 
            loading="lazy"
            onClick={() => handleImageClick('/Images/Raven2.jpeg', 'Raven II')}
          />
        </div>
        <div className="image-tile" style={{ width: '270px', position: 'absolute', top: '15px', left: '980px' }}>
          <img 
            src="/Images/Raven3.jpeg" 
            alt="Raven III" 
            loading="lazy"
            onClick={() => handleImageClick('/Images/Raven3.jpeg', 'Raven III')}
          />
        </div>
        <div className="image-tile" style={{ width: '300px', position: 'absolute', top: '15px', left: '40px' }}>
          <img 
            src="/Images/Head Rest 6 copy.jpg" 
            alt="Head Rest" 
            loading="lazy"
            onClick={() => handleImageClick('/Images/Head Rest 6 copy.jpg', 'Head Rest')}
          />
        </div>
        <div className="image-tile" style={{ width: '320px', position: 'absolute', top: '265px', left: '1000px' }}>
          <img 
            src="/Images/TrueNature.jpg" 
            alt="True Nature" 
            loading="lazy"
            onClick={() => handleImageClick('/Images/TrueNature.jpg', 'True Nature')}
          />
        </div>
        <div className="image-tile" style={{ width: '600px', position: 'absolute', top: '255px', left: '370px' }}>
          <img 
            src="/Images/statment.png" 
            alt="New Artwork" 
            loading="lazy"
            style={{ cursor: 'default' }}
          />
        </div>
        <div className="image-tile" style={{ width: '320px', position: 'absolute', top: '740px', left: '380px' }}>
          <img 
            src="/Images/Howard_InstallationView.jpeg" 
            alt="Installation View" 
            loading="lazy"
            onClick={() => handleImageClick('/Images/Howard_InstallationView.jpeg', 'Installation View')}
          />
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            <div className="modal-info">
              <h2 className="modal-title">{selectedImage.title}</h2>
              <p className="modal-statement">{selectedImage.statement}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Art;