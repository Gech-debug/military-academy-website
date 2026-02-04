import React from 'react';

const Objectives = () => {
  const objectives = [
    "ELITE COMMANDER CULTIVATION",
    "ADVANCED TECHNOLOGICAL WARFARE TRAINING",
    "NATIONAL DEFENSE STRATEGY INNOVATION",
    "ETHICAL LEADERSHIP AND DISCIPLINE",
    "PHYSICAL AND PSYCHOLOGICAL SUPREMACY"
  ];

  return (
    <div style={{ padding: '60px 5%', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#000', textShadow: '2px 2px #FF0000' }}>CORE OBJECTIVES</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
        {objectives.map((obj, i) => (
          <div key={i} style={{ 
            background: '#000', 
            color: '#90EE90', 
            padding: '25px', 
            fontSize: '1.5rem', 
            fontWeight: '900',
            borderLeft: '15px solid #FF0000', // Bold Red stripe on left
            textAlign: 'left',
            boxShadow: '5px 5px 15px rgba(0,0,0,0.5)'
          }}>
            {i + 1}. {obj}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;