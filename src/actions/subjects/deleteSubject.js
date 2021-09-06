
export default function deleteSubject(subjectId){
    return (dispatch) => {
        const options = {
            method: "DELETE"
        }

        fetch(`http://localhost:3000/subjects/${subjectId}`, options)
        .then(res => res.json())
        .then(message => {
            dispatch({type: "DELETE_SUBJECT", payload: subjectId})
        })
    }
}