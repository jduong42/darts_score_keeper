import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const AddScore = () => {
    const [score, setScore] = useState();
    const [playerIndex, setPlayerIndex] = useState(0);
    const { players, addPlayerScore } = useContext(GlobalContext);
    const { addLegForPlayer } = useContext(GlobalContext);
    const { startNewLeg } = useContext(GlobalContext);

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

        if ((players[playerIndex].score - score) === 0) {
            addLegForPlayer(players[playerIndex]);
            startNewLeg();
        }

        setPlayerIndex((playerIndex + 1) % players.length);
        setScore("");
    }

    const currentPlayerName = players.length > 0 ? players[playerIndex].name : "N/A";

    return (
        <div className="game">
            <h3>{currentPlayerName}'s turn</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="score">Input the score of the turn:</label>
                    <input type="number" value={score} onChange={(e) => setScore(e.target.value)} placeholder="Enter score..." />
                    <input type="submit" className="btn" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}
