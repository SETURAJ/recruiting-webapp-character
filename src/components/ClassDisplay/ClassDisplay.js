// src/components/ClassDisplay/ClassDisplay.js
import React from 'react';
import './ClassDisplay.css';

function ClassDisplay({ className, classAttributes, currentAttributes }) {
  const meetsRequirements = Object.entries(classAttributes).every(([key, value]) =>
    currentAttributes[key] >= value
  );

  return (
    <div 
      className={`class-display ${meetsRequirements ? 'eligible' : ''}`}
      onClick={() => {}}
    >
      <h3>{className}</h3>
      <ul>
        {Object.entries(classAttributes).map(([attribute, value]) => (
          <li key={attribute}>{attribute}: {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClassDisplay;
