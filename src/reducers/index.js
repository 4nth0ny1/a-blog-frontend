import subjectReducer from './subjectReducer'
import commentReducer from './commentReducer'
import blogReducer from './blogReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    comment: commentReducer,
    blog: blogReducer,
    subject: subjectReducer
})

export default allReducers;