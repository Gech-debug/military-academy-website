import React from 'react';

const Gallery = () => {
  const images = [
    { id: 1, title: "Commencement Square", url: "https://via.placeholder.com/600x400/00332c/c5a059?text=HOLETA+SQUARE" },
    { id: 2, title: "Tactical Training", url: "https://via.placeholder.com/600x400/00332c/c5a059?text=TACTICAL+EXERCISE" },
    { id: 3, title: "Engineering Lab", url: "https://via.placeholder.com/600x400/00332c/c5a059?text=ENGINEERING+WING" },
    { id: 4, title: "Cadet Dormitories", url: "https://via.placeholder.com/600x400/00332c/c5a059?text=CADET+HOUSING" },
  ];

  const styles = {
    container: { 
      padding: '80px 5%', 
      textAlign: 'center', 
      background: '#f4f1ea', // Desert Sand background
      minHeight: '100vh' 
    },
    grid: { 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '30px', 
      marginTop: '50px' 
    },
    frame: {
      position: 'relative',
      border: '1px solid #ddd',
      background: '#fff',
      padding: '12px',
      overflow: 'hidden',
      transition: '0.4s ease',
      cursor: 'pointer',
      boxShadow: '0 8px 20px rgba(0,0,0,0.05)'
    },
    label: {
      position: 'absolute',
      bottom: '12px',
      left: '12px',
      right: '12px',
      background: 'rgba(0, 77, 64, 0.9)', // Barkume Green
      color: '#c5a059', // Gold text
      padding: '15px',
      fontWeight: '700',
      fontFamily: "'Oswald', sans-serif",
      fontSize: '0.9rem',
      transform: 'translateY(110%)',
      transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{color: '#004d40', fontFamily: "'Oswald', sans-serif", fontSize: '3rem', fontWeight: '700', letterSpacing: '4px'}}>VISUAL ARCHIVES</h1>
      <p style={{color: '#8b7355', fontWeight: '700', letterSpacing: '2px'}}>OFFICIAL PHOTOGRAPHY | HOLETA GENET</p>

      <div style={styles.grid}>
        {images.map((img) => (
          <div 
            key={img.id} 
            style={styles.frame} 
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#c5a059';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.querySelector('.gallery-label').style.transform = 'translateY(0)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#ddd';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.querySelector('.gallery-label').style.transform = 'translateY(110%)';
            }}
          >
            <img 
                src={img.url} 
                alt={img.title} 
                style={{width: '100%', display: 'block', filter: 'sepia(20%)'}} 
            />
            <div className="gallery-label" style={styles.label}>{img.title.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;