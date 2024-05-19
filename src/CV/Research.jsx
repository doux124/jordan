import Annuloplasty from './Annuloplasty';
import Graphene from './Graphene';
import EEG from './EEG';
import Awards from './Awards';

const Research = () => {
  const styles = {
    navbar: {
      position: 'fixed',
      top: '0',
      width: '100%',
      backgroundColor: '#333',
      padding: '10px',
      textAlign: 'center',
      zIndex: '1000',
    },
    navLink: {
      margin: '0 15px',
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      cursor: 'pointer',
    },
    sectionContainer: {
      marginTop: '40px',
    },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <a style={styles.navLink} onClick={() => scrollToSection('annuloplasty')}>Annuloplasty</a>
        <a style={styles.navLink} onClick={() => scrollToSection('graphene')}>Graphene</a>
        <a style={styles.navLink} onClick={() => scrollToSection('eeg')}>EEG</a>
        <a style={styles.navLink} onClick={() => scrollToSection('awards')}>Awards</a>
      </nav>
      <main className="bg-white" style={styles.sectionContainer}>
        <div id="annuloplasty">
          <Annuloplasty />
        </div>
        <div id="graphene">
          <Graphene />
        </div>
        <div id="eeg">
          <EEG />
        </div>
        <div id="awards">
          <Awards />
        </div>
      </main>
    </div>
  );
};

export default Research;
