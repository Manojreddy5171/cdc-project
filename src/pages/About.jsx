import React from 'react';
import { Link } from 'react-router-dom';
// Optional: import a specific CSS file for this component if you prefer modular styling
// import './About.css'; 

const About = () => {
  return (
    <div className="page-container about-page-content">
      <div className="about-content-wrapper">
        <section>
          <h1>Introduction</h1>
          <p>
            The Santhiram Engineering College Career Development Center (CDC) is a dedicated resource designed to support students and alumni in achieving their career aspirations and professional development goals. At Santhiram Engineering College, we understand the importance of bridging the gap between academic learning and real-world employment opportunities. The CDC serves as a vital link between students, employers, and the broader professional community.
          </p>
        </section>
        <section>
          <h1>Mission</h1>
          <p>
            To empower Santhiram Engineering College students and alumni with the knowledge, skills, and resources necessary to navigate their career paths successfully.
          </p>
        </section>
        <section>
          <h1>Vision</h1>
          <p>
            To cultivate a culture of career readiness and lifelong learning, ensuring that every Brighton graduate is prepared for the evolving demands of the global workforce.
          </p>
        </section>
        <section>
          <h1>Services offered:</h1>
          <div className="services-list">
            <h3>Career Counseling:</h3>
            <p>
              Personalized one-on-one counseling sessions with experienced career advisors to explore career options, set goals, and develop action plans.
            </p>
            <h3>Resume and Cover Letter Assistance:</h3>
            <p>
              Workshops and individualized guidance to help students create professional resumes and cover letters that effectively showcase their skills and experiences.
            </p>
            <h3>Interview Preparation:</h3>
            <p>
              Mock interview sessions, behavioral interview coaching, and tips for mastering virtual interviews to help students excel in the job application process.
            </p>
            <h3>Job Search Strategies:</h3>
            <p>
              Guidance on job search strategies, networking techniques, and utilizing online resources to identify internship and employment opportunities.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;