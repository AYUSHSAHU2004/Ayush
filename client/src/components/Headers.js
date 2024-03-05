import React from 'react'
import './Headers.css';
import Hamburger from './Hamburger';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box,AppBar,Toolbar,Button,Typography,Tabs,Tab} from '@mui/material'
import { Link } from 'react-router-dom'
function Headers() {
    const [style,changeStyle]=useState({
        transform:"translateY(-350px)"
    })
    const navigate = useNavigate();
    const [value,setValue]=useState();
    const handleLogout = async() =>{
        try{
            await alert('logout sucessfull');
            navigate('/login');
            localStorage.removeItem("userId");
        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
        <div className='nav' style={style} >

        <div className='close'  onClick={()=>changeStyle({transform:"translateY(-350px)"})}>
        <i className="fa-solid fa-bars"></i>
        </div>
        <div className='menu'>
            <Link to='/blogs'>Blogs</Link>
        </div>
        <div className='menu'>
            <Link to='/my-blogs'>UserBlogs</Link>
        </div>
        <div className='menu'>
            <Link to='/create-blogs'>Create-Blog</Link>
        </div>
        <div className='menu'>
            <Link to='/'>Home</Link>
        </div>
        <div className='menu'>
            <Link to='/login'>Login</Link>
        </div>
        <div className='menu'>
            <Link to='/register'>Register</Link>
        </div>
        <div className='menu'>
            <Link to='/Logout'>LogOut</Link>
        </div>
        


        </div>
        <div className='navbar' >
        {/* <Toolbar className='over'>
            <Typography className='title' variant='h6'>
               Insta Book
            </Typography> 


            <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
                <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab className='tabs' label="Blogs" LinkComponent={Link} to="/blogs"/>
                    <Tab className='tabs' label="My Blogs" LinkComponent={Link} to="/my-blogs"/>
                    <Tab className='tabs' label="Create Blogs" LinkComponent={Link} to="/create-blogs"/>

                </Tabs>
                 
            </Box>
            <Box display={'flex'} marginLeft={"auto"}>
                <Button className='buttons'  sx={{margin:1,color:'white'}} LinkComponent={Link} to="/">Homes</Button>
                <Button className='buttons' sx={{margin:1,color:'white'}} LinkComponent={Link} to="/login">Login</Button>
                <Button className='buttons' sx={{margin:1,color:'white'}} LinkComponent={Link} to="/register">Register</Button>
                <Button className='buttons' onClick={handleLogout} sx={{margin:1,color:'white'}} LinkComponent={Link} to="/logout">LogOut</Button>
            </Box> 

             
            <Hamburger />
        </Toolbar> */}
        
        <h1 className='title'>InstaBook</h1>
        <div className='ham' onClick={()=>changeStyle({transform:"translateY(0px)"})}>
        <i className="fa-solid fa-bars"></i>
        </div>
        </div>
       
            

        
    </>
  )
}

export default Headers