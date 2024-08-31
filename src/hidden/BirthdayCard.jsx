import { useParams, useLocation } from "react-router-dom";
import './Card.css';
import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';

const BirthdayCard = () => {
  // Take name and message from url
  const { name } = useParams();
  const queryParams = new URLSearchParams(useLocation().search);
  const message = queryParams.get("message");

  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const handleResize = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    // Dynamic confetti
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="card-background">
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={3000}
        gravity={0.2}
        recycle={false}
      />
      <div className="card-container mr-5 md:mr-0">
        <h2 className="card-header">Happy Birthday {name}!</h2>
      </div>

      <div className="birthday-box">
        <div className="birthdayCard mt-20">
          <div className="cardFront">
            <h3 className="happy mt-10">For {name}:</h3>
            <div className="balloons">
              <div className="balloonOne" />
              <div className="balloonTwo" />
              <div className="balloonThree" />
              <div className="balloonFour" />
            </div>
          </div>
          <div className="cardInside">
            <h3 className="back">HAPPY BDAY</h3>
            <p className="mx-7 mb-2">
              {message}
            </p>
            <p className="text-right mx-10">
              From: Jordan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
