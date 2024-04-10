import React from 'react';
import { Header } from './components/Player_header';
import { PlayerButton } from './components/Player_button';
import { DisplayPlayers } from './components/Display_players';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <PlayerButton />
      </div>
    </div>
    );
}

export default App;
