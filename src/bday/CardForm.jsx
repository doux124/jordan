import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Card.css';

const CardForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirect to the personalized URL
    navigate(`/HappyBirthday/${name}`, {
      state: { name, message },
    });
  };

  return (
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
  );
};

export default CardForm;
