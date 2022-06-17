import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Screens/Register/Register"
import Yourself from '../Screens/Register/Yourself';

const Router = () => {
    const login = localStorage.getItem("login");
    console.log(login)

  return (
    <BrowserRouter>
    <Routes>
        {login && <Route path='/' element={<Register/>}/>}
        {login && <Route exact path='/Yourself' element={<Yourself/>}/>}
      
    </Routes>
    </BrowserRouter>
    )
}

export default Router
