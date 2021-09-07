import subjectReducer from './subjectReducer'
import blogReducer from './blogReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    blog: blogReducer,
    subject: subjectReducer
})

export default allReducers;