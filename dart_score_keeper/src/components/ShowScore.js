import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const ShowScore = () => {
    const { players } = useContext(GlobalContext);

    return (
        <div className="game">
            <h3>Current leg's scores:</h3>
                {players.map(players => (<div key={players.id}>{players.name}: {players.score}</div>))}
        </div>
    )
}

