import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import watcherSaga from './redux/sagas/_root.saga';
import rootReducer from './redux/reducers/_root.reducer';


const sagaMiddleware = createSagaMiddleware();

// create store instance 
const storeInstance = 
    createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(watcherSaga)
ReactDOM.render(< Provider store={storeInstance}>
    <App />
</Provider>, document.getElementById('root'));
