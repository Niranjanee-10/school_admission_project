// import React, { useState } from 'react'
// import {Link} from 'react-router-dom';
// import Header from './Header';
// import { Box,Button } from '@mui/material';

// import './status.css'

// export default function StatusCheck() {
  

//   return (
    
//     <div>
//     <Header/>
  
//     <div className='stat'>
//     <h1><center>Exam Details</center></h1>
// 	<table border="1">
//     <center>
// 	<br/>
// 	<br/>
// 	<br/>
// 	<br/>
// 		<tr>
// 			<th>Class</th>
// 			<th>Exam Date</th>
			
// 		</tr>
// 		<tr>
// 			<td>Std I</td>
// 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
// 		</tr>
//         <tr>
// 			<td>Std II</td>
// 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
// 		</tr>	<tr>
// 			<td>Std III</td>
// 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
// 		</tr>	<tr>
// 			<td>Std IV</td>
// 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
// 		</tr>	<tr>
// 			<td>Std V</td>
// 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
// 		</tr>	<tr>
// 			<td>Std VI</td>
// 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
// 		</tr>	<tr>
// 			<td>Std VII</td>
// 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
// 		</tr>	<tr>
// 			<td>Std VIII</td>
// 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
// 		</tr>	<tr>
// 			<td>Std IX</td>
// 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
// 		</tr>	<tr>
// 			<td>Std XI</td>
// 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
// 		</tr>
//         </center>
// 	</table>
//     </div>
	
// 	<Box textAlign="center">
//           <Link to="/Fee"><Button variant="contained" color="primary" type="submit">
//             COMPLETED
//           </Button>
//           </Link>
// 		  </Box>


     
//     </div>
//   )
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

import './status.css';

export default function StatusCheck() {
	const nav=useNavigate(); 
  const handleButtonClick = () => {
    alert('Congratulations!You are admitted into NPM PUBLIC SCHOOL!');
    alert('Now you can pay the school fee in the portal! Your Admission Number is DDMM of Your dob');
	nav("/Fee");

  };

  return (
    <div>
      <Header />

      <div className='stat'>
        <h1>
          <center>Exam Details</center>
        </h1>
		<div>
        <table border='1'>
          <center>
           
            <tr>
              <th>Class</th>
              <th>Exam Date</th>
            </tr>
            <tr>
              <td>Std I</td>
              <td>
                <a href='https://forms.gle/vXnCCDmiCzwL7bmm9'>click for exam</a>
              </td>
            </tr>
			<tr>
			<td>Std II</td>
 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
 		</tr>	<tr>
 			<td>Std III</td>
 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
 		</tr>	<tr>
 			<td>Std IV</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
 		</tr>	<tr>
 			<td>Std V</td> 			
            <td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std VI</td> 			
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std VII</td>
 			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
			<td>Std VIII</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
		</tr>	<tr>
		<td>Std IX</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
 		</tr>	<tr>
 			<td>Std XI</td>
			<td><a href="https://forms.gle/vXnCCDmiCzwL7bmm9">click for exam</a></td>
			
 		</tr>
            
          </center>
        </table>
		</div>
      </div>

      <Box textAlign='center'>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          onClick={handleButtonClick}
        >
          COMPLETED
        </Button>
      </Box>
    </div>
  );
}
