import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './Card.css';

const BirthdayButton = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const queryParams = new URLSearchParams(useLocation().search);
    const message = queryParams.get("message");

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const url = `${window.location.origin}/HappyBirthday/${name}?message=${encodedMessage}`;
        navigate(`/HappyBirthday/${name}?message=${encodedMessage}`);
        };
  
    return (
        <div className="button-page flex items-center justify-center md:min-h-screen">
            <button className="birthday-button" onClick={handleClick}>Click Here</button>
        </div>
    );
};

export default BirthdayButton;
