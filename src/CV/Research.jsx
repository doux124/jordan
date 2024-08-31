import Annuloplasty from './Annuloplasty';
import Graphene from './Graphene';
import EEG from './EEG';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

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
    section: {
      opacity: 0.5,
      minHeight: '100vh',  // Ensure sections are tall enough to trigger scroll
    },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    if (scrollRef.current) {
      const sections = scrollRef.current.children;
      gsap.utils.toArray(sections).forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        });
      });
    }
  }, []);

  return (
    <div>
      <nav style={styles.navbar}>
        <a style={styles.navLink} onClick={() => scrollToSection('annuloplasty')}>Annuloplasty</a>
        <a style={styles.navLink} onClick={() => scrollToSection('eeg')}>EEG</a>
        <a style={styles.navLink} onClick={() => scrollToSection('graphene')}>Graphene</a>
      </nav>
      <main ref={scrollRef}>
        <div id="annuloplasty" style={styles.section}>
          <Annuloplasty />
        </div>
        <div id="eeg" style={styles.section}>
          <EEG />
        </div>
        <div id="graphene" style={styles.section}>
          <Graphene />
        </div>
      </main>
    </div>
  );
};

export default Research;
