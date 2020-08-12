export const getCategories = () => {
    return dispatch => {
        dispatch({type: "LOADING_CATEGORIES"})
        return fetch('/categories')
        .then(res => res.json())
        .then(categories => dispatch({type: "CATEGORIES_LOADED", payload: categories}))
    }
}

export const addCategory = (category) => {
    return (dispatch) => {
        dispatch({type: "ADDING_CATEGORY"})
        fetch('/categories', {
            method: "POST",
            body: JSON.stringify(category), 
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(category => dispatch({type: "CATEGORY_ADDED", payload: category}))
    }
}