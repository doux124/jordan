import { useEffect, useState, useRef } from "react";

const DynamicBackground = ({
  image,
  count = 20,
  gravity = false,
  minSize = 8,
  maxSize = 12,
  minRotation = 0,
  maxRotation = 360,
  baseSpeed = 1,
  speedVariance = 0.05,
  rotationSpeed = 5,
}) => {
  const [elements, setElements] = useState([]);
  const animationFrameRef = useRef();
  const elementsRef = useRef([]);

  useEffect(() => {
    if (gravity) {
      const newElements = Array.from({ length: count }, () => {
        const size = minSize + Math.random() * (maxSize - minSize);
        return {
          startX: Math.random() * 100,
          rotation: Math.random() * (maxRotation - minRotation),
          rotationAmount: minRotation + Math.random() * (maxRotation - minRotation),
          speed: 2 + Math.random() * 2,
          size,
        };
      });

      const styleSheet = document.createElement("style");
      const keyframes = newElements
        .map((el, index) => `
          @keyframes fall${index} {
            0% {
              transform: translate(${el.startX}vw, -25vh) rotate(${el.rotation}deg);
            }
            100% {
              transform: translate(${el.startX}vw, 115vh) rotate(${el.rotation + el.rotationAmount}deg);
            }
          }
        `)
        .join("\n");

      styleSheet.textContent = keyframes;
      document.head.appendChild(styleSheet);
      setElements(newElements);

      return () => {
        document.head.removeChild(styleSheet);
      };
    } else {
      // Initialize elements with scaled velocities based on baseSpeed
      elementsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        rotation: Math.random() * 360,
        velocityX: (Math.random() - 0.5) * baseSpeed,
        velocityY: (Math.random() - 0.5) * baseSpeed,
        rotationVelocity: (Math.random() - 0.5) * rotationSpeed,
      }));

      const updatePositions = () => {
        elementsRef.current = elementsRef.current.map(el => {
          // Scale random velocity changes by speedVariance
          el.velocityX += (Math.random() - 0.5) * speedVariance;
          el.velocityY += (Math.random() - 0.5) * speedVariance;
          
          // Dampen velocities to prevent excessive speed
          el.velocityX *= 0.99;
          el.velocityY *= 0.99;

          // Update position
          let newX = el.x + el.velocityX;
          let newY = el.y + el.velocityY;

          // Bounce off edges with some randomness
          if (newX < -10 || newX > 110) {
            el.velocityX *= -0.8;
            el.velocityX += (Math.random() - 0.5) * speedVariance;
            newX = el.x;
          }
          if (newY < -10 || newY > 110) {
            el.velocityY *= -0.8;
            el.velocityY += (Math.random() - 0.5) * speedVariance;
            newY = el.y;
          }

          // Update rotation based on rotationSpeed
          el.rotation += el.rotationVelocity;

          return {
            ...el,
            x: newX,
            y: newY,
          };
        });

        setElements([...elementsRef.current]);
        animationFrameRef.current = requestAnimationFrame(updatePositions);
      };

      updatePositions();

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [count, gravity, minSize, maxSize, minRotation, maxRotation, baseSpeed, speedVariance, rotationSpeed]);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none">
      {elements.map((el, index) => {
        if (gravity) {
          return (
            <img
              key={index}
              src={image}
              alt={`background-element-${index}`}
              className="absolute z-0"
              style={{
                width: `${el.size}vw`,
                animation: `fall${index} ${el.speed}s cubic-bezier(0.2, 0, 0.8, 1) infinite`,
              }}
            />
          );
        }

        return (
          <img
            key={index}
            src={image}
            alt={`background-element-${index}`}
            className="absolute z-0"
            style={{
              width: `${el.size}vw`,
              transform: `translate(${el.x}vw, ${el.y}vh) rotate(${el.rotation}deg)`,
              transition: 'transform 0.1s linear',
            }}
          />
        );
      })}
    </div>
  );
};

export default DynamicBackground;