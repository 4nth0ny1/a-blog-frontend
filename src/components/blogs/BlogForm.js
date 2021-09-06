import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addBlog from '../../actions/blogs/addBlog'
import editBlog from '../../actions/blogs/editBlog'

class BlogForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: this.props.blog ? this.props.blog.title : "",
            content: this.props.blog ? this.props.blog.content : "",
            signature: this.props.blog ? this.props.blog.signature : "",
            rank: this.props.blog ? this.props.blog.rank : 0,
            id: this.props.blog ? this.props.blog.id : "", 
            subject_id: this.props.blog ? this.props.blog.subject_id : ""
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        if(!this.props.blog){
            this.props.addBlog(this.state)
        } else {
            this.props.editBlog(this.state)
        }
        this.setState({ id: "", title: "", content: "", signature: "", rank: 0, subject_id: "" })
        this.props.history.push('/blogs')
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    redirectOrRenderForm = () => {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.title} name="title"/>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.content} name="content"/>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.signature} name="signature"/>
                <input type="submit"/>
            </form>
        )
    }

    render() {
        return (
            <>
                {this.redirectOrRenderForm()}
            </>
        )
    }
}

export default withRouter(connect(null, { addBlog, editBlog })(BlogForm))