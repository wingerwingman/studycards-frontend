export const getCards = () => {
    return dispatch => {
        dispatch({type: "LOADING_CARDS"})
        return fetch('/cards')
        .then(res => res.json())
        .then(cards => dispatch({type: "CARDS_LOADED", payload: cards}))
    }
}

export const addCard = (card) => {
    return (dispatch) => {
        dispatch({type: "ADDING_CARD"})
        fetch('/cards', {
            method: "POST",
            body: JSON.stringify(card), 
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(card => dispatch({type: "CARD_ADDED", payload: card}))
    }
}