import { useState, useRef } from 'react';
import Menu from './Menu';
import { gsap } from 'gsap';
import './action.css';

const CallToAction = ({ scrollToAboutMe }) => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle('night-mode', !isNightMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    } else {
      gsap.to(menuRef.current, { x: '100%', opacity: 0, duration: 0.5, ease: 'power3.in' });
    }
  };

  return (
    <div className="social-container">
      <div className="social-link" onClick={toggleMenu}>
        <svg
          className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
          viewBox="0 0 100 100"
          width="40"
          height="40"
        >
          <rect className="line top" width="80" height="10" x="10" y="30" rx="6" />
          <rect className="line bottom" width="80" height="10" x="10" y="60" rx="6" />
        </svg>
      </div>
      <Menu
        isMenuOpen={isMenuOpen}
        toggleNightMode={toggleNightMode}
        isNightMode={isNightMode}
        scrollToAboutMe={scrollToAboutMe}
      />
    </div>
  );
};

export default CallToAction;
