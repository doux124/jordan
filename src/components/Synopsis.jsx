import React from 'react';
import { Link } from 'react-router-dom';

const Synopsis = () => {
  return (
    <div style={styles.container}>
      <p style={styles.paragraph}>
        I am Jordan Low, a passionate researcher and innovator with a strong foundation in the sciences, 
        particularly in Chemistry, Biology, and Physics. I have garnered various prestigious awards, 
        including gold medals in international competitions such as the IChTo, SJBO, and SChO. My research 
        experience spans multiple cutting-edge projects, including minimally invasive annuloplasty using shape 
        memory materials, graphene-based biosensors, and brain-computer interface technologies. My drive for 
        innovation is complemented by internships at leading labs such as E6 Nanofab at NUS and NIE's Plasma 
        Engineering Lab.
      </p>
      <Link to='/achievements'>
        <button style={styles.button}>Enter Game</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    margin: 'auto',
    padding: '40px',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '25px',
    lineHeight: '1.6',
    color: 'white',           
    padding: '20px',         
    border: '2px solid #4CAF50',
    borderRadius: '30px',  
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '25px',
    cursor: 'pointer',
  },
};

export default Synopsis;
