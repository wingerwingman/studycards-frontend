export const getAnswers = () => {
    return dispatch => {
        dispatch({type: "LOADING_ANSWERS"})
        return fetch('/answers')
        .then(res => res.json())
        .then(cards => dispatch({type: "ANSWERS_LOADED", payload: answers}))
    }
}

export const addAnswer = (answer) => {
    return (dispatch) => {
        dispatch({type: "ADDING_ANSWER"})
        fetch('/answers', {
            method: "POST",
            body: JSON.stringify(answer), 
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(answer => dispatch({type: "ANSWER_ADDED", payload: answer}))
    }
}