import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminHeader';

import './adhome.css';
function AdminHome() {
   
    return (
       
        <>
            
        <AdminHeader/>
        <div className='adhome'>
        
    <h2 className='homehead'>NPM PUBLIC SCHOOL</h2>

    <p className='homep'><i>
    NPM SCHOOL is a community of learners including students, parents and staff who are dedicated to creating an academically rigorous, culturally caring and inclusive learning environment. We are Reaching Excellence in Academics and Changing History! Together, we are champions of knowledge, our communities, the environment and of our futures. REACH Achievers are goal-oriented, critical thinkers and community leaders who are dedicated to achieving the highest level of integrity and academic success.
 
The administration and staff are committed to providing a challenging and supportive learning environment where all students can succeed and reach their full potential. Every member participates in cycles of continuous learning and improvement that includes establishing high expectations, goal setting, planning, action and reflection. 
To this end, we seek to develop well-rounded students who exemplify health, wellness and character development using our core schoolwide expectations and values.
    </i></p>
  

        </div>
      
        </>
        
        
        );
}

export default AdminHome;
