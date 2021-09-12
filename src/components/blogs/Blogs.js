import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import editBlog from '../../actions/blogs/editBlog'
import Button from 'react-bootstrap/Button';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import './App.css';



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
            {/* <Container>
                <Jumbotron>
                    <h1>Blogs</h1>
                </Jumbotron> */}
                <ul>
                    {sortedByRank.map((blog) =>
                    <React.Fragment key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>created on: {blog.formatted_created_at}</p>
                            <p>{blog.content}</p>
                            <p>Created by: {blog.signature}</p>
                            <p>Subject: {blog.subject.topic}</p>
                            <p>updated last: {blog.last_updated_at}</p>
                            <br></br>
                        </Link>
                        <Button variant="primary" onClick={() => handleUpVote(blog.id, blog.rank)}>+</Button>
                        {blog.rank}
                        <Button variant="primary" onClick={() => handleDownVote(blog.id, blog.rank)}>-</Button>

                    </React.Fragment>
                    )}
                </ul>
            {/* </Container> */}
            </>
        )
    }
}

Blogs.defaultProps = {
    blogs: [{title: "another blog"}]
}

export default withRouter(connect(null, { editBlog })(Blogs))