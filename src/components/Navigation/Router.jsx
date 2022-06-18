import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Screens/Register/Register"
import Yourself from '../Screens/Register/Yourself';
import Navbar from './Navbar';
import Checklogin from '../Screens/Register/Checklogin';
import Home from '../Screens/Home/Home';
import Internship from '../Screens/internship/internship'
import Course from '../Screens/Home/Courses/Course';
const Router = () => {
    let login = localStorage.getItem("token");
    
  return (
    <BrowserRouter>
    {login === "0" && <Navbar/>}
    <Routes>
      
        <Route path='/' element={<Checklogin/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Yourself' element={<Yourself/>}/> 
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/internship' element={<Internship/>}/>
        <Route exact path='/course' element={<Course/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default Router
