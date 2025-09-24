import React from 'react';
import { Link } from 'react-router-dom';

// Import logos for the workshop cards
import brainovisionLogo from '../images/Brainovision-remov.png';
import pythonLogo from '../images/python-logo.png';

// Import images for the gallery section
import workshopImg1 from '../images/workshop_1.jpg';
import workshopImg2 from '../images/workshop_2.jpg';
import workshopImg3 from '../images/workshop_3.jpg';

// Data for the image gallery with overlay content
const galleryData = [
  { src: workshopImg1, alt: 'Workshop on IoT', gps: 'GPS Map' },
  { src: workshopImg2, alt: 'Workshop on IoT', gps: 'GPS Map' },
  { src: workshopImg3, alt: 'Workshop on IoT', gps: 'GPS Map' }
];

const Workshops = () => {
  return (
    <div className="page-container workshops-page">
      <header className="page-header">
        <h1>WORK SHOPS CONDUCTED</h1>
      </header>

      {/* Top Workshop Cards Section */}
      <section className="top-workshops-section">
        <div className="workshop-card">
          <img src={brainovisionLogo} alt="Brainovision Logo" className="workshop-logo" />
          <div className="workshop-text">
            <h3>REACT.JS</h3>
            <p>A one week work shop on react.js</p>
          </div>
        </div>
        <div className="workshop-card">
          <img src={pythonLogo} alt="Python Logo" className="workshop-logo" />
          <div className="workshop-text">
            <h3>DATA SCIENCE</h3>
            <p>Work shop on data science using python</p>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="video-section">
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QH3XY9XW-RE?si=_YmeEToqCk8vjYKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="image-gallery-section">
        <div className="image-gallery-container">
          {galleryData.map((item, index) => (
            <div className="gallery-item" key={index}>
              <img src={item.src} alt={item.alt} />
              <div className="image-overlay">
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Workshops;