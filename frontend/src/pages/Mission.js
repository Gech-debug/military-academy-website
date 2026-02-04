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
      color: '#000',
      fontSize: '3.5rem',
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      marginBottom: '10px',
      textShadow: '2px 2px 0px #FFD700'
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
      background: 'rgba(0, 0, 0, 0.75)', // Dark transparent for readability
      color: '#FFF',
      border: '5px solid #000',
      boxShadow: '12px 12px 0px #FF0000', // Hard Red shadow
      textAlign: 'left'
    },
    title: { 
      fontSize: '2rem', 
      marginBottom: '20px', 
      textTransform: 'uppercase', 
      fontWeight: '900',
      color: '#90EE90', // Light Green Title
      borderBottom: '3px solid #FFD700'
    },
    text: { 
      fontSize: '1.2rem', 
      fontWeight: '800', 
      lineHeight: '1.5',
      color: '#FFF'
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      fontSize: '1.1rem',
      fontWeight: '900'
    },
    listItem: {
      marginBottom: '10px',
      paddingLeft: '15px',
      borderLeft: '5px solid #FF0000'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>COMMAND PURPOSE</h1>
      <p style={{ color: '#000', fontSize: '1.3rem', fontWeight: '900', textTransform: 'uppercase' }}>
        The Foundation of National Sovereignty
      </p>

      <div style={styles.grid}>
        {/* VISION CARD */}
        <div style={styles.card}>
          <h2 style={styles.title}>🔭 VISION</h2>
          <p style={styles.text}>
            TO BE A PREMIER GLOBAL CENTER OF MILITARY EXCELLENCE, PRODUCING LEADERS 
            WHO ARE TECHNOLOGICALLY SUPERIOR AND ETHICALLY UNBREAKABLE.
          </p>
        </div>

        {/* MISSION CARD */}
        <div style={styles.card}>
          <h2 style={styles.title}>🎯 MISSION</h2>
          <p style={styles.text}>
            TO TRAIN OFFICER CADETS IN ADVANCED MILITARY SCIENCE, ENSURING 
            ABSOLUTE LOYALTY TO THE CONSTITUTION AND UNMATCHED COMBAT READINESS.
          </p>
        </div>

        {/* CORE VALUES CARD */}
        <div style={styles.card}>
          <h2 style={styles.title}>⚔️ VALUES</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>⭐ DISCIPLINE: UNYIELDING ORDER.</li>
            <li style={styles.listItem}>⭐ VALOR: COURAGE UNDER FIRE.</li>
            <li style={styles.listItem}>⭐ HONOR: INTEGRITY IN ACTION.</li>
            <li style={styles.listItem}>⭐ LOYALTY: NATION ABOVE SELF.</li>
          </ul>
        </div>
      </div>

      {/* STRATEGIC OBJECTIVES */}
      <div style={{ 
        marginTop: '60px', 
        textAlign: 'left', 
        background: 'rgba(144, 238, 144, 0.8)', // Semi-transparent Light Green
        padding: '40px', 
        border: '5px solid #000',
        color: '#000'
      }}>
        <h2 style={{ fontWeight: '900', fontSize: '2rem', marginBottom: '20px' }}>STRATEGIC OBJECTIVES</h2>
        <p style={{ fontWeight: '900', fontSize: '1.1rem' }}>1. CONTINUOUS MODERNIZATION OF DEFENSE DOCTRINE.</p>
        <p style={{ fontWeight: '900', fontSize: '1.1rem' }}>2. CULTIVATION OF HIGH-LEVEL STRATEGIC COMMANDERS.</p>
        <p style={{ fontWeight: '900', fontSize: '1.1rem' }}>3. REGIONAL LEADERSHIP IN PEACEKEEPING OPERATIONS.</p>
      </div>
    </div>
  );
};

export default Mission;