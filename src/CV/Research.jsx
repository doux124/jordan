import Annuloplasty from './Annuloplasty';
import Graphene from './Graphene';
import EEG from './EEG';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import "./styles.css"

gsap.registerPlugin(ScrollTrigger);

const Research = () => {
  const [activeSection, setActiveSection] = useState('annuloplasty');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id); // Set active section on scroll
  };

  const scrollRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const handleScroll = () => {
      const sections = scrollRef.current.children;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      Array.from(sections).forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <a 
          className={`navLink ${activeSection === 'annuloplasty' ? 'navLinkActive' : ''}`} 
          onClick={() => scrollToSection('annuloplasty')}
        >
          Annuloplasty
        </a>
        <a 
          className={`navLink ${activeSection === 'eeg' ? 'navLinkActive' : ''}`} 
          onClick={() => scrollToSection('eeg')}
        >
          EEG
        </a>
        <a 
          className={`navLink ${activeSection === 'graphene' ? 'navLinkActive' : ''}`} 
          onClick={() => scrollToSection('graphene')}
        >
          Graphene
        </a>
      </nav>
      <main ref={scrollRef}>
        <div id="annuloplasty" className="section" style={styles.section}>
          <Annuloplasty />
        </div>
        <div id="eeg" className="section" style={styles.section}>
          <EEG />
        </div>
        <div id="graphene" className="section" style={styles.section}>
          <Graphene />
        </div>
      </main>
    </div>
  );
};

const styles = {
  section: {
    opacity: 0.5,
    minHeight: '100vh',  // Ensure sections are tall enough to trigger scroll
    transition: 'opacity 0.5s',
    padding: '0px',
    margin: '0px',
    borderRadius: '0px',
  },
};

export default Research;
