import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './admission.css'
export default function() {
  return (
    <div>

        <form  className='admiss'>
        <center>
        <h1><center>Admission Form</center></h1><br></br>
        <label>Pupil's First Name</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="First Name" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Pupil's Last Name</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="List Name" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Pupil's Date Of Birth</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"   
        variant="outlined" type="date" required /><br />
        <br></br>
        <label>Birth Place</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Birth Place" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Regilion</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Religion" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Nationality</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Nationality" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Gender</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="gender" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Address</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="street address" 
        variant="outlined" type="text" required /><br />
        <br></br>
        </center>
        
       
        
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >Next</Button>
        </Box>
        <br></br>
       
        </form>

    </div>
  )
}