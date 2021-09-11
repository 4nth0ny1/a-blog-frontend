import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import editBlog from '../../actions/blogs/editBlog'
import Button from 'react-bootstrap/Button';


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
            <ul>
                {sortedByRank.map((blog) =>
                <React.Fragment key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <li>Title: {blog.title}</li>
                        <li>Content: {blog.content}</li>
                        <li>Description: {blog.signature}</li>
                        <li>Subject: {blog.subject.topic}</li>
                        <br></br>
                    </Link>
                    <Button variant="primary" onClick={() => handleUpVote(blog.id, blog.rank)}>+</Button>
                        <li>{blog.rank}</li>
                    <Button variant="primary" onClick={() => handleDownVote(blog.id, blog.rank)}>-</Button>

                </React.Fragment>
                )}
            </ul>
        )
    }
}

Blogs.defaultProps = {
    blogs: [{title: "another blog"}]
}

export default withRouter(connect(null, { editBlog })(Blogs))