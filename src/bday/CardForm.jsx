import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Card.css';

const CardForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [shareableLink, setShareableLink] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Encode the message to be URL-safe
    const encodedMessage = encodeURIComponent(message);

    // Generate the URL with the name in the path and the message as a query parameter
    const url = `${window.location.origin}/HappyBirthday/${name}?message=${encodedMessage}`;
    setShareableLink(url);

    // Navigate to the card page using the generated URL
    navigate(`/HappyBirthday/${name}?message=${encodedMessage}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container mt-10">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" className="form-button">Generate Card</button>
      </form>

      <div className="shareable-link-container mt-5">
        {shareableLink ? (
          <>
            <p>Your card has been created! Share this link:</p>
            <input
              type="text"
              value={shareableLink}
              readOnly
              className="shareable-link-input"
              onClick={(e) => e.target.select()}
            />
          </>
        ) : (
          <p>Generate a card to get a shareable link.</p>
        )}
      </div>
    </div>
  );
};

export default CardForm;
