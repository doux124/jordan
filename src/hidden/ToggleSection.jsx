import { useState } from "react";
import './Hidden.css';
import '../components/buttons.css'
const ToggleSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="toggle-section">
      <button className="button-78" onClick={toggleExpand}>
        {isExpanded ? `Hide ${title}` : `${title}`}
      </button>

      {isExpanded && (
        <div className="mt-6 flex-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default ToggleSection;
