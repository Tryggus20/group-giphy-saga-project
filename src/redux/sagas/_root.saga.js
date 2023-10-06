import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* watcherSaga() {
    yield takeEvery('FETCH_GIFS', searchGifsSaga)
    yield takeEvery('ADD_FAVORITE', postFavoriteSaga)
    yield takeEvery('FETCH_FAVORITE', getFavoriteSaga)
    yield takeEvery('SET_CATEGORY', updateFavoriteSaga)
    // yield takeEvery('DELETE_FAVORITE', deleteFavoriteSaga)
    yield takeEvery('FETCH_CATEGORY', getCategorySaga)
    yield takeEvery('FETCH_FUNNY', getFunnySaga)
    yield takeEvery('FETCH_COHORT', getCohortSaga)
    yield takeEvery('FETCH_CARTOON', getCartoonSaga)
    yield takeEvery('FETCH_NSFW', getNsfwSaga)
    yield takeEvery('FETCH_MEME', getMemeSaga)
};

function* searchGifsSaga(action) {
    try {
        const response = yield axios.get(`/api/search/${action.payload}`)
        yield put({ type: 'SET_GIFS', payload: response.data })
        console.log('response', response.data);
    } catch (error) {
        console.log('there was an err in searchGifs', error);
    }
}

function* postFavoriteSaga(action) {
    try {
        yield axios.post('/api/favorite/', action.payload)
        console.log(action.payload)
        yield put({ type: 'FETCH_FAVORITE' })
    } catch (error) {
        console.log('there was an err posting new favorite', error);
    }
}

function* getFavoriteSaga() {
    try {
        const response = yield axios.get('/api/favorite/')
        yield put({ type: 'SET_FAVORITE', payload: response.data })
    } catch (error) {
        console.log('there was an err retreiving favorites list', error);
    }
}

function* updateFavoriteSaga(action) {
    try {
        yield axios.put(`/api/favorite/${action.payload.id}`, {category_id: Number(action.payload.category_id), id: Number(action.payload.id)});
        yield put({ type: "FETCH_FAVORITE" })
    } catch (error) {
        console.log('there was an error trying to categorize', error)
    }
}

function* getCategorySaga(action) {
    try {
        const response = yield axios.get(`/api/category/${action.payload}`)
        console.log(response.data, )
        yield put({ type: 'SET_CATEGORY', payload: response.data })
    } catch (error) {
        console.log('there was an err retreiving favorites list', action.payload , error);
    }
}
function* getFunnySaga() {
    try {
        const response = yield axios.get('/api/favorite/funny')
        yield put({ type: 'SET_FUNNY', payload: response.data })
    } catch (error) {
        console.log('there was an err retreiving favorites list', error);
    }
}

function* getCohortSaga() {
    try {
        const response = yield axios.get('/api/favorite/cohort')
        yield put({ type: 'SET_COHORT', payload: response.data })
    } catch (error) {
        console.log('there was an err retreiving favorites list', error);
    }
}

function* getCartoonSaga() {
    try {
        const response = yield axios.get('/api/favorite/cartoon')
        yield put({ type: 'SET_CARTOON', payload: response.data })
    } catch (error) {
        console.log('there was an err retreiving favorites list', error);
    }
}

function* getNsfwSaga() {
    try {
        const response = yield axios.get('/api/favorite/nsfw')
        yield put({ type: 'SET_NSFW', payload: response.data })
    } catch (error) {
        console.log('there was an err retreiving favorites list', error);
    }
}

function* getMemeSaga() {
    try {
        const response = yield axios.get('/api/favorite/meme')
        yield put({ type: 'SET_MEME', payload: response.data })
    } catch (error) {
        console.log('there was an err retreiving favorites list', error);
    }
}


export default watcherSaga;