import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'

export default class Blogs extends PureComponent {

    render(){
        
        return (
            <ul>
                {this.props.blogs.map((blog) =>
                <React.Fragment key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <li>Title: {blog.title}</li>
                        <li>Content: {blog.content}</li>
                        <li>Description: {blog.signature}</li>
                        <li>Rank: {blog.rank}</li>
                        <li>Subject: {blog.subject.topic}</li>
                        <br></br>
                    </Link>
                </React.Fragment>
                )}
            </ul>
        )
    }
}

Blogs.defaultProps = {
    blogs: [{title: "another blog"}]
}