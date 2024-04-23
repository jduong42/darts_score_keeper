import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const AddScore = ({ playerId }) => {
    const [score, setScore] = useState(0);
    const { addPlayerScore } = useContext(GlobalContext);
    // const { scores } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newScore = {
            id: playerId,
            score: parseInt(score, 10)
        }

        // TODO: change current player on each onSubmit call
        // to modify all of the players' scores one by one

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
