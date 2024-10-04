// src/components/AttributeControl/AttributeControl.js
import React from 'react';
import './attributecontrol.css'; // Ensure you have styles set for this component as well

function AttributeControl({ attributeName, attributeValue, onIncrement, onDecrement, calculateModifier }) {
  return (
    <div className="attribute-control">
      <div>{attributeName}: {attributeValue} (Modifier: {calculateModifier(attributeValue)})</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default AttributeControl;
