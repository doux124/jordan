import { useEffect, useRef, useState } from 'react';
import './Timeline.css';
import { timelineVid, timelineVidSmall } from '../../utils';

const Timeline = () => {
  const [isVideoScroll, setIsVideoScroll] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartYRef = useRef(null);

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? timelineVidSmall : timelineVid);
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(timelineVidSmall);
    } else {
      setVideoSrc(timelineVid);
    }
  };

  // Get scroll bounds for smooth scrolling behavior
  const getScrollBounds = () => {
    if (!containerRef.current) return {};
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerHeight * 0.45;
    const start = containerTop - window.innerHeight / 2 + offset;
    const end = containerTop + containerRef.current.clientHeight - window.innerHeight / 2 - offset;

    if (window.innerWidth <= 768) {
      return { start, end, snapPosition: containerTop };
    } else {
      return { start, end, snapPosition: end };
    }
  };

  const smoothScrollTo = (targetY) => {
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const { start, end, snapPosition } = getScrollBounds();
    const scrollY = window.scrollY;

    if (scrollY >= start && scrollY <= end) {
      smoothScrollTo(snapPosition);
      setIsVideoScroll(true);
      document.body.style.overflowY = 'hidden';
    } else {
      setIsVideoScroll(false);
      document.body.style.overflowY = 'auto';
    }
  };

  const handleWheel = (event) => {
    const { start, end } = getScrollBounds();
    const video = videoRef.current;
    if (isVideoScroll && video) {
      event.preventDefault();
      const scroll = event.deltaY;
      const timeChange = scroll * 0.002;

      video.currentTime = Math.min(
        Math.max(video.currentTime + timeChange, 0),
        video.duration
      );

      if (video.currentTime === 0 && scroll < 0) {
        window.scrollTo(0, start - 1);
      } else if (video.currentTime === video.duration && scroll > 0) {
        window.scrollTo(0, end + 1);
      }
    }
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd = () => {
    touchStartYRef.current = null;
  };

  const handleTouchMove = (event) => {
    console.log("handleTouchMove called"); 
    const { start, end } = getScrollBounds();
    const video = videoRef.current;

    if (isVideoScroll && video && touchStartYRef.current !== null) {
      const touch = event.touches[0];
      const deltaY = touchStartYRef.current - touch.clientY;

      // Adjust video time based on touch delta
      const timeChange = deltaY * 0.005;
      video.currentTime = Math.min(
        Math.max(video.currentTime + timeChange, 0),
        video.duration
      );

      // Update the starting point for the next move
      touchStartYRef.current = touch.clientY;

      // Handle boundaries for scrolling
      if (video.currentTime === 0 && deltaY < 0) {
        window.scrollTo(0, start - 1);
      } else if (video.currentTime === video.duration && deltaY > 0) {
        window.scrollTo(0, end + 1);
      }
    }
  };

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  const throttledHandleTouchMove = throttle(handleTouchMove, 8); // Approx. 60fps

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', throttledHandleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', throttledHandleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.style.overflowY = 'auto';
    };
  }, [isVideoScroll]);

  return (
    <div className="group" ref={containerRef}>
      <video
        preload="auto"
        ref={videoRef}
        autoPlay={false}
        muted
        playsInline
        className='-mt-60'
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default Timeline;
