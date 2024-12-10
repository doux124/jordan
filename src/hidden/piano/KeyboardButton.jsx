import { useNavigate } from 'react-router-dom';
import '../../standards/buttons.css'

const KeyboardButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/piano`);
    };
  
    return (
        <div className="flex-center">
            <button className="button-49 text-2xl" onClick={handleClick}>Click Here</button>
        </div>
    );
};

export default KeyboardButton;
