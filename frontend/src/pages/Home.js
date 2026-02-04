import React, { useState, useEffect } from 'react';
import { academyData } from '../academyData';

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
      } else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count.toLocaleString()}</span>;
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        height: '75vh',
        background: 'linear-gradient(rgba(0,43,37,0.8), rgba(0,43,37,0.8)), url("/academy-bg.jpg") center/cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        borderBottom: '10px solid #c5a059'
      }}>
        <h1 style={{ fontSize: '4rem', fontFamily: 'Oswald', margin: 0 }}>ETHIOPIAN MILITARY ACADEMY</h1>
        <p style={{ fontSize: '1.5rem', letterSpacing: '5px', color: '#c5a059' }}>EST. 1934 | HOLETA GENET</p>
        <button onClick={() => window.location.href='/contact'} style={{
          marginTop: '30px', padding: '15px 40px', background: '#c5a059', 
          border: 'none', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase'
        }}>Join the Elite</button>
      </section>

      {/* Stats Section */}
      <section style={{
        display: 'flex', justifyContent: 'space-around', 
        padding: '60px 10%', background: '#00332c', color: '#fff', flexWrap: 'wrap'
      }}>
        <div style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '3.5rem', color: '#c5a059', margin: 0}}><Counter end={academyData.stats.years} duration={2000}/>+</h2>
          <p style={{fontWeight: 'bold', opacity: 0.8}}>YEARS OF LEGACY</p>
        </div>
        <div style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '3.5rem', color: '#c5a059', margin: 0}}><Counter end={academyData.stats.graduates} duration={2500}/>+</h2>
          <p style={{fontWeight: 'bold', opacity: 0.8}}>OFFICERS PRODUCED</p>
        </div>
      </section>

      {/* Departments Grid */}
      <div style={{ padding: '80px 5%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Oswald', fontSize: '2.5rem', marginBottom: '40px' }}>FIELDS OF EXCELLENCE</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {['Engineering', 'Tactics', 'Cyber-Defense', 'Logistics'].map(dept => (
            <div key={dept} style={{
              background: '#fff', padding: '40px', borderTop: '5px solid #004d40',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)', fontWeight: 'bold'
            }}>{dept.toUpperCase()}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;