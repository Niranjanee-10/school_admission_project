import React from 'react'
import { Button, TextField, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './fee.css'
import Header from './Header'
//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Final from './Final';

export default function Fee() {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
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
      <form className='fee' action='http://localhost:3000/Home'>
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
          /><br />
          <br></br>
          <label>Email</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="email"
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
            required
          /><br />
          <br></br>
        
          
 {/* <div>       

<label>Standard</label><br/>
<br/>


  <select>

    <option value="fruit">Fruit</option>

    <option value="vegetable">Vegetable</option>

    <option value="meat">Meat</option>

  </select>


</div> */}
<div>
      <FormControl sx={{ m: 1, minWidth: 230 }}>
      <label>Standard</label>
      <br/>
      
        
        <Select
        
         
          value={age}
          onChange={handleChange}
          autoWidth
          
        >
         
          <MenuItem value={10}>I-10,000</MenuItem>
          <MenuItem value={21}>II-15,000</MenuItem>
          <MenuItem value={22}>III-20,000</MenuItem>
          <MenuItem value={22}>IV-25,000</MenuItem>
          <MenuItem value={22}>V-30,000</MenuItem>
          <MenuItem value={22}>VI-35,000</MenuItem>
          <MenuItem value={22}>VII-40,000</MenuItem>
          <MenuItem value={22}>VIII-35,000</MenuItem>
          <MenuItem value={22}>IX-30,000</MenuItem>
          <MenuItem value={22}>X-25,000</MenuItem>
          <MenuItem value={22}>XI-20,000</MenuItem>
          <MenuItem value={22}>XII-18,000</MenuItem>
        </Select>
      </FormControl>
    </div>

          <br />
          <br></br>
        
      
         
       </center>
        <Box textAlign="center">
        <Link to="/Final"> <Button variant="contained" color="secondary" type='submit'>Pay Now</Button></Link> 
        </Box>
        <br></br>

        
      </form>
    </div>
  )
}



