import { useEffect, useState } from "react";

const DynamicBackground = ({ image, count = 20 }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Create elements with random properties
    const newElements = Array.from({ length: count }, () => ({
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      rotation: Math.random() * 360,
      moveX: -50 + Math.random() * 100,
      moveY: -50 + Math.random() * 100,
      duration: 15 + Math.random() * 10,
    }));

    // Create and inject dynamic keyframe styles
    const styleSheet = document.createElement("style");
    const keyframes = newElements
      .map(
        (el, index) => `
        @keyframes floating${index} {
          0% {
            transform: translate(0, 0) rotate(${el.rotation}deg);
          }
          50% {
            transform: translate(${el.moveX}vw, ${el.moveY}vh) rotate(${
          el.rotation + 180
        }deg);
          }
          100% {
            transform: translate(0, 0) rotate(${el.rotation + 360}deg);
          }
        }
      `
      )
      .join("\n");

    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);

    setElements(newElements);

    // Cleanup
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [count]);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none">
      {elements.map((el, index) => (
        <img
          key={index}
          src={image}
          alt={`background-element-${index}`}
          className="absolute w-[10vw] opacity-50"
          style={{
            left: `${el.startX}vw`,
            top: `${el.startY}vh`,
            animation: `floating${index} ${el.duration}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default DynamicBackground;