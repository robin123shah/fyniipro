import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Screens/Register/Register"
import Yourself from '../Screens/Register/Yourself';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Checklogin from '../Screens/Register/Checklogin';

const Router = () => {
    let login = localStorage.getItem("token");
    // let navigate = useNavigate();
    // login === true ? navigate("/Home") : navigate("/Register");
    
  return (
    <BrowserRouter>
    {login !== "0" && <Navbar/>}
    <Routes>
      
        <Route path='/' element={<Checklogin/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Yourself' element={<Yourself/>}/> 

      
    </Routes>
    </BrowserRouter>
    )
}

export default Router
