import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'

export default class Blogs extends PureComponent {

    render(){
        return (
            <ul>
                {this.props.blogs.map((blog) => 
                <Link to={`/blogs/${blog.id}`}>
                    <li>{blog.title}</li>
                    <li>{blog.content}</li>
                    <li>{blog.signature}</li>
                    <li>{blog.rank}</li>
                </Link>)}
            </ul>
        )
    }
}


Blogs.defaultProps = {
    blogs: [{title: "another blog"}]
}