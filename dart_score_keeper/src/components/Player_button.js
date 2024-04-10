import React, { useState } from 'react';

export function PlayerButton() {
    const [players, setPlayers] = useState({});

    const addPlayer = () => {
        const name = prompt('Enter player name');
        if (name) {
            setPlayers(prevPlayers => ({
                ...prevPlayers,
                [name]: 1
            }));
        }
    };

    return (
        <button onClick={addPlayer}>
            Add a player
        </button>
    );
}

export default PlayerButton;