import React from 'react'
import "./footer.css";
//import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <div>
    <div className="foot">
  <h1>Contact Us</h1>
  </div>
  <div className='blur'>
  <div className="row">
  <div className="column">
    <div className="card">
    
      <div className="container">
        <h3>Fee Details</h3>
        <p className="title">Mr Martin</p>
        <p>📞:5678906545</p>
        <p>📧:
        <a href='https://www.gmail.com'>martin@example.com</a>
        </p>
    
      </div>
    </div>
  </div>

  </div>
  <div className="column">
    <div className="card">
    
      <div className="container">
        <h3>Admission Details</h3>
        <p className="title">Mr PaulRaj</p>
        <p>📞:789067890</p>
        <p>📧:
        <a href='https://www.gmail.com'>rajpaul@example.com</a>
        </p>
        
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
     
      <div className="container">
        <h3>General</h3>
        <p className="title">Mrs Aaluma</p>
        <p>📞:567890980</p>
        <p>📧:
        <a href='https://www.gmail.com'>aalu@example.com</a>
        </p>
       
      </div>
    </div>
  </div>
  <div className='ccc'>
  <h3><center>©Copyright2023AdmissionPortal</center></h3>
  </div>
  </div>
</div> 
    


 



  )
}

export default Footer