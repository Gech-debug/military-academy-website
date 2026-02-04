import React from 'react';

const History = () => {
  const milestones = [
    { year: "1934", event: "Founded by Emperor Haile Selassie I to modernize national defense." },
    { year: "1950s", event: "Expansion of academic and tactical training departments." },
    { year: "Modern Era", event: "Incorporating Cyber-warfare and modern logistics into the core curriculum." }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
      <div style={{ background: '#fff', padding: '50px', borderLeft: '12px solid #004d40', boxShadow: '10px 10px 0px #c5a059' }}>
        <h1 style={{ fontFamily: 'Oswald', fontSize: '3rem', color: '#004d40' }}>HISTORICAL ARCHIVE</h1>
        <div style={{ marginTop: '30px' }}>
          {milestones.map((m, i) => (
            <div key={i} style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#c5a059', margin: 0 }}>{m.year}</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{m.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;