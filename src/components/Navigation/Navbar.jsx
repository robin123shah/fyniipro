import React, { useState } from "react";
import "../styles/navbar.css"

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
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
    <nav className="nav">
      <a href="#" className="nav__brand">
        herdoy
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/Job" className="nav__link">
            Job
          </a>
        </li>
        <li className="nav__item">
          <a href="Internship" className="nav__link">
            Internship
          </a>
        </li>
        <li className="nav__item">
          <a href="Course" className="nav__link">
            Course
          </a>
        </li>
        <li className="nav__item">
          <a href="Logout" className="nav__link">
            {localStorage.getItem("username")}
          </a>
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
