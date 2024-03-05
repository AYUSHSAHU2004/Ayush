import React from 'react'
import {Box, Button, InputLabel, TextField, Typography} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Cb() {
    const id = localStorage.getItem('userId');
 const[inputs,setInputs] = useState({
    title:'',
    description:'',
    image:''
 })
 const navigate = useNavigate();
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
        const {data} = axios.post('http://localhost:8000/api/v1/blog/create-blog',{
            title:inputs.title,
            description:inputs.description,
            image:inputs.image,
            user:id,
        })
        if(data?.success){
            alert('blog created')
            navigate('/my-blogs')
        }
        


    }catch(error){
        
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <Box border={3} borderRadius={10} padding={5} margin={'auto'} boxShadow={'10px 10px 20px #ccc'} width={'80%'}
         >
            <Typography  varient='h1' textAlign={'center'} fontWeight="bold" padding={3} color={'grey'} fontSize={50}>
                Create A Post
            </Typography>
            <InputLabel sx={{mb:1,mt:2,fontSize:'24px',fontWeight:'bold'}}>Title</InputLabel>
            <TextField  name='title' value={inputs.title} onChange={handleChange} margin='normal' varient='outlined' required></TextField>

            <InputLabel sx={{mb:1,mt:2,fontSize:'24px',fontWeight:'bold'}}>
                description
            </InputLabel>
            <TextField required name='description' value={inputs.description} onChange={handleChange} margin='normal' varient='outlined'></TextField>

            <InputLabel sx={{mb:1,mt:2,fontSize:'24px',fontWeight:'bold'}}>image</InputLabel>
            <TextField required name='image' value={inputs.image} onChange={handleChange} margin='normal' varient='outlined'></TextField>
            <Button type='submit' color='primary' variant='contained' sx={{marginTop:'100px'}}>SUBMIT</Button>
        </Box>

    </form>
    </>
  )
}

export default Cb