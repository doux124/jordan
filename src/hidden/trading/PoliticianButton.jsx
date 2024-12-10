import { useNavigate } from 'react-router-dom';
import '../../standards/buttons.css'

const PoliticianButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/trading`);
    };
  
    return (
        <div className="flex-center">
            <button className="button-49 text-2xl" onClick={handleClick}>Click Here</button>
        </div>
    );
};

export default PoliticianButton;
