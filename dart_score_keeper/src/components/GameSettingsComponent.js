import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const GameSettingsComponent = ({ onSubmit }) => {
  const { gameType, setGameType } = useContext(GlobalContext);
  const { setGameTypeForPlayers } = useContext(GlobalContext);
  const { legSize, setLegSize } = useContext(GlobalContext);

  const handleGameTypeChange = (event) => {
    setGameType(event.target.value);
    setGameTypeForPlayers(event.target.value);
  };

  const handleLegSizeChange = (event) => {
    setLegSize(event.target.value);
  };

  return (
    <div id="gameSettings" className="settings-panel pregame">
      <div className="game-type">
        <label htmlFor="gameType">Choose game type: </label>
        <select id="gameType" value={gameType} onChange={handleGameTypeChange}>
          <option value="301">301</option>
          <option value="501">501</option>
        </select>
      </div>
      <div className="set-leg-size">
        <label htmlFor="legSize"> Choose set leg size: </label>
        <select id="legSize" value={legSize} onChange={handleLegSizeChange}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
      </div>
    </div>
  );
}