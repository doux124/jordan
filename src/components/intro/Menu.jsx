import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaMoon, FaSun } from 'react-icons/fa';
import { gsap } from 'gsap';
import './action.css';
import { useNavigate } from 'react-router-dom';
import '../../standards/buttons.css';

const Menu = ({ isMenuOpen, scrollToAboutMe }) => { 
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [isNightMode, setIsNightMode] = useState(
    document.documentElement.classList.contains('dark')
  );

  const toggleNightMode = () => {
    setTimeout(() => {
      if (isNightMode) {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
      setIsNightMode(!isNightMode);
  }, animate ? 2000 : 0);
  };

  const triggerAnimation = () => {
    if (!animate) return;
    gsap.to(menuRef.current, {
      width: '100%',
      duration: 0.5,
      ease: 'power3.out',
      onComplete: () => {
        setAnimating(true);
      }
    });

    setTimeout(() => {
        setAnimating(false);
    }, 3700);
    setTimeout(() => {
        setAnimating(false);
        gsap.to(menuRef.current, {
            width: window.innerWidth <= 768 ? '300px' : '500px',
            duration: 0.5,
            ease: 'power3.in',
        });
    }, 3800);
  };

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
    <div className={`page__style ${animating ? 'animate_content' : ''}`}>
        <div className='menu' ref={menuRef} style={{ transform: 'translateX(100%)', opacity: 0 }}>
            <h2 className="flex-center section-subheading pt-5 md:pb-5 text-black dark:text-white transition-colors duration-300">
                Menu Page
            </h2>
            <div className="flex flex-col items-center justify-center space-y-4">
                <button className="button-57 w-[200px] md:w-[300px] dark:border-white dark:bg-black dark:text-white transition-colors duration-300" data-content="Research" onClick={() => navigate('/research')}>Research Work</button>
                <button className="button-57 w-[200px] md:w-[300px] dark:border-white dark:bg-black dark:text-white transition-colors duration-300" data-content="Hobbies" onClick={() => navigate('/hobbies')}>Hobbies</button>
                <button className="button-57 w-[200px] md:w-[300px] dark:border-white dark:bg-black dark:text-white transition-colors duration-300" data-content="Enter" onClick={() => navigate('/game')}>Game</button>
                <button className="button-57 w-[200px] md:w-[300px] dark:border-white dark:bg-black dark:text-white transition-colors duration-300" data-content="Scroll" onClick={scrollToAboutMe}>About Me</button>
                <button className="button-57 w-[200px] md:w-[300px] dark:border-white dark:bg-black dark:text-white transition-colors duration-300" data-content={animate ? "Currently On" : "Currently Off"} onClick={() => setAnimate(!animate)}>{animate ? "Off Animation" : "On Animation"}</button>
            </div>

            <div className="social-link dark:text-white dark:bg-black absolute top-[40px] left-[20px] md:top-[100px] md:right-[30px]" onClick={toggleNightMode}>
                <div className={`toggle-icon ${isNightMode ? 'flipped' : ''}`} onClick={triggerAnimation}>
                {isNightMode ? <FaMoon size={20} /> : <FaSun size={20} />}
                </div>
            </div>

            <div className='flex-center space-x-4'>
                <div
                    className="social-link dark:text-white dark:bg-black"
                    onClick={() => window.open('https://github.com/doux124', '_blank')}
                >
                    <FaGithub size={20} />
                </div>
                <div
                    className="social-link dark:text-white dark:bg-black"
                    onClick={() => window.open('https://www.linkedin.com/in/jordan-low-jun-yi-69a150279/', '_blank')}
                >
                    <FaLinkedin size={20} />
                </div>
                <div
                    className="social-link dark:text-white dark:bg-black"
                    onClick={() => window.open('mailto:biev124@nus.edu.sg', '_blank')}
                >
                    <FaEnvelope size={20} />
                </div>
                <div
                    className="social-link dark:text-white dark:bg-black"
                    onClick={() => window.open('https://scholar.google.com/citations?hl=en&user=O6M8clAAAAAJ', '_blank')}
                >
                    <FaGraduationCap size={20} />
                </div>
            </div>
            <p className='flex-center text-black dark:text-white transition-colors duration-300'>Coded by Jordan Low Jun Yi</p>
        </div>
    </div>
  );
};

export default Menu;
