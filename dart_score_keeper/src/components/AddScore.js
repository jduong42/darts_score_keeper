import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const AddScore = () => {
    const [score, setScore] = useState();
    const [playerIndex, setPlayerIndex] = useState(0);
    const { players, addPlayerScore } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        if (!score) {
            alert("Please enter a score");
            return;
        }

        const currentPlayerId = players[playerIndex].id;
        const newScore = {
            id: currentPlayerId,
            score: score ? parseInt(score, 10) : 0
        }

        addPlayerScore(newScore);

        setPlayerIndex((playerIndex + 1) % players.length);
        setScore("");
    }

    const currentPlayerName = players.length > 0 ? players[playerIndex].name : "N/A";

    return (
        <div>
            <h3>Add score for {currentPlayerName}</h3>
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
