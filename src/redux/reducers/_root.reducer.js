import { combineReducers } from 'redux';


// create reducer here
const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIFS':
            return action.payload
        default:
            return state
    }
}

const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return action.payload
        default:
            return state
    }
}

const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_CATEGORY":
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    searchReducer,
    favoriteReducer,
    categoryReducer
})

export default rootReducer