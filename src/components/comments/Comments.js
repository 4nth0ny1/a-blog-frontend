import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import editComment from '../../actions/comments/editComment'
import Button from 'react-bootstrap/Button';
import App from '../../App.css';

class Comments extends PureComponent {

    render(){
        
        const sortedByRank = this.props.comments.sort((a,b) => b.rank - a.rank)

        const handleUpVote = (id, rank) => {  
            this.props.editComment({
                id: id, 
                rank: rank + 1
            })
        }       
        
        const handleDownVote = (id, rank) => {  
            this.props.editComment({
                id: id, 
                rank: rank - 1
            })
        }        

        return (
            <>
                <ul>
                    {sortedByRank.map((comment) =>
                    <React.Fragment key={comment.id}>
                        <div class="comment-container">
                            <div class="comment-button-container">
                                <Button variant="dark" onClick={() => handleUpVote(comment.id, comment.rank)}>+</Button>
                                {comment.rank}
                                <Button variant="dark" onClick={() => handleDownVote(comment.id, comment.rank)}>-</Button>
                            </div>
                            <div class="comment-content-container">
                                <Link to={`/comments/${comment.id}`}>
                                    <h2>{comment.content}</h2>
                                    <p>{comment.rank}</p>
                                    <p>Created by: {comment.signature}</p>
                                    <br></br>
                                </Link>
                            </div>
                        </div>
                    </React.Fragment>
                    )}
                </ul>
            </>
        )
    }
}

Comments.defaultProps = {
    comments: [{content: "another comment"}]
}

export default withRouter(connect(null, { editComment })(Comments))