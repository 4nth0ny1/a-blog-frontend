
export default function deleteBlog(blogId){
    return (dispatch) => {
        const options = {
            method: "DELETE"
        }

        fetch(`http://localhost:3000/blogs/${blogId}`, options)
        .then(res => res.json())
        .then(message => {
            dispatch({type: "DELETE_BLOG", payload: blogId})
        })
    }
}