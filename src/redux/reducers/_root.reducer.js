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
const funnyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FUNNY':
            return action.payload
        default:
            return state
    }
}
const cohortReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COHORT':
            return action.payload
        default:
            return state
    }
}
const cartoonReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CARTOON':
            return action.payload
        default:
            return state
    }
}
const nsfwReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NSFW':
            return action.payload
        default:
            return state
    }
}
const memeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MEME':
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    searchReducer,
    favoriteReducer,
    categoryReducer,
    funnyReducer,
    cohortReducer,
    cartoonReducer,
    nsfwReducer,
    memeReducer
})

export default rootReducer