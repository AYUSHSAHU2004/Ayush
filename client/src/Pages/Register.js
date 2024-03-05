import React from 'react'
import {Box,Typography,TextField,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Register() {
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
    name:'',
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
           const {data} = await axios.post('http://localhost:8000/api/v1/user/register',{username:inputs.name,email:inputs.email,password:inputs.password});
            if(data.success){
                alert("user registered successfully");
                navigate("/login");
            }
            
        // console.log({username:inputs.name,email:inputs.email,password:inputs.password})
        }catch(error){
            console.log("check error")
            alert("user already registered");
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <Box maxWidth={450} padding={9} borderRadius={10} display={"flex"} marginTop={5} boxShadow={"10px 10px 20px #ccc"} margin={"auto"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
    <Typography variant='h4' padding={3} textAlign={'center'}>Register now</Typography>
    <TextField margin='normal' onChange={handleChange} value={inputs.name} type='text' placeholder='Name' name='name'/>
    <TextField margin='normal' onChange={handleChange} value={inputs.email} type='text' placeholder='email' name='email'/>
    <TextField margin='normal' onChange={handleChange} value={inputs.password} type='text' placeholder='password' name='password'/>
    
    <Button  type='submit' color='primary' sx={{borderRadius:3,marginTop:3}} variant='contained'>Submit</Button>
    <Button onClick={()=>navigate("/login")}>Already Registered ? Please Login</Button>
    </Box>
    </form>
    </>
  )
}

export default Register