import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Headers.css';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import {Box,AppBar,Toolbar,Button,Typography,Tabs,Tab} from '@mui/material'
function Hamburger() {
    const navigate = useNavigate();
    let init = 1;
    const toggleBar = () => {
       
    }
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
    <div  className='ham'>
        <MenuIcon/>
        
    </div>
  )
}

export default Hamburger

