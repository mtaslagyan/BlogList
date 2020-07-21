import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
    loading: loadingReducer,
    blog: blogReducer
});

export default rootReducer;