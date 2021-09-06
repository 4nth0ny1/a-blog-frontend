export default function editBlog(blog){
    return (dispatch) => {
        const options = {
            method: "PATCH", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({blog})
        }

        fetch(`http://localhost:3000/blogs/${blog.id}`, options)
        .then(res => res.json())
        .then(blog => {
            dispatch({type: "EDIT_BLOG", payload: blog})
        })
    }
}