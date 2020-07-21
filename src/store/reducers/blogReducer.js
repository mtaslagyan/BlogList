import {BLOGS} from '../actions/constants'

 const blogReducer = (state = {}, {type, blogs}) => {
     switch(type){
        case BLOGS.LOAD_SUCCESS:
            return blogs;
        default:
            return state;
     }
 }

 export default blogReducer;