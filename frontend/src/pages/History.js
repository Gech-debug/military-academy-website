import React from 'react';

const History = () => {
  const milestones = [
    { year: "1934", event: "Foundation of the Academy at Holeta Genet by Emperor Haile Selassie I." },
    { year: "1950s", event: "Modernization of curriculum with international military standards." },
    { year: "Present", event: "The premier institution for producing Ethiopia's military leadership and elite officer corps." }
  ];

  const styles = {
    container: { padding: '80px 5%', color: '#FFF' },
    timeline: { borderLeft: '5px solid #FFD700', marginLeft: '20px', padding: '20px 0' },
    item: { marginBottom: '40px', position: 'relative', paddingLeft: '30px' },
    point: { 
      position: 'absolute', left: '-13px', top: '0', width: '20px', height: '20px', 
      background: '#FF0000', borderRadius: '50%', border: '3px solid #FFD700' 
    },
    year: { fontSize: '2rem', fontWeight: '900', color: '#90EE90', margin: '0' },
    text: { fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.5', marginTop: '10px' }
  };

  return (
    <div style={styles.container}>
      <h1 style={{fontSize: '3.5rem', fontWeight: '900', color: '#FFD700', marginBottom: '10px'}}>OUR LEGACY</h1>
      <p style={{fontSize: '1.2rem', fontWeight: '800', letterSpacing: '2px', color: '#90EE90'}}>DECADES OF VALOR AND HONOR</p>
      
      <div style={styles.timeline}>
        {milestones.map((m, i) => (
          <div key={i} style={styles.item}>
            <div style={styles.point}></div>
            <h2 style={styles.year}>{m.year}</h2>
            <p style={styles.text}>{m.event}</p>
          </div>
        ))}
      </div>

      <div style={{marginTop: '50px', padding: '30px', background: 'rgba(255, 0, 0, 0.1)', border: '1px dashed #FF0000'}}>
         <p style={{margin: 0, fontStyle: 'italic'}}>“To protect the sovereignty of the nation through discipline and knowledge.”</p>
      </div>
    </div>
  );
};

export default History;