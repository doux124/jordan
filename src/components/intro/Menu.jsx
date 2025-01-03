import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaMoon, FaSun } from 'react-icons/fa';
import { gsap } from 'gsap';
import './action.css';
import { useNavigate } from 'react-router-dom';
import '../../standards/buttons.css'

const Menu = ({ isMenuOpen, toggleNightMode, isNightMode, scrollToAboutMe }) => { 
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    } else {
      gsap.to(menuRef.current, { x: '100%', opacity: 0, duration: 0.5, ease: 'power3.in' });
    }
  }, [isMenuOpen]);

  return (
    <div className="menu" ref={menuRef} style={{ transform: 'translateX(100%)', opacity: 0 }}>
        <h2 className="flex-center section-subheading py-5">
            Menu Page
        </h2>
        <div className="flex flex-col items-center justify-center space-y-4">
            <button className="button-57 w-[300px]" data-content="Research" onClick={() => navigate('/research')}>Research Work</button>
            <button className="button-57 w-[300px]" data-content="Hobbies" onClick={() => navigate('/hobbies')}>Hobbies</button>
            <button className="button-57 w-[300px]" data-content="Enter" onClick={() => navigate('/game')}>Game</button>
            <button className="button-57 w-[300px]" data-content="Scroll" onClick={scrollToAboutMe}>About Me</button>
        </div>

        {/* <div className="social-link" onClick={toggleNightMode}>
            <div className={`toggle-icon ${isNightMode ? 'flipped' : ''}`}>
            {isNightMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </div>
        </div> */}

      <div className='flex-center space-x-4'>
        <div
            className="social-link"
            onClick={() => window.open('https://github.com/doux124', '_blank')}
        >
            <FaGithub size={20} />
        </div>
        <div
            className="social-link"
            onClick={() => window.open('https://www.linkedin.com/in/jordan-low-jun-yi-69a150279/', '_blank')}
        >
            <FaLinkedin size={20} />
        </div>
        <div
            className="social-link"
            onClick={() => window.open('mailto:biev124@nus.edu.sg', '_blank')}
        >
            <FaEnvelope size={20} />
        </div>
        <div
            className="social-link"
            onClick={() => window.open('https://scholar.google.com/citations?hl=en&user=O6M8clAAAAAJ', '_blank')}
        >
            <FaGraduationCap size={20} />
        </div>
      </div>
      <p className='flex-center'>Coded by Jordan Low Jun Yi</p>
    </div>
  );
};

export default Menu;
