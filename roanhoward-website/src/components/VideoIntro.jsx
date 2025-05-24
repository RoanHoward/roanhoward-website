// components/VideoIntro.jsx
import './VideoIntro.css'; // optional: use for styling the image

export default function VideoIntro() {
  return (
    <div className="video-intro">
      <img
        src="/Images/myface.jpg" // Adjust the path as necessary
        alt="Intro"
        className="intro-image"
      />
    </div>
  );
}