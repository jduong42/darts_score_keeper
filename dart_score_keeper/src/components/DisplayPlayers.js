import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { RemovePlayer } from './RemovePlayer';

export const DisplayPlayers = () => {
    const { players, removePlayer } = useContext(GlobalContext);

    const playerList = players.map(player => (player.name));

    return (
        <div className="pregame">
            <h4>{playerList.length > 0 ? 'Current players:' : 'No players yet'}</h4>
            {players.slice().reverse().map(player => (
                <div key={player.id}>
                    {player.name}
                    <RemovePlayer player={player} />
                </div>                
            ))}
        </div>
    )
}