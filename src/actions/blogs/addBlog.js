export default function addBlog(blog){
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({blog})
        }

        fetch(`http://127.0.0.1:3000/blogs`, options)
        .then(res => res.json())
        .then(blog => {
            dispatch({type: "ADD_BLOG", payload: blog})
        })
    }
}