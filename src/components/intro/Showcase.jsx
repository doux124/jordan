import { useState, useEffect, useCallback } from 'react';
import projects from './projects';

const Showcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [targetRotation, setTargetRotation] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      if (targetRotation !== null) {
        const diff = targetRotation - rotation;
        if (Math.abs(diff) < 1) {
          setRotation(targetRotation);
          setTargetRotation(null);
        } else {
          setRotation(rotation + diff * 0.1);
        }
      } else if (isAutoRotating && !isDragging) {
        setRotation(prev => prev + (isMobile ? 0.5 : 0.5));
      }
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isAutoRotating, rotation, targetRotation, isMobile, isDragging]);

  const getImageStyle = useCallback((index) => {
    if (isMobile) {
      const angleStep = (360 / projects.length);
      const baseAngle = rotation + index * angleStep;
      const radians = baseAngle * (Math.PI / 180);
      const radius = 350; // Radius of the circle
      
      const x = radius * Math.sin(radians);
      const z = radius * Math.cos(radians);
      
      // Calculate scaling based on z position
      const scale = (z + radius) / (2 * radius);
      const opacity = 0.3 + scale * 0.7;
      const isClicked = selectedProject && selectedProject.id === projects[index].id;
      const dynamicScale = isAutoRotating || !isClicked ? 0.5 + scale : 2.2;
      
      return {
        transform: `translate3d(${x}px, 0, ${z}px) rotateY(${-baseAngle}deg) scale(${dynamicScale})`,
        opacity,
        zIndex: Math.round(z + radius),
        visibility: z > -radius/2 ? 'visible' : 'hidden', // Hide elements behind the center
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
      };
    }

    // Desktop styling remains the same
    const angleStep = (360 / projects.length);
    const baseAngle = rotation + index * angleStep;
    const radians = baseAngle * (Math.PI / 180);
    const radius = 300;
    
    const z = radius * Math.cos(radians);
    const x = radius * Math.sin(radians) * Math.cos(-Math.PI / 4);
    const y = radius * Math.sin(radians) * Math.sin(-Math.PI / 4);
    
    const scale = (z + radius) / (2 * radius);
    const counterRotationX = 20;
    const counterRotationY = -baseAngle;
    const isClicked = selectedProject && selectedProject.id === projects[index].id;
    const dynamicScale = isAutoRotating || !isClicked ? 0.5 + scale * 0.5 : 1.8;
    const opacity = isClicked ? 1 : 0.4 + scale * 0.6;
  
    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) rotateX(-${counterRotationX}deg) rotateY(${counterRotationY}deg) scale(${dynamicScale})`,
      opacity: opacity,
      zIndex: Math.round(scale * 1000),
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
    };
  }, [rotation, selectedProject, isAutoRotating, isMobile]);

  const handleImageClick = (project, index) => {
    setSelectedProject(project);
    setIsAutoRotating(false);
    rotateCarouselToProject(index);
  };

  const rotateCarouselToProject = (index) => {
    const angleStep = 360 / projects.length;
    const targetAngle = -index * angleStep;
    const currentRotation = rotation % 360;
    let diff = targetAngle - currentRotation;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    const completeRotations = Math.floor(rotation / 360);
    setTargetRotation(completeRotations * 360 + currentRotation + diff);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);
    setScrollLeft(rotation);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
    const sensitivity = 0.5;
    const walk = (startX - x) * sensitivity;
    setRotation(scrollLeft + walk);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setIsAutoRotating(true);
  };

  return (
    <div 
      className={`-my-32 md:-my-0 w-full max-w-6xl mx-auto px-4 md:px-8 ${isMobile ? 'py-16 overflow-x-hidden' : 'py-40'} flex flex-col md:flex-row md:gap-8`}
      onMouseLeave={() => {
        if (!isMobile) {
          setSelectedProject(null);
          setIsAutoRotating(true);
        }
      }}
    >
      <div className="flex-1">
        <div className="relative h-96 mb-8 -translate-x-20 md:-translate-x-48">
          {/* Project Description Overlay */}
          {selectedProject && (
            <div className={`
              absolute top-80 left-1/2 
              ${isMobile ? '-translate-x-20 w-[80vw] max-w-md' : '-translate-x-20 w-[32rem]'}
              bg-white/70 backdrop-blur-sm rounded-lg shadow-lg z-[2000] p-6
            `}>
              <h2 className="text-2xl font-bold mb-4 text-black">{selectedProject.title}</h2>
              <p className="text-gray-700">{selectedProject.description}</p>
            </div>
          )}

          {/* Carousel Container */}
          <div 
            className="absolute w-full h-full flex items-center justify-center"
            style={{ perspective: '1200px' }}
            onMouseDown={isMobile ? handleDragStart : undefined}
            onTouchStart={isMobile ? handleDragStart : undefined}
            onMouseMove={isMobile ? handleDragMove : undefined}
            onTouchMove={isMobile ? handleDragMove : undefined}
            onMouseUp={isMobile ? handleDragEnd : undefined}
            onTouchEnd={isMobile ? handleDragEnd : undefined}
            onMouseLeave={isMobile ? handleDragEnd : undefined}
          >
            <div className="relative w-full h-full" 
              style={{ 
                transformStyle: 'preserve-3d',
                transform: isMobile ? 'translateZ(-400px)' : 'rotateX(20deg)'
              }}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    ...getImageStyle(index),
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={() => handleImageClick(project, index)}
                >
                  <div style={{ transformStyle: 'preserve-3d' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`rounded-lg shadow-lg object-cover ${isMobile ? 'w-48 h-36' : 'w-64 h-48'}`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <h3 className="text-white text-xl font-bold text-center px-4">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project List - Only shown on desktop */}
      {!isMobile && (
        <div className="w-64 bg-white rounded-lg shadow-lg h-fit -translate-x-16">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Projects</h2>
            <div className="space-y-2">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="p-3 hover:bg-gray-100 rounded-md cursor-pointer transition-colors"
                  onClick={() => handleImageClick(project, index)}
                >
                  <h3 className="text-gray-700 font-medium">{project.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showcase;