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
            console.log(action.payload, "action payload ----");
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    searchReducer,
    favoriteReducer,
    categoryReducer,
})

export default rootReducer