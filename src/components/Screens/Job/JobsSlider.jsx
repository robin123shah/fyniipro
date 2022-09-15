import React from "react";
import { useEffect, useState } from "react";
import img from "./img/jobslider/Job1.jpg";
import img1 from "./img/jobslider/Job2.jpeg"
import img5 from "./img/jobslider/job5.jpg"
import img6 from "./img/jobslider/job6.jpg"

export default function Internship ({openModal}) {
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
      setitem3(temp4);
      setitem4(temp5);
      setitem5(temp1);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <section >
        <div className="slider3">
          <input type="radio" name="toggle" id={item1} defaultChecked />
          <input type="radio" name="toggle" id={item2} />
          <input type="radio" name="toggle" id={item3} />
          <input type="radio" name="toggle" id={item4} />
          <input type="radio" name="toggle" id={item5} />
          <div style={{"display" : openModal === "modal__wrapper active"?"none" :"block"}} className="slider-controls">
            <label htmlFor="btn-1" />
            <label htmlFor="btn-2" />
            <label htmlFor="btn-3" />
            <label htmlFor="btn-4" />
            <label htmlFor="btn-5" />
          </div>
          <ul className="slides">
            <li className="slide" style={{ backgroundColor: "#3CB371" }}>
            <div className="slide-content2" style={{width:"800px"}}>
                <h2 className="jnui">In Job, choose career growth over everything</h2>
              </div>
              <p className="slide-image2">
                <img
                  src={img}
                  alt="stuff"
                  className="internslideimg"
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#FFD700" }}>
            <div className="slide-content2" style={{width:"800px"}}>
                <h2 className="jnui">
                At every job you should either learn or earn . Either is fine . Both is best . But if it's neither , quit!
                </h2>
              </div>
              <p className="slide-image2">
                <img
                  src={img1}
                  alt="stuff"
                  className="internslideimg"
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#FFC0CB" }}>
            <div className="slide-content2" style={{width:"800px"}}>
                <h2 className="jnui">Job selection must be based on your skillset, passion & interest.</h2>
              </div>
              <p className="slide-image2">
                <img
                  src={img6}
                  alt="stuff"
                  className="internslideimg"
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#A0BCC2" }}>
            <div className="slide-content2" style={{width:"800px"}}>
                <h2 className="jnui">Select a Job wisely viz. Industry, company, growth etc.</h2>
              </div>
              <p className="slide-image2">
                <img
                  src={img5}
                  alt="stuff"
                  className="internslideimg"
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#F9EBC8" }}>
            <div className="slide-content2" style={{width:"800px"}}>
                <h2 className="jnui">
                Working in startups are great!
                </h2>
              </div>
              <p className="slide-image2">
                <img
                  src={img5}
                  alt="stuff"
                  className="internslideimg"
                />
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}