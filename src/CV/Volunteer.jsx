import IMPAC from "./IMPAC";

const Volunteer = () => {
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
        <a style={styles.navLink} onClick={() => scrollToSection('impac')}>Project IMPAC</a>
      </nav>
      <main className="bg-white" style={styles.sectionContainer}>
        <div id="impac">
          <IMPAC />
        </div>
      </main>
    </div>
  );
};

export default Volunteer;
