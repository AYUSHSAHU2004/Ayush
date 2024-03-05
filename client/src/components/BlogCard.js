import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';




export default function BlogCard({id,isUser,time,title,description,image}) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const handleEdit =() =>{
    navigate(`/blog-details/${id}`)
  }
  const handleDelete = async() => {
    try{
      const {data} = await axios.delete(`http://localhost:8000/api/v1/blog/delete-blog/${id}`);
     
      
        
        alert('blog deleted');
        navigate(`/`);
     
    }catch(error){
      console.log(error)
    }
  }
 

  return (
    <Card sx={{ padding:'0 60px', maxWidth: 345,margin:'auto',boxShadow:'15px 15px 20px #ccc' }}>

      {isUser && (
        <Box display={'flex'}>
          <IconButton onClick={handleEdit}>
            <EditIcon></EditIcon>
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </Box>
      )}

      <CardHeader
        
        
        title={title}
        subheader={time}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}
