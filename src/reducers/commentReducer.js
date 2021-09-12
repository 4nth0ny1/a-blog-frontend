const commentReducer = (state = { comments: [] }, action) => {
    switch(action.type){
        case "FETCH_COMMENTS":
            return {
                comments: action.payload   
            }
        case "ADD_COMMENT":
            return {
                comments: [...state.comments, action.payload]
            }
        case "DELETE_COMMENT":
            
            const newComment = state.comments.filter(comment => comment.id !== action.payload)
            return {
                comments: newComment
            }
        case "EDIT_COMMENT": 
            const editComment = state.comments.map(comment => comment.id === action.payload.id ? action.payload : comment)
            return {
                comments: editComment
            }
        
        default: 
            return state
    }
}

export default commentReducer