import { useNavigate } from 'react-router-dom';
import './buttons.css';

const NavigationButton = ({ route, buttonText }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <div className="flex-center">
            <button className="button-49 text-2xl" onClick={handleClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default NavigationButton;
