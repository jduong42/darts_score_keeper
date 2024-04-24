import React from 'react';
import { Header } from './components/Player_header';
import { AddPlayer } from './components/AddPlayer';
import { RemovePlayer } from './components/RemovePlayer';
import { DisplayPlayers } from './components/DisplayPlayers';
import { ShowScore } from './components/ShowScore.js';
import { AddScore } from './components/AddScore.js';


import { GlobalProvider } from './context/GlobalState';

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
<<<<<<< HEAD
    <GlobalProvider>
      <Header />
      <div className="container">
      <DisplayPlayers />
      <AddPlayer />
      <h3>(When game is running):</h3>
      <ShowScore />
      <AddScore />
      </div>
    </GlobalProvider>
    );
=======
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
>>>>>>> game-settings-feature
}

export default App;


