// pages/Home.jsx
import './Home.css';
import VideoIntro from '../components/VideoIntro';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="name">Roan Howard</h1>
      <VideoIntro />
      <div className="about-section">
        <h2 className="about-header">About Me</h2>
        <p className="about-text">
          I’m a computer science student at Stanford with a passion for building tools, editing film, and exploring ideas that blend technology with Indigenous identity. This site is where I share my work and story.
        </p>
      </div>
    </div>
  );
}


