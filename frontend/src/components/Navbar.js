import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#2d5a27', padding: '10px 5%', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 10px rgba(0,0,0,0.3)' },
    logo: { color: '#FFD700', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' },
    navLinks: { display: 'flex', gap: '20px', alignItems: 'center' },
    link: { color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem', transition: '0.3s' },
    dropdownWrapper: { position: 'relative', cursor: 'pointer' },
    dropdownMenu: {
      position: 'absolute', top: '100%', left: 0, background: '#f9f9f9', minWidth: '160px', 
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)', display: isHovered ? 'block' : 'none', padding: '10px 0', borderRadius: '4px'
    },
    dropdownItem: { padding: '10px 20px', display: 'block', color: '#333', textDecoration: 'none', fontSize: '0.85rem', borderBottom: '1px solid #eee' }
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>ETHIOPIAN MILITARY ACADEMY</Link>
      <div style={styles.navLinks}>
        <Link style={styles.link} to="/">HOME</Link>
        
        <div 
          style={styles.dropdownWrapper} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <span style={styles.link}>ABOUT US ▾</span>
          <div style={styles.dropdownMenu}>
            <Link style={styles.dropdownItem} to="/history">Our History</Link>
            <Link style={styles.dropdownItem} to="/mission">Mission & Vision</Link>
            <Link style={styles.dropdownItem} to="/objectives">Core Objectives</Link>
          </div>
        </div>

        <Link style={styles.link} to="/gallery">GALLERY</Link>
        <Link style={styles.link} to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;