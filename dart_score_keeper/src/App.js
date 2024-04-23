import React from 'react';
import { Header } from './components/Player_header';
import { AddPlayer } from './components/AddPlayer';
import { RemovePlayer } from './components/RemovePlayer';
import { DisplayPlayers } from './components/DisplayPlayers';
import { ShowScore } from './components/ShowScore.js';
import { AddScore } from './components/AddScore.js';


import { GlobalProvider } from './context/GlobalState';

import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <DisplayPlayers />
      <AddPlayer />
      <h3>(When game is running):</h3>
      <ShowScore />
      <AddScore playerId={1} />
      </div>
    </GlobalProvider>
    );
}

export default App;
