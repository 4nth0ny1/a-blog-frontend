import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addBlog from '../../actions/blogs/addBlog'
import editBlog from '../../actions/blogs/editBlog'
import Form from 'react-bootstrap/Form';


class BlogForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: this.props.blog ? this.props.blog.title : "",
            content: this.props.blog ? this.props.blog.content : "",
            signature: this.props.blog ? this.props.blog.signature : "",
            rank: this.props.blog ? this.props.blog.rank : 0,
            id: this.props.blog ? this.props.blog.id : "", 
            subject_id: this.props.blog ? this.props.blog.subject_id : "", 
            formatted_created_at: this.props.blog ? this.props.blog.formattedCreatedAt : "",
            // last_updated_at: this.props.blog ? this.props.blog.lastUpdatedAt : ""
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        if(!this.props.blog){
            this.props.addBlog(this.state)
        } else {
            this.props.editBlog(this.state)
        }
        this.setState({ id: "", title: "", content: "", signature: "", rank: 0, subject_id: "", formatted_created_at: this.props.blog.formattedCreatedAt})
        // this.setState({ id: "", title: "", content: "", signature: "", rank: 0, subject_id: "", formatted_created_at: this.props.blog.formattedCreatedAt, last_updated_at: this.props.blog.lastUpdatedAt })
        this.props.history.push('/blogs')
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    sortedSubjects = this.props.subjects.sort((a,b) => a.topic.toLowerCase() > b.topic.toLowerCase() ? 1 : -1 )

    redirectOrRenderForm = () => {
        return (
            <div class="blog-page-container">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Control type="text" onChange={(event) => this.handleChange(event)}  placeholder="title" value={this.state.title} name="title"/>
                    <Form.Control as="textarea" rows={3} type="text" onChange={(event) => this.handleChange(event)}  placeholder="content" value={this.state.content} name="content"/>
                    <Form.Control type="text" onChange={(event) => this.handleChange(event)} placeholder="signature" value={this.state.signature} name="signature"/>
                    <select name="subject_id" onChange={(event) =>this.handleChange(event)}>
                        {this.sortedSubjects.map ( subject => 
                            <option key={subject.id} value={subject.id}>{subject.topic}</option>
                        )}
                    </select>
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
        subjects: state.subject.subjects 
    }
}

export default withRouter(connect(mapStateToProps, { addBlog, editBlog })(BlogForm))