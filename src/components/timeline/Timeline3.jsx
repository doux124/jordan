import { useEffect, useRef, useState } from 'react';
import './Timeline.css';
import { timelineVid, timelineVidSmall } from '../../utils';

const Timeline = () => {
  const [isVideoScroll, setIsVideoScroll] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartYRef = useRef(null);
  const lastTimeUpdateRef = useRef(0);
  const rafIdRef = useRef(null);

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? timelineVidSmall : timelineVid);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(timelineVidSmall);
    } else {
      setVideoSrc(timelineVid);
    }
  };

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

  const updateVideoTime = (deltaY) => {
    const video = videoRef.current;
    if (!video) return;

    const sensitivity = window.innerWidth < 760 ? 0.002 : 0.004;
    const timeChange = deltaY * sensitivity;
    
    const update = () => {
      const now = performance.now();
      const elapsed = now - lastTimeUpdateRef.current;
      
      if (elapsed > 16) {
        const newTime = Math.min(
          Math.max(video.currentTime + timeChange, 0),
          video.duration
        );
        
        video.currentTime = newTime;
        lastTimeUpdateRef.current = now;
      }
      
      rafIdRef.current = requestAnimationFrame(update);
    };

    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(update);
    }
  };

  const handleWheel = (event) => {
    const { start, end } = getScrollBounds();
    const video = videoRef.current;
    if (isVideoScroll && video) {
      event.preventDefault();
      updateVideoTime(event.deltaY);

      if (video.currentTime === 0 && event.deltaY < 0) {
        window.scrollTo(0, start - 1);
      } else if (video.currentTime === video.duration && event.deltaY > 0) {
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
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  };

  const handleTouchMove = (event) => {
    const { start, end } = getScrollBounds();
    const video = videoRef.current;

    if (isVideoScroll && video && touchStartYRef.current !== null) {
      event.preventDefault();  // Only prevent default when in video scroll mode
      const touch = event.touches[0];
      const deltaY = touchStartYRef.current - touch.clientY;
      
      updateVideoTime(deltaY);
      touchStartYRef.current = touch.clientY;

      if (video.currentTime === 0 && deltaY < 0) {
        window.scrollTo(0, start - 1);
      } else if (video.currentTime === video.duration && deltaY > 0) {
        window.scrollTo(0, end + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });  // Changed to passive: true
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
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