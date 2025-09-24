import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // State for Internships
  const [internships, setInternships] = useState([]);
  const [newInternship, setNewInternship] = useState({ title: '', company: '', duration: '', description: '' });
  const [editingInternship, setEditingInternship] = useState(null);

  // State for Placements
  const [placements, setPlacements] = useState([]);
  const [newPlacement, setNewPlacement] = useState({ rollNo: '', studentName: '', employer: '', appointmentNo: '' });
  const [editingPlacement, setEditingPlacement] = useState(null);
  
  // State for Achievements
  const [achievements, setAchievements] = useState([]);
  const [newAchievement, setNewAchievement] = useState({ regNo: '', name: '', achievement: '', prizes: '' });
  const [editingAchievement, setEditingAchievement] = useState(null);

  // State for Workshops (NEW)
  const [workshops, setWorkshops] = useState([]);
  const [newWorkshop, setNewWorkshop] = useState({ title: '', description: '', date: '', venue: '' });
  const [editingWorkshop, setEditingWorkshop] = useState(null);

   // State for Developers (NEW)
  const [developers, setDevelopers] = useState([]);
  const [newDeveloper, setNewDeveloper] = useState({ name: '', regNo: '', image: '' });
  const [editingDeveloper, setEditingDeveloper] = useState(null);



  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin-login');
    } else {
      setLoading(true);
      setError(null);
      const fetchInitialData = async () => {
        try {
          if (activeSection === 'internships') {
            const response = await axios.get('http://localhost:5000/api/internships', { headers: { Authorization: `Bearer ${token}` } });
            setInternships(response.data);
          } else if (activeSection === 'placements') {
            const response = await axios.get('http://localhost:5000/api/placements', { headers: { Authorization: `Bearer ${token}` } });
            setPlacements(response.data);
          } else if (activeSection === 'achievements') {
            const response = await axios.get('http://localhost:5000/api/achievements', { headers: { Authorization: `Bearer ${token}` } });
            setAchievements(response.data);
          }
        } catch (error) {
          setError(`Failed to fetch data for ${activeSection}. Check backend.`);
        } finally {
          setLoading(false);
        }
      };
      fetchInitialData();
    }
  }, [navigate, activeSection]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin-login');
  };

  // --- Internship Management Functions ---
  const fetchInternships = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/api/internships', { headers: { Authorization: `Bearer ${token}` } });
      setInternships(response.data);
    } catch (error) { setError('Failed to fetch internships. Check backend.'); }
  };
  const handleInternshipChange = (e) => {
    const { name, value } = e.target;
    if (editingInternship) {
      setEditingInternship({ ...editingInternship, [name]: value });
    } else {
      setNewInternship({ ...newInternship, [name]: value });
    }
  };
  const addInternship = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/internships', newInternship, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setNewInternship({ title: '', company: '', duration: '', description: '' });
      fetchInternships(localStorage.getItem('token'));
    } catch (error) { setError('Error adding internship.'); }
  };
  const startEditInternship = (internship) => { setEditingInternship({ ...internship }); };
  const updateInternship = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/internships/${editingInternship._id}`, editingInternship, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setEditingInternship(null);
      fetchInternships(localStorage.getItem('token'));
    } catch (error) { setError('Error updating internship.'); }
  };
  const deleteInternship = async (id) => {
    if (window.confirm('Are you sure you want to delete this internship?')) {
      try {
        await axios.delete(`http://localhost:5000/api/internships/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        fetchInternships(localStorage.getItem('token'));
      } catch (error) { setError('Error deleting internship.'); }
    }
  };

  // --- Placements Management Functions ---
  const fetchPlacements = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/api/placements', { headers: { Authorization: `Bearer ${token}` } });
      setPlacements(response.data);
    } catch (error) { setError('Failed to fetch placements. Check backend.'); }
  };
  const handlePlacementChange = (e) => {
    const { name, value } = e.target;
    if (editingPlacement) {
      setEditingPlacement({ ...editingPlacement, [name]: value });
    } else {
      setNewPlacement({ ...newPlacement, [name]: value });
    }
  };
  const addPlacement = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/placements', newPlacement, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setNewPlacement({ rollNo: '', studentName: '', employer: '', appointmentNo: '' });
      fetchPlacements(localStorage.getItem('token'));
    } catch (error) { setError('Error adding placement.'); }
  };
  const startEditPlacement = (placement) => { setEditingPlacement({ ...placement }); };
  const updatePlacement = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/placements/${editingPlacement._id}`, editingPlacement, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setEditingPlacement(null);
      fetchPlacements(localStorage.getItem('token'));
    } catch (error) { setError('Error updating placement.'); }
  };
  const deletePlacement = async (id) => {
    if (window.confirm('Are you sure you want to delete this placement?')) {
      try {
        await axios.delete(`http://localhost:5000/api/placements/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        fetchPlacements(localStorage.getItem('token'));
      } catch (error) { setError('Error deleting placement.'); }
    }
  };

  // --- Achievements Management Functions ---
const fetchAchievements = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/api/achievements', { headers: { Authorization: `Bearer ${token}` } });
      setAchievements(response.data);
    } catch (error) { setError('Failed to fetch achievements. Check backend.'); }
  };
  const handleAchievementChange = (e) => {
    const { name, value } = e.target;
    if (editingAchievement) {
      setEditingAchievement({ ...editingAchievement, [name]: value });
    } else {
      setNewAchievement({ ...newAchievement, [name]: value });
    }
  };
  const addAchievement = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/achievements', newAchievement, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setNewAchievement({ regNo: '', name: '', achievement: '', prizes: '' });
      fetchAchievements(localStorage.getItem('token'));
    } catch (error) { setError('Error adding achievement.'); }
  };
  const startEditAchievement = (achievement) => { setEditingAchievement({ ...achievement }); };
  const updateAchievement = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/achievements/${editingAchievement._id}`, editingAchievement, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setEditingAchievement(null);
      fetchAchievements(localStorage.getItem('token'));
    } catch (error) { setError('Error updating achievement.'); }
  };
  const deleteAchievement = async (id) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      try {
        await axios.delete(`http://localhost:5000/api/achievements/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        fetchAchievements(localStorage.getItem('token'));
      } catch (error) { setError('Error deleting achievement.'); }
    }
  };


   // --- Workshop Management Functions (NEW) ---
  const fetchWorkshops = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/api/workshops', { headers: { Authorization: `Bearer ${token}` } });
      setWorkshops(response.data);
    } catch (error) { setError('Failed to fetch workshops. Check backend.'); }
  };
  const handleWorkshopChange = (e) => {
    const { name, value } = e.target;
    if (editingWorkshop) {
      setEditingWorkshop({ ...editingWorkshop, [name]: value });
    } else {
      setNewWorkshop({ ...newWorkshop, [name]: value });
    }
  };
  const addWorkshop = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/workshops', newWorkshop, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setNewWorkshop({ title: '', description: '', date: '', venue: '' });
      fetchWorkshops(localStorage.getItem('token'));
    } catch (error) { setError('Error adding workshop.'); }
  };
  const startEditWorkshop = (workshop) => { setEditingWorkshop({ ...workshop }); };
  const updateWorkshop = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/workshops/${editingWorkshop._id}`, editingWorkshop, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setEditingWorkshop(null);
      fetchWorkshops(localStorage.getItem('token'));
    } catch (error) { setError('Error updating workshop.'); }
  };
  const deleteWorkshop = async (id) => {
    if (window.confirm('Are you sure you want to delete this workshop?')) {
      try {
        await axios.delete(`http://localhost:5000/api/workshops/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        fetchWorkshops(localStorage.getItem('token'));
      } catch (error) { setError('Error deleting workshop.'); }
    }
  };

    // --- Developer Management Functions (NEW) ---
  const fetchDevelopers = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/api/developers', { headers: { Authorization: `Bearer ${token}` } });
      setDevelopers(response.data);
    } catch (error) { setError('Failed to fetch developers. Check backend.'); }
  };
  const handleDeveloperChange = (e) => {
    const { name, value } = e.target;
    if (editingDeveloper) {
      setEditingDeveloper({ ...editingDeveloper, [name]: value });
    } else {
      setNewDeveloper({ ...newDeveloper, [name]: value });
    }
  };
  const addDeveloper = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/developers', newDeveloper, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setNewDeveloper({ name: '', regNo: '', image: '' });
      fetchDevelopers(localStorage.getItem('token'));
    } catch (error) { setError('Error adding developer.'); }
  };
  const startEditDeveloper = (developer) => { setEditingDeveloper({ ...developer }); };
  const updateDeveloper = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/developers/${editingDeveloper._id}`, editingDeveloper, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setEditingDeveloper(null);
      fetchDevelopers(localStorage.getItem('token'));
    } catch (error) { setError('Error updating developer.'); }
  };
  const deleteDeveloper = async (id) => {
    if (window.confirm('Are you sure you want to delete this developer?')) {
      try {
        await axios.delete(`http://localhost:5000/api/developers/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        fetchDevelopers(localStorage.getItem('token'));
      } catch (error) { setError('Error deleting developer.'); }
    }
  };
  
  // --- Rendering Sections ---
  const renderInternshipsSection = () => {
    if (loading) return <p className="loading-message">Loading internships...</p>;
    if (error) return <p className="error-message-admin">{error}</p>;
    return (
      <div className="admin-section">
        <h2>Manage Internships</h2>
        <form onSubmit={editingInternship ? updateInternship : addInternship} className="admin-form">
          <h3>{editingInternship ? 'Edit Internship' : 'Add New Internship'}</h3>
          <input type="text" name="title" placeholder="Title" value={editingInternship ? editingInternship.title : newInternship.title} onChange={handleInternshipChange} required />
          <input type="text" name="company" placeholder="Company" value={editingInternship ? editingInternship.company : newInternship.company} onChange={handleInternshipChange} required />
          <input type="text" name="duration" placeholder="Duration" value={editingInternship ? editingInternship.duration : newInternship.duration} onChange={handleInternshipChange} required />
          <textarea type="text" name="description" placeholder="Description" value={editingInternship ? editingInternship.description : newInternship.description} onChange={handleInternshipChange} required></textarea>
          <button type="submit">{editingInternship ? 'Update Internship' : 'Add Internship'}</button>
          {editingInternship && (<button type="button" onClick={() => setEditingInternship(null)} className="cancel-button">Cancel Edit</button>)}
        </form>
        <div className="admin-list-table">
          <h3>Current Internships</h3>
          <table>
            <thead><tr><th>Title</th><th>Company</th><th>Duration</th><th>Description</th><th>Actions</th></tr></thead>
            <tbody>
              {internships.map((internship) => (<tr key={internship._id}>
                <td>{internship.title}</td><td>{internship.company}</td><td>{internship.duration}</td><td>{internship.description}</td>
                <td><button onClick={() => startEditInternship(internship)} className="edit-button">Edit</button>
                    <button onClick={() => deleteInternship(internship._id)} className="delete-button">Delete</button></td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  const renderPlacementsSection = () => {
    if (loading) return <p className="loading-message">Loading placements...</p>;
    if (error) return <p className="error-message-admin">{error}</p>;
    return (
      <div className="admin-section">
        <h2>Manage Placements</h2>
        <form onSubmit={editingPlacement ? updatePlacement : addPlacement} className="admin-form">
          <h3>{editingPlacement ? 'Edit Placement' : 'Add New Placement'}</h3>
          <input type="text" name="rollNo" placeholder="Roll No" value={editingPlacement ? editingPlacement.rollNo : newPlacement.rollNo} onChange={handlePlacementChange} required />
          <input type="text" name="studentName" placeholder="Student Name" value={editingPlacement ? editingPlacement.studentName : newPlacement.studentName} onChange={handlePlacementChange} required />
          <input type="text" name="employer" placeholder="Employer" value={editingPlacement ? editingPlacement.employer : newPlacement.employer} onChange={handlePlacementChange} required />
          <input type="text" name="appointmentNo" placeholder="Appointment No" value={editingPlacement ? editingPlacement.appointmentNo : newPlacement.appointmentNo} onChange={handlePlacementChange} required />
          <button type="submit">{editingPlacement ? 'Update Placement' : 'Add Placement'}</button>
          {editingPlacement && (<button type="button" onClick={() => setEditingPlacement(null)} className="cancel-button">Cancel Edit</button>)}
        </form>
        <div className="admin-list-table">
          <h3>Current Placements</h3>
          <table>
            <thead><tr><th>Roll No</th><th>Student Name</th><th>Employer</th><th>Appointment No</th><th>Actions</th></tr></thead>
            <tbody>
              {placements.map((placement) => (<tr key={placement._id}>
                <td>{placement.rollNo}</td><td>{placement.studentName}</td><td>{placement.employer}</td><td>{placement.appointmentNo}</td>
                <td><button onClick={() => startEditPlacement(placement)} className="edit-button">Edit</button>
                    <button onClick={() => deletePlacement(placement._id)} className="delete-button">Delete</button></td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderAchievementsSection = () => {
    if (loading) return <p className="loading-message">Loading achievements...</p>;
    if (error) return <p className="error-message-admin">{error}</p>;
    return (
      <div className="admin-section">
        <h2>Manage Student Achievements</h2>
        <form onSubmit={editingAchievement ? updateAchievement : addAchievement} className="admin-form">
          <h3>{editingAchievement ? 'Edit Achievement' : 'Add New Achievement'}</h3>
          <input type="text" name="regNo" placeholder="Reg.no" value={editingAchievement ? editingAchievement.regNo : newAchievement.regNo} onChange={handleAchievementChange} required />
          <input type="text" name="name" placeholder="Name" value={editingAchievement ? editingAchievement.name : newAchievement.name} onChange={handleAchievementChange} required />
          <input type="text" name="achievement" placeholder="Achievement" value={editingAchievement ? editingAchievement.achievement : newAchievement.achievement} onChange={handleAchievementChange} required />
          <input type="text" name="prizes" placeholder="Prizes" value={editingAchievement ? editingAchievement.prizes : newAchievement.prizes} onChange={handleAchievementChange} required />
          <button type="submit">{editingAchievement ? 'Update Achievement' : 'Add Achievement'}</button>
          {editingAchievement && (<button type="button" onClick={() => setEditingAchievement(null)} className="cancel-button">Cancel Edit</button>)}
        </form>
        <div className="admin-list-table">
          <h3>Current Achievements</h3>
          <table>
            <thead><tr><th>Reg.no</th><th>Name</th><th>Achievement</th><th>Prizes</th><th>Actions</th></tr></thead>
            <tbody>
              {achievements.map((achievement) => (<tr key={achievement._id}>
                <td>{achievement.regNo}</td><td>{achievement.name}</td><td>{achievement.achievement}</td><td>{achievement.prizes}</td>
                <td><button onClick={() => startEditAchievement(achievement)} className="edit-button">Edit</button>
                    <button onClick={() => deleteAchievement(achievement._id)} className="delete-button">Delete</button></td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

const renderWorkshopsSection = () => {
    if (loading) return <p className="loading-message">Loading workshops...</p>;
    if (error) return <p className="error-message-admin">{error}</p>;
    return (
      <div className="admin-section">
        <h2>Manage Workshops</h2>
        <form onSubmit={editingWorkshop ? updateWorkshop : addWorkshop} className="admin-form">
          <h3>{editingWorkshop ? 'Edit Workshop' : 'Add New Workshop'}</h3>
          <input type="text" name="title" placeholder="Title" value={editingWorkshop ? editingWorkshop.title : newWorkshop.title} onChange={handleWorkshopChange} required />
          <input type="text" name="description" placeholder="Description" value={editingWorkshop ? editingWorkshop.description : newWorkshop.description} onChange={handleWorkshopChange} required />
          <input type="text" name="date" placeholder="Date" value={editingWorkshop ? editingWorkshop.date : newWorkshop.date} onChange={handleWorkshopChange} required />
          <input type="text" name="venue" placeholder="Venue" value={editingWorkshop ? editingWorkshop.venue : newWorkshop.venue} onChange={handleWorkshopChange} required />
          <button type="submit">{editingWorkshop ? 'Update Workshop' : 'Add Workshop'}</button>
          {editingWorkshop && (<button type="button" onClick={() => setEditingWorkshop(null)} className="cancel-button">Cancel Edit</button>)}
        </form>
        <div className="admin-list-table">
          <h3>Current Workshops</h3>
          <table>
            <thead><tr><th>Title</th><th>Description</th><th>Date</th><th>Venue</th><th>Actions</th></tr></thead>
            <tbody>
              {workshops.map((workshop) => (<tr key={workshop._id}>
                <td>{workshop.title}</td><td>{workshop.description}</td><td>{workshop.date}</td><td>{workshop.venue}</td>
                <td><button onClick={() => startEditWorkshop(workshop)} className="edit-button">Edit</button>
                    <button onClick={() => deleteWorkshop(workshop._id)} className="delete-button">Delete</button></td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderDevelopersSection = () => {
    if (loading) return <p className="loading-message">Loading developers...</p>;
    if (error) return <p className="error-message-admin">{error}</p>;
    return (
      <div className="admin-section">
        <h2>Manage Developers</h2>
        <form onSubmit={editingDeveloper ? updateDeveloper : addDeveloper} className="admin-form">
          <h3>{editingDeveloper ? 'Edit Developer' : 'Add New Developer'}</h3>
          <input type="text" name="name" placeholder="Name" value={editingDeveloper ? editingDeveloper.name : newDeveloper.name} onChange={handleDeveloperChange} required />
          <input type="text" name="regNo" placeholder="Reg. No" value={editingDeveloper ? editingDeveloper.regNo : newDeveloper.regNo} onChange={handleDeveloperChange} required />
          <input type="text" name="image" placeholder="Image URL" value={editingDeveloper ? editingDeveloper.image : newDeveloper.image} onChange={handleDeveloperChange} required />
          <button type="submit">{editingDeveloper ? 'Update Developer' : 'Add Developer'}</button>
          {editingDeveloper && (<button type="button" onClick={() => setEditingDeveloper(null)} className="cancel-button">Cancel Edit</button>)}
        </form>
        <div className="admin-list-table">
          <h3>Current Developers</h3>
          <table>
            <thead><tr><th>Name</th><th>Reg. No</th><th>Image URL</th><th>Actions</th></tr></thead>
            <tbody>
              {developers.map((developer) => (<tr key={developer._id}>
                <td>{developer.name}</td><td>{developer.regNo}</td><td>{developer.image}</td>
                <td><button onClick={() => startEditDeveloper(developer)} className="edit-button">Edit</button>
                    <button onClick={() => deleteDeveloper(developer._id)} className="delete-button">Delete</button></td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  

  
  const renderDashboardOverview = () => (
    <div className="admin-section">
      <h2>Welcome to Admin Dashboard</h2>
      <p>Use the sidebar to navigate and manage your website content.</p>
    </div>
  );

  return (
    <div className="admin-dashboard-container">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
        </div>
        <ul>
          <li><button onClick={() => setActiveSection('overview')} className={activeSection === 'overview' ? 'active' : ''}>Dashboard Overview</button></li>
          <li><button onClick={() => setActiveSection('internships')} className={activeSection === 'internships' ? 'active' : ''}>Manage Internships</button></li>
          <li><button onClick={() => setActiveSection('placements')} className={activeSection === 'placements' ? 'active' : ''}>Manage Placements</button></li>
          <li><button onClick={() => setActiveSection('achievements')} className={activeSection === 'achievements' ? 'active' : ''}>Manage Achievements</button></li>
          <li><button onClick={() => setActiveSection('workshops')} className={activeSection === 'workshops' ? 'active' : ''}>Manage Workshops</button></li>
          <li><button onClick={() => setActiveSection('developers')} className={activeSection === 'developers' ? 'active' : ''}>Manage Developers</button></li>
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        </ul>
      </aside>
      <main className="admin-main-content">
        {activeSection === 'overview' && renderDashboardOverview()}
        {activeSection === 'internships' && renderInternshipsSection()}
        {activeSection === 'placements' && renderPlacementsSection()}
        {activeSection === 'achievements' && renderAchievementsSection()}
         {activeSection === 'workshops' && renderWorkshopsSection()}
         {activeSection === 'developers' && renderDevelopersSection()}
      </main>
    </div>
  );
};
export default AdminDashboard;