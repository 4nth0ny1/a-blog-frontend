export default function fetchBlogs(blogs){
    
    return (dispatch) => {
        
        fetch(`http://localhost:3000/blogs`)
        .then(res => res.json())
        .then(blogs => {
            
            dispatch({type: "FETCH_BLOGS", payload: blogs})
        })
    }
}