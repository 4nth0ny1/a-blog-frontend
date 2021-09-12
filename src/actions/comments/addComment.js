export default function addComment(comment){
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({comment})
        }

        fetch(`http://127.0.0.1:3000/comments`, options)
        .then(res => res.json())
        .then(comment => {
            dispatch({type: "ADD_COMMENT", payload: comment})
        })
    }
}