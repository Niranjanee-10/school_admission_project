// import React from 'react';
// import { Button, TextField, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import './login.css';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';

// export default function Login() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const nav = useNavigate();

//   const handleLogin = () => {
//     e.preventDefault();

//     // try {
//     //   const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
//     //     name: name,
//     //     email: email,
//     //     password: password
//     //   });

//       // console.log(response); // You can handle the response accordingly based on your backend API

//       nav("/home");
//     // } catch (error) {
//     //   console.error('Error during login:', error);
//     //   // Handle login error, e.g., show an error message to the user
//     // }
//   };

//   return (
//     <div className='back'>
//       <Box
//         component="form"
//         noValidate
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: { sm: '1fr 1fr' },
//           gap: 2,
//         }}
//       ></Box>

//       <form className='login'>
//         <center>
//           <h1 className='log'>Login</h1><br />
//           {/* <label>Name</label><br />
//           <br />
//           <TextField
//             id="outlined-basic"
//             label="name"
//             variant="outlined"
//             type="text"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           /><br />
//           <br/> */}
//             <label>Email</label><br />
//           <br />

//           <TextField
//             id="outlined-basic"
//             label="email"
//             variant="outlined"
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           /><br />
//           <br />
//           <label>Password</label><br />
//           <br />
//           <TextField
//             id="outlined-basic"
//             label="password"
//             variant="outlined"
//             type="password"
//             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//             title="Must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           /><br />
//           <br />
//           <br />
//         </center>
//         <Box textAlign="center">
//           <Button variant="contained" color="primary" type='submit' onClick={handleLogin}>LOGIN</Button>
//         </Box>
//         <br />

//         <p><center>Don't have an Account? <Link to="/Signup">Signup</Link></center></p>
//       </form>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button,TextField,Box } from '@mui/material'
import './login.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Your login logic here...

    // After successful login, navigate to the homepage with the username as state
    navigate('/home', { state: { username: username } });
  };

  return (
    <div className='cent'>
      <div className='design'>
        <form className='login' onSubmit={handleLogin}>
          <center>
            <h1>Login</h1>
            <br />
            <label>Name</label>
            <br />
            <br />
            <TextField
              id='outlined-basic'
              label='username'
              variant='outlined'
              type='text'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Email</label>
            <br />
            <br />
            <TextField
              id='outlined-basic'
              label='email'
              variant='outlined'
              type='email'
              required
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <br />
            <TextField
              id='outlined-basic'
              label='password'
              variant='outlined'
              type='password'
              pattern='(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}'
              title='Must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long'
              required
            />
            <br />
            <br />
            <br />
          </center>
          <Box textAlign='center'>
            <Button variant='contained' color='primary' type='submit' style={{width:'100px'}}>
              LOGIN
            </Button>
          </Box>
          <br />
          <p>
            <center>
              Don't have an Account? <Link to='/signup'>Signup</Link>
            </center>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;