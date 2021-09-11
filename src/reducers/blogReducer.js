const blogReducer = (state = { blogs: [] }, action) => {
    switch(action.type){
        case "FETCH_BLOGS":
            return {
                blogs: action.payload   
            }
        case "ADD_BLOG":
            return {
                blogs: [...state.blogs, action.payload]
            }
        case "DELETE_BLOG":
            
            const newBlog = state.blogs.filter(blog => blog.id !== action.payload)
            return {
                blogs: newBlog
            }
        case "EDIT_BLOG": 
            const editBlog = state.blogs.map(blog => blog.id === action.payload.id ? action.payload : blog)
            return {
                blogs: editBlog
            }
        default: 
            return state
    }
}

export default blogReducer