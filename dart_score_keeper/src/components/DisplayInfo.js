import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const DisplayInfo = () => {
    const { players, legSize, gameType } = useContext(GlobalContext);

    return (
        <div>
            <h2>Game Settings:</h2>
            {players.map((player, index) => (
                <p key={index}>{player.name}, score: {player.score}</p>
            ))}
            <p>Maximum legs: {legSize}</p>
            <p>Game type: {gameType}</p>
        </div>
    )
}