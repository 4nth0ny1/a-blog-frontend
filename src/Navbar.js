import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    return (
        <nav>
            <Link to="/subjects">All Subjects</Link>
            <br></br>
            <Link to="/subjects/new">New Subject</Link>
            <br></br>
            <Link to="/blogs">All Blogs</Link>
            <br></br>
            <Link to="/blogs/new">New Blog</Link>
            <br></br>
            <a href="/blogs">Refresh</a>
        </nav>
    )
}