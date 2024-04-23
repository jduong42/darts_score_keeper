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
            const updatedScores = state.scores.map(player => {
                if (player.id === action.payload.id) {
                    return {
                        ...player,
                        score: (player.score - action.payload.score)
                    };
                }
                return player;
            });
            return {
                ...state,
                scores: updatedScores
            };
            
        default:
            return state;
    }
}