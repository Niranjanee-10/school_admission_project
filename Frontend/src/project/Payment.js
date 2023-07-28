// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Button,Box } from '@mui/material';
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Final from './Final';
// import { useSelector } from 'react-redux';
// import axios from "axios";

// import './pro.css'

// export default function Payment() {
//   const[name,setName]=useState('');
//   const[num,setNum]=useState('');
//   const[date,setDate]=useState('');
  
//   const[cvv,setCvv]=useState('');

  
//     const user = useSelector((state) => state.user)
//     const nav = useNavigate();

//     const handleLogin = (e) => {
//       e.preventDefault();
//       axios.post("http://localhost:8080/pay",{
//         name:name,
//         num:num,
//         date:date,
//         cvv:cvv,
//       }
//       )
//       .then((response)=>{
//         console.log(response);
//         nav("/Final")

//       })
//       .catch((error)=>{
//         console.error(error);
//       });
  
  

  
      
//     }
//   return (
//     <div className='pro'>
//       <React.Fragment>
//       <h1 style={{fontFamily:"cursive"}}>Here is your payment {user}</h1>
//       <Typography variant="h6" gutterBottom>
//         Payment method 
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cardName"
//             label="Name on card"
//             fullWidth
//             autoComplete="cc-name"
//             variant="standard"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cardNumber"
//             label="Card number"
//             fullWidth
//             autoComplete="cc-number"
//             variant="standard"
//             value={num}
//             onChange={(e) => setNum(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="expDate"
//             label="Expiry date"
//             fullWidth
//             autoComplete="cc-exp"
//             variant="standard"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cvv"
//             label="CVV"
//             helperText="Last three digits on signature strip"
//             fullWidth
//             autoComplete="cc-csc"
//             variant="standard"
//             value={cvv}
//             onChange={(e) => setCvv(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveCard" value="yes" />}
//             label="Remember credit card details for next time"
//           />
//         </Grid>
        
        
//         <Box textAlign="center">
//           <Button variant="contained" color="secondary" type='submit' onClick={handleLogin} >PROCEED</Button>
//         </Box>
        
//       </Grid>
//     </React.Fragment>
//     </div>
//   );
// }


import * as React from 'react';
//import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Final from './Final';
import { useSelector } from 'react-redux';
import axios from "axios";

import './pro.css'

export default function Payment() {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [numError, setNumError] = useState('');
  const [cvvError, setCvvError] = useState('');

  const user = useSelector((state) => state.user);
  const nav = useNavigate();

  
  // Validate num and cvv fields
  const validateDetails=()=>{
  if (num.trim() === '' || !/^\d{8}$/.test(num)) {
    setNumError('Please enter a valid 8-digit card number.');
    return;
  } else {
    setNumError('');
  }
  
  if (cvv.trim() === '' || !/^\d{3}$/.test(cvv)) {
    setCvvError('Please enter a valid 3-digit CVV.');
    return;
  } else {
    setCvvError('');
  }
}
  
  // Proceed with the payment if all validations pass
  const handleLogin = (e) => {
    e.preventDefault();
    validateDetails();
    console.log("hi");
    axios.post("http://localhost:8080/pay", {
      name: name,
      num: num,
      date: date,
      cvv: cvv,
    })
      .then((response) => {
        console.log("hi");
        console.log(response);
        nav("/Final");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <div className='pro'>
      <React.Fragment>
        <h1 style={{ fontFamily: "cursive" }}>Here is your payment {user}</h1>
        {/* <Typography variant="h6" gutterBottom>
          Payment method
        </Typography> */}
        <br/>
        <Grid container spacing={3}>
          {/* ... rest of the code ... */}
        </Grid>
        <Grid item xs={12} md={6}>
         <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            
            value={name}
            onChange={(e) => setName(e.target.value)}
          /></Grid>
          <br/>
        <Grid item xs={12} md={6}>
          <TextField
            required
            error={numError !== ''}
            helperText={numError}
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </Grid>
        <br/>
      <Grid item xs={12} md={6}>
           <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            error={cvvError !== ''}
            helperText={cvvError}
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </Grid>
        <br/>
        <Grid item xs={12}>
        <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
        <Box textAlign="center">
          <Button variant="contained" color="secondary" type='submit' onClick={handleLogin} >PROCEED</Button>
        </Box>
      </React.Fragment>
    </div>
  );
}
