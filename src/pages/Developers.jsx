import React from 'react';
import { Link } from 'react-router-dom';

// Import images for the developers from the src/images folder
import lakshmiPhoto from '../images/lakshmi.png';
import harnithaPhoto from '../images/harnitha.png';
import yaswanthPhoto from '../images/yaswanth.png';
import shivaPhoto from '../images/shiva.png';
import manojPhoto from '../images/manoj.jpeg';

// Data array for the developers
const developersData = [
  { name: 'K.Yaswanth', RegNo: '21X51A3820', image: yaswanthPhoto },
  { name: 'M.Lakshmi Prasanna', RegNo: '21X51A3823', image: lakshmiPhoto },
  { name: 'N.Harnitha', RegNo: '21X51A3824', image: harnithaPhoto },
  { name: 'U.Shiva Raj Kumar', RegNo: '21X51A3839', image: shivaPhoto },
  { name: 'Ch.Manoj Reddy', RegNo: '22X55A3802', image: manojPhoto }
];

const Developers = () => {
  return (
    <div className="page-container developers-page">
      <header className="page-header">
        <h1>Developers</h1>
      </header>

      <section>
        <div className="developers-grid">
          {developersData.map((developer, index) => (
            <div className="developer-card" key={index}>
              <img src={developer.image} alt={developer.name} className="developer-photo" />
              <h3>{developer.name}</h3>
               <h2>{developer.RegNo}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Developers;