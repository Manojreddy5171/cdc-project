import React from 'react';

// Student achievement data array
const achievementsData = [
  { regNo: '1', name: 'A.HEMANTH KUMAR', achievements: 'NATIONAL LEVEL INTER ENGINEERING SPORTS MEET TABLE TENNIS UNIVERSITY', prizes: 'Runner' },
  { regNo: '24', name: 'G.SAI GUNA VARSHETHA', achievements: 'NATIONAL LEVEL INTER ENGINEERING SPORTS MEET TABLE TENNIS UNIVERSITY', prizes: 'Runner' },
  { regNo: '78', name: 'P.VENKATESHWARLU', achievements: '6TH A.P JUNIOR DISTRICT ATHLETICS CHAMPIONSHIP - 2019(1500MTRS)', prizes: 'II - prize' },
  { regNo: '60', name: 'L.NAGAMANI SWATHI', achievements: 'SYMPOSIUM - Artificial Intelligence for Cognitive Radio', prizes: 'Runner' },
  { regNo: '63', name: 'M.NIKITHA', achievements: 'SYMPOSIUM - Artificial Intelligence for Cognitive Radio', prizes: 'Runner' },
  { regNo: '05', name: 'ATTHAR AYESHA', achievements: 'Bio Informatics', prizes: 'Second Prize' },
  { regNo: '28', name: 'KAIPA PRATHYUSHA', achievements: 'Machine Learning in Digital Marketing', prizes: 'First Prize' },
  { regNo: '10', name: 'B.SUNAYANA', achievements: 'Blue Eyes Technology', prizes: 'Third Prize' },
  { regNo: '76', name: 'GAJJULA HARSHAVARDHAN', achievements: 'Poster Presentation', prizes: 'Third Prize' },
  { regNo: 'C3', name: 'SUTRAVE NIKHITHA', achievements: 'Poster Presentation', prizes: 'Second Prize' },
  { regNo: '10', name: 'B.SUNAYANA', achievements: 'Poster Presentation', prizes: 'First Prize' },
  { regNo: '62', name: 'SINGIREDDY ANUSHA', achievements: 'Technical Quiz', prizes: 'Second Prize' },
  { regNo: '44', name: 'NICHINAMETLA SHOBHA RANI', achievements: 'Technical Quiz', prizes: 'Third Prize' },
  { regNo: '10', name: 'SUNAYANA BOGGARAPU', achievements: 'Technical Quiz', prizes: 'First Prize' },
  { regNo: 'C3', name: 'NIKHITHA SUTRAVE', achievements: 'Singing', prizes: 'Second Prize' },
  { regNo: '33', name: 'POOJITHA MADAKASIRA', achievements: 'Singing', prizes: 'Third Prize' },
  { regNo: '91', name: 'SHAIK AYESHA', achievements: 'Singing', prizes: 'First Prize' },
];

const StudentAchievements = () => {
  return (
    <div className="page-container student-achievements-page">
      <header className="page-header">
        <h1>Student achievements</h1>
      </header>
      <div className="table-wrapper">
        <table className="placements-table">
          <thead>
            <tr>
              <th>Reg.no</th>
              <th>Name</th>
              <th>Achievements</th>
              <th>Prizes</th>
            </tr>
          </thead>
          <tbody>
            {achievementsData.map((student, index) => (
              <tr key={index}>
                <td>{student.regNo}</td>
                <td>{student.name}</td>
                <td>{student.achievements}</td>
                <td>{student.prizes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAchievements;