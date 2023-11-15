import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contactus from './Contactus';
import Admin from './Admin';
import DashBoard from '../AdminDashboard.js/DashBoard';
import Donardetails from '../AdminDashboard.js/Donardetails';
import Patientdetails from '../AdminDashboard.js/Patientdetails';
import DonarForm from '../AdminDashboard.js/DonarForm';
import PatientForm from '../AdminDashboard.js/PatientForm';
import Stock from '../AdminDashboard.js/Stock';
const Body = () => {
  return (
    <>
    <div className='flex-1 overflow-y-auto'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contactus" element={<Contactus/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/DashBoard" element={<DashBoard/>}/>
    <Route path="/Donar" element={<Donardetails/>}/>
    <Route path="/Patient" element={<Patientdetails/>}/>
    <Route path="/Donarform" element={<DonarForm/>}/>
    <Route path="/Patientform" element={<PatientForm/>}/>
    <Route path="/Stock" element={<Stock/>}/>  
    </Routes>
    </div>
    </>
  )
}

export default Body;