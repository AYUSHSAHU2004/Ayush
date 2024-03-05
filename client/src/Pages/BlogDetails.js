import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Box,Button, InputLabel, TextField, Typography} from '@mui/material'
function BlogDetails() {
    const[inputs,setInputs] = useState({
       
     })
    const {id}=useParams();
    const navigate = useNavigate();
    const[blogs,setBlogs] = useState({});
    const getBlogDetails = async() => {
        try{
            const {data} =await axios.get(`http://localhost:8000/api/v1/blog/get-blog/${id}`)
            
            if(data?.success){
                setBlogs(data?.blog);
                setInputs({
                    title:data?.blog.title,
                    description:data?.blog.description,
                    image:data?.blog.image,

                })
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getBlogDetails()

        
    },[id])
    
     const handleChange =(e) =>{
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
     }
     const handleSubmit = async(e) =>{
    
        e.preventDefault()
        
        try{
            if(!id){
                alert("login first");
                navigate('/login')
                return
            }
            const {data} = axios.put(`http://localhost:8000/api/v1/blog/update-blog/${id}`,{
                title:inputs.title,
                description:inputs.description,
                image:inputs.image,
                user:id,
            })
            console.log(inputs);
            if(inputs){
                alert('blog edited')
                navigate('/my-blogs')
            }
            
    
    
        }catch(error){
            console.log(error);
        }
      }
  return (
    <>
        <form onSubmit={handleSubmit}>
        <Box border={3} borderRadius={10} padding={5} margin={'auto'} boxShadow={'10px 10px 20px #ccc'} width={'80%'}
         >
            <Typography  varient='h1' textAlign={'center'} fontWeight="bold" padding={3} color={'grey'} fontSize={50}>
                Edit A Post
            </Typography>
            <InputLabel sx={{mb:1,mt:2,fontSize:'24px',fontWeight:'bold'}}>Title</InputLabel>
            <TextField  name='title' value={inputs.title} onChange={handleChange} margin='normal' varient='outlined' required></TextField>

            <InputLabel sx={{mb:1,mt:2,fontSize:'24px',fontWeight:'bold'}}>
                description
            </InputLabel>
            <TextField required name='description' value={inputs.description} onChange={handleChange} margin='normal' varient='outlined'></TextField>

            <InputLabel sx={{mb:1,mt:2,fontSize:'24px',fontWeight:'bold'}}>image</InputLabel>
            <TextField required name='image' value={inputs.image} onChange={handleChange} margin='normal' varient='outlined'></TextField>
            <Button type='submit' color='primary' variant='contained' sx={{marginTop:'100px'}}>EDIT</Button>
        </Box>

    </form>
    
    </>
  )
}

export default BlogDetails