import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'

export default class Subjects extends PureComponent {

    render(){
        return (
            <ul>
                {this.props.subjects.map((subject) => 
                <Link to={`/subjects/${subject.id}`}>
                    <li>{subject.topic}</li>
                    <li>{subject.description}</li>
                </Link>)}
            </ul>
        )
    }
}


Subjects.defaultProps = {
    subjects: [{topic: "another topic"}]
}