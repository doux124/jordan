import { useState } from "react";
import './Hidden.css';
const ToggleSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="toggle-section">
      <button className="btn" onClick={toggleExpand}>
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
