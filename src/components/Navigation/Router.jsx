import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Screens/Register/Register"
import Yourself from '../Screens/Register/Yourself';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Router = () => {
    const login = localStorage.getItem("login");
    console.log(login);
    let navigate = useNavigate();
    login === true ? navigate("/Home") : navigate("/Register");

  return (
    <BrowserRouter>
    {login && <Navbar/>}
    <Routes>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Yourself' element={<Yourself/>}/> 
        <switch>
          <Route exact path= "/Home" element={<h1>h1</h1>}/>
        </switch>
      
    </Routes>
    </BrowserRouter>
    )
}

export default Router
