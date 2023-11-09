import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contactus from './Contactus';
import Admin from './Admin';
const Body = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contactus" element={<Contactus/>}/>
    <Route path="/admin" element={<Admin/>}/>

   </Routes>
    </>
  )
}

export default Body;