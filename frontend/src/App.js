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
      background: '#f4f1ea', // Professional Desert Sand
      minHeight: '100vh',
      fontFamily: "'Inter', sans-serif",
      color: '#2b302a'
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#004d40', // Barkume Deep Green
      padding: '0 5%',
      height: scrolled ? '70px' : '90px',
      position: 'sticky',
      top: 0,
      zIndex: 9999,
      transition: '0.4s',
      borderBottom: '4px solid #c5a059' // Matte Gold
    }
  };

  return (
    <Router>
      <div style={styles.pageWrapper}>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Oswald:wght@500;700&display=swap');
            body { margin: 0; background: #f4f1ea; }
            .nav-link { 
              color: #f4f1ea; 
              text-decoration: none; 
              font-family: 'Oswald', sans-serif; 
              text-transform: uppercase; 
              letter-spacing: 1.5px;
              font-size: 0.95rem;
              transition: 0.3s;
            }
            .nav-link:hover { color: #c5a059 !important; }
            
            @media (max-width: 992px) {
              .desktop-nav { display: none !important; }
              .mobile-toggle { display: flex !important; }
              .nav-menu-mobile {
                display: ${mobileMenuOpen ? 'flex' : 'none'} !important;
                flex-direction: column;
                position: fixed;
                top: 70px; left: 0; width: 100%; height: 100vh;
                background: #00332c;
                padding: 40px 0;
                z-index: 9998;
              }
              .nav-item-mobile { padding: 20px 10%; border-bottom: 1px solid rgba(255,255,255,0.1); }
            }
          `}
        </style>

        <nav style={styles.navbar}>
          <Link to="/" style={{ color: '#FFF', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Oswald' }} onClick={closeAll}>
            EMA <span style={{color: '#c5a059'}}>| HOLETA</span>
          </Link>

          <div className="mobile-toggle" style={{display:'none', flexDirection:'column', cursor:'pointer', gap:'5px'}} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div style={{width:'30px', height:'3px', background:'#fff'}}></div>
            <div style={{width:'30px', height:'3px', background:'#fff'}}></div>
            <div style={{width:'30px', height:'3px', background:'#fff'}}></div>
          </div>
          
          <div className={mobileMenuOpen ? "nav-menu-mobile" : "desktop-nav"} style={{display:'flex', gap:'30px'}}>
            <Link className="nav-link nav-item-mobile" to="/" onClick={closeAll}>Home</Link>
            <Link className="nav-link nav-item-mobile" to="/history" onClick={closeAll}>History</Link>
            <Link className="nav-link nav-item-mobile" to="/mission" onClick={closeAll}>Mission</Link>
            <Link className="nav-link nav-item-mobile" to="/gallery" onClick={closeAll}>Gallery</Link>
            <Link className="nav-link nav-item-mobile" to="/contact" onClick={closeAll}>Contact</Link>
          </div>
        </nav>

        <main><Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes></main>

        <footer style={{ textAlign: 'center', padding: '60px 20px', background: '#002b25', color: '#FFF' }}>
          <p style={{ color: '#c5a059', letterSpacing: '3px', fontWeight: 'bold' }}>DISCIPLINE • VALOR • HONOR</p>
          <small>{academyData.location}</small>
        </footer>
      </div>
    </Router>
  );
};

export default App;