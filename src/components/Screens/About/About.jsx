import React from "react";
import "../About/About.css";

export default function About() {
  return (
    <div className="aboutk">
      <div className="aimk">
        <img className="aboutImagek" src={require("./About-us.jpeg")} alt="" />
        <div>
          <h3 className="headingk">About Company</h3>
          <p className="bodyk">
            Fynii is working to revolutionize the way a student & fresher
            chooses his/her career. We are Creating world’s 1st platform for
            students and freshers to empower them in recognizing and choosing
            best career opportunities.
          </p>
        </div>
      </div>
      <div className="visionk">
        <div>
          <h3 className="headingk">Mission</h3>
          <div className="bodyk">
            <li className="li-sk">
              To make students & freshers aware & knowledgeable of the diverse
              set of careers to choose from.
            </li>
            <li className="li-sk">
              To guide, mentor & support them in their initial career planning
              stages.
            </li>
            <li className="li-sk">
              To develop the aptitude to handle personal and professional
              challenges.
            </li>
          </div>
        </div>
        <img
        className="aboutImagek"
          src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80"
          alt=""
        />
      </div>
      <div className="visionk">
        <div>
          <img
          className="aboutImagek"
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="bodyk">
          <h3 className="headingk">Vision</h3>
          <p>
            We want to create an ecosystem where students & freshers would be
            aware & knowledgeable and therefore will lead to greater career!
          </p>
        </div>
      </div>
    </div>
  );
}
