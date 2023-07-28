import React,{useState} from 'react';
import { AppBar,Toolbar,Tabs,Tab,Typography,Button} from '@mui/material';
import {Link} from 'react-router-dom';
import './header.css';
function HeaderComponent() {
  const [count, setCount] = useState();
  return (
    <React.Fragment>
    <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
    <Toolbar>
    
    <h2>✒️NPM PUBLIC SCHOOL</h2>
 
    <Tabs sx={{marginLeft:'auto'}}  value={count} onChange={(e,count) => setCount(count)} textColor= 'navy'>
    <Link to="/Admission"><Tab label="Admission" sx={{color:'black',textDecoration:'none',fontSize:'100%' }}/></Link>
    <Link to="/StatusCheck"><Tab label="Status Check" sx={{color:'black',textDecoration:'none',fontSize:'100%'}}/></Link>
 
    <Link to="/Fee"><Tab label="Fee Payment" sx={{color:'black',textDecoration:'none',fontSize:'100%'}} /></Link>
    <Link to="/FeedBack"><Tab label="FeedBack" sx={{color:'black',textDecoration:'none',fontSize:'100%'}} /></Link>
    </Tabs>
  
    
    </Toolbar>
    </AppBar>
    <h1><center></center></h1>
    </React.Fragment>
    
  )
}

export default HeaderComponent