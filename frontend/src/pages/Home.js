import React, { useState, useEffect } from 'react';
import { academyData } from '../academyData'; // Importing the dynamic data

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count.toLocaleString()}</span>;
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = academyData.heroSlides;

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  const styles = {
    hero: { 
      height: '85vh', 
      background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9))', 
      color: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      borderBottom: '12px solid #FFD700',
      position: 'relative',
      overflow: 'hidden'
    },
    ctaButton: {
      marginTop: '40px',
      padding: '22px 55px',
      fontSize: '1.6rem',
      fontWeight: '900',
      color: '#000',
      background: '#90EE90',
      border: '4px solid #000',
      cursor: 'pointer',
      textTransform: 'uppercase',
      boxShadow: '8px 8px 0px #FF0000', // Hard Red Shadow
      animation: 'pulse 2s infinite',
      zIndex: 10,
      transition: '0.2s'
    },
    statsSection: { 
      display: 'flex', 
      justifyContent: 'space-around', 
      padding: '80px 5%', 
      background: '#000', 
      color: '#FFD700', 
      flexWrap: 'wrap',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
    },
    deptCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      color: '#FFF',
      padding: '40px 20px', 
      minWidth: '250px', 
      border: '2px solid rgba(255,255,255,0.2)',
      borderBottom: '10px solid #FFD700',
      fontWeight: '900', 
      fontSize: '1.3rem', 
      textTransform: 'uppercase',
      transition: '0.3s'
    }
  };

  return (
    <div>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes slideUp { 
            from { opacity: 0; transform: translateY(40px); } 
            to { opacity: 1; transform: translateY(0); } 
          }
          .animate-view { animation: slideUp 1s ease-out; }
          .dept-hover:hover { 
            background: #90EE90 !important; 
            color: #000 !important; 
            transform: translateY(-15px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.4);
          }
        `}
      </style>

      {/* DYNAMIC HERO SECTION */}
      <section style={styles.hero}>
        <div className="animate-view" key={currentSlide}>
          <h1 style={{fontSize: '2rem', letterSpacing: '12px', margin: 0, color: '#FFD700'}}>HOLETA GENET</h1>
          <span style={{
            color: '#FFF', fontSize: '7rem', fontWeight: '900', 
            display: 'block', textShadow: '8px 8px 0px #FF0000',
            lineHeight: '1'
          }}>
            {slides[currentSlide]}
          </span>
          <p style={{fontSize: '1.6rem', fontWeight: '800', marginTop: '10px'}}>ETHIOPIAN MILITARY ACADEMY</p>
        </div>
        
        <button 
           style={styles.ctaButton} 
           onClick={() => window.location.href='/contact'}
           className="cta-hover"
        >
          Join the Ranks
        </button>

        {/* Large Faint Background Text */}
        <div style={{
            position: 'absolute', bottom: '-5%', left: '0', 
            fontSize: '25rem', color: 'rgba(255,255,255,0.03)', 
            fontWeight: '900', pointerEvents: 'none', whiteSpace: 'nowrap'
        }}>ETHIOPIA</div>
      </section>

      {/* ANIMATED STATS (Now using academyData) */}
      <section style={styles.statsSection}>
        <div style={{textAlign: 'center', padding: '20px'}}>
            <h2 style={{fontSize: '5rem', color: '#90EE90', margin: 0}}>
                <Counter end={academyData.stats.years} duration={2000} />+
            </h2>
            <p style={{fontWeight: '900', letterSpacing: '3px', color: '#FFF'}}>YEARS OF HONOR</p>
        </div>
        <div style={{textAlign: 'center', padding: '20px'}}>
            <h2 style={{fontSize: '5rem', color: '#FF0000', margin: 0}}>
                <Counter end={academyData.stats.graduates} duration={2500} />+
            </h2>
            <p style={{fontWeight: '900', letterSpacing: '3px', color: '#FFF'}}>OFFICERS COMMISSIONED</p>
        </div>
        <div style={{textAlign: 'center', padding: '20px'}}>
            <h2 style={{fontSize: '5rem', color: '#FFD700', margin: 0}}>
                <Counter end={academyData.stats.departments} duration={1500} />
            </h2>
            <p style={{fontWeight: '900', letterSpacing: '3px', color: '#FFF'}}>ELITE DEPARTMENTS</p>
        </div>
      </section>

      {/* ATTRACTIVE DEPARTMENT GRID */}
      <div style={{ padding: '100px 5%', textAlign: 'center' }}>
          <h2 style={{fontSize: '3.5rem', fontWeight: '900', color: '#000', marginBottom: '60px', textDecoration: 'underline'}}>
              FIELDS OF STUDY
          </h2>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Engineering', 'Tactics', 'Leadership', 'Cyber-Defense', 'Logistics', 'Aviation'].map((dept, i) => (
                  <div key={i} style={styles.deptCard} className="dept-hover">
                      {dept}
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default Home;