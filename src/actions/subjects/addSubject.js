export default function addSubject(subject){
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({subject})
        }

        fetch(`http://127.0.0.1:3000/subjects`, options)
        .then(res => res.json())
        .then(subject => {
            dispatch({type: "ADD_SUBJECT", payload: subject})
        })
    }
}