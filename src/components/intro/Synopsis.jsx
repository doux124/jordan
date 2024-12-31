import { Link } from 'react-router-dom';
import '../../standards/buttons.css';

const Synopsis = () => {
  return (
    <div style={styles.container}>
      <p style={styles.paragraph} className="text-base md:text-2xl">
        Hi! I'm Jordan Low, a <u>biomedical engineering student</u> at NUS with a passion for research and 
        innovation. Learn more about my research or volunteer work using the "Work & Research" and "Extracurriculars" buttons 
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

      <Link to='/game'>
        <button className="button-85 text-2xl">Enter Game</button>
      </Link>

      <div className="contact-section">
        <h2 className="contact-heading text-2xl md:text-4xl">Contact Information</h2>
        <p className="contact-details text-base md:text-xl">
          Feel free to reach out to me via email or follow me on social media:
        </p>
        <ul className="contact-list text-base md:text-xl">
          <li>Email: <a href="mailto:biev124@nus.edu.sg?subject=Contact%20from%20Website&body=Hi%20Jordan,">biev124@nus.edu.sg</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/jordan-low-jun-yi-69a150279" target="_blank" rel="noopener noreferrer">linkedin.com/in/jordan-low-69a150279</a></li>
          <li>Google Scholar: <a href="https://scholar.google.com/citations?hl=en&user=O6M8clAAAAAJ" target="_blank" rel="noopener noreferrer">https://scholar.google.com/citations?hl=en&user=O6M8clAAAAAJ</a></li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
  },
  paragraph: {
    lineHeight: '1.6',
    color: 'white',           
    padding: '20px',         
    border: '2px solid #4CAF50',
    borderRadius: '30px',  
    marginBottom: '20px',
    textAlign: 'left',
  },
};

export default Synopsis;
