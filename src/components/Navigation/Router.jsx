import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Screens/Register/Register"
import Yourself from '../Screens/Register/Yourself';
import Navbar from './Navbar/Navbar';
import Checklogin from '../Screens/Register/Checklogin';
import Home from '../Screens/Home/Home';
// import Internship from '../Screens/internship/internship'
// import Course from '../Screens/Courses/Course';
// import Job from '../Screens/Job/job';
import SignIn from "../Screens/SignIn/SignIn"
const Router = () => {
    let login = localStorage.getItem("login");
    
  return (
    <BrowserRouter>
      {login === "true" && <Navbar/>}
    <Routes>

        <Route path='/' element={<Checklogin/>}/>
        <Route exact path='/SignIn' element={<SignIn/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Yourself' element={<Yourself/>}/> 
        <Route exact path='/Home' element={<Home/>}/>
        {/* <Route exact path='/internship' element={<Internship/>}/>
        <Route exact path='/course' element={<Course/>}/>
        <Route exact path='/job' element={<Job/>}/> */}
    </Routes>
    </BrowserRouter>
    )
}

export default Router
