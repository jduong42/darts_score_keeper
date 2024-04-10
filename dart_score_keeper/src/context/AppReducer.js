export default (state, action) => {
    switch(action.type) {
        case 'ADD_PLAYER_SCORE':
            return {
                ...state,
                scores: [action.payload, ...state.scores]
            }
        default:
            return state
    }
}