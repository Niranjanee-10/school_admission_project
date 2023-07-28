import React from 'react'
import { Button, TextField, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './adminlogin.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function AdminLogin() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  //   console.log(email);
  //   console.log(password);
  nav("/adminhome")

    
  }

  return (
    <div className='back'>
      <Box
        component="form"
        noValidate
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 2,
        }}
      ></Box>

      <form className='adlogin'>
        <center>
          <h1 className='log'>Login</h1><br></br>
          <label>Email</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            

          /><br />
          <br></br>
          <label>Password</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <br></br>
          <br></br>
        </center>
        <Box textAlign="center">
          <Button variant="contained" color="primary" type='submit' onClick={handleLogin}>LOGIN</Button>
        </Box>
        <br></br>

      </form>
    </div>
  )
}
