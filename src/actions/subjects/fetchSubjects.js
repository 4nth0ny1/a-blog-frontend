export default function fetchSubjects(subjects){
    return (dispatch) => {
        fetch(`http://localhost:3000/subjects`)
        .then(res => res.json())
        .then(subjects => {
            dispatch({type: "FETCH_SUBJECTS", payload: subjects})
        })
    }
}