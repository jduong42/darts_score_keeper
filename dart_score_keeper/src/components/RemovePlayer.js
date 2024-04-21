import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import '../App.css';

export const RemovePlayer = ({ player }) => {
    const { removePlayer, players } = useContext(GlobalContext);

    return (
        <button 
            onClick={() => removePlayer(player.id)} 
            className="remove-btn"
            disabled={players.length === 0}
        >
            X
        </button>
    )
}