import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './login.css'
export default function() {
  return (
    <div>
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    ></Box>

        <form  className='login'>
        <center>
        <h1>Login</h1><br></br>
        <label>Email</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Password</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="password" variant="outlined" type="password" required/><br />
        <br></br>
        <br></br>
        </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >LOGIN</Button>
        </Box>
        <br></br>
        
        <p><center>Don't have an Account? <Link to="/Signup">Signup</Link></center></p>
        </form>

    </div>
  )
}