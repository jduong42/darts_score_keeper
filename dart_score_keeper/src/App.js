import logo from './logo.svg';
import './App.css';
import React from 'react';

// Importing GameSettingsComponent - Jiao's component for game settings
import GameSettingsComponent from './components/GameSettingsComponent';

function App() {

  // Handle settings submission - Added by Jiao to process game settings data
  const handleSettingsSubmit = (settings) => {
    console.log('Settings submitted:', settings);

    // Additional handling can be implemented here
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Game settings form component - Jiao */}
      <GameSettingsComponent onSubmit={handleSettingsSubmit} />
    </div>
  );
}

export default App;


