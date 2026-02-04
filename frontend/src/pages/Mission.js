import React from 'react';

const Mission = () => {
  const styles = {
    container: {
      padding: '60px 5%',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    },
    header: {
      color: '#004d40', // Barkume Green
      fontSize: '3rem',
      fontFamily: "'Oswald', sans-serif",
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '10px'
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      marginTop: '50px',
      justifyContent: 'center'
    },
    card: {
      flex: '1',
      minWidth: '320px',
      padding: '40px',
      background: '#ffffff', 
      color: '#2b302a',
      borderTop: '8px solid #004d40', // Green Top-Bar
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)', 
      textAlign: 'left',
      borderRight: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
      borderLeft: '1px solid #ddd'
    },
    title: { 
      fontSize: '1.8rem', 
      marginBottom: '20px', 
      textTransform: 'uppercase', 
      fontFamily: "'Oswald', sans-serif",
      color: '#004d40', 
      borderBottom: '2px solid #c5a059', // Gold accent line
      display: 'inline-block',
      paddingBottom: '5px'
    },
    text: { 
      fontSize: '1.1rem', 
      lineHeight: '1.7',
      color: '#444'
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      fontSize: '1rem',
    },
    listItem: {
      marginBottom: '15px',
      paddingLeft: '15px',
      borderLeft: '4px solid #c5a059', // Gold markers
      fontWeight: '700',
      color: '#004d40'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>COMMAND PURPOSE</h1>
      <p style={{ color: '#666', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '3px' }}>
        The Foundation of National Sovereignty
      </p>

      <div style={styles.grid}>
        {/* VISION CARD */}
        <div style={styles.card}>
          <h2 style={styles.title}>Vision</h2>
          <p style={styles.text}>
            To be a premier global center of military excellence, producing leaders 
            who are technologically superior and ethically unbreakable.
          </p>
        </div>

        {/* MISSION CARD */}
        <div style={styles.card}>
          <h2 style={styles.title}>Mission</h2>
          <p style={styles.text}>
            To train officer cadets in advanced military science, ensuring 
            absolute loyalty to the constitution and unmatched combat readiness.
          </p>
        </div>

        {/* CORE VALUES CARD */}
        <div style={styles.card}>
          <h2 style={styles.title}>Values</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>DISCIPLINE: Unyielding Order.</li>
            <li style={styles.listItem}>VALOR: Courage Under Fire.</li>
            <li style={styles.listItem}>HONOR: Integrity in Action.</li>
            <li style={styles.listItem}>LOYALTY: Nation Above Self.</li>
          </ul>
        </div>
      </div>

      {/* STRATEGIC OBJECTIVES */}
      <div style={{ 
        marginTop: '60px', 
        textAlign: 'left', 
        background: '#004d40', 
        padding: '50px', 
        borderLeft: '15px solid #c5a059', // Strong Gold accent
        color: '#fff',
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.2rem', marginBottom: '30px', color: '#c5a059' }}>STRATEGIC OBJECTIVES</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <p style={{ fontWeight: '600', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>1. Modernization of Defense Doctrine.</p>
            <p style={{ fontWeight: '600', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>2. Cultivation of Strategic Commanders.</p>
            <p style={{ fontWeight: '600', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>3. Regional Peacekeeping Leadership.</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;