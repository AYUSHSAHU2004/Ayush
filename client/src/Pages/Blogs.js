import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import BlogCard from '../components/BlogCard'
function Blogs() {
  const [blogs,setBlogs] = useState([])
  const getAllBlogs = async() => {
    try{
        const {data} = await axios.get('http://localhost:8000/api/v1/blog/all-blog')
        if(data?.success){
            setBlogs(data?.blogs)
        }
    }catch(error){
        console.log(error)
    }
  }  
  useEffect(()=>{
    getAllBlogs();
  },[])
  return (
    <>  
    <div style={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"center",gap:30}}>
    {blogs && blogs.map(blog => <BlogCard id={blog?._id} isUser={localStorage.getItem("userId") === blog?.user?._id} time={blog?.createdAt} title={blog?.title} description = {blog?.description} image={blog?.image} />)}
    </div>
    
        
        
    </>
  )
}

export default Blogs