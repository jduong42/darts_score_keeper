import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const DisplayInfo = () => {
    const { players, legSize, gameType } = useContext(GlobalContext);

    return (
        <div>
            <h2>Game Info:</h2>
            <p>Maximum legs: {legSize}</p>
            <p>Game type: {gameType}</p>
            {players.map((player, index) => (
                <p key={index}>{player.name}, Won legs: {player.legs}</p>
            ))}
        </div>
    )
}