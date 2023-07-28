import React, { useState } from 'react'
import {Link} from 'react-router-dom';

import './final.css'

export default function Final() {
  

  return (
    <div className='final'>
    
    <h1><center>Payment Details</center></h1>

    <h1>Your payment was successful</h1>
      <p>thank you dor your payment.We will be in contact with more details shortly</p>
      <center><Link to="/Circular">Click for Reopening Details</Link></center>
    </div>
  )
}
