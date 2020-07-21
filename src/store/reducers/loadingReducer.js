import {BLOGS} from '../actions/constants'

const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case BLOGS.LOAD:
            return true;
        case BLOGS.LOAD_SUCCESS:
            return false;

        default:return state;
    }
};

export default loadingReducer