
export default function deleteComment(commentId){
    return (dispatch) => {
        const options = {
            method: "DELETE"
        }

        fetch(`http://localhost:3000/comments/${commentId}`, options)
        .then(res => res.json())
        .then(message => {
            dispatch({type: "DELETE_COMMENT", payload: commentId})
        })
    }
}