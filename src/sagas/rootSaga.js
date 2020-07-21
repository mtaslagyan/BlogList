import {takeEvery, call, put, select, take} from 'redux-saga/effects'
import {BLOGS} from '../store/actions/constants'
import {getBlogsSaga} from './getBlogsSaga'
import {setBlogs} from '../store/actions/blogActions'

function* displayBlogs() {
    const blogs = yield call(getBlogsSaga);
    yield put(setBlogs(blogs))
}

//watcher saga
function* rootSaga() {
    yield takeEvery(BLOGS.LOAD, displayBlogs)
}

export default rootSaga;