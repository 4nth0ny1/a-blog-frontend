import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import editBlog from '../../actions/blogs/editBlog'
import Button from 'react-bootstrap/Button';
import App from '../../App.css';

class Blogs extends PureComponent {

    render(){
        
        const sortedByRank = this.props.blogs.sort((a,b) => b.rank - a.rank)

        const handleUpVote = (id, rank) => {  
            this.props.editBlog({
                id: id, 
                rank: rank + 1
            })
        }       
        
        const handleDownVote = (id, rank) => {  
            this.props.editBlog({
                id: id, 
                rank: rank - 1
            })
        }     
        
        

        return (
            <>
                <ul>
                    {sortedByRank.map((blog) =>
                    <React.Fragment key={blog.id}>
                        <div class="blog-container">
                            <div class="blog-button-container">
                                <Button variant="dark" onClick={() => handleUpVote(blog.id, blog.rank)}>+</Button>
                                {blog.rank}
                                <Button variant="dark" onClick={() => handleDownVote(blog.id, blog.rank)}>-</Button>
                            </div>
                            <div class="blog-content-container">
                                <Link to={`/blogs/${blog.id}`}>
                                    <h2>{blog.title}</h2>
                                </Link> 
                                    <p class="date">created on: {blog.formatted_created_at}</p>
                                    <p>{blog.content}</p>
                                    <p>Created by: {blog.signature}</p>
                                    <p>Subject: {blog.subject.topic}</p>
                                    <p class="date">updated last: {blog.last_updated_at}</p>
                                    <br></br>
       
                                {blog.comments.map((comment) => 
                                    <React.Fragment key={comment.id}>
                                        <div class="comment-container">
                                            <p>{comment.content}</p>
                                            <p>{comment.signature}</p>
                                            <p>{comment.rank}</p>
                                        </div>
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                    </React.Fragment>
                    )}
                </ul>
            </>
        )
    }
}

Blogs.defaultProps = {
    blogs: [{title: "another blog"}]
}

export default withRouter(connect(null, { editBlog })(Blogs))