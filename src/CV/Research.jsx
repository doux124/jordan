import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import Loader from '../components/Loader';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import "./styles.css";

import Annuloplasty from './ARP/Annuloplasty';
const Graphene = lazy(() => import('./SMP/Graphene'));
const EEG = lazy(() => import('./EEG/EEG'));

gsap.registerPlugin(ScrollTrigger);

const Research = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeSection, setActiveSection] = useState('annuloplasty');
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

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
    window.addEventListener('resize', updateIsMobile);

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
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <a 
          className={`navLink ${activeSection === 'annuloplasty' ? 'navLinkActive' : ''}`} 
          onClick={() => scrollToSection('annuloplasty')}
        >
          {isMobile ? 'Annuloplasty' : 'Novel Biomedical Device'}
        </a>
        <a 
          className={`navLink ${activeSection === 'eeg' ? 'navLinkActive' : ''}`} 
          onClick={() => scrollToSection('eeg')}
        >
          {isMobile ? 'BCI' : 'Brain Computer Interface'}
        </a>
        <a 
          className={`navLink ${activeSection === 'graphene' ? 'navLinkActive' : ''}`} 
          onClick={() => scrollToSection('graphene')}
        >
          {isMobile ? 'Biosensor' : 'Glucose Biosensor'}
        </a>
        <a 
          className="navLink"
          onClick={() => navigate('/')}
        >
          <FontAwesomeIcon icon={faHome} />
        </a>
      </nav>

      <main ref={scrollRef}>
        <div id="annuloplasty" className="section" style={styles.section}>
          <Annuloplasty />
        </div>
        <div id="eeg" className="section" style={styles.section}>
          <Suspense fallback={<Loader loading={true} />}>
            <EEG />
          </Suspense>
        </div>
        <div id="graphene" className="section" style={styles.section}>
          <Suspense fallback={<Loader loading={true} />}>
            <Graphene />
          </Suspense>
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
