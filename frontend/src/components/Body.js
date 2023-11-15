import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contactus from './Contactus';
import Admin from './Admin';
import DashBoard from '../AdminDashboard/DashBoard';
// import Donardetails from '../AdminDashboard/Donardetails';
// import Patientdetails from '../AdminDashboard/Patientdetails';
// import DonarForm from '../AdminDashboard/DonarForm';
// import PatientForm from '../AdminDashboard/PatientForm';
// import AddBlood from '../AdminDashboard/AddBlood';
// import BloodDetails from '../AdminDashboard/BloodDetails';
// import UpdateDonar from '../AdminDashboard/UpdateDonar';
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
    {/* <Route path="/Donar" element={<Donardetails/>}/>
    <Route path="/Patient" element={<Patientdetails/>}/>
    <Route path="/Donarform" element={<DonarForm/>}/>
    <Route path="/Patientform" element={<PatientForm/>}/>
    <Route path="/Addblood" element={<AddBlood/>}/>
    <Route path="/Blooddetails" element={<BloodDetails/>}/>
    <Route path="/Donar/update/:iddonar" element={<UpdateDonar/>}/>  */}
    </Routes>
    </div>
    </>
  )
}

export default Body;