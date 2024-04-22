import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const AddScore = ({ playerId }) => {
    const [score, setScore] = useState(0);
    const { addPlayerScore } = useContext(GlobalContext);
    const { scores } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newScore = {
            id: playerId,
            score: parseInt(score, 10)
        }

        let currentPlayer = 0;
        //(currentPlayer < scores.length) ? currentPlayer = currentPlayer + 1 : currentPlayer = 0;
        if (currentPlayer < scores.length) {
            currentPlayer++;
        } else {
            currentPlayer = 0;
        }

        console.log(scores.length);
        console.log(currentPlayer);

        addPlayerScore(newScore);
    }

    return (
        <div>
            <h3>Add score for (playername)</h3>
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
