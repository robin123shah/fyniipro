import React from "react";
import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import './course.css'
import Navbar from "../../Navigation/Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Course() {
  const [item1, setitem1] = useState("btn-1");
  const [item2, setitem2] = useState("btn-2");
  const [item3, setitem3] = useState("btn-3");
  const [item4, setitem4] = useState("btn-4");
  const [item5, setitem5] = useState("btn-5");
  useEffect(() => {
    const interval = setInterval(() => {
      const temp1 = item1;
      const temp2 = item2;
      const temp3 = item3;
      const temp4 = item4;
      const temp5 = item5;
      setitem1(temp2);
      setitem2(temp3);
      setitem3(temp1);
      setitem4(temp5);
      setitem5(temp4);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div>
        <nav style={{"marginTop":"5%"}} className="navu" id="dr"></nav>
        <div id="title">
          <h1
            className="big-heading"
            id="blink"
            style={{
              width:"100%",
              fontSize: "4rem",
              backgroundColor:"#96DEB2",
              color: "black",
            }}
          >
            Short term skill courses for your career growth!
          </h1>
        </div>
        <div>
          <div className="slider2" style={{}}>
            <input type="radio" name="toggle" id={item1} defaultChecked />
            <input type="radio" name="toggle" id={item2} />
            <input type="radio" name="toggle" id={item3} />
            <input type="radio" name="toggle" id={item4} />
            <input type="radio" name="toggle" id={item5} />
            <div className="slider-controls">
              <label htmlFor="btn-1" />
              <label htmlFor="btn-2" />
              <label htmlFor="btn-3" />
              <label htmlFor="btn-4" />
              <label htmlFor="btn-5" />
            </div>
            <ul className="slides">
              <li className="slide" style={{ backgroundColor: "#F9EBC8" }}>
                <div className="slide-content">
                  <h2 className="jnui">In real world, Only skill matters!</h2>
                </div>
                <p className="slide-image">
                  <img
                    src="https://images.unsplash.com/photo-1616337865743-bd29011bc36d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHNraWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                    alt="stuff"
                    width={320}
                    height={240}
                  />
                </p>
              </li>
              <li className="slide" style={{ backgroundColor: "#FEFBE7" }}>
                <div className="slide-content">
                  <h2 className="jnui">
                    Build your career by building skillsets.
                  </h2>
                </div>
                <p className="slide-image">
                  <img
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                    alt="stuff"
                    width={320}
                    height={240}
                  />
                </p>
              </li>
              <li className="slide" style={{ backgroundColor: "#DAE5D0" }}>
                <div className="slide-content">
                  <h2 className="jnui">Every course is carefully selected.</h2>
                </div>
                <p className="slide-image">
                  <img
                    src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400"
                    alt="stuff"
                    // width={320}
                    // height={240}
                  />
                </p>
              </li>
              <li className="slide" style={{ backgroundColor: "#A0BCC2" }}>
                <div className="slide-content">
                  <h2 className="jnui">Pay in EMIs.</h2>
                </div>
                <p className="slide-image">
                  <img
                    src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29pbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                    alt="stuff"
                    // width={320}
                    // height={240}
                  />
                </p>
              </li>
              <li className="slide" style={{ backgroundColor: "#F9EBC8" }}>
                <div className="slide-content">
                  <h2 className="jnui">
                    Hassle free, Easy to find &amp; Navigate Courses.
                  </h2>
                </div>
                <p className="slide-image">
                  <img
                    src="https://images.unsplash.com/photo-1615752865424-62638daceeae?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWFzeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                    alt="stuff"
                    // width={320}
                    // height={240}
                  />
                </p>
              </li>
            </ul>
          </div>
        </div>
        <section className="course-container">
          <MDBCard style={{ maxWidth: "33%" }}>
            <MDBCardImage
            style={{ height: "250px", width: "400px" }}
            src="https://images.unsplash.com/photo-1599634874901-e919c4fe1400?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWl0JTIwYm9tYmF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400"
            
              position="top"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle >
                Learn Web-Development from IIT Roorkee
              </MDBCardTitle>
              <MDBCardText className="So">
                <div className="fa-solid fa-user-graduate text">Begineer</div>
                <div className="fa-solid fa-clock">3 months </div>
                <div className="fa-solid fa-indian-rupee-sign">500</div>
              </MDBCardText>
              <MDBBtn href="./CoursePage" style={{ width: "100%" }}>
                Enroll
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard style={{ maxWidth: "33%" }}>
            <MDBCardImage
             style={{ height: "250px", width: "400px" }}
             src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVuaXZlcnNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
             
             position="top"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>Learn Quantum Computing from IBM</MDBCardTitle>
              <MDBCardText className="So" style={{ lineHeight: "2" }}>
                <div className="fa-solid fa-user-graduate text">Begineer</div>
                <div className="fa-solid fa-clock">3 months </div>
                <div className="fa-solid fa-indian-rupee-sign">500</div>
              </MDBCardText>
              <MDBBtn href="/" style={{ width: "100%" }}>
                Enroll
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard style={{ maxWidth: "33%" }}>
            <MDBCardImage
            style={{ height: "250px", width: "400px" }}
            src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
           
              position="top"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>Learn Data Science from Google</MDBCardTitle>
              <MDBCardText className="So" style={{ lineHeight: "2" }}>
                <div className="fa-solid fa-user-graduate text">Begineer</div>
                <div className="fa-solid fa-clock">3 months </div>
                <div className="fa-solid fa-indian-rupee-sign">500</div>
              </MDBCardText>
              <MDBBtn href="/" style={{ width: "100%" }}>
                Enroll
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </section>
        <Navbar/>
          <Footer/>
    </div>
  );
}
