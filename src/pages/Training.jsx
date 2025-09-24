import React from 'react';
import { Link } from 'react-router-dom';

// Import your training images from the src/images folder
import trainingPic1 from '../images/training_1.jpg';
import trainingPic2 from '../images/training_2.jpg';
import trainingPic3 from '../images/training_3.jpg';
import trainingPic4 from '../images/training_4.jpg';
import trainingPic5 from '../images/training_5.jpg';
import trainingPic6 from '../images/training_6.jpg';

// Data for the image gallery with overlay content
const galleryData = [
  {
    src: trainingPic1,
    alt: 'Training session in a classroom',
    overlayText: 'SANTHIRAM ENGINEERING COLLEGE(AUTONOMOUS), NANDYAL, ANDHRA PRADESH ADVANCED SOFTWARE DEVELOPMENT USING C LANGUAGE Lat 15.50399° Long 78.374808° 23/01/24 09:30 AM GMT+05:30',
    
  },
  {
    src: trainingPic2,
    alt: 'Training program stage',
    overlayText: 'SANTHIRAM ENGINEERING COLLEGE(AUTONOMOUS), NANDYAL, ANDHRA PRADESH ADVANCED SOFTWARE DEVELOPMENT USING C LANGUAGE Lat 15.50399° Long 78.374808°',
    
  },
  {
    src: trainingPic3,
    alt: 'Advanced Software Development certificate',
    overlayText: 'SANTHIRAM ENGINEERING COLLEGE, (AUTONOMOUS) Sponsored by NASSCOM, in Association with TERV, Top Freshers & IEEE, IE(I), ISTE ONE WEEK CERTIFICATION PROGRAM on ADVANCED SOFTWARE DEVELOPMENT USING C LANGUAGE Dates: 23-01-2024 to 27-01-2024 Venue: T&P Block, SREC',
   
  },
  {
    src: trainingPic4,
    alt: 'Advanced Software Development certificate',
    overlayText: 'SANTHIRAM ENGINEERING COLLEGE, (AUTONOMOUS) Sponsored by NASSCOM, in Association with TERV, Top Freshers & IEEE, IE(I), ISTE ONE WEEK CERTIFICATION PROGRAM on ADVANCED SOFTWARE DEVELOPMENT USING C LANGUAGE Dates: 23-01-2024 to 27-01-2024 Venue: T&P Block, SREC',
   
  },
  {
    src: trainingPic5,
    alt: 'Advanced Software Development certificate',
    overlayText: 'SANTHIRAM ENGINEERING COLLEGE, (AUTONOMOUS) Sponsored by NASSCOM, in Association with TERV, Top Freshers & IEEE, IE(I), ISTE ONE WEEK CERTIFICATION PROGRAM on ADVANCED SOFTWARE DEVELOPMENT USING C LANGUAGE Dates: 23-01-2024 to 27-01-2024 Venue: T&P Block, SREC',
   
  },
  {
    src: trainingPic6,
    alt: 'Advanced Software Development certificate',
    overlayText: 'SANTHIRAM ENGINEERING COLLEGE, (AUTONOMOUS) Sponsored by NASSCOM, in Association with TERV, Top Freshers & IEEE, IE(I), ISTE ONE WEEK CERTIFICATION PROGRAM on ADVANCED SOFTWARE DEVELOPMENT USING C LANGUAGE Dates: 23-01-2024 to 27-01-2024 Venue: T&P Block, SREC',
   
  }
];

const Training = () => {
  return (
    <div className="page-container training-page">
      <header className="page-header">
        <h1>Training of programming skills in SREC college</h1>
        <p className="upload-text">Click here to upload pictures</p>
        <div className="upload-section">
          <input type="file" id="file-upload" />
          <label htmlFor="file-upload" className="custom-file-upload">
            Choose File
          </label>
        </div>
      </header>

      <div className="image-gallery-container">
        {galleryData.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.src} alt={item.alt} />
            <div className="image-overlay">
              <span className="gps-map">{item.gps}</span>
              <p className="overlay-text">{item.overlayText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;