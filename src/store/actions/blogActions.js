import {BLOGS} from './constants'

const loadBlogs = () => ({
    type: BLOGS.LOAD,
})

const setBlogs = (blogs) => ({
    type: BLOGS.LOAD_SUCCESS, blogs
})

export {
    loadBlogs,
    setBlogs
}