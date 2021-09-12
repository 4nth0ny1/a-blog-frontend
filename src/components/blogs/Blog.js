import { connect } from 'react-redux'
import deleteBlog from '../../actions/blogs/deleteBlog'
import {withRouter} from 'react-router-dom'
import BlogForm from './BlogForm'
import React, {PureComponent} from 'react'
import Button from 'react-bootstrap/Button';
import editBlog from '../../actions/blogs/editBlog'



function Blog(props){
    
    const handleClick = () => {
        props.deleteBlog(props.blog.id)
        props.history.push('/blogs')
    }

    const handleUpVote = (id, rank) => {  
        props.editBlog({
            id: id, 
            rank: rank + 1
        })
    }       
    
    const handleDownVote = (id, rank) => {  
        props.editBlog({
            id: id, 
            rank: rank - 1
        })
    }    

    return (
    <>
        <div class="blog-page-container">
            <BlogForm blog={props.blog}/>
            <button onClick={handleClick}>Delete</button>
        
            <div class="blog-page-content">
                <div class="blog-title-container">
            
                    <h2>{props.blog.title}</h2>
                
                    <div class="blog-rank-container">
                        <div class="blog-page-button-container">
                            <React.Fragment key={props.blog.id}>
                                    <Button variant="dark" onClick={() => handleUpVote(props.blog.id, props.blog.rank)}>+</Button>
                                    <p>{props.blog.rank}</p>
                                    <Button variant="dark" onClick={() => handleDownVote(props.blog.id, props.blog.rank)}>-</Button>
                            </React.Fragment>
                            </div>
                        
                       
                    </div>
                </div>
                <p class="blog-writer">Wriiten By: {props.blog.signature}</p>
                
                <p>{props.blog.content}</p>

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

export default withRouter(connect(null, { editBlog, deleteBlog })(Blog))