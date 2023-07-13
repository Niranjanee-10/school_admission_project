import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Header from './Header';

import './status.css'

export default function StatusCheck() {
  

  return (
    <div>
    <div>
    <Header/>
  
    <div className='stat'>
    <h1><center>Exam Details</center></h1>
	<table border="1">
    <center>
		<tr>
			<th>Class</th>
			<th>Exam Date</th>
			
		</tr>
		<tr>
			<td>Std I</td>
			<td>Monday(10/07/2023)</td>
			
		</tr>
        <tr>
			<td>Std II</td>
			<td>Tuesday(11/07/2023)</td>
			
		</tr>	<tr>
			<td>Std III</td>
			<td>Wednesday(12/07/2023)</td>
			
		</tr>	<tr>
			<td>Std IV</td>
			<td>Thursday(13/07/2023)</td>
			
		</tr>	<tr>
			<td>Std V</td>
			<td>Friday(14/07/2023)</td>
			
		</tr>	<tr>
			<td>Std VI</td>
			<td>Friday(14/07/2023)</td>
			
		</tr>	<tr>
			<td>Std VII</td>
			<td>Friday(14/07/2023)</td>
			
		</tr>	<tr>
			<td>Std VIII</td>
			<td>Friday(14/07/2023)</td>
			
		</tr>	<tr>
			<td>Std IX</td>
			<td>Saturday(15/07/2023)</td>
			
		</tr>	<tr>
			<td>Std XI</td>
			<td>Saturday(15/07/2023)</td>
			
		</tr>
        </center>
	</table>
    </div>

</div>
     
    </div>
  )
}
