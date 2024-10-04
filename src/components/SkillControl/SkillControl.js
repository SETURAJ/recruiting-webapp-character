// src/components/SkillControl/SkillControl.js
import React from 'react';
import './SkillControl.css';

function SkillControl({ skillName, skillPoints, skillAttributeModifier, attributeResponsible, onIncrement, onDecrement }) {
  return (
    <div className="skill-control">
      <div>
        {skillName} - points: {skillPoints} 
        [<button onClick={onIncrement}>+</button>] 
        [<button onClick={onDecrement}>-</button>] 
        modifier (from {attributeResponsible}): {skillAttributeModifier} 
        total: {skillPoints + skillAttributeModifier}
      </div>
    </div>
  );
}

export default SkillControl;