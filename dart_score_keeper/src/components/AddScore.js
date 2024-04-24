import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const AddScore = () => {
    const [score, setScore] = useState(0);
    const [playerIndex, setPlayerIndex] = useState(0);
    const { players, addPlayerScore } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const currentPlayerId = players[playerIndex].id;
        const newScore = {
            id: currentPlayerId,
            score: parseInt(score, 10)
        }

        addPlayerScore(newScore);

        setPlayerIndex((playerIndex + 1) % players.length);
        setScore(0);
    }

    return (
        <div>
            <h3>Add score for { players[playerIndex].name }</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="score">Score</label>
                    <input type="number" value={score} onChange={(e) => setScore(e.target.value)} placeholder="Enter score..." />
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
  )
}
