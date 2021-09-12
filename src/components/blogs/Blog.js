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
        <div class="blog-page-container">
            <BlogForm blog={props.blog}/>
            <button onClick={handleClick}>Delete</button>
        </div>
    </>
    )
}

export default withRouter(connect(null, { deleteBlog })(Blog))