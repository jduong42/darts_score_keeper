import React from 'react';
import { Header } from './components/Player_header';
import { AddPlayer } from './components/AddPlayer';
import { GameSettingsComponent } from './components/GameSettingsComponent.js';
import { DisplayPlayers } from './components/DisplayPlayers.js';
import { StartGameButton } from './components/StartGameButton.js';
import { ShowScore } from './components/ShowScore.js';
import { AddScore } from './components/AddScore.js';
import { DisplayInfo } from './components/DisplayInfo.js';


import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <DisplayInfo className="pregame" />
      <DisplayPlayers className="pregame" />
      <AddPlayer className="pregame" />
      <GameSettingsComponent className="pregame" />
      <StartGameButton />
      <ShowScore className="game" />
      <AddScore className="game" />
      </div>
    </GlobalProvider>
    );
}

export default App;
