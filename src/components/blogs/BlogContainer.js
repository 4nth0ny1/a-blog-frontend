import React, { PureComponent } from 'react'
import Blogs from './Blogs'
import BlogForm from './BlogForm'
import { Route, Switch } from 'react-router-dom'
import Blog from './Blog'
import {connect} from 'react-redux'
import fetchBlogs from '../../actions/blogs/fetchBlogs'

class BlogContainer extends PureComponent {
    
    componentDidMount(){
        this.props.fetchBlogs()
    }

    render(){
        
        return (
            <>
                <Switch>
                    <Route exact path="/blogs">
                        <Blogs blogs={this.props.blogs}/>
                    </Route>
                    <Route exact path="/blogs/new">
                        <BlogForm />
                    </Route>
                    <Route exact path="/blogs/:id" render={((routerProps) => <Blog blog={this.props.blogs.find(blog => blog.id === parseInt(routerProps.match.params.id))} /> ) }/>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogs: state.blog.blogs // blog.blogs - blog is the key from allReducers 
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        fetchBlogs: () => dispatch(fetchBlogs())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)