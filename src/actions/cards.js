export const getCards = () => {
    return dispatch => {
        dispatch({type: "LOADING_CARDS"})
        return fetch('/cards')
        .then(res => res.json())
        .then(cards => dispatch({type: "CARDS_LOADED", payload: cards}))
    }
}