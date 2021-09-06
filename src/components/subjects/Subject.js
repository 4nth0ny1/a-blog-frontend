import { connect } from 'react-redux'
import deleteSubject from '../../actions/subjects/deleteSubject'
import {withRouter} from 'react-router-dom'
import SubjectForm from './SubjectForm'

function Subject(props){
    
    const handleClick = () => {
        props.deleteSubject(props.subject.id)
        props.history.push('/subjects')
    }

    return (
    <>
        <li>{props.subject && props.subject.topic}<button onClick={handleClick}>Delete</button></li>
        <SubjectForm subject={props.subject}/>
    </>
    )
}

export default withRouter(connect(null, { deleteSubject })(Subject))