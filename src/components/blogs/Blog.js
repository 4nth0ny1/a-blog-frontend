import { connect } from 'react-redux'
import deleteBlog from '../../actions/blogs/deleteBlog'
import {withRouter} from 'react-router-dom'
import BlogForm from './BlogForm'
import React, {PureComponent} from 'react'


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
        
            <div class="blog-page-content">

                <h2>{props.blog.title}</h2>
                <p>{props.blog.content}</p>
                <p>{props.blog.signature}</p>
                <p>{props.blog.rank}</p>
                
                {props.blog.comments.map((comment) => 
                    <React.Fragment key={comment.id}>
                        <div class="blog-page-comment-container">
                            <p>{comment.content}</p>
                            <p>{comment.signature}</p>
                            <p>{comment.rank}</p>
                        </div>
                    </React.Fragment>
                )}

            </div>
        </div>
    </>
    )
}

export default withRouter(connect(null, { deleteBlog })(Blog))