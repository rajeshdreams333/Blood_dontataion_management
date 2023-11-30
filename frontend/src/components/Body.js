import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contactus from './Contactus';
import Admin from './Admin';
import DashBoard from '../AdminDashboard/DashBoard';
import Donardetails from '../AdminDashboard/Donardetails';
import DonarForm from '../AdminDashboard/DonarForm';
import AddBlood from '../AdminDashboard/AddBlood';
import PatientForm from '../AdminDashboard/PatientForm';
import BloodStocks from '../AdminDashboard/BloodStocks';
const Body = () => {
  return (
    <>
    <div className='flex-1 overflow-y-visible'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contactus" element={<Contactus/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/DashBoard" element={<DashBoard/>}/>
    <Route path="/Dashboard/DonarForm" element={<DonarForm/>}/>
    <Route path="/Dashboard/AddBlood" element={<AddBlood/>}/>
    <Route path="/Dashboard/Donardetails" element={<Donardetails/>}/>
    <Route path="/Dashboard/PatientForm" element={<PatientForm/>}/>
    <Route path="/Dashboard/BloodStocks" element={<BloodStocks/>}/>
    {/* <Route path="/DashBoard/update/:iddonar" element={<UpdateDonar/>}/>  */}
    </Routes>
    </div>
    </>
  )
}

export default Body;