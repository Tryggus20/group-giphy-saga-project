import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* watcherSaga() {
    yield takeEvery('FETCH_GIFS', searchGifsSaga)
    yield takeEvery('ADD_FAVORITE', postFavoriteSaga)
    yield takeEvery('FETCH_FAVORITE', getFavoriteSaga)
    yield takeEvery('SET_CATEGORY', updateFavoriteSaga)
    // yield takeEvery('DELETE_FAVORITE', deleteFavoriteSaga)
    yield takeEvery('FETCH_CATEGORY', getCategorySaga)
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


export default watcherSaga;