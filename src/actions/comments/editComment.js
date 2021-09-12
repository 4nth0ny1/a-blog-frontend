export default function editComment(comment){
    return (dispatch) => {
        const options = {
            method: "PATCH", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({comment})
        }

        fetch(`http://localhost:3000/comments/${comment.id}`, options)
        .then(res => res.json())
        .then(comment => {
            dispatch({type: "EDIT_COMMENT", payload: comment})
        })
    }
}