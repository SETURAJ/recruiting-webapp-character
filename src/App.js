  
// src/App.js
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

  const updateAttribute = (attributeName, delta) => {
    const newAttributes = {
      ...attributes,
      [attributeName]: attributes[attributeName] + delta
    };
    const totalAttributes = Object.values(newAttributes).reduce((acc, cur) => acc + cur, 0);

    if (totalAttributes > 70) {
      alert("Cannot have more than 70 total points across all attributes.");
    } else {
      setAttributes(newAttributes);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PolicyMe Task</h1>
      </header>
      <section className="App-section">
        {ATTRIBUTE_LIST.map(attribute => (
          <AttributeControl
            key={attribute}
            attributeName={attribute}
            attributeValue={attributes[attribute]}
            onIncrement={() => updateAttribute(attribute, 1)}
            onDecrement={() => updateAttribute(attribute, -1)}
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
