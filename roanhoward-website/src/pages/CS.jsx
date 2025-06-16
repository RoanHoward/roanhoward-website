import React, { useState } from 'react';
import './CS.css';

export default function CS() {
  const [showAllCoursework, setShowAllCoursework] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Add your programming languages here
  const programmingLanguages = [
    { name: 'Python', color: '#3572A5' },
    { name: 'C++', color: '#f34b7d' },
    { name: 'C', color: '#555555' },
    { name: 'Assembly', color: '#e38c00' },
    { name: 'JavaScript', color: '#f1e05a' },
    { name: 'HTML', color: '#e34c26' },
    { name: 'CSS', color: '#863480' },
  ];

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

  const ROW_SIZE = 5;
  const courseworkFirstRow = courseworkProjects.slice(0, ROW_SIZE);
  const courseworkRest = courseworkProjects.slice(ROW_SIZE);
  const projectsFirstRow = personalProjects.slice(0, ROW_SIZE);
  const projectsRest = personalProjects.slice(ROW_SIZE);

  return (
    <div className="cs-page">
      <div className="cs-intro-block">
        <p className="cs-intro-text">
          I am passionate about computer science because it empowers me to solve real-world problems, build creative projects, and explore the intersection of technology and society. My journey has taken me from foundational programming to advanced AI, and I am always eager to learn more and collaborate with others.
        </p>
        <ul className="cs-lang-list">
          {programmingLanguages.map((lang, idx) => (
            <li key={lang.name} style={{ color: lang.color }}>
              &#8226; {lang.name}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="cs-section-header">CS-Related Coursework</h2>
      <div className="cs-projects-wrapper">
        <div className="cs-projects-container single-row">
          {courseworkFirstRow.map((project) => (
            <div key={project.id} className="cs-project-card">
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.blurb}</p>
            </div>
          ))}
        </div>
        {courseworkRest.length > 0 && (
          <div className="see-more-row">
            <button className="see-more-btn" onClick={() => setShowAllCoursework((v) => !v)}>
              {showAllCoursework ? '⌃' : '⌵'}
            </button>
          </div>
        )}
        {showAllCoursework && (
          <div className="cs-projects-container single-row">
            {courseworkRest.map((project) => (
              <div key={project.id} className="cs-project-card">
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.blurb}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <h2 className="cs-section-header">CS-Personal Projects</h2>
      <div className="cs-projects-wrapper">
        <div className="cs-projects-container single-row">
          {projectsFirstRow.map((project) => (
            <div key={project.id} className="cs-project-card">
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.blurb}</p>
            </div>
          ))}
        </div>
        {projectsRest.length > 0 && (
          <div className="see-more-row">
            <button className="see-more-btn" onClick={() => setShowAllProjects((v) => !v)}>
              {showAllProjects ? '⌃' : '⌵'}
            </button>
          </div>
        )}
        {showAllProjects && (
          <div className="cs-projects-container single-row">
            {projectsRest.map((project) => (
              <div key={project.id} className="cs-project-card">
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.blurb}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
