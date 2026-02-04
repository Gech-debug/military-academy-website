import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    { title: "TACTICAL DRILLS", url: "https://images.unsplash.com/photo-1590401419401-08149861e687?q=80&w=800" },
    { title: "GRADUATION PARADE", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800" },
    { title: "ENGINEERING LAB", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" },
    { title: "PHYSICAL TRAINING", url: "https://images.unsplash.com/photo-1533561052604-c3deb6d8ea64?q=80&w=800" },
    { title: "HONOR GUARD", url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800" },
    { title: "HOLETA CAMPUS", url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800" }
  ];

  const styles = {
    container: { padding: '60px 5%', textAlign: 'center' },
    header: { fontSize: '4rem', fontWeight: '900', color: '#000', textShadow: '3px 3px #FF0000', marginBottom: '40px' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px'
    },
    imgCard: {
      background: '#000',
      padding: '10px',
      border: '5px solid #000',
      boxShadow: '10px 10px 0px #FFD700',
      cursor: 'zoom-in',
      transition: '0.3s'
    },
    image: { width: '100%', height: '250px', objectFit: 'cover' },
    label: { color: '#90EE90', fontWeight: '900', padding: '15px 0', fontSize: '1.2rem' },
    
    // Lightbox Overlay Styles
    overlay: {
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.95)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      cursor: 'zoom-out'
    },
    fullImg: {
      maxWidth: '90%',
      maxHeight: '70%',
      border: '10px solid #FFD700',
      boxShadow: '0 0 50px rgba(144, 238, 144, 0.5)'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>ACADEMY GALLERY</h1>
      
      <div style={styles.grid}>
        {photos.map((p, i) => (
          <div key={i} style={styles.imgCard} onClick={() => setSelectedImg(p)}>
            <img src={p.url} alt={p.title} style={styles.image} />
            <div style={styles.label}>{p.title}</div>
          </div>
        ))}
      </div>

      {/* Lightbox Pop-up */}
      {selectedImg && (
        <div style={styles.overlay} onClick={() => setSelectedImg(null)}>
          <span style={{color: '#FFF', fontSize: '2rem', position: 'absolute', top: '20px', right: '40px', fontWeight: '900'}}>✕ CLOSE</span>
          <img src={selectedImg.url} alt="Expanded View" style={styles.fullImg} />
          <h2 style={{color: '#90EE90', marginTop: '30px', fontSize: '2.5rem'}}>{selectedImg.title}</h2>
          <p style={{color: '#FFD700', letterSpacing: '3px'}}>ETHIOPIAN MILITARY ACADEMY | HOLETA GENET</p>
        </div>
      )}

      <style>
        {`.imgCard:hover { transform: translateY(-10px); boxShadow: 15px 15px 0px #FF0000; }`}
      </style>
    </div>
  );
};

export default Gallery;