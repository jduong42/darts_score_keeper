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
        default:
            return state;
    }
}