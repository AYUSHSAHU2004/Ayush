import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
function My() {
    const [blogs,setBlogs] = useState([])
    const getUserBlogs = async() => {
        try{
            const id = localStorage.getItem('userId');
            const {data} = await axios.get(`http://localhost:8000/api/v1/blog/user-blog/${id}`);
            if(data?.success){
                setBlogs(data?.userBlog.blogs)
                
                
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getUserBlogs();
    },[])

  return (
    <div>
        <div style={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"center",gap:30}}>
    {blogs && blogs.map(blog => <BlogCard id={blog._id} isUser={true} time={blog.createdAt} title={blog.title} description = {blog.description} image={blog.image} />)}
    </div>
    </div>
  )
}

export default My