import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/blogReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware)
        )
    )
    sagaMiddleware.run(rootSaga)
    return store;
}

export default configureStore;