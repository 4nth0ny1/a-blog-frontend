import React, { PureComponent } from 'react'
import Comments from './Comments'
import CommentForm from './CommentForm'
import { Route, Switch } from 'react-router-dom'
import Comment from './Comment'
import {connect} from 'react-redux'
import fetchComments from '../../actions/comments/fetchComments'

class CommentContainer extends PureComponent {
    
    componentDidMount(){
        this.props.fetchComments()
    }

    render(){
        
        return (
            <>
                <Switch>
                    <Route exact path="/comments">
                        <Comments comments={this.props.comments}/>
                    </Route>
                    <Route exact path="/comments/new">
                        <CommentForm />
                    </Route>
                    <Route exact path="/comments/:id" render={((routerProps) => <Comment comment={this.props.comments.find(comment => comment.id === parseInt(routerProps.match.params.id))} /> ) }/>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comment.comments 
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        fetchComments: () => dispatch(fetchComments())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)