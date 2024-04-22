import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';

const initialState = {
    scores: [
        { id: 1, score: 301 },
        { id: 2, score: 501 }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addPlayerScore(newScore) {
        dispatch({
            type: 'CHANGE_PLAYER_SCORE',
            payload: newScore
        })
    }

    return (<GlobalContext.Provider value={{
        scores: state.scores,
        addPlayerScore
    }}>
        { children }
    </GlobalContext.Provider>);
}