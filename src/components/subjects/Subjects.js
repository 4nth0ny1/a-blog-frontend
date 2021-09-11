import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'

export default class Subjects extends PureComponent {

    render(){
        return (
            <ul>
                {this.props.subjects.map((subject) =>
                <React.Fragment key={subject.id}>
                    <Link to={`/subjects/${subject.id}`}>
                        <li>Topic: {subject.topic}</li>
                        <li>Description: {subject.description}</li>
                        <br></br>
                    </Link>
                </React.Fragment>
                )}
            </ul>
        )
    }
}


Subjects.defaultProps = {
    subjects: [{topic: "another topic"}]
}