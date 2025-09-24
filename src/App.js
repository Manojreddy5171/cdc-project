import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; // Import the logout icon
import './App.css'; 

// Import all your page components
import Home from './pages/Home';
import About from './pages/About';
import Internship from './pages/Internship';
import Training from './pages/Training';
import Placements from './pages/Placements';
import StudentAchievements from './pages/StudentAchievements';
import Workshops from './pages/Workshops';
import ContactUs from './pages/ContactUs';
import Developers from './pages/Developers';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard'; 
import ProtectedRoute from './components/ProtectedRoute'; // Assumes you've created this file

// Create a context to share auth state
const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  // Checks for an existing token on page load
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsLoggedIn(true);
      setAuthToken(storedToken);
    }
  }, []);

  const handleLogin = (token) => {
    setIsLoggedIn(true);
    setAuthToken(token);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthToken(null);
    localStorage.removeItem('token');
  };

  const authValue = { isLoggedIn, handleLogin, handleLogout, authToken };

  return (
    <Router basename="/cdc-project">
      <div className="App">
        {/* TOP HEADER SECTION */}
        <header className="site-header">
          <div className="header-top">
            <img src="./logo-left.png" alt="College Logo" className="college-logo left-logo" /> 
            <div className="header-text">
              <h2>SANTHIRAM ENGINEERING COLLEGE</h2>
              <h3>(AUTONOMOUS)</h3>
              <p>CAREER DEVELOPMENT CELL</p>
            </div>
            <img src="./logo-right.png" alt="CDC Logo" className="college-logo right-logo" />
          </div>
          {/* NAVIGATION BAR */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/internship">Internship</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/placements">Placements</Link></li>
            <li><Link to="/student-achievements">Student Achievements</Link></li>
            <li><Link to="/workshops">Workshops</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/developers">Developers</Link></li>
            
            {/* Conditional rendering for admin links */}
            {isLoggedIn ? (
              <>
                <li><Link to="/admin-dashboard">Dashboard</Link></li>
                 <li>
                  {/* The Logout Button with the Icon */}
                  <button onClick={handleLogout} className="nav-logout-button" title="Logout">
                    <FiLogOut className="logout-icon" />
                  </button>
                </li>
              </>
            ) : (
              <li><Link to="/admin-login">Admin Login</Link></li>
            )}
          </ul>
        </nav>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="main-content">
          <AuthContext.Provider value={authValue}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/training" element={<Training />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/student-achievements" element={<StudentAchievements />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/admin-login" element={<AdminLogin onLogin={handleLogin} />} />
              
              <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </AuthContext.Provider>
        </main>

        {/* FOOTER SECTION */}
        <footer className="site-footer">
          <div className="footer-columns">
            <div className="footer-col">
              <h4>ABOUT US</h4>
              <ul>
                <li>Genesis</li>
                <li>Quality Policy</li>
                <li>Vision & Mission</li>
                <li>Message</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>DEPARTMENTS</h4>
              <ul>
                <li>CSE</li>
                <li>CSE Design</li>
                <li>CSE DataScience</li>
                <li>Artificial Intelligence</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>FACILITIES</h4>
              <ul>
                <li>Infrastructure</li>
                <li>Auditorium</li>
                <li>Library</li>
                <li>Sports</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>GALLERY</h4>
              <ul>
                <li>Infrastructure</li>
                <li>Events</li>
                <li>Visit Our Campus</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>OTHERS</h4>
              <ul>
                <li>Rank Holders</li>
                <li>Careers</li>
                <li>NAAC</li>
                <li>NCC</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2007 - 2024. Santhiram Engineering College</p>
            <p>Designed by Techies</p>
            <div className="social-media">
              <p>Follow Us on Social Media</p>
              <ul>
                <li>Insta</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;