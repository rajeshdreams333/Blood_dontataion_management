import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contactus from './Contactus';
import Admin from './Admin';
import Donardetails from '../AdminDashboard.js/Donardetails';
import Patientdetails from '../AdminDashboard.js/Patientdetails';
;
const Body = () => {
  return (
    <>
    <div className='flex-1 overflow-y-auto'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contactus" element={<Contactus/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/Donar" element={<Donardetails/>}/>
    <Route path="/Patient" element={<Patientdetails/>}/>
    </Routes>
    </div>
    </>
  )
}

export default Body;