import { useEffect, useRef, useState } from 'react';
import './Timeline.css';

const Timeline = () => {
  const [isHorizontalScroll, setIsHorizontalScroll] = useState(false);
  const timelineRef = useRef(null);
  const start = 1900;
  const end = 2100;
  const snapPosition = 2000;
  const length = 2200;

  const events = [
    { year: '2021', title: 'Event One', description: 'Description for event one.' },
    { year: '2022', title: 'Event Two', description: 'Description for event two.' },
    { year: '2023', title: 'Event Three', description: 'Description for event three.' },
    { year: '2024', title: 'Event Four', description: 'Description for event four.' },
    { year: '2025', title: 'Event Five', description: 'Description for event five.' },
    { year: '1', title: 'Event One', description: 'Description for event one.' },
    { year: '2', title: 'Event Two', description: 'Description for event two.' },
    { year: '3', title: 'Event Three', description: 'Description for event three.' },
    { year: '4', title: 'Event Four', description: 'Description for event four.' },
    { year: '5', title: 'Event Five', description: 'Description for event five.' },
  ];

  const smoothScrollTo = (targetY) => {
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  };  

  // Function to handle scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Check if the scroll position is within the lock range
    if (scrollY >= start && scrollY <= end) {
      smoothScrollTo(snapPosition);
      setIsHorizontalScroll(true);
      document.body.style.overflowY = 'hidden'; // Disable vertical scrolling
    } else {
      setIsHorizontalScroll(false);
      document.body.style.overflowY = 'auto'; // Enable vertical scrolling
    }
  };

  // Function to convert vertical scroll to horizontal scroll
  const handleWheel = (event) => {
    if (isHorizontalScroll && timelineRef.current) {
      event.preventDefault(); // Prevent the default vertical scroll
      const scroll = event.deltaY
      timelineRef.current.scrollLeft += scroll

      if (timelineRef.current.scrollLeft == 0 && scroll < 0) {
        window.scrollTo(0, start - 1);
      } else if (timelineRef.current.scrollLeft >= length && scroll > 0) {
        window.scrollTo(0, end + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflowY = 'auto';
    };
  }, [isHorizontalScroll]);

  return (
    <div className={`timeline-wrapper ${isHorizontalScroll ? 'horizontal-scroll' : ''}`}>
      <div className="timeline-container" ref={timelineRef}>
        {events.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-details">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
