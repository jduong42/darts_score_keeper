import React from 'react';
import { Header } from './components/Player_header';
import { AddPlayer } from './components/AddPlayer';
import { GameSettingsComponent } from './components/GameSettingsComponent.js';
import { DisplayPlayers } from './components/DisplayPlayers';
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
      <DisplayInfo />
      <DisplayPlayers />
      <AddPlayer />
      <GameSettingsComponent />
      <h3>(When game is running):</h3>
      <ShowScore />
      <AddScore />
      </div>
    </GlobalProvider>
    );
}

export default App;
