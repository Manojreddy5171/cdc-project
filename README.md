Career Development Cell (CDC) Web Application

**Live Demo:** https://manojreddy5171.github.io/cdc-project/

This project is a full-stack web application built for a college's Career Development Cell (CDC). The platform provides students with a user-friendly and responsive interface to access career resources, placements, achievements, and workshop updates. It also includes a secure admin dashboard for authorized users to manage all website content dynamically.

Developed during a 24-hour ReactJS Hackathon, with backend features added later to enable dynamic functionality.

🔑 **Key Features**
Public-Facing Pages

Home: Welcome page with a clean design and team member profiles.

About Us: CDC’s mission, vision, and services.

Internships, Placements, Achievements, Workshops: Dynamic pages fetching real-time data.

Contact Us: Contact form with embedded map.

Developers: Interactive showcase of the project team.

Admin Dashboard

Secure login with JWT authentication.

CRUD operations (Create, Read, Update, Delete) for all public sections.

Robust role-based access for administrators.

**🛠️ Tech Stack**

Frontend
  React.js
  React Router
  Axios
  React Icons

Backend
  Node.js & Express.js
  MongoDB & Mongoose
  JWT & bcrypt.js

Deployment
  GitHub Pages (Frontend)
  Render (Backend)
  MongoDB Atlas (Cloud Database)



**Getting Started (Local Development)**

Clone the Repositories

# Frontend
git clone https://github.com/Manojreddy5171/cdc-project.git  

# Backend
git clone https://github.com/Manojreddy5171/cdc-backend.git  


Install Dependencies

cd cdc-project && npm install  
cd ../cdc-backend && npm install  


Set Up Environment Variables

In cdc-project/.env:

REACT_APP_API_URL=http://localhost:5000


In cdc-backend/.env:

MONGODB_URI=mongodb://localhost:27017/career_development_cell
JWT_SECRET=your_jwt_secret_key


Run the Servers

# Start MongoDB
mongod  

# Start backend
cd cdc-backend && node server.js  

# Start frontend
cd cdc-project && npm start  


Visit http://localhost:3000
 in your browser.

**Deployment**

Frontend: Deployed on GitHub Pages using npm run deploy.

Backend: Deployed on Render with environment variables.

Database: Hosted on MongoDB Atlas.

**Authors**

Ch. Manoj Reddy – Lead Developer

M. Lakshmi Prasanna – Frontend Developer

N. Harnitha – Backend Developer & Database Architect

K. Yaswanth – Frontend Developer & API Integration

U. Shiva Raj Kumar – Systems Architect & Security Specialist
