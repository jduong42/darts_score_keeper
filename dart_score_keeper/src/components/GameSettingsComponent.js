import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function GameSettingsComponent({ onSubmit }) {
  const [gameType, setGameType] = useState('301');
  const [legSize, setLegSize] = useState('3');

  const handleGameTypeChange = (event) => {
    setGameType(event.target.value);
  };

  const handleLegSizeChange = (event) => {
    setLegSize(event.target.value);
  };

  const [message, setMessage] = useState('');
  const handleSubmit = () => {
    console.log("Submit button clicked");
    onSubmit({ gameType, legSize });
    setMessage("Settings have been submitted.");
  };

  return (
    <div id="gameSettings" className="settings-panel">
      <label htmlFor="gameType">Choose Game Type:</label>
      <select id="gameType" value={gameType} onChange={handleGameTypeChange}>
        <option value="301">301 up</option>
        <option value="501">501 up</option>
      </select>

      <label htmlFor="legSize">Choose Set Leg Size:</label>
      <select id="legSize" value={legSize} onChange={handleLegSizeChange}>
        <option value="3">3 legs</option>
        <option value="5">5 legs</option>
        <option value="7">7 legs</option>
      </select>


      <p>{message}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

function App() {
  const handleGameSettingsSubmit = (settings) => {
    console.log('Game Settings Submitted:', settings);
    // Handle game settings submission logic here, e.g., passing it to other components
  };

  return (
    <div className="app-container">
      <h1>Darts Score Tracker</h1>
      <GameSettingsComponent onSubmit={handleGameSettingsSubmit} />
      {/* Additional components here */}
    </div>
  );
}

export default GameSettingsComponent;
ReactDOM.render(<App />, document.getElementById('root'));
