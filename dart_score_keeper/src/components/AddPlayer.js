import React, {useState, useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const AddPlayer = () => {
    const [name, setName] = useState('');
    
    const { addPlayer } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newPlayer = {
            id: Math.floor(Math.random() * 100000000),
            name,
            legs: 0
        }
        addPlayer(newPlayer);
    }

    return (
        <div className="pregame">
            <h3> Add a new player:</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Player Name: </label>
                    <input type="text" value={name} onChange={(e) => 
                        setName(e.target.value)} placeholder="Enter player name..." />
                </div>
                <button className="btn">Add player</button>
            </form>
        </div>
    )
}