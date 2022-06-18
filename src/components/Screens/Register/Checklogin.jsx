import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checklogin() {
    const login = localStorage.getItem("login")
    let navigate = useNavigate()
    login !== "0" ? navigate("/Home") : navigate("/Register")
}
