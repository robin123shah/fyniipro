import React, { useState } from "react";
import "../../styles/navbar.css";
import "../../styles/app.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar ({showNavTab, setshowNavTab}) {
  const navigate = useNavigate();
//   const [dropdown, setDropdown] = useState(false);

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const onNavButtonPress = () => {
    setshowNavTab(!showNavTab);
    document.getElementById("myDropdown").classList.toggle("show");
  };

  const onLogoutPress = () => {
    localStorage.setItem("login", false);
    navigate("/");
  };

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav2" id="navbar">
        <img
        className="nav__brand"
          style={{
            width: "100px",
            // height: "38px",
            // overflow: "hidden",
            "margin-top": "9px",
            // height:"8vh",
          }}
          href="/Home"
          alt="img"
          src={require("./logo.png")}
        />
        
      <input
        className="top-input1 nav__item"
        type="text"
        placeholder="Search"
        name="search" 
      />
      {/* <button type="submit"><i class="fa fa-search"></i></button> */}
      <ul className={active}>
        <li className="nav__item"
        style={{ 
          backgroundColor: localStorage.getItem("activeNav") === "Home" ? "rgb(71, 153, 51)" : "",
          padding: localStorage.getItem("activeNav") === "Home" ? "10px": "",
          width: localStorage.getItem("activeNav") === "Home" ? "70%": "",
          borderRadius: localStorage.getItem("activeNav") === "Home" ?  "5px" : "",
          fontWeight: localStorage.getItem("activeNav") === "Home" ? "bold" : "",
        }}
          
        >
          <a href="/home" className="nav__link" onClick={()=> {localStorage.setItem("activeNav","Home")}} style={{ color: localStorage.getItem("activeNav") === "Home" ? "white" :"black"}}>
            Home
          </a>
        </li>
        <li className="nav__item"
                    style={{ 
                      // backgroundColor: localStorage.getItem("activeNav") === "Job" ? "rgb(71, 153, 51)" : "",
                      padding: localStorage.getItem("activeNav") === "Job" ? "10px": "",
                      borderRadius: localStorage.getItem("activeNav") === "Job" ?  "5px" : "",
                      fontWeight: localStorage.getItem("activeNav") === "Job" ? "bold" : "",
                    }}
        >
          <a href="/job" className="nav__link" onClick={()=> {localStorage.setItem("activeNav","Job")}} style={{ color: localStorage.getItem("activeNav") === "Job" ? "white" :"black"}}>
           Fresher Job
          </a>
        </li>
        <li className="nav__item"
          style={{ 
            
            backgroundColor: localStorage.getItem("activeNav") === "Internship" ? "rgb(71, 153, 51)" : "",
            padding: localStorage.getItem("activeNav") === "Internship" ? "10px": "",
            borderRadius: localStorage.getItem("activeNav") === "Internship" ?  "5px" : "",
            fontWeight: localStorage.getItem("activeNav") === "Internship" ? "bold" : "",
            width: localStorage.getItem("activeNav") === "Home" ? "70%": "",
            alignitems: localStorage.getItem("activeNav") === "Home" ? "center": "",

          }}
        >
          <a href="/Internship" className="nav__link" onClick={()=> {localStorage.setItem("activeNav","Internship")}} style={{ color: localStorage.getItem("activeNav") === "Internship" ? "white" :"black"}}>
            Internship
          </a>
        </li>
        {/* <li
          className="nav__item" 
          style={{ 
            
            backgroundColor: localStorage.getItem("activeNav") === "Course" ? "rgb(71, 153, 51)" : "",
            padding: localStorage.getItem("activeNav") === "Course" ? "10px": "",
            borderRadius: localStorage.getItem("activeNav") === "Course" ?  "5px" : "",
            fontWeight: localStorage.getItem("activeNav") === "Course" ? "bold" : "",
          }}

        
        >
          <a href="/course" className="nav__link" onClick={()=> {localStorage.setItem("activeNav","Course")}} style={{ color: localStorage.getItem("activeNav") === "Course" ? "white" :"black"}}>
            Course
          </a>
        </li> */}
        {localStorage.getItem("login") === "true" ?
        <li className="nav__item">
          <div>
          <button style={{"margin":"0"}} onClick={onNavButtonPress} class="dropbtn">
            {localStorage.getItem("username")}
          </button>
          </div>
          <div id="myDropdown" class="dropdown-content">
            <a className="profiledrop" href="/Profile">Profile</a>
            <a className="profiledrop" href="/Profile">Favourites</a>
            <button className="Logout-button profiledrop" onClick={onLogoutPress}>
              Logout
            </button>
          </div>
        </li>
        :
        <li className="nav__item">
          <button style={{"backgroundColor":"black","color":"#fff"}} onClick={()=> {navigate("/Register")}} class="dropbtn">
            Sign Up
          </button>
        </li>
}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
