import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addSubject from '../../actions/subjects/addSubject'
import editSubject from '../../actions/subjects/editSubject'

class SubjectForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            topic: this.props.subject ? this.props.subject.topic : "",
            description: this.props.subject ? this.props.subject.description : "",
            id: this.props.subject ? this.props.subject.id : ""
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        if(!this.props.subject){
            this.props.addSubject(this.state)
        } else {
            this.props.editSubject(this.state)
        }
        this.setState({ id: "", topic: "", description: "" })
        this.props.history.push('/subjects')
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    redirectOrRenderForm = () => {
            return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.topic} name="topic"/>
                    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.description} name="description"/>
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

export default withRouter(connect(null, { addSubject, editSubject })(SubjectForm))