import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Checklogin() {
    let login = localStorage.getItem("token")
    let navigate = useNavigate()
    React.useEffect(()=>{login !== "0" ? navigate("/Home") : navigate("/Register")})
}
