import React, { useState } from 'react';
import './CS.css';

export default function CS() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: '/Images/stanfanator.png',
      title: 'Stanfanator',
      blurb: 'Working with Probability, Introduction to React.',
      details: 'Detailed info about Project One goes here.'
    },
    {
      id: 2,
      image: '/images/project2.jpg',
      title: 'Project Two',
      blurb: 'A short description of project two.',
      details: 'Detailed info about Project Two goes here.'
    },
    {
      id: 3,
      image: '/images/project3.jpg',
      title: 'Project Three',
      blurb: 'A short description of project three.',
      details: 'Detailed info about Project Three goes here.'
    },
    {
      id: 4,
      image: '/images/project4.jpg',
      title: 'Project Four',
      blurb: 'A short description of project four.',
      details: 'Detailed info about Project Four goes here.'
    },
  ];

  return (
    <div className="cs-page">
        <div className="cs-projects-container">
        {projects.map((project) => (
            <div key={project.id} className="cs-project-card" onClick={() => setActiveProject(project)}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.blurb}</p>
            </div>
        ))}

        {activeProject && (
            <div className="cs-modal" onClick={() => setActiveProject(null)}>
            <div className="cs-modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.details}</p>
                <button onClick={() => setActiveProject(null)}>Close</button>
            </div>
            </div>   
        )}
        </div>
    </div>
  );
}
