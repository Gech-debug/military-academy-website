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

// Global API URL for your Contact Form
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
      background: 'linear-gradient(135deg, #90EE90 50%, #FF0000 50%)',
      minHeight: '100vh',
      backgroundAttachment: 'fixed',
      fontFamily: '"Arial Black", sans-serif',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#000',
      padding: '0 5%',
      height: scrolled ? '70px' : '90px',
      position: 'sticky',
      top: 0,
      zIndex: 9999,
      transition: '0.4s',
      borderBottom: '5px solid #FFD700'
    },
    navLinks: { display: 'flex', gap: '25px', alignItems: 'center' },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      gap: '5px'
    },
    bar: { width: '30px', height: '4px', background: '#90EE90' }
  };

  return (
    <Router>
      <div style={styles.pageWrapper}>
        <style>
          {`
            body { margin: 0; background: #000; overflow-x: hidden; }
            .nav-link:hover { color: #FFD700 !important; }
            
            @media (max-width: 992px) {
              .desktop-nav { display: none !important; }
              .mobile-toggle { display: flex !important; }
              .nav-menu-mobile {
                display: ${mobileMenuOpen ? 'flex' : 'none'} !important;
                flex-direction: column;
                position: fixed;
                top: 70px; left: 0; width: 100%; height: 100vh;
                background: rgba(0,0,0,0.95);
                padding: 40px 0;
                z-index: 9998;
              }
              .nav-item-mobile { 
                padding: 20px 10%; 
                font-size: 1.5rem;
                border-bottom: 1px solid #222; 
              }
            }
          `}
        </style>

        <nav style={styles.navbar}>
          <Link to="/" style={{ color: '#FFF', textDecoration: 'none', fontWeight: '900', fontSize: '1.2rem' }} onClick={closeAll}>
            EMA <span style={{color: '#FF0000'}}>| HOLETA</span>
          </Link>

          <div className="mobile-toggle" style={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
          
          <div className={mobileMenuOpen ? "nav-menu-mobile" : "desktop-nav"} style={styles.navLinks}>
            <Link className="nav-link nav-item-mobile" style={{color: '#90EE90', textDecoration: 'none'}} to="/" onClick={closeAll}>HOME</Link>
            
            <div 
              style={{position: 'relative', cursor: 'pointer'}} 
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="nav-link nav-item-mobile" style={{color: '#90EE90'}}>ABOUT EMA ▾</span>
              {dropdownOpen && (
                <div style={{
                  background: '#111', borderLeft: '5px solid #FFD700', paddingLeft: '10px', 
                  display: 'flex', flexDirection: 'column', marginTop: '10px'
                }}>
                  <Link to="/history" style={{color: '#FFF', padding: '10px 0', textDecoration: 'none'}} onClick={closeAll}>HISTORY</Link>
                  <Link to="/mission" style={{color: '#FFF', padding: '10px 0', textDecoration: 'none'}} onClick={closeAll}>MISSION</Link>
                  <Link to="/objectives" style={{color: '#FFF', padding: '10px 0', textDecoration: 'none'}} onClick={closeAll}>OBJECTIVES</Link>
                </div>
              )}
            </div>

            <Link className="nav-link nav-item-mobile" style={{color: '#90EE90', textDecoration: 'none'}} to="/gallery" onClick={closeAll}>GALLERY</Link>
            <Link className="nav-link nav-item-mobile" style={{color: '#90EE90', textDecoration: 'none'}} to="/contact" onClick={closeAll}>CONTACT</Link>
          </div>
        </nav>

        <div style={{ background: '#FFD700', padding: '10px 0', fontWeight: '900' }}>
           <marquee scrollamount="8">
              {academyData.newsUpdates.map((n, i) => `*** ${n} *** `)}
           </marquee>
        </div>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/objectives" element={<Objectives />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer style={{ textAlign: 'center', padding: '50px 20px', background: '#000', color: '#FFF' }}>
          <p style={{ color: '#FFD700', letterSpacing: '2px' }}>DISCIPLINE · VALOR · HONOR</p>
          <small>{academyData.location}</small>
        </footer>
      </div>
    </Router>
  );
};

export default App;