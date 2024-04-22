import React from 'react';
import { Header } from './components/Player_header';
import { AddPlayer } from './components/AddPlayer';
import { RemovePlayer } from './components/RemovePlayer';
import { DisplayPlayers } from './components/DisplayPlayers';

import { GlobalProvider } from './context/GlobalState';

import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <DisplayPlayers />
      <AddPlayer />
      </div>
    </GlobalProvider>
    );
}

export default App;
