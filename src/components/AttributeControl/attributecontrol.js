import React from 'react';
import './attributecontrol.css'; 

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
