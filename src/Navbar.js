import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    return (
        <nav>
            <Link to="/blogs">All Blogs</Link>
            <Link to="/blogs/new">New Blog</Link>
            <a href="/blogs">Refresh</a>
        </nav>
    )
}