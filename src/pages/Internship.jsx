import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import your static internship logos from the src/images folder
import ascheLogo from '../images/aps.jpg';
import eduskillsLogo from '../images/edu.jpg';
import delnetLogo from '../images/delnet.webp';
import project1 from '../images/IBM.jpg';
import avertiumLogo from '../images/Avertium.jpeg';
import netdevLogo from '../images/netdev.jpeg';
import iitLogo from '../images/iit.jpg';
import wescoLogo from '../images/wesco.webp';
import internGroup from '../images/InternGroup.png';

const Internship = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get('http://localhost:5000/public/internships');
        setInternships(response.data);
      } catch (err) {
        setError('Failed to load internship data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  if (loading) {
    return <div className="page-container"><p>Loading internship data...</p></div>;
  }

  if (error) {
    return <div className="page-container"><p className="error-message">{error}</p></div>;
  }

  return (
    <div className="page-container internships-page">
      <header className="page-header">
        <h1>INTERNSHIPS</h1>
      </header>

      {/* Static Image Gallery */}
      <section className="internship-row">
        <div className="internship-grid">
          <div className="logo-card">
            <img src={ascheLogo} alt="Asche Logo" />
          </div>
          <div className="logo-card">
            <img src={eduskillsLogo} alt="Eduskills Logo" />
          </div>
          <div className="logo-card">
            <img src={delnetLogo} alt="DELNET Logo" />
          </div>
        </div>
        <div className="internship-description">
          <p>Our SREC college provides different types of internships and trainings through various organizations.</p>
        </div>
      </section>

      <section className="internship-row">
        <div className="internship-description">
          <p>We will also collaborate with the trending technologies in the present market.</p>
        </div>
        <div className="internship-grid">
          <div className="logo-card">
            <img src={project1} alt="Project 1" />
          </div>
          <div className="logo-card">
            <img src={avertiumLogo} alt="Avertium Logo" />
          </div>
          <div className="logo-card">
            <img src={netdevLogo} alt="NetDev Logo" />
          </div>
        </div>
      </section>

      <section className="internship-row">
        <div className="internship-grid">
          <div className="logo-card">
            <img src={iitLogo} alt="IIT Tirupati Logo" />
          </div>
          <div className="logo-card">
            <img src={wescoLogo} alt="Wesco Logo" />
          </div>
          <div className="logo-card">
            <img src={internGroup} alt="Intern Group Logo" />
          </div>
        </div>
        <div className="internship-description">
          <p>Our career development cell also provides internships for students from various organizations.</p>
        </div>
      </section>

      {/* Dynamic Data from Admin Dashboard */}
      <section className="dynamic-internships-section">
        <h2>Latest Internship Listings</h2>
        {internships.length > 0 ? (
          <div className="internships-list-wrapper">
            {internships.map((internship) => (
              <div className="internship-card-public" key={internship._id}>
                <h3>{internship.title}</h3>
                <h4>{internship.company}</h4>
                <p><strong>Duration:</strong> {internship.duration}</p>
                <p>{internship.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No internships are currently available.</p>
        )}
      </section>
    </div>
  );
};

export default Internship;