import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    players: [],
    gameType: 301,
    legSize: 3
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function addPlayer(player) {
        dispatch({
            type: 'ADD_PLAYER',
            payload: { ...player, 
                id: state.players.length > 0 ? Math.max(...state.players.map(p => p.id)) + 1 : 1 }}
        );
    }

    function removePlayer(players) {
        dispatch({
            type: 'REMOVE_PLAYER',
            payload: players
        });
    }

    function addPlayerScore(newScore) {
        dispatch({
            type: 'CHANGE_PLAYER_SCORE',
            payload: newScore
        })
    }

    function setGameType(gameType) {
        dispatch ({
            type: 'SET_GAME_TYPE',
            payload: gameType
        })
    }

    function setGameTypeForPlayers(gameType) {
        dispatch({
            type: 'SET_GAME_TYPE_FOR_PLAYERS',
            payload: gameType
        })
    }

    function setLegSize(legSize) {
        dispatch ({
            type: 'SET_LEG_SIZE',
            payload: legSize
        })
    }

    return (<GlobalContext.Provider value={{
        players: state.players,
        addPlayer,
        removePlayer,
        scores: state.scores,
        addPlayerScore,
        setGameType,
        setGameTypeForPlayers,
        setLegSize,
        legSize: state.legSize,
        gameType: state.gameType
    }}>
        {children}
    </GlobalContext.Provider>);
}