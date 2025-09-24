import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Placements = () => {
  const [placementData, setPlacementData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await axios.get('http://localhost:5000/public/placements');
        setPlacementData(response.data);
      } catch (err) {
        setError('Failed to load placement data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchPlacements();
  }, []);

  if (loading) {
    return <div className="page-container"><p>Loading placement data...</p></div>;
  }

  if (error) {
    return <div className="page-container"><p className="error-message">{error}</p></div>;
  }
  
  if (placementData.length === 0) {
    return (
      <div className="page-container placements-page">
        <header className="page-header">
          <h1>Student Placement Details</h1>
        </header>
        <p>No placement records found.</p>
      </div>
    );
  }

  return (
    <div className="page-container placements-page">
      <header className="page-header">
        <h1>Student Placement Details</h1>
      </header>
      <div className="table-wrapper">
        <table className="placements-table">
          <thead>
            <tr>
              <th>Roll.No</th>
              <th>Student Name</th>
              <th>Name of the Employer</th>
              <th>Appointment No.</th>
            </tr>
          </thead>
          <tbody>
            {placementData.map((student, index) => (
              <tr key={student._id}>
                <td>{student.rollNo}</td>
                <td>{student.studentName}</td>
                <td>{student.employer}</td>
                <td>{student.appointmentNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Placements;