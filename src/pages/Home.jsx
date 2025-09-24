import React from 'react';
import '../App.css'; 

// Corrected import path
import chairmanPhoto from '../images/dr_m_santhiram.png';
import principalPhoto from '../images/dr_mv_subraman.jpg';
import HOD from '../images/david.jpeg';
import tpo from '../images/kishore.jpg';
import backgroundImage from '../images/background-college.jpg'; // Corrected path

const Home = () => {
  return (
    <div className="home-page-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Team Members Section */}
      <section className="team-members-section">
        <div className="team-grid">
          {/* Member 1: Chairman */}
          <div className="team-member-card">
            <img src={chairmanPhoto} alt="Dr. M. Santhiram" className="member-photo" />
            <h3>Dr.M.Santhiramudu</h3>
            <p>Chairman</p>
          </div>

          {/* Member 2: Principal */}
          <div className="team-member-card">
            <img src={principalPhoto} alt="Dr. M.V. Subramanyam" className="member-photo" />
            <h3>Dr.M.V.Subraman</h3>
            <p>Principal</p>
          </div>

          {/* Member 3: HOD */}
          <div className="team-member-card">
            <img src={HOD} alt="Dr. J. David Sukeerthi" className="member-photo" />
            <h3>Dr.J.David Sukeerthi</h3>
            <p>HOD - Computer Science & Design</p>
            <p>Training & placement officer</p>
          </div>

          {/* Member 4: Training & Placement Officer */}
          <div className="team-member-card">
            <img src={tpo} alt="Mr. Kishore Naidu" className="member-photo" />
            <h3>Mr.Kishore Naidu</h3>
            <p>Training & placement officer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;