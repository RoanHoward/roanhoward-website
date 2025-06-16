import './Art.css';

export default function Art() {
  // Example data structure for art by year
  const artTimeline = [
    {
      year: 2025,
      images: [
        { src: '/Images/Charcoal.jpeg', title: 'control' },
        { type: 'raven-triptych', images: [
          { src: '/Images/Raven1.jpeg' },
          { src: '/Images/Raven2.jpeg' },
          { src: '/Images/Raven3.jpeg' }
        ], title: 'Raven (Triptych)' },
        { src: '/Images/Head Rest 6 copy.jpg', title: 'Head Rest' },
        { src: '/Images/TrueNature.jpg', title: 'True Nature' },
      ],
    },
    {
      year: 2022,
      images: [
        { src: '/art/painting3.jpg', title: '' },
        { src: '/art/painting4.jpg', title: '' },
      ],
    },
  ];

  return (
    <div className="art-page">
      <div className="artist-statement-horizontal">
        <div className="artist-statement-line top"></div>
        <div className="artist-statement-center">
          <span className="artist-statement-text">
            My art explores the intersection of memory, place, and emotion. I use color, texture, and form to capture fleeting moments and the stories they hold. Each piece is a reflection of my journey and a window into the worlds I imagine.
          </span>
        </div>
        <div className="artist-statement-line bottom"></div>
      </div>
      <div className="art-timeline">
        {artTimeline.map((section) => (
          <div key={section.year} className="art-timeline-section">
            <div className="art-timeline-year">{section.year}</div>
            <div className="art-timeline-images">
              {section.images.map((img, idx) => (
                img.type === 'raven-triptych' ? (
                  <div className="raven-triptych-block" key={img.title + idx}>
                    <div className="raven-triptych-images">
                      {img.images.map((ravenImg, rIdx) => (
                        <img src={ravenImg.src} alt={img.title + ' ' + (rIdx+1)} className="raven-triptych-image" key={ravenImg.src} />
                      ))}
                    </div>
                    <div className="art-image-title raven-triptych-title">{img.title}</div>
                  </div>
                ) : (
                  <div className="art-image-block" key={img.src + idx}>
                    <img src={img.src} alt={img.title} className="art-image" />
                    <div className="art-image-title">{img.title}</div>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}