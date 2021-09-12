import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

// export default function Navbar(props){
//     return (
       
//             <nav>
//                 <Link to="/subjects">All Subjects</Link>
//                 <br></br>
//                 <Link to="/subjects/new">New Subject</Link>
//                 <br></br>
//                 <Link to="/blogs">All Blogs</Link>
//                 <br></br>
//                 <Link to="/blogs/new">New Blog</Link>
//                 <br></br>
//             </nav>
      
//     )
// }
export default function NavbarFunction(props){
    return (
     
        <Navbar class="navbar-container" bg="dark" variant="dark" expand="lg">
            <div class="nav-title">
                <Navbar.Brand class="navbar-brand" href="/blogs">blogs</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <div class="nav-form">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2 search-bar"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </div>
                <div class="nav-links">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link href="/subjects">subjects</Nav.Link>
                        <Nav.Link href="/subjects/new">new subject</Nav.Link>
                        <Nav.Link href="/blogs/new">new blog</Nav.Link>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>



      )
    }