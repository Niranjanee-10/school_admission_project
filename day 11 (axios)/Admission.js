import React from 'react'
import { Button,TextField,Box } from '@mui/material'
//import { Link } from 'react-router-dom'
import Header from './Header'
import './admission.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
export default function() {
  const [ fname,setFname] = useState("");
  const [ lname,setLname] = useState("");
  const [ dob,setDob] = useState("");
  const [ place,setPlace] = useState("");
  const [ religion,setReligion] = useState("");
  const [ nationality,setNationality] = useState("");
  const [ gender,setGender] = useState("");
  const [ address,setAddress] = useState("");
  const [ aadhar,setAadhar] = useState("");
  const [ birth,setBirth] = useState("");
  const [ report,setReport] = useState("");

  const nav=useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/admis",{
      fname:fname,
      lname:lname,
      dob:dob,
      place:place,
      religion:religion,
      nationality:nationality,
      gender:gender,
      address:address,
      aadhar:aadhar,
      birth:birth,
      report:report,
    }
    )
    .then((response)=>{
      console.log(response);
      nav("/StatusCheck")
    })
    .catch((error)=>{
      console.error(error);
    });
  }
  return (
    <div>
    <Header/>

        <form  className='admiss'>
        <center>
        <h1><center>Admission Form</center></h1><br></br>
        <label>Pupil's First Name</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"   label="First Name" 
        variant="outlined" type="text" required value={fname} onChange={(e) => setFname(e.target.value)}/><br />
        <br></br>
        <label>Pupil's Last Name</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Last Name" 
        variant="outlined" type="text" required value={lname} onChange={(e) => setLname(e.target.value)}/><br />
        <br></br>
        <label>Pupil's Date Of Birth</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"   
        variant="outlined" type="date" required value={dob} onChange={(e) => setDob(e.target.value)}/><br />
        <br></br>
        <label>Birth Place</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Birth Place" 
        variant="outlined" type="text" required value={place} onChange={(e) => setPlace(e.target.value)}/><br />
        <br></br>
        <label>Regilion</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Religion" 
        variant="outlined" type="text" required value={religion} onChange={(e) => setReligion(e.target.value)}/><br />
        <br></br>
        <label>Nationality</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Nationality" 
        variant="outlined" type="text" required value={nationality} onChange={(e) => setNationality(e.target.value)}/><br />
        <br></br>
        <label>Gender</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="gender" 
        variant="outlined" type="select" required value={gender} onChange={(e) => setGender(e.target.value)}/><br />
        <br></br>
        <label>Address</label><br></br>
        <br></br>
        <TextField id ="outlined-basic" label="full address" 
        variant="outlined" type="text" required value={address} onChange={(e) => setAddress(e.target.value)}/><br />
        <br></br>
        <label>Upload Aadhar</label><br></br>
        <br/>
        <TextField id ="outlined-basic"  
        variant="outlined" type="file" required value={aadhar} onChange={(e) => setAadhar(e.target.value)}/><br />
        <br></br>
        <label>Upload Birth Certificate</label><br></br>
        <br/>
        <TextField id ="outlined-basic"  
        variant="outlined" type="file" required value={birth} onChange={(e) => setBirth(e.target.value)}/><br />
        <br></br>
        <label>Upload Mark Sheets/Report Card</label><br></br>
        <br/>
        <TextField id ="outlined-basic"  
        variant="outlined" type="file" required value={report} onChange={(e) => setReport(e.target.value)}/><br />
        <br></br>
        
        <br/>
        

        </center>
        
       
        
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' onClick={handleLogin}>Register</Button>
        </Box>
        <br></br>
       
        </form>
       

    </div>
  )
}