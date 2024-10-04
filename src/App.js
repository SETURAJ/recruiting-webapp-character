import React, { useState } from 'react';
import './App.css';
import AttributeControl from './components/AttributeControl/attributecontrol.js';
import ClassDisplay from './components/ClassDisplay/ClassDisplay';
import { ATTRIBUTE_LIST, CLASS_LIST } from './consts.js';

function App() {
  const [attributes, setAttributes] = useState({
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  });

  const calculateModifier = (attributeValue) => {
    return Math.floor((attributeValue - 10) / 2);
  };

  const updateAttribute = (attributeName, delta) => {
    const potentialNewAttributes = {
      ...attributes,
      [attributeName]: attributes[attributeName] + delta
    };
    const totalAttributes = Object.values(potentialNewAttributes).reduce((acc, cur) => acc + cur, 0);
    if (totalAttributes <= 70) {
      setAttributes(potentialNewAttributes);
    }else{
      alert("Total attribute points cannot exceed 70.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Attribute and Class Editor</h1>
      </header>
      <section className="App-section">
        {ATTRIBUTE_LIST.map(attribute => (
          <AttributeControl
            key={attribute}
            attributeName={attribute}
            attributeValue={attributes[attribute]}
            onIncrement={() => updateAttribute(attribute, 1)}
            onDecrement={() => updateAttribute(attribute, -1)}
            calculateModifier={calculateModifier}
          />
        ))}
      </section>
      <section className="Class-section">
        {Object.entries(CLASS_LIST).map(([className, classAttributes]) => (
          <ClassDisplay
            key={className}
            className={className}
            classAttributes={classAttributes}
            currentAttributes={attributes}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
