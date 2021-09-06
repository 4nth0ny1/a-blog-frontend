export default function editSubject(subject){
    return (dispatch) => {
        const options = {
            method: "PATCH", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({subject})
        }

        fetch(`http://localhost:3000/subjects/${subject.id}`, options)
        .then(res => res.json())
        .then(subject => {
            dispatch({type: "EDIT_SUBJECT", payload: subject})
        })
    }
}