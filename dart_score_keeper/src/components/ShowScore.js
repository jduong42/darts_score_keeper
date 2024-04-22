import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const ShowScore = () => {
    const { scores } = useContext(GlobalContext);

    return (
        <div>
            <h3>Scores</h3>
                {scores.map(scores => (<div key={scores.id}>Player {scores.id}: {scores.score}</div>))}
        </div>
    )
}

