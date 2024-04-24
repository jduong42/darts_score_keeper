import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    players: [],
    gameType: 301,
    legSize: 3,
    gameRunning: false
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

    function globalStartGame() {
        console.log("GAME STARTED");
        const pregameComponents = document.getElementsByClassName("pregame");
        const gameComponents = document.getElementsByClassName("game");

        for (let i = 0; i < pregameComponents.length; i++) {
            pregameComponents[i].style.display = "none";
        }

        for (let i = 0; i < gameComponents.length; i++) {
            gameComponents[i].style.display = "block";
        }

        dispatch ({
            type: 'SET_GAME_TYPE_FOR_PLAYERS',
            payload: state.gameType
        })
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

    function addLegForPlayer(player) {
        console.log("addLegForPlayer()");
        dispatch ({
            type: 'ADD_LEG_FOR_PLAYER',
            payload: player.id
        });

        let txt;

        if (player.legs >= state.legSize - 1) {
            window.alert("Game over, " + player.name + " won!");
        } else {
            if (window.confirm("Leg over, press Ok to start the next leg, or Cancel to go back to the menu.")) {
                txt = "Starting the next leg";
            } else {
                txt = "Going back to the menu";
            }
        }
        
    }

    function startNewLeg() {
        dispatch ({
            type: 'SET_GAME_TYPE_FOR_PLAYERS',
            payload: state.gameType
        })
    }

    function changeGameStatus() {
        console.log("GAME ENDED");
        dispatch ({
            type: 'CHANGE_GAME_STATUS',
            payload: true
        })
    }

    return (<GlobalContext.Provider value={{
        players: state.players,
        addPlayer,
        removePlayer,
        globalStartGame,
        scores: state.scores,
        addPlayerScore,
        setGameType,
        setGameTypeForPlayers,
        setLegSize,
        legSize: state.legSize,
        gameType: state.gameType,
        addLegForPlayer,
        startNewLeg,
        changeGameStatus
    }}>
        {children}
    </GlobalContext.Provider>);
}