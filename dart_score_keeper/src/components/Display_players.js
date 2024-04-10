import React from 'react';
import PlayerButton from './Player_button.js';

export function DisplayPlayers({ players }) {
    return (
        <div>
            {Object.keys(players).map((player, index) => (
                <div key={index}>
                    {player}
                </div>
            ))}
        </div>
    );
}

export default DisplayPlayers;