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
    
    <h2>🏫School Admission</h2>
    <Tabs sx={{marginLeft:'auto'}}  value={count} onChange={(e,count) => setCount(count)} textColor= 'navy'>
    <Link to="/Home"><Tab label="🏠Home" sx={{color:'black',textDecoration:'none',fontSize:'100%' }}/></Link>
    <Link to="/Aboutus"><Tab label="✍About Us" sx={{color:'black',textDecoration:'none',fontSize:'100%'}}/></Link>
    <Link to="/Login"><Tab label="Login" sx={{color:'black',textDecoration:'none',fontSize:'100%'}}/></Link>
    <Link to="/Signup"><Tab label="SignIn" sx={{color:'black',textDecoration:'none',fontSize:'100%'}}/></Link>
    <Link to="/Admission"><Tab label="Admission" sx={{color:'black',textDecoration:'none',fontSize:'100%'}} /></Link>
    </Tabs>
    
    </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

export default HeaderComponent