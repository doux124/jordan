import { useEffect, useState } from "react";
import "./background.css";

const DynamicBackground = ({ image, count = 20 }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const newPositions = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
    }));
    setPositions(newPositions);
  }, [count]);

  return (
    <div className="background-container">
      {positions.map((pos, index) => (
        <img
          key={index}
          src={image}
          alt={`background-element-${index}`}
          className="background-image"
          style={{
            left: `${pos.x}vw`,
            top: `${pos.y}vh`,
            transform: `rotate(${pos.rotation}deg)`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default DynamicBackground;
