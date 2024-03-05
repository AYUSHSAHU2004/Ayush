import React from 'react'
import {Box,Typography,TextField,Button} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Login() {
    const navigate = useNavigate();
  const [inputs,setInputs] = useState({
   
    email:'',
    password:''
})
const handleChange =(e) => {
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}
const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       const {data} = await axios.post('http://localhost:8000/api/v1/user/login',{email:inputs.email,password:inputs.password});
        if(data.success){
            alert("user logined successfully");
            localStorage.setItem("userId",data?.user._id);
            navigate("/");
        } }catch(error){
            console.log("check error")
            const id = localStorage.getItem("userId");
            if(id){
              alert("user already logged in");
            }else{
              alert("register yourself first");
            }
            
        }
    }
  return (
    <>  
    <form onSubmit={handleSubmit}>
    <Box maxWidth={450} padding={9} borderRadius={10} display={"flex"} marginTop={5} boxShadow={"10px 10px 20px #ccc"} margin={"auto"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
    <Typography variant='h4' padding={3} textAlign={'center'}>Login now</Typography>
    
    <TextField margin='normal' onChange={handleChange}  type='text' placeholder='email' name='email'/>
    <TextField margin='normal' onChange={handleChange} type='text' placeholder='password' name='password'/>
    
    <Button  type='submit' color='primary' sx={{borderRadius:3,marginTop:3}} variant='contained'>Submit</Button>
    
    </Box>
    </form>
    
    </>
  )
}

export default Login