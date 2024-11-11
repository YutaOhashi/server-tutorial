import { useState, useEffect } from 'react';

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export default function App() {
  const [name, setName] = useState('Bob');
  const [unitSystem, setUnitSystem] = useState('us'); 
  const [story, setStory] = useState('');

  async function generateStory(event) {
    event.preventDefault();

    const response = await fetch(`/.netlify/functions/silly_story?name=${name}&unitSystem=${unitSystem}`);
    const data = await response.json();
    
    setStory(data.message);
  }

  function handleNameChange(event) {
    setName(event.target.value || 'Bob'); 
  }

  function handleUnitChange(event) {
    setUnitSystem(event.target.value); 
  }

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          id="customname"
          value={name}
          onChange={handleNameChange} 
        />
      </div>

      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          value="us"
          checked={unitSystem === "us"}
          onChange={handleUnitChange} 
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          value="uk"
          checked={unitSystem === "uk"}
          onChange={handleUnitChange} 
        />
      </div>

      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>

      <div>
        <p id="storyOutput" style={{ whiteSpace: 'pre-wrap', marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          {story || 'Click a button to generate a random story!'}
        </p>
      </div>
    </>
  );
}