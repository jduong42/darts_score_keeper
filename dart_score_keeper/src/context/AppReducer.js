export default (state, action) => {
    switch(action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [action.payload, ...state.players]
            }
        case 'REMOVE_PLAYER':
            return {
                ...state,
                players: state.players.filter(player => player.id !== action.payload)
            }
        case 'CHANGE_PLAYER_SCORE':
            const updatedScores = state.players.map(player => {
                if (player.id === action.payload.id) {
                    if (player.score) {
                        return {
                            ...player,
                            score: (player.score - action.payload.score)
                        };
                    } else {
                        return {
                            ...player,
                            score: 301
                        };
                    }
                    
                }
                return player;
            });
            return {
                ...state,
                players: updatedScores
            };
            
        case 'SET_GAME_TYPE':
            return {
                ...state,
                gameType: parseInt(action.payload)
            }

        case 'SET_GAME_TYPE_FOR_PLAYERS':
            const initializedScore = parseInt(action.payload);

            const updatedPlayers = state.players.map(player => {
                return {
                    ...player,
                    score: initializedScore
                };
            });
        
            return {
                ...state,
                players: updatedPlayers
            };

        case 'SET_LEG_SIZE':
            return {
                ...state,
                legSize: parseInt(action.payload)
            }
        default:
            return state;
    }
}