// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Button, TextField, Box } from '@mui/material'
// import { Link } from 'react-router-dom'
// import './signup.css'
// //import SignUpService from './SignUpService'
// import axios from "axios";

// export default function SignUp() {
//   const[name,setName]=useState('');
//   const[mail,setMail]=useState('');

//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [passwordError, setPasswordError] = useState('')
//   const navigate=useNavigate();
//   //const NavigateHeader;

//   const validatePassword = () => {
//     if (password !== confirmPassword) {
//       setPasswordError('Passwords do not match')
//     } else if (password.length < 6) {
//       setPasswordError('Password should be at least 6 characters long')
//     } else {
//       setPasswordError('password correct')
//     }
//   }

//   const handleSignUp = (e) => {
//     e.preventDefault()
//     console.log("sri rama jayam");
//     validatePassword();
//     // Perform signup logic here if all fields are valid
//     if (passwordError==='password correct') {
//       // Perform signup logic
//       console.log("hii");
//       //navigate('/Home');
     
     
//     }else{
//       console.log("error")
//     }
   
//     axios.post("http://localhost:8080/add",{
//       name:name,
//       mail:mail,
//       password:password,
//       confirmPassword:confirmPassword,

//     }
//       )
//     .then((response)=>{
//       console.log(response);
//       navigate('/Home');
      
//     })
//     .catch((error)=>{
//       console.error(error);
//     });
//   };

//   return (
//     <div className='back'>
//       <form className='signup' >
//         <center>
//           <h1 className='sign'>SignUp</h1>
//           <br />
//           <label>Name</label>
//           <br />
//           <br />
//           <TextField id="outlined-basic" label="name" variant="outlined" type="text" required value={name} onChange={(e)=>setName(e.target.value)} />
//           <br />
//           <br />
//           <label>Email</label>
//           <br />
//           <br />
//           <TextField id="outlined-basic" label="email" variant="outlined" type="email" required value={mail} onChange={(e)=>setMail(e.target.value)} />
//           <br />
//           <br />
//           <label>Password</label>
//           <br />
//           <br />
//           <TextField
//             id="outlined-basic"
//             label="password"
//             variant="outlined"
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <br />
//           <label>Confirm Password</label>
//           <br />
//           <br />
//           <TextField
//             id="outlined-basic"
//             label="confirm"
//             variant="outlined"
//             type="password"
//             required
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           {passwordError && <p className="error">{passwordError}</p>}
//         </center>
//         <br/>
//         <Box textAlign="center">
//           <Button variant="contained" color="secondary" type="submit" onClick={handleSignUp}>
//             SIGNUP
//           </Button>
//         </Box>
//         <p>
//           <center>
//             Have an Account? <Link to="/login">Login</Link>
//           </center>
//         </p>
//       </form>
//     </div>
//   )
// }
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './signup.css';
import axios from 'axios';

export default function SignUp() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long');
    } else {
      setPasswordError('password correct');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("sri rama jayam");
    // validatePassword();

    // if (passwordError === 'password correct') {/
    //   axios.post("http://:8181/api/v1/auth/register", {
    //     name: name,
    //     mail: mail,
    //     password: password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     // Registration success, you can handle the response accordingly
    //     navigate('/Home');
    //   })
    // } 
    // .catch((error) => {
    //   console.error(error);
    //   // Registration failed, you can handle the error accordingly
    // });
    // // else {
    // //   console.log("error");
    // // }
    axios
      .post("http://127.0.0.1:8181/api/v1/auth/register", {
        name: name,
        email: mail,
        password: password,
      })
      .then((response) => {
        console.log(response);
        navigate('/Home');
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='back'>
      <form className='signup'>
        <center>
          <h1 className='sign'>SignUp</h1>
          <br />
          <label>Name</label>
          <br />
          <br />
          <TextField id="outlined-basic" label="name" variant="outlined" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <br />
          <label>Email</label>
          <br />
          <br />
          <TextField id="outlined-basic" label="email" variant="outlined" type="email" required value={mail} onChange={(e) => setMail(e.target.value)} />
          <br />
          <br />
          <label>Password</label>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <label>Confirm Password</label>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="confirm"
            variant="outlined"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </center>
        <br />
        <Box textAlign="center">
          <Button variant="contained" color="primary" type="submit" onClick={handleSignUp}>
            SIGNUP
          </Button>
        </Box>
        <p>
          <center>
            Have an Account? <Link to="/login">Login</Link>
          </center>
        </p>
      </form>
    </div>
  );
}
