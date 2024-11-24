import { useParams, useLocation } from "react-router-dom";
import './Card.css';
import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';
import RGBWord from '../rbgword/RGBWord';
import { bluePetalsVid } from '../../utils';
import Music from "../../components/Music";

const BirthdayCard = () => {
  // Take name and message from url
  const { name } = useParams();
  const queryParams = new URLSearchParams(useLocation().search);
  const message = queryParams.get("message");

  const imageSrc =
    name === "pookeroni"
      ? "/jordan/images/bday/card-pookeroni.png"
      : "/jordan/images/bday/card.png";

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
    <div className="card-backing">
      {name === "pookeroni" ? (
        <div>
          <Music songName={"reow"} />
          <video
            className="background-video"
            key={bluePetalsVid}
            autoPlay
            muted
          >
            <source src={bluePetalsVid} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="background-image"></div>
      )}

      <div className="foreground-content">
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={3000}
          gravity={0.2}
          recycle={false}
        />
        <div className="card-container">
          <h2 className="card-header pb-4">
            <RGBWord text={ "Happy Birthday" } color="purple" />
            <RGBWord text={ name + "!" } color="purple" />
          </h2>
        </div>

        <div className="birthday-box">
          <div className="birthdayCard md:mt-20">
            <div className="cardFront">
              <img src={imageSrc} alt="Card Front" className="card-front-image" />
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
    </div>
  );
};

export default BirthdayCard;
