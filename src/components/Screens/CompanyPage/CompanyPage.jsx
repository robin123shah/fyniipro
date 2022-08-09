import React, { useState } from "react";
import Navbar2 from "../../Navigation/Navbar/Navbar2";
import Footer from "../Footer/Footer";
import "./Company.css";

export default function CompanyPage() {
  const [follow, usefollow] = useState("+ Follow");
  const [section,setsection] = useState("About")
  return (
    <div>
      <div className="CompanyBody">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px 20px 0 0",
          }}
        >
          <img
            alt="BackgroundImg"
            src={require("./1.jpg")}
            style={{
              height: "350px",
              borderRadius: "20px 20px 0 0 ",
              backgroundColor: "white",
            }}
          />
          <img
            alt="logo"
            src={require("./Delllogo.jpg")}
            className="CompanyLogo"
          />
          <div className="CompanyPageContentBox">
            <div className="CompanyPageContent">
              <h1 style={{ fontFamily: "system-ui" }}>Dell Technologies</h1>
            </div>
            <div className="CompanyPageContent">
              <h1 style={{ fontSize: "20px", color: "darkslategray" }}>
                We create technologies that drive human progress.
              </h1>
            </div>
            <div className="CompanyPageContent">
              <h1 style={{ fontSize: "15px", color: "GrayText" }}>
                IT Services and IT Consulting, Round Rock, Texas
              </h1>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <button
              className="companyButton"
              onClick={() => {
                follow === "+ Follow"
                  ? usefollow("Following")
                  : usefollow("+ Follow");
              }}
            >
              <h1
                style={{
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                {follow}
              </h1>
            </button>
            <a
              className="companyButton"
              href="https://www.dell.com/en-in"
              target="_blank"
              rel="noreferrer"
            >
              <h1
                style={{
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                {" "}
                Learn More
              </h1>
            </a>
            <button className="companyButton">
              <h1
                style={{
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                Share
              </h1>
            </button>
          </div>
          <hr style={{ color: "gray" }} />
          <div
            style={{
              overflow: "auto",
              "white-space": "nowrap",
            }}
          >
            <h1 onClick={()=> {setsection("About")}} className="companynav">About</h1>
            <h1 onClick={()=> {setsection("PaS")}} className="companynav">Product and services</h1>
            <h1 onClick={()=> {setsection("Job")}} className="companynav">Job</h1>
            <h1 onClick={()=> {setsection("Internship")}} className="companynav">Internship</h1>
            <h1 onClick={()=> {setsection("Life")}} className="companynav">Life@Dell</h1>
            <h1 onClick={()=> {setsection("Recog")}}className="companynav">Recognition</h1>
          </div>
        </div>
        {section === "About" && <div
          style={{
            backgroundColor: "white",
            borderRadius: " 10px 10px 10px 10px",
            padding: "30px",
          }}
        >
          <h1 style={{ fontFamily: "system-ui" }}>About</h1>
          <p>
            Technology drives human progress. This tenet is the core of our
            business and vision. Our customers and team members are integral to
            our continuing success as we provide the essential infrastructure
            for organizations to transform their digital futures.
          </p>
        </div>}
        {section === "PaS" && <div
          style={{
            backgroundColor: "white",
            borderRadius: " 10px 10px 10px 10px",
            padding: "30px",
            marginTop: "5px",
          }}
        >
          <h1 style={{ fontFamily: "system-ui" }}>Product and services</h1>
          <p>
            Technology drives human progress. This tenet is the core of our
            business and vision. Our customers and team members are integral to
            our continuing success as we provide the essential infrastructure
            for organizations to transform their digital futures.
          </p>
        </div>}
        {section === "Job" && <div
          style={{
            backgroundColor: "white",
            borderRadius: " 10px 10px 10px 10px",
            padding: "30px",
            marginTop: "5px",
          }}
        >
          <h1 style={{ fontFamily: "system-ui" }}>Job</h1>
          <div className="jobss">
            <div>
              <h2 style={{ fontFamily: "system-ui" }}>Create Job alert</h2>
              <p>Get notified when Dell technologies posted new jobs</p>
            </div>
            <button
              style={{
                backgroundColor: "white",
                border: "1px solid black",
                padding: "6px",
                borderRadius: "25px",
                height: "30px",
              }}
            >
              Create job alert
            </button>
          </div>
          <div></div>
          <div></div>
        </div>}
        {section === "Internship" && <div
          style={{
            backgroundColor: "white",
            borderRadius: " 10px 10px 10px 10px",
            padding: "30px",
            marginTop: "5px",
          }}
        >
          <h1 style={{ fontFamily: "system-ui" }}>Internship</h1>
          <p>
            Technology drives human progress. This tenet is the core of our
            business and vision. Our customers and team members are integral to
            our continuing success as we provide the essential infrastructure
            for organizations to transform their digital futures.
          </p>
        </div>} 
      </div>
      <Navbar2 />
      <Footer />
    </div>
  );
}
