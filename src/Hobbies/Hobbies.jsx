import { useState, useEffect } from 'react';
import '../index.css';
import './Hobbies.css';

const hobbies = [
  { id: 1, name: 'Photography', image: '/jordan/images/sizer.png', description: 'Capturing moments with a camera.' },
  { id: 2, name: 'Cooking', image: '/jordan/images/sizer.png', description: 'Creating delicious meals.' },
  { id: 3, name: 'Gardening', image: '/jordan/images/sizer.png', description: 'Growing plants and flowers.' },
];

const Hobbies = () => {
  const [expandedHobby, setExpandedHobby] = useState(null);

  const handleExpand = (id) => {
    setExpandedHobby(expandedHobby === id ? null : id);
  };

  return (
    <div>
      <div className="background-image"></div>
      <div className="hobbies-container">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-box" onClick={() => handleExpand(hobby.id)}>
            <img src={hobby.image} alt={hobby.name} className="hobby-image" />
            <div className="hobby-name">{hobby.name}</div>
            {expandedHobby === hobby.id && (
              <div className="hobby-description">{hobby.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
