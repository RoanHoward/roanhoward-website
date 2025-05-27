import React, { useState } from 'react';
import './CS.css';

export default function CS() {
  const [activeProject, setActiveProject] = useState(null);

  const courseworkProjects = [
    {
      id: 101,
      image: '/Images/Slogo.webp',
      title: 'CS106A - Programming Methodology',
      blurb: '',
      details: 'Covered Python basics, control flow, functions, and simple graphics using Stanford libraries.',
    },
    {
      id: 102,
      image: '/Images/Slogo.webp',
      title: 'CS107 - Computer Systems',
      blurb: '',
      details: 'Learned about memory, pointers, C programming, and system-level operations.',
    },
    {
      id: 103,
      image: '/Images/Slogo.webp',
      title: 'CS109 - Introduction to Probability',
      blurb: '',
      details: 'Explored random variables, distributions, and statistical inference.',
    },
    {
      id: 104,
      image: '/Images/Slogo.webp',
      title: 'CS161 - Design and Analysis of Algorithms',
      blurb: '',
      details: 'Studied sorting algorithms, graph algorithms, and complexity analysis.',
    },
    {
      id: 105,
      image: '/Images/Slogo.webp',
      title: 'CS224N - Natural Language Processing with Deep Learning',
      blurb: '',
      details: 'Covered word embeddings, RNNs, and transformer models.',
    },
    {
      id: 106,
      image: '/Images/Slogo.webp',
      title: 'CS231N - Convolutional Neural Networks for Visual Recognition',
      blurb: '',
      details: 'Learned about CNN architectures, training techniques, and applications in image recognition.',
    },
  ];

  const personalProjects = [
    {
      id: 1,
      image: '/Images/stanfanator.png',
      title: 'Stanfanator',
      blurb: '',
      details: 'Detailed info about Project One goes here.'
    },
    {
      id: 2,
      image: '/images/project2.jpg',
      title: 'Project Two',
      blurb: '',
      details: 'Detailed info about Project Two goes here.'
    },
    {
      id: 3,
      image: '/images/project3.jpg',
      title: 'Project Three',
      blurb: '',
      details: 'Detailed info about Project Three goes here.'
    },
    {
      id: 4,
      image: '/images/project4.jpg',
      title: 'Project Four',
      blurb: '',
      details: 'Detailed info about Project Four goes here.'
    },
  ];

  return (
    <div className="cs-page">

      <h2 className="cs-section-header">CS-Related Coursework</h2>
      <div className="cs-projects-container">
        {courseworkProjects.map((project) => (
          <div key={project.id} className="cs-project-card" onClick={() => setActiveProject(project)}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.blurb}</p>
          </div>
        ))}
      </div>

      <h2 className="cs-section-header">CS-Personal Projects</h2>
      <div className="cs-projects-container">
        {personalProjects.map((project) => (
          <div key={project.id} className="cs-project-card" onClick={() => setActiveProject(project)}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.blurb}</p>
          </div>
        ))}
      </div>

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
  );
}
