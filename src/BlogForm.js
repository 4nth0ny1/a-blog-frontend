import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addBlog from './actions/addBlog'
import editBlog from './actions/editBlog'

class BlogForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: this.props.blog ? this.props.blog.title : "",
            id: this.props.blog ? this.props.blog.id : ""
        }
    }


    handleSubmit(event) {
        event.preventDefault()
        if(!this.props.blog){
            this.props.addBlog(this.state)
        } else {
            this.props.editBlog(this.state)
        }
        this.setState({ title: "", id: "" })
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
                    <input type="submit"/>
                </form>
            )
    }

    render() {
        // debugger
        return (
            <>
            {this.redirectOrRenderForm()}
            </>
        )
    }
}

export default withRouter(connect(null, { addBlog, editBlog })(BlogForm))