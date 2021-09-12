import { connect } from 'react-redux'
import deleteComment from '../../actions/comments/deleteComment'
import {withRouter} from 'react-router-dom'
import CommentForm from './CommentForm'

function Comment(props){
    const handleClick = () => {
        props.CommentForm(props.comment.id)
        props.history.push('/comments')
    }

    return (
    <>
        <div class="blog-page-container">
            <CommentForm comment={props.comment}/>
            <button onClick={handleClick}>Delete</button>
        </div>
    </>
    )
}

export default withRouter(connect(null, { deleteComment })(Comment))