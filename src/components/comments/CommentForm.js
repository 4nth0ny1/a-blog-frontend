import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addComment from '../../actions/comments/addComment'
import editComment from '../../actions/comments/editComment'
import Form from 'react-bootstrap/Form';

class CommentForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            content: this.props.comment ? this.props.comment.content : "",
            signature: this.props.comment ? this.props.comment.signature : "",
            rank: this.props.comment ? this.props.comment.rank : 0,
            id: this.props.comment ? this.props.comment.id : "", 
            blog_id: this.props.comment ? this.props.comment.blog_id : ""
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        if(!this.props.comment){
            this.props.addComment(this.state)
        } else {
            this.props.editComment(this.state)
        }
        this.setState({ id: "", content: "", signature: "", rank: 0, blog_id: "" })
        this.props.history.push('/comments')
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    redirectOrRenderForm = () => {
        return (
            <div class="comment-page-container">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Control type="text" onChange={(event) => this.handleChange(event)} placeholder="content" value={this.state.content} name="content"/>
                    <Form.Control type="text" onChange={(event) => this.handleChange(event)} placeholder="signature" value={this.state.signature} name="signature"/>
                    <input type="submit" />
                </form>
            </div>
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

const mapStateToProps = state => {
    return {
        blogs: state.blog.blogs 
    }
}

export default withRouter(connect(mapStateToProps, { addComment, editComment })(CommentForm))