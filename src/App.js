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
                <li><a href="https://www.srecnandyal.edu.in/" target="_blank" rel="noopener noreferrer">Genesis</a></li>
                <li><a href="https://www.srecnandyal.edu.in/" target="_blank" rel="noopener noreferrer">Quality Policy</a></li>
                <li><a href="https://www.srecnandyal.edu.in/" target="_blank" rel="noopener noreferrer">Vision & Mission</a></li>
                <li><a href="https://www.srecnandyal.edu.in/" target="_blank" rel="noopener noreferrer">Message</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>DEPARTMENTS</h4>
               <ul>
                <li><a href="https://www.srecnandyal.edu.in/" target="_blank" rel="noopener noreferrer">CSE</a></li>
                <li><a href="https://www.srecnandyal.edu.in/" target="_blank" rel="noopener noreferrer">CSE Design</a></li>
                <li><a href="https://www.srecnandyal.edu.in/" target="_blank" rel="noopener noreferrer">CSE DataScience</a></li>
                <li><a href="https://www.srecnandyal.edu.in/" target="_blank" rel="noopener noreferrer">Artificial Intelligence</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>FACILITIES</h4>
              <ul>
                <li><a href="https://www.srecnandyal.edu.in/Courses_Offer.php" target="_blank" rel="noopener noreferrer">Infrastructure</a></li>
                <li><a href="https://www.srecnandyal.edu.in/" target="_blank" rel="noopener noreferrer">Auditorium</a></li>
                <li><a href="https://www.srecnandyal.edu.in/Policy/Library%20Policy.pdf#toolbar=0" target="_blank" rel="noopener noreferrer">Library</a></li>
                <li><a href="https://www.srecnandyal.edu.in/" target="_blank" rel="noopener noreferrer">Sports</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>GALLERY</h4>
              <ul>
                <li><a href="https://www.srecnandyal.edu.in/About-Us.php" target="_blank" rel="noopener noreferrer">Infrastructure</a></li>
                <li><a href="https://www.srecnandyal.edu.in/About-Us.php" target="_blank" rel="noopener noreferrer">Events</a></li>
                <li><a href="https://www.srecnandyal.edu.in/About-Us.php" target="_blank" rel="noopener noreferrer">Visit Our Campus</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>OTHERS</h4>
              <ul>
                <li><a href="https://www.srecnandyal.edu.in/Alumni.php" target="_blank" rel="noopener noreferrer">Rank Holders</a></li>
                <li><a href="https://www.srecnandyal.edu.in/srec" target="_blank" rel="noopener noreferrer">Careers</a></li>
                <li><a href="https://www.srecnandyal.edu.in/Affiliation_Accreditation.php" target="_blank" rel="noopener noreferrer">NAAC</a></li>
                <li><a href="https://www.srecnandyal.edu.in/Affiliation_Accreditation.php" target="_blank" rel="noopener noreferrer">JNTUA</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2007 - 2024. Santhiram Engineering College</p>
            <p>Designed by Techies</p>
            <div className="social-media">
              <p>Follow Us on Social Media</p>
              <ul>
                <li><a href="https://www.instagram.com/srecndl/" target="_blank" rel="insta srecndl">Insta</a></li>
                <li><a href="https://www.facebook.com/162397646957220?ref=_xav_ig_profile_page_web" target="_blank" rel="facebook">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="twitter">Twitter</a></li>
                <li><a href="https://www.youtube.com/@santhiramengineeringcolleg7561" target="_blank" rel="youtube">YouTube</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;