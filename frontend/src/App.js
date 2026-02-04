import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { academyData } from './academyData';

// Import Pages
import Home from './pages/Home';
import History from './pages/History';
import Mission from './pages/Mission';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Objectives from './pages/Objectives';

export const API_URL = "https://ethiopian-military-academy.onrender.com/api";

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAll = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const styles = {
    pageWrapper: {
      background: '#f8f9fa', // Barkume Light Gray/White
      minHeight: '100vh',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      color: '#2c3e50'
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#004d40', // Barkume Deep Forest Green
      padding: '0 5%',
      height: scrolled ? '70px' : '85px',
      position: 'sticky',
      top: 0,
      zIndex: 9999,
      transition: '0.3s ease-in-out',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      borderBottom: '3px solid #d4af37' // Subtle Gold Edge
    },
    navLinks: { display: 'flex', gap: '30px', alignItems: 'center' },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      gap: '6px'
    },
    bar: { width: '28px', height: '3px', background: '#fff', borderRadius: '2px' }
  };

  return (
    <Router>
      <div style={styles.pageWrapper}>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@600;800&display=swap');

            body { margin: 0; background: #f8f9fa; overflow-x: hidden; }
            
            .nav-link { 
              color: #ffffff; 
              text-decoration: none; 
              font-family: 'Montserrat', sans-serif; 
              font-size: 0.9rem;
              letter-spacing: 0.5px;
              transition: 0.3s;
              font-weight: 600;
            }
            
            .nav-link:hover { color: #d4af37 !important; }

            /* Mobile Menu Setup */
            @media (max-width: 992px) {
              .desktop-nav { display: none !important; }
              .mobile-toggle { display: flex !important; }
              .nav-menu-mobile {
                display: ${mobileMenuOpen ? 'flex' : 'none'} !important;
                flex-direction: column;
                position: fixed;
                top: 70px; left: 0; width: 100%; height: 100vh;
                background: #00332c; /* Slightly darker green for menu */
                padding: 30px 0;
                z-index: 9998;
              }
              .nav-item-mobile { 
                padding: 18px 8%; 
                font-size: 1.1rem;
                border-bottom: 1px solid rgba(255,255,255,0.05);
              }
            }

            /* Ticker Styling */
            .ticker-container {
              background: #d4af37; 
              color: #00332c; 
              padding: 8px 0; 
              font-weight: 700;
              font-family: 'Inter', sans-serif;
              border-bottom: 1px solid rgba(0,0,0,0.1);
            }
          `}
        </style>

        <nav style={styles.navbar}>
          <Link to="/" style={{ color: '#FFF', textDecoration: 'none', fontWeight: '800', fontSize: '1.4rem', fontFamily: 'Montserrat' }} onClick={closeAll}>
            EMA <span style={{color: '#d4af37'}}>| HOLETA</span>
          </Link>

          <div className="mobile-toggle" style={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
          
          <div className={mobileMenuOpen ? "nav-menu-mobile" : "desktop-nav"} style={styles.navLinks}>
            <Link className="nav-link nav-item-mobile" to="/" onClick={closeAll}>HOME</Link>
            
            <div 
              style={{position: 'relative', cursor: 'pointer'}} 
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="nav-link nav-item-mobile">ABOUT EMA ▾</span>
              {dropdownOpen && (
                <div style={{
                  background: '#002b25', borderLeft: '4px solid #d4af37', 
                  display: 'flex', flexDirection: 'column', padding: '10px 20px'
                }}>
                  <Link to="/history" className="nav-link" style={{padding: '8px 0'}} onClick={closeAll}>HISTORY</Link>
                  <Link to="/mission" className="nav-link" style={{padding: '8px 0'}} onClick={closeAll}>MISSION</Link>
                  <Link to="/objectives" className="nav-link" style={{padding: '8px 0'}} onClick={closeAll}>OBJECTIVES</Link>
                </div>
              )}
            </div>

            <Link className="nav-link nav-item-mobile" to="/gallery" onClick={closeAll}>GALLERY</Link>
            <Link className="nav-link nav-item-mobile" to="/contact" onClick={closeAll}>CONTACT</Link>
          </div>
        </nav>

        <div className="ticker-container">
           <marquee scrollamount="6">
              {academyData.newsUpdates.map((n, i) => ` • ${n.toUpperCase()} • `)}
           </marquee>
        </div>

        <main style={{ padding: '20px 0' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/objectives" element={<Objectives />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer style={{ textAlign: 'center', padding: '60px 20px', background: '#002b25', color: '#FFF' }}>
          <div style={{ marginBottom: '15px', height: '2px', background: '#d4af37', width: '50px', margin: '0 auto 20px' }}></div>
          <p style={{ color: '#d4af37', letterSpacing: '3px', fontWeight: '700', fontSize: '0.8rem' }}>DISCIPLINE • VALOR • HONOR</p>
          <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Official Portal of the Ethiopian Military Academy</p>
          <small style={{ opacity: 0.6 }}>{academyData.location}</small>
        </footer>
      </div>
    </Router>
  );
};

export default App;