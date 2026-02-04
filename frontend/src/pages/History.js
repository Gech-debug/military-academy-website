import React from 'react';

const History = () => {
  const styles = {
    container: {
      padding: '60px 5%',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    mainTitle: {
      textAlign: 'center',
      fontSize: '4rem',
      fontWeight: '900',
      color: '#000',
      textTransform: 'uppercase',
      textShadow: '3px 3px 0px #FF0000',
      marginBottom: '50px'
    },
    timelineWrapper: {
      position: 'relative',
      borderLeft: '10px solid #000', // The timeline central line
      paddingLeft: '40px',
      marginLeft: '20px'
    },
    eraBox: {
      position: 'relative',
      marginBottom: '60px',
      background: 'rgba(0, 0, 0, 0.85)', // High contrast dark box
      padding: '30px',
      border: '4px solid #FFD700', // Gold border for eras
      boxShadow: '10px 10px 0px #FF0000', // Red hard shadow
      color: '#FFF'
    },
    year: {
      fontSize: '2.5rem',
      fontWeight: '900',
      color: '#90EE90', // Light Green Year
      margin: '0 0 10px 0',
      display: 'block'
    },
    eventTitle: {
      fontSize: '1.5rem',
      fontWeight: '900',
      textTransform: 'uppercase',
      marginBottom: '10px',
      color: '#FFD700'
    },
    eventDescription: {
      fontSize: '1.1rem',
      fontWeight: '800',
      lineHeight: '1.4'
    },
    dot: {
      position: 'absolute',
      left: '-60px',
      top: '20px',
      width: '30px',
      height: '30px',
      background: '#FF0000',
      border: '5px solid #000',
      borderRadius: '50%'
    }
  };

  const eras = [
    { year: "1950s", title: "Founding Era", desc: "ESTABLISHMENT OF THE ELITE MILITARY TRAINING CENTER TO SAFEGUARD THE NATION'S SOVEREIGNTY." },
    { year: "1970s", title: "Modernization", desc: "EXPANSION OF THE ACADEMIC CURRICULUM TO INCLUDE ENGINEERING AND ADVANCED TACTICS." },
    { year: "2000s", title: "Regional Leadership", desc: "RECOGNITION AS A CENTER OF EXCELLENCE FOR AFRICAN PEACEKEEPING OPERATIONS." },
    { year: "2026", title: "Future Command", desc: "INTEGRATING ARTIFICIAL INTELLIGENCE AND CYBER-DEFENSE INTO THE OFFICER CADET DOCTRINE." }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>LEGACY OF VALOR</h1>
      
      <div style={styles.timelineWrapper}>
        {eras.map((era, index) => (
          <div key={index} style={styles.eraBox}>
            <div style={styles.dot}></div>
            <span style={styles.year}>{era.year}</span>
            <h3 style={styles.eventTitle}>{era.title}</h3>
            <p style={styles.eventDescription}>{era.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;