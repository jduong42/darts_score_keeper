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

    function addPlayerScore(id) {
        dispatch({
            type: 'ADD_PLAYER_SCORE',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{
        scores: state.scores,
        addPlayerScore
    }}>
        { children }
    </GlobalContext.Provider>);
}