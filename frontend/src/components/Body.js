import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contactus from './Contactus';
import Admin from './Admin';
import DashBoard from '../AdminDashboard/DashBoard';
import Donardetails from '../AdminDashboard/Donardetails';
import UpdateDonar from '../AdminDashboard/UpdateDonar';
import DonarForm from '../AdminDashboard/DonarForm';
import AddBlood from '../AdminDashboard/AddBlood';
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
    <Route path="/DonarForm" element={<DonarForm/>}/>
    <Route path="/AddBlood" element={<AddBlood/>}/>
    <Route path="/Donardetails" element={<Donardetails/>}/>
    <Route path="/DashBoard/update/:iddonar" element={<UpdateDonar/>}/> 
    </Routes>
    </div>
    </>
  )
}

export default Body;