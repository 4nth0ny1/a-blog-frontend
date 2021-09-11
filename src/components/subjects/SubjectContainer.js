import React, { PureComponent } from 'react'
import Subjects from './Subjects'
import SubjectForm from './SubjectForm'
import { Route, Switch } from 'react-router-dom'
import Subject from './Subject'
import {connect} from 'react-redux'
import fetchSubjects from '../../actions/subjects/fetchSubjects'

class SubjectContainer extends PureComponent {

    componentDidMount(){
        this.props.fetchSubjects()
    }

    render(){
        
        return (
            <>
                <Switch>
                    <Route exact path="/subjects">
                        <Subjects subjects={this.props.subjects}/>
                    </Route>
                    <Route exact path="/subjects/new">
                        <SubjectForm />
                    </Route>
                    <Route exact path="/subjects/:id" render={((routerProps) => <Subject subject={this.props.subjects.find(subject => subject.id === parseInt(routerProps.match.params.id))} /> ) }/>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        subjects: state.subject.subjects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSubjects: () => dispatch(fetchSubjects())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SubjectContainer)