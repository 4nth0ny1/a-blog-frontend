import { connect } from 'react-redux'
import deleteBlog from '../../actions/blogs/deleteBlog'
import {withRouter} from 'react-router-dom'
import BlogForm from './BlogForm'

function Blog(props){
    
    const handleClick = () => {
        props.deleteBlog(props.blog.id)
        props.history.push('/blogs')
    }

    return (
    <>
        <BlogForm blog={props.blog}/>
        <li>{props.blog && props.blog.title}<button onClick={handleClick}>Delete</button></li>

    </>
    )
}

export default withRouter(connect(null, { deleteBlog })(Blog))