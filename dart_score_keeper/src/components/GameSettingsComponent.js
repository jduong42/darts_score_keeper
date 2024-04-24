import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const GameSettingsComponent = ({ onSubmit }) => {
  //const [gameType, setGameType] = useState('301');
  //const [legSize, setLegSize] = useState('3');
  const { gameType, setGameType } = useContext(GlobalContext);
  const { players, setGameTypeForPlayers } = useContext(GlobalContext);
  const { legSize, setLegSize } = useContext(GlobalContext);

  const handleGameTypeChange = (event) => {
    setGameType(event.target.value);
    setGameTypeForPlayers(event.target.value);
  };

  const handleLegSizeChange = (event) => {
    setLegSize(event.target.value);
  };

  //const [message, setMessage] = useState('');

  /*const handleSubmit = () => {
    console.log("Submit button clicked");
    //onSubmit({ gameType, legSize });
    setMessage("Settings have been submitted.");


  };*/

  return (
    <div id="gameSettings" className="settings-panel pregame">
      <label htmlFor="gameType">Choose Game Type:</label>
      <select id="gameType" value={gameType} onChange={handleGameTypeChange}>
        <option value="301">301</option>
        <option value="501">501</option>
      </select>

      <label htmlFor="legSize">Choose Set Leg Size:</label>
      <select id="legSize" value={legSize} onChange={handleLegSizeChange}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
      </select>


      {/*<p>{message}</p>
      <button onClick={handleSubmit}>Submit</button>*/}
    </div>
  );
}



//export default GameSettingsComponent;
//ReactDOM.render(<App />, document.getElementById('root'));