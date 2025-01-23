import { Link } from 'react-router-dom';
import '../../standards/buttons.css';

const Synopsis = () => {
  return (
    <div style={styles.container} className='bg-[#fcf3e0] dark:bg-black'>
      <p style={styles.paragraph} className="text-base md:text-2xl text-black dark:text-white">
        Hi! I'm Jordan Low, a student at NUS with a passion for research and 
        innovation. Learn more about my research or volunteer work using the "Work & Research" and "Extracurriculars" buttons 
        above or through the game below.
        {/* <br />
        <br />
        My research experience spans multiple cutting-edge projects, including <u>inventing 
        a novel biomedical device</u> for minimally invasive annuloplasties, developing blood glucose 
        monitors, and improving brain-computer interface technologies. These innovations have led to 
        patents, publications, and recognition through awards like the Top Prize at the Global Youth 
        Science and Technology Bowl, a Gold Award at the Singapore Science and Engineering Fair, and 
        the prestigious Tan Kah Kee Young Inventor's Award. */}
        <br />
        <br />
        My academic foundation is rooted in a deep love for the sciences. As a graduate of NUSH, I 
        was the only student to earn Triple Distinction with Honours in Chemistry, Biology, and 
        Physics.
        {/* <br />
        <br />
        I've also gained practical experience through <u>internships</u> at labs like NUS's E6 Nanofab and 
        NIE's Plasma Engineering Lab, as well as hands-on training in cardiothoracic and vascular 
        surgery at NUH. Beyond academics, I <u>actively volunteer</u> in nursing homes and hospices across Singapore, 
        and am the Overall In Charge for Project IMPAC, where we lead <u>overseas humanitarian relief</u> efforts  
        for underprivileged communities. */}
      </p>

      <Link to='/game'>
        <button className="button-85 text-2xl hover:scale-105 transition-transform">Enter Game</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
  },
  paragraph: {
    lineHeight: '1.6',  
    padding: '20px',         
    border: '2px solid #4CAF50',
    borderRadius: '30px',  
    marginBottom: '20px',
    textAlign: 'left',
  },
};

export default Synopsis;
