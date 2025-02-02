import '../index.css';
import './Hobbies.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';

const hobbies = [
  { id: 1, name: 'Origami', image: '/jordan/images/hobbies/origami/origami.jpg', backgroundImage: '/jordan/images/hobbies/origami_bg.png' },
  { id: 2, name: 'String', image: '/jordan/images/hobbies/embroidery/embroidery.jpg', backgroundImage: '/jordan/images/hobbies/embroidery_bg.png' },
  { id: 3, name: 'Sports', image: '/jordan/images/hobbies/working.jpg', backgroundImage: '/jordan/images/hobbies/swimming_bg.png' },
  { id: 4, name: 'Volunteering', image: '/jordan/images/hobbies/volunteering/carwash.jpg', backgroundImage: '/jordan/images/hobbies/volunteer_bg.png' },
]

const Hobbies = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="background-image"></div>
      <nav className="my-10 mr-10 text-2xl flex justify-end">
        <a 
          className="navLink"
          onClick={() => navigate('/')}
        >
          <FontAwesomeIcon icon={faHome} style={{ fontSize: '30px' }} />
        </a>
      </nav>

      <div className="hobbies-container">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-box md:-mt-48" onClick={() => handleClick(`/hobbies/${hobby.name.toLowerCase()}/`)}>
            <img src={hobby.image} alt={hobby.name} className="hobby-image" />
            <div className="relative">
              <img src={hobby.backgroundImage} alt={hobby.name} className="hobby-background-image" />
              <p className="hobby-name">{hobby.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
