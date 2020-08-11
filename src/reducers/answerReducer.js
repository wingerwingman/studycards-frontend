export default (state = { answers: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_ANSWERS": 
            return {
                ...state,
                loading: true
            }
        case "ANSWERS_LOADED": 
            return {
                ...state,
                answers: action.payload,
                loading: false
            }
        case "ADDING_ANSWER":
            return {
                ...state,
                loading: true
            }
        case "ANSWER_ADDED":
            return {
                ...state,
                answers: [...state.answers, action.payload],
                loading: false 
            }

        
        default:
            return state
    }
}