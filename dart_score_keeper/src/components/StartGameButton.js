import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const StartGameButton = () => {
    const { globalStartGame } = useContext(GlobalContext);
    const StartGame = (event) => {
        globalStartGame();
    };

  return (
    <div className="pregame">
        <button onClick={StartGame}>Start game</button>
    </div>
  )
}
