export default (state = { cards: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_CARDS": 
            return {
                ...state,
                loading: true
            }
        case "CARDS_LOADED": 
            return {
                ...state,
                cards: action.payload,
                loading: false
            }
        case "ADDING_CARD":
            return {
                ...state,
                loading: true
            }
        case "CARD_ADDED":
            return {
                ...state,
                cards: [...state.cards, action.payload],
                loading: false 
            }

        
        default:
            return state
    }
}