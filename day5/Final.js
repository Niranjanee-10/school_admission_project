import React, { useState } from 'react'
import {Link} from 'react-router-dom';

import './final.css'

export default function Final() {
  

  return (
    <div className='final'>
    <h1><center>Payment Details</center></h1>
    <img src="https://media.istockphoto.com/id/1344977179/vector/green-check-mark-icon-isolated-on-white-background-3d-render-vector-illustration.jpg?s=612x612&w=0&k=20&c=kGiKOG7ZaXms_Tgy22OPqUsuDJLeaLP4IczKhTnyl6w=" width="500" height="500"/>
    <h1>Your payment was successful</h1>
      <p>thank you dor your payment.We will be in contact with more details shortly</p>
      <center><Link to="/Circular">Click for Reopening Details</Link></center>
    </div>
  )
}
