import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'

export default class Blogs extends PureComponent {

    render(){
        return (
            <ul>
                {this.props.blogs.map((list) => <Link to={`/blogs/${blog.id}`}><li>{blog.title}</li></Link>)}
            </ul>
        )
    }
}


Blogs.defaultProps = {
    blogs: [{title: "another one"}]
}