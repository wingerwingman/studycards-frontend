import { combineReducers } from 'redux'
import cardReducer from './cardReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    cardReducer,
    categoryReducer
})

export default rootReducer