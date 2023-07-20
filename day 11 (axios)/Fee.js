import React from 'react'
import { Button, TextField, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './fee.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Payment from './Payment';
import { useDispatch } from 'react-redux'
import { setUser } from './action'
import axios from "axios";


export default function Fee() {
  const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [mail,setMail]=React.useState('');
    const [rollnum,setRollnum]=React.useState('');

    const [std, setStd] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setStd(event.target.value);
  };
  const nav = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8080/fee",{
        name:name,
        mail:mail,
        rollnum:rollnum,
        std:std,
      }
      )
      .then((response)=>{

        console.log(response);
        nav("/Payment")
        dispatch(setUser(name));
      })
      .catch((error)=>{
        console.error(error);
      });
  
      
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

      <div>
        <Header/>
      </div>
      <form className='fee' >
        <center>
          <h1>Fee Payment</h1><br></br>
          <label>Name Of The Student</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br />
          <br></br>
          <label>Email</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          /><br />
          <br></br>
          <label>Roll Number</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="roll number"
            variant="outlined"
            type="int"
            value={rollnum}
            onChange={(e) => setRollnum(e.target.value)}
            required
          /><br />
          <br></br>
        
          
 
<div>
      <FormControl sx={{ m: 1, minWidth: 230 }}>
      <label>Standard</label>
      <br/>
      
        
        <Select
        
         placeholder='Standard'
          value={std}
          onChange={handleChange}
          autoWidth
          
        >
         
          <MenuItem value={1}>I-10,000</MenuItem>
          <MenuItem value={2}>II-15,000</MenuItem>
          <MenuItem value={3}>III-20,000</MenuItem>
          <MenuItem value={4}>IV-25,000</MenuItem>
          <MenuItem value={5}>V-30,000</MenuItem>
          <MenuItem value={6}>VI-35,000</MenuItem>
          <MenuItem value={7}>VII-40,000</MenuItem>
          <MenuItem value={8}>VIII-35,000</MenuItem>
          <MenuItem value={9}>IX-30,000</MenuItem>
          <MenuItem value={10}>X-25,000</MenuItem>
          <MenuItem value={11}>XI-20,000</MenuItem>
          <MenuItem value={12}>XII-18,000</MenuItem>
        </Select>
      </FormControl>
    </div>

          <br />
          <br></br>
        
      
         
       </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" type='submit'  onClick={handleLogin}>Pay Now</Button>
        </Box>
        <br></br>

        
      </form>
    </div>
  )
}



