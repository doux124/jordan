import { useNavigate, useParams, useLocation } from 'react-router-dom';

const BirthdayButton = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const queryParams = new URLSearchParams(useLocation().search);
    const message = queryParams.get("message");

    const handleClick = () => {
        e.preventDefault();
        const encodedMessage = encodeURIComponent(message);
        const url = `${window.location.origin}/HappyBirthday/${name}?message=${encodedMessage}`;
        navigate(`/HappyBirthday/${name}?message=${encodedMessage}`);
        };
  
    return (
      <button onClick={handleClick}>Click Here</button>
    );
};

export default BirthdayButton;
