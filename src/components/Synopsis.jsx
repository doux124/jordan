import React from 'react';
import { Link } from 'react-router-dom';

const Synopsis = () => {
  return (
    <div style={styles.container}>
      <p style={styles.paragraph}>
        Hi! I'm Jordan Low, a <u>biomedical engineering student</u> at NUS with a passion for research and 
        innovation. Learn more about my research or volunteer work using the "Academics" and "Hobbies" buttons 
        above or through the game below.
        <br />
        <br />
        My research experience spans multiple cutting-edge projects, including <u>inventing 
        a novel biomedical device</u> for minimally invasive annuloplasties, developing blood glucose 
        monitors, and improving brain-computer interface technologies. These innovations have led to 
        patents, publications, and recognition through awards like the Top Prize at the Global Youth 
        Science and Technology Bowl, a Gold Award at the Singapore Science and Engineering Fair, and 
        the prestigious Tan Kah Kee Young Inventor's Award.
        <br />
        <br />
        My academic foundation is rooted in a deep love for the sciences. As a graduate of NUSH, I 
        was the only student to earn Triple Distinction with Honours in Chemistry, Biology, and 
        Physics, and I've been honored with Gold Medals in competitions such as the International 
        Chemistry Tournament and the Singapore Chemistry Olympiad.
        <br />
        <br />
        I've also gained practical experience through <u>internships</u> at labs like NUS's E6 Nanofab and 
        NIE's Plasma Engineering Lab, as well as hands-on training in cardiothoracic and vascular 
        surgery at NUH. Beyond academics, I <u>actively volunteer</u> in nursing homes and hospices across Singapore, 
        and am the Overall In Charge for Project IMPAC, where we lead <u>overseas humanitarian relief</u> efforts  
        for underprivileged communities.
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
    fontSize: '20px',
    lineHeight: '1.6',
    color: 'white',           
    padding: '20px',         
    border: '2px solid #4CAF50',
    borderRadius: '30px',  
    marginBottom: '20px',
    textAlign: 'left',
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
