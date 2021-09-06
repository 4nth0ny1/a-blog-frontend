import React from 'react'
import BlogContainer from './components/blogs/BlogContainer'
import SubjectContainer from './components/subjects/SubjectContainer';
import Navbar from './Navbar'

function App(){
  return (
    <>
      <Navbar/>
      <BlogContainer/>
      <SubjectContainer/>
    </>
  )
}

export default App;