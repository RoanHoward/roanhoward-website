
import React from 'react'; 
import './CS.css';

export default function CS() {
  return (
    <div className="cs-container">
      <h1 className="cs-title">Expertise</h1>
      <div className="expertise-section">
        <div className="expertise-card">
          <h2 className="expertise-header">
            Full<span className="dash-wiggle">-</span>Stack Web Development
          </h2>
          <p>
            I have built a diverse array of web applications from scratch using modern technologies such as React and SpringBoot.
            I have a strong proficiency in the SDLC process as well as frontend and backend development.
          </p>
          <div className="tech-stack">
            <span>React</span><span>TypeScript</span><span>JavaScript</span>
            <span>HTML5</span><span>CSS3</span><span>Java</span>
            <span>C#</span><span>SQL</span><span>PostgreSQL</span>
          </div>
        </div>

        <div className="expertise-card">
          <h2 className="expertise-header">
             Automation <span className="ampersand" id="amp-left">&</span> Scripting
          </h2>
          <p>
            I have experience automating system workflows and repetitive tasks using open-source scripting solutions.
            My work has saved significant manual hours and strengthened my ability to identify process bottlenecks and streamline backend operations.
          </p>
          <div className="tech-stack">
            <span>Git</span><span>GitHub Actions</span><span>Docker</span>
            <span>Azure</span><span>Linux</span><span>Windows</span>
            <span>Selenium</span>
          </div>
        </div>

        <div className="expertise-card">
          <h2 className="expertise-header">
             Data Science <span className="ampersand" id="amp-right">&</span> Research
          </h2>
          <p>
            Through coursework and lab research, I’ve applied machine learning, data visualization, and statistical techniques to real-world problems.
            I’m comfortable working with structured data and conducting technical investigations to inform design and system improvements.
          </p>
          <div className="tech-stack">
            <span>Python</span><span>Pytorch</span><span>NumPy</span><span>Sci-kit</span>
          </div>
        </div>
      </div>

      <div className="projects-header">
        <h1 className="cs-title">Personal Projects</h1>
      </div>
      <div className="projects-section">
        <div className="project-card">
          <img src="/Images/Personal_website.png" alt="Sentra Project" className="project-image" />
          <h2>Personal Website</h2>
          <p>
            This personal website was built using React.js and styled with custom CSS to showcase my technical projects, background, and design abilities. It demonstrates front-end development skills including responsive layout design, component structuring, and dynamic asset integration.
          </p>
        </div>
        <div className="project-card">
          <img src="/Images/stanfanator.png" alt="Stanfanator Game" className="project-image" />
          <h2>Stanfanator</h2>
          <p>
            Developed a probability-based person-guessing game using React and Node.js for the frontend and Python Flask for the backend, where users identify Stanford students based on clues dynamically generated from a database.
          </p>
        </div>
      </div>
    </div>
  );
}