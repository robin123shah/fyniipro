import React from "react";
import Navbar2 from "../../Navigation/Navbar/Navbar2"
import "./About.css";
import Footer from "../Footer/Footer"

export default function About() {
  return (
    // <div className="about">
    //   <div className="aim">
    //     <img className="aboutImage" src={require("./About-us.jpeg")} alt="" />
    //     <div  className="bodyv">
    //       <h3 className="heading">About Company</h3>
    //       <p>
    //         Fynii is working to revolutionize the way a student & fresher
    //         chooses his/her career. We are Creating world’s 1st platform for
    //         students and freshers to empower them in recognizing and choosing
    //         best career opportunities.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="vision">
    //     <div>
    //       <h3 className="heading">Mission</h3>
    //       <div className="bodyv">
    //         <li className="li-s">
    //           To make students & freshers aware & knowledgeable of the diverse
    //           set of careers to choose from.
    //         </li>
    //         <li className="li-s">
    //           To guide, mentor & support them in their initial career planning
    //           stages.
    //         </li>
    //         <li className="li-s">
    //           To develop the aptitude to handle personal and professional
    //           challenges.
    //         </li>
    //       </div>
    //     </div>
    //     <img
    //       src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80"
    //       alt=""
    //       className="aboutImage"
    //     />
    //   </div>
    //   <div className="vision">
    //       <img
    //         src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    //         alt=""
    //         className="aboutImage"
    //       />
    //     <div className="bodyv">
    //       <h3 className="heading">Vision</h3>
    //       <p>
    //         We want to create an ecosystem where students & freshers would be
    //         aware & knowledgeable and therefore will lead to greater career!
    //       </p>
    //     </div>
    //   </div>
    //   <Navbar2/>
    //   <Footer/>
    // </div>


    <>
      <Navbar2/>
      <div className="about-section-container">
        <section className="about-company about">
          <div className="about-company-box about-box">
            <div className="about-company-content">
              <h3 className="about-page-heading">About Company</h3>
              <p>
                Fynii is working to revolutionize the way a student & fresher
                chooses his/her career. We are Creating world’s 1st platform for
                students and freshers to empower them in recognizing and choosing
                best career opportunities.
              </p>
            </div>
            <div className="about-company-image">
              <img className="about-company-img" src={require("./About-us.jpeg")} alt="" />
            </div>
          </div>
        </section>

        <section className="about-mission about">
          <div className="about-mission-box about-box">
            <div className="about-mission-image">
              <img
                src={require("./mission.jpg")}
                alt=""
                className="about-mission-img"
              />
            </div>
            <div className="about-mission-content">
              <h3 className="about-page-heading">Mission</h3>
              <ul className="about-mission-content-ul">
               <li className="about-mission-content-li">
                 To make students & freshers aware & knowledgeable of the diverse
                 set of careers to choose from.
               </li>
               <li className="about-mission-content-li">
                 To guide, mentor & support them in their initial career planning
                 stages.
               </li>
               <li className="about-mission-content-li">
                 To develop the aptitude to handle personal and professional
                 challenges.
               </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-vision about">
          <div className="about-vision-box about-box">
            <div className="about-vision-content">
              <h3 className="about-page-heading">Vision</h3>
              <p>
                We want to create an ecosystem where students & freshers would be
                aware & knowledgeable and therefore will lead to greater career!
              </p>
            </div>
            <div className="about-vision-image">
              <img
                src={require("./vision.jpg")}
                alt=""
                className="about-vision-img"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

//  https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80
// https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60