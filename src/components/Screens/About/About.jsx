import React from "react";
import { Card, Button } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="aim">
        <img className="aboutImage" src={require("./About-us.png")} alt="" />
        <div>
          <h3 className="heading">About Comapny</h3>
          <p className="body">
            Fynii is working to revolutionize the way a student & fresher
            chooses his/her career. We are Creating world’s 1st platform for
            students and freshers to empower them in recognizing and choosing
            best career opportunities.
          </p>
        </div>
      </div>
      <div className="vision">
        <div>
          <h3 className="heading">Mission</h3>
          <div className="body">
            <li className="li-s">
              To make students & freshers aware & knowledgeable of the diverse
              set of careers to choose from.
            </li>
            <li className="li-s">
              To guide, mentor & support them in their initial career planning
              stages.
            </li>
            <li className="li-s">
              To develop the aptitude to handle personal and professional
              challenges.
            </li>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80"
          alt=""
        />
      </div>
      <div className="vision">
        <div>
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="body">
          <h3 className="heading">Vision</h3>
          <p>
            We want to create an ecosystem where students & freshers would be
            aware & knowledgeable and therefore will lead to greater career!
          </p>
        </div>
      </div>
    </div>
  );
}
