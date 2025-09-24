import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="page-container contact-us-page">
      <header className="page-header">
        <h1>Contact Us</h1>
      </header>

      <section className="contact-content-wrapper">
        <div className="contact-form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile:</label>
              <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        <div className="contact-info-section">
          <div className="info-block">
            <h3>COLLEGE MAIL-ID:</h3>
            <p>santhiramengineeringcollege@srecnandyal.edu.in</p>
          </div>
          <div className="info-block">
            <h3>CAREER DEVELOPMENT CELL MAIL-ID:</h3>
            <p>careerdevelopmentcell@srecnandyal.edu.in</p>
          </div>
          <div className="info-block">
            <h3>MOBILE NUMBER:</h3>
            <p>+91 98765 43210, +91 91234 56789</p>
          </div>
          <div className="info-block">
            <h3>ADDRESS:</h3>
            <p>NH-40, Nerawada X'Roads, Nandyal, Andhra Pradesh</p>
          </div>
        </div>
      </section>

      {/* New Map Section */}
      <section className="map-section">
        <div className="map-container">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.6032723912217!2d78.37298167516998!3d15.505757585095033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5b49a37d3d603%3A0xa5d0919e871eabe8!2sSanthiram%20Engineering%20College(Autonomous)!5e0!3m2!1sen!2sin!4v1758646900787!5m2!1sen!2sin" 
            width="950" 
            height="300" 
            style={{ border: 0 }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
         ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;