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

import{BrowserRouter,  Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
       
       
  
    
      
<Routes>

  <Route path="/Header" element={<Header/>}/>
  <Route path="/"  element={<Login/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  <Route path="/Admission" element={<Admission/>}/>
  <Route path="/Fee" element={<Fee/>}/>
  <Route path="/Final" element={<Final/>}/>
  <Route path="/Circular" element={<Circular/>}/>
  <Route path="/StatusCheck" element={<StatusCheck/>}/>

  <Route path="/Home" element={<Home/>}/>


 
  
  
  
   
</Routes>
</BrowserRouter>
      
    </div>
  );
}

export default App;
