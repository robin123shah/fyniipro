import React, { useState } from "react";
import "../../styles/navbar.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  const [dropdown,setDropdown] = useState(false)

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const onNavButtonPress = () =>
  {
    setDropdown(!dropdown)
    document.getElementById("myDropdown").classList.toggle("show");
  }

  const onLogoutPress = () =>
  {
    localStorage.setItem("login",false)
    navigate("/")
  }


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
      <a href="/Home" className="nav__brand">
      <img style = {{ "width": "80px","height": "38px","overflow": "hidden","margin-top": "6px"}} alt= "img" src={require('./logo.png')} /> 
      </a>
      <input className="top-input" type="text" placeholder="Search" name="search"/>
      {/* <button type="submit"><i class="fa fa-search"></i></button> */}
      <ul className={active}>
        <li className="nav__item">
          <a href="/Home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/job" className="nav__link">
            Job
          </a>
        </li>
        <li className="nav__item">
          <a href="/internship" className="nav__link">
            Internship
          </a>
        </li>
        <li className="nav__item">
          <a href="/course" className="nav__link">
            Course
          </a>
        </li>
        <li className="nav__item">
          <button onClick={onNavButtonPress} class="dropbtn">
            {localStorage.getItem("username")}
            </button>
            <div id="myDropdown" class="dropdown-content">
              <a href="/">Profile</a>
              <button class= "Logout-button" onClick={onLogoutPress}>Logout</button>
            </div>
        </li>
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

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as Icons from "react-icons/fa";
// import "../styles/navbar.css"
// import { navItems } from "./NavItems";
// import Button from "../JSfile/Button";
// import Dropdown from "../JSfile/Dropdown";

// function Navbar() {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/" className="navbar-logo">
//           NATURE
//           <Icons.FaTree />
//         </Link>
//         <ul className="nav-items">
//           {navItems.map((item) => {
//             if (item.title === "Services") {
//               return (
//                 <li
//                   key={item.id}
//                   className={item.cName}
//                   onMouseEnter={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link to={item.path}>{item.title}</Link>
//                   {dropdown && <Dropdown />}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link to={item.path}>{item.title}</Link>
//               </li>
//             );
//           })}
//         </ul>
//         <Button />
//       </nav>
//     </>
//   );
// }

// export default Navbar;