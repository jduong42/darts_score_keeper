export default (state, action) => {
    switch(action.type) {
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
            return state
    }
}