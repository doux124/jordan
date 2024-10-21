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
    { year: "2017", title: "", description: "Humble beginnings at NUSH" },
    { year: "2019", title: "", description: "Started my first research project" },
    { year: "2019", title: "", description: "My first olympiad gold medal" },
    { year: "2020", title: "", description: "My first research publication" },
    { year: "2020", title: "", description: "Interned at NTU's Computational Intelligence Lab" },
    { year: "2021", title: "", description: "Interned at MD6 under NUH" },
    { year: "2021", title: "", description: "My first international gold medal" },
    { year: "2022", title: "", description: "Graduated NUSH" },
    { year: "2023", title: "", description: "Worked as Combat Medic in NS" },
    { year: "2024", title: "", description: "Interning at MDesign" },
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
    <div className = "group">
      <h1 className="section-heading text-center mt-4 md:mb-10 md:mt-0">
          Timeline
      </h1>
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
    </div>
  );
};

export default Timeline;
