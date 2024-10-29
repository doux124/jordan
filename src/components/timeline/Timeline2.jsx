import { useEffect, useRef, useState } from 'react';
import './Timeline.css';

const Timeline = () => {
  const [isHorizontalScroll, setIsHorizontalScroll] = useState(false);
  const timelineRef = useRef(null);
  const containerRef = useRef(null);
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

  const getScrollBounds = () => {
    if (!containerRef.current) return {};
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerHeight * 0.45;
    const start = containerTop - window.innerHeight / 2 + offset;
    const end = containerTop + containerRef.current.clientHeight - window.innerHeight / 2 - offset;
    return { start, end, snapPosition: containerTop };
  };
  

  const handleScroll = () => {
    const { start, end, snapPosition } = getScrollBounds();
    const scrollY = window.scrollY;

    if (scrollY >= start && scrollY <= end) {
      smoothScrollTo(snapPosition);
      setIsHorizontalScroll(true);
      document.body.style.overflowY = 'hidden';
    } else {
      setIsHorizontalScroll(false);
      document.body.style.overflowY = 'auto';
    }
  };

  const handleWheel = (event) => {
    const { start, end } = getScrollBounds();
    if (isHorizontalScroll && timelineRef.current) {
      event.preventDefault();
      const scroll = event.deltaY;
      timelineRef.current.scrollLeft += scroll;

      if (timelineRef.current.scrollLeft === 0 && scroll < 0) {
        window.scrollTo(0, start - 1);
      } else if (timelineRef.current.scrollLeft >= length && scroll > 0) {
        window.scrollTo(0, end + 1);
      }
    }
  };

  const handleTouchMove = (event) => {
    const { start, end } = getScrollBounds();
    if (isHorizontalScroll && timelineRef.current) {
      const touch = event.touches[0];
      const scroll = touch.clientY;
      timelineRef.current.scrollLeft += scroll;

      if (timelineRef.current.scrollLeft === 0 && scroll < 0) {
        window.scrollTo(0, start - 1);
      } else if (timelineRef.current.scrollLeft >= length && scroll > 0) {
        window.scrollTo(0, end + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflowY = 'auto';
    };
  }, [isHorizontalScroll]);

  return (
    <div className="group" ref={containerRef}>
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
