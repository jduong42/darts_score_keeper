import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const AddScore = () => {
    const [score, setScore] = useState(0);

    const { addPlayerScore } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newScore = {
            score
        }

        addPlayerScore(newScore);
    }

    return (
        <div>
            <h3>Add score for (playername)</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="score">Score</label>
                    <input type="number" value={score} onChange={(e) => setScore(e.target.value)} placeholder="Enter score..." />
                </div>
            </form>
        </div>
  )
}
