export default (state = { cards: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_CARDS": 
            return {
                ...state,
                loading:true
            }
        case "CARDS_LOADED": 
            return {
                ...state,
                cards: action.payload,
                loading:false
            }
        default:
            return state
    }
}