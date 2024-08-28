import React from "react";
import { useParams, useLocation } from "react-router-dom";
import './Card.css';

const BirthdayCard = () => {
  const { name } = useParams();

  const queryParams = new URLSearchParams(useLocation().search);
  const message = queryParams.get("message");

  if (!message) {
    return <div>No card data found. Please generate a card first.</div>;
  }

  return (
    <div>
        <div className="card-container">
            <h2 className="card-header">Happy Birthday {name}!</h2>
        </div>

        <div className="birthdayCard mt-20">
            <div className="cardFront">
              <h3 className="happy">HAPPY BIRTHDAY POOKS</h3>
              <div className="balloons">
                  <div className="balloonOne" />
                  <div className="balloonTwo" />
                  <div className="balloonThree" />
                  <div className="balloonFour" />
              </div>
            </div>
            <div className="cardInside">
              <h3 className="back">MWAH</h3>
              <p className="mx-5">To the bestest and cutest domestic abuser: {message}</p>
            </div>
        </div>
    </div>
  );
};

export default BirthdayCard;
