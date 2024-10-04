import React, { useState } from 'react';
import './ClassDisplay.css'; 

function ClassDisplay({ className, classAttributes, currentAttributes }) {
  const [showDetails, setShowDetails] = useState(false);
  const meetsRequirements = Object.entries(classAttributes).every(([key, value]) =>
    currentAttributes[key] >= value
  );

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`class-display ${meetsRequirements ? 'meets-requirements' : ''}`} onClick={toggleDetails}>
      <h3>{className}</h3>
      {showDetails && (
        <ul>
          {Object.entries(classAttributes).map(([attribute, value]) => (
            <li key={attribute}>{attribute}: {value}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClassDisplay;
