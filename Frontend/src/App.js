import React, { StrictMode } from 'react'
//import './App.css';
import Login from './project/Login';
import SignUp from './project/SignUp';
import Admission from './project/Admission';
import Header from './project/Header';
import Home from './project/Home';
import Fee from './project/Fee';
import Final from './project/Final';
import Circular from './project/Circular';
import StatusCheck from './project/StatusCheck'
import Payment from './project/Payment';
import Details from './project/Details';
import Admin from './project/Admin'
import First from './project/First';
import AdminLogin from './project/AdminLogin'
import AdminHome from './project/AdminHome';
import AdminHeader from './project/AdminHeader';
import AdminFee from './project/AdminFee';
import AdminFeedetails from './project/AdminFeedetails';
import FeedBack from './project/feedback';


 
import{BrowserRouter,  Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
       
       
  
    
      
<Routes>

  <Route path="/Header" element={<Header/>}/>
  <Route path="/" element={<First/>}/>
  <Route path="/login"  element={<Login/>}/>
  <Route path="/adminlogin"  element={<AdminLogin/>}/>
  <Route path="/AdminHeader"  element={<AdminHeader/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  <Route path="/Admission" element={<Admission/>}/>
  <Route path="/Fee" element={<Fee/>}/>
  <Route path="/Payment" element={<Payment/>}/>
  <Route path="/Final" element={<Final/>}/>
  <Route path="/Circular" element={<Circular/>}/>
  <Route path="/StatusCheck" element={<StatusCheck/>}/>
  <Route path="/Admin" element={<Admin/>}/>
  <Route path="/Details" element={<Details/>}/>
  <Route path="/AdminFee" element={<AdminFee/>}/>
  <Route path="/feedback" element={<FeedBack/>}/>
  <Route path="/AdminFeedetails" element={<AdminFeedetails/>}/>
  

  <Route path="/Home" element={<Home/>}/>
  <Route path="/AdminHome" element={<AdminHome/>}/>


 
  
  
  
   
</Routes>
</BrowserRouter>
      
    </div>
  );
}

export default App;
