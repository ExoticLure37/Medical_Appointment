import React from 'react'
import Home from '../pages/Home';
import Services from "../pages/Services";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Docters from "../pages/Doctors/Docters";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import {Routes, Route} from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/doctors" element={<Docters/>} />
      <Route path="/doctors/:id" element={<DoctorDetails/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />      
    </Routes>
  )
}

export default Routers
