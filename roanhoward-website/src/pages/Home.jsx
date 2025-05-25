
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="profile-block">
        <img className="profile-image" src="/Images/myface.jpg" alt="Roan Howard" />
        <h1 className="name">RoanBot</h1>
      </div>
      <div className="about-section">
        <p className="about-text">
          Aaskuwut eesh yóo xát duwasáakw. Yéil áyá xát. K’ineix Kwáan naax xát sitee. Tsisk’w hítdáx áyá xát. <br /><br /> My name is Roan Howard, and my Tlingit name is Aaskuwut eesh.
          I am Alaskan Native, Raven moiety, of the People of the Copper River Clan from the Owl House. I spent my childhood in a tree-lined suburb of Kirkland, Washington, and now reside in California, where I study and create. <br /> <br />
          I’m a 20-year-old junior at Stanford University, majoring in Computer Science with a concentration in Artificial Intelligence and minoring in Art Practice.
          I am a scrappy idea hopper and thrive in the spaces where my interests intersect — where culture and technology come together.<br /> <br />
          This site is where I share both my work and my story. There’s a lot more than I can write here, so feel free to ask my AI clone, Roanbot.<br />
        </p>
      </div>
    </div>
  );
}


