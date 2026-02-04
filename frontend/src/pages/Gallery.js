import React from 'react';

const Gallery = () => {
  const images = [
    { id: 1, title: "Commencement Square", url: "https://via.placeholder.com/600x400/000/90EE90?text=HOLETA+SQUARE" },
    { id: 2, title: "Tactical Training", url: "https://via.placeholder.com/600x400/000/FF0000?text=TACTICAL+EXERCISE" },
    { id: 3, title: "Engineering Lab", url: "https://via.placeholder.com/600x400/000/FFD700?text=ENGINEERING+WING" },
    { id: 4, title: "Cadet Dormitories", url: "https://via.placeholder.com/600x400/000/FFF?text=CADET+HOUSING" },
  ];

  const styles = {
    container: { padding: '80px 5%', textAlign: 'center', background: '#111', minHeight: '100vh' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' },
    frame: {
      position: 'relative',
      border: '2px solid #333',
      overflow: 'hidden',
      transition: '0.3s',
      cursor: 'pointer',
      boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
    },
    label: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      background: 'rgba(144, 238, 144, 0.9)', // Light Green
      color: '#000',
      padding: '10px',
      fontWeight: '900',
      fontSize: '0.9rem',
      transform: 'translateY(100%)',
      transition: '0.3s'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{color: '#FFD700', fontSize: '3rem', fontWeight: '900', letterSpacing: '5px'}}>ACADEMY GALLERY</h1>
      <p style={{color: '#90EE90', fontWeight: '800'}}>VISUAL ARCHIVES | HOLETA GENET</p>

      <div style={styles.grid}>
        {images.map((img) => (
          <div 
            key={img.id} 
            style={styles.frame} 
            className="gallery-item"
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#90EE90';
                e.currentTarget.querySelector('.label').style.transform = 'translateY(0)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.querySelector('.label').style.transform = 'translateY(100%)';
            }}
          >
            <img src={img.url} alt={img.title} style={{width: '100%', display: 'block'}} />
            <div className="label" style={styles.label}>{img.title.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;