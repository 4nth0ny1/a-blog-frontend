
  export default function subjectReducer(state, action){
    switch(action.type){
        case "FETCH_SUBJECTS":
            return {
                subjects: action.payload
            }
        case "ADD_SUBJECT":
            return {
                subjects: [...state.subject, action.payload]
            }
        case "DELETE_SUBJECT":
            const newSubject = state.subjects.filter(subject => subject.id !== action.payload)
            return {
                subjects: newSubject
            }
        case "EDIT_SUBJECT": 
            const editSubject = state.subjects.map(subject => subject.id === action.payload.id ? action.payload : subject)
            return {
                subjects: editSubject
            }
        default: 
            return state
    }

}