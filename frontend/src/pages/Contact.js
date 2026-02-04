import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { academyData } from '../academyData';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // These variables now pull safely from your .env file
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID; 
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('TRANSMISSION SUCCESSFUL', result.text);
          setStatus('success');
      }, (error) => {
          console.error('TRANSMISSION FAILED', error);
          setStatus('error');
      });
  };

  const styles = {
    wrapper: { display: 'flex', flexWrap: 'wrap', gap: '40px', padding: '60px 5%', minHeight: '80vh' },
    infoSection: { 
      flex: 1, background: '#000', color: '#FFF', padding: '40px', 
      borderLeft: '15px solid #FF0000', boxShadow: '15px 15px 0px rgba(0,0,0,0.2)' 
    },
    formSection: { 
      flex: 1, background: 'rgba(0, 0, 0, 0.85)', padding: '40px', 
      border: '5px solid #000', backdropFilter: 'blur(10px)', color: '#FFF' 
    },
    input: { 
      width: '100%', padding: '15px', margin: '15px 0', boxSizing: 'border-box',
      background: '#fff', border: 'none', fontWeight: '900', fontSize: '1.1rem', color: '#000'
    },
    button: { 
      width: '100%', padding: '20px', background: '#90EE90', color: '#000', 
      fontWeight: '900', fontSize: '1.3rem', border: 'none', cursor: 'pointer',
      boxShadow: '8px 8px 0px #FF0000', transition: '0.2s'
    }
  };

  return (
    <div style={styles.wrapper}>
      <style>
        {`
          @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }
          .transmitting { animation: blink 0.5s infinite; color: #FFD700; font-weight: 900; }
          .error-msg { color: #FF0000; font-weight: 900; margin-top: 15px; border: 1px solid #FF0000; padding: 10px; background: rgba(255,0,0,0.1); }
        `}
      </style>

      {/* COMMAND INFO */}
      <div style={styles.infoSection}>
        <h1 style={{fontSize: '3rem', fontWeight: '900', color: '#FFD700'}}>COMMUNICATIONS</h1>
        <p style={{fontSize: '1.2rem', fontWeight: '800'}}>RECIPIENT: COMMANDANT</p>
        <hr style={{borderColor: '#FF0000', margin: '30px 0'}} />
        <p style={{fontSize: '1.4rem', fontWeight: '900'}}>📍 {academyData.location}</p>
        <p>✉️ OFFICIAL: get9sis@gmail.com</p>
        <div style={{marginTop: '40px', opacity: 0.6, fontSize: '0.9rem', border: '1px solid #90EE90', padding: '15px'}}>
            <p>STATUS: ENCRYPTED CHANNEL ACTIVE</p>
            <p>LOCATION: HOLETA GENET HQ</p>
        </div>
      </div>

      {/* LIVE FORM */}
      <div style={styles.formSection}>
        {status === 'success' ? (
          <div style={{textAlign: 'center', padding: '60px 20px', border: '2px dashed #90EE90'}}>
            <h2 style={{color: '#90EE90', fontSize: '2.5rem'}}>SIGNAL SENT</h2>
            <p style={{fontWeight: '800'}}>THE TRANSMISSION HAS BEEN SUCCESSFULLY ROUTED TO THE COMMANDANT AT GET9SIS@GMAIL.COM.</p>
            <button style={{...styles.button, marginTop: '30px'}} onClick={() => setStatus('idle')}>NEW SIGNAL</button>
          </div>
        ) : (
          <>
            <h2 style={{color: '#90EE90', fontWeight: '900'}}>START TRANSMISSION</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input style={styles.input} type="text" name="user_name" placeholder="FULL NAME / RANK" required />
              <input style={styles.input} type="email" name="user_email" placeholder="YOUR EMAIL ADDRESS" required />
              <textarea style={{...styles.input, height: '150px'}} name="message" placeholder="ENCODE MESSAGE..." required></textarea>
              
              <button style={styles.button} type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? <span className="transmitting">ENCRYPTING & SENDING...</span> : "SEND SIGNAL"}
              </button>
              
              {status === 'error' && (
                <div className="error-msg">
                  ⚠️ SIGNAL INTERRUPTED: UNABLE TO CONNECT TO COMMAND SERVER.
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;