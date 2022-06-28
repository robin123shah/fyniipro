import React from "react";
import "../Courses/course.css"
import "../../styles/style.css"
import { useEffect, useState } from "react";
export default function Internship() {
  const [item1, setitem1] = useState("btn-1");
  const [item2, setitem2] = useState("btn-2");
  const [item3, setitem3] = useState("btn-3");
  const [item4, setitem4] = useState("btn-4");
  const [item5, setitem5] = useState("btn-5");
  // const [item6, setitem6] = useState("btn-6");
  useEffect(() => {
    const interval = setInterval(() => {
      const temp1 = item1;
      const temp2 = item2;
      const temp3 = item3;
      const temp4 = item4;
      const temp5 = item5;
      // const temp6 = item6;
      setitem1(temp2);
      setitem2(temp3);
      setitem3(temp4);
      setitem4(temp5);
      setitem5(temp1);
      // setitem6(temp1);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <section >
        <div className="slider2" style={{ marginTop: "5%" }}>
          <input type="radio" name="toggle" id={item1} defaultChecked />
          <input type="radio" name="toggle" id={item2} />
          <input type="radio" name="toggle" id={item3} />
          <input type="radio" name="toggle" id={item4} />
          <input type="radio" name="toggle" id={item5} />
          {/* <input type="radio" name="toggle" id={item6} /> */}
          <div className="slider-controls">
            <label htmlFor="btn-1" />
            <label htmlFor="btn-2" />
            <label htmlFor="btn-3" />
            <label htmlFor="btn-4" />
            <label htmlFor="btn-5" />
            {/* <label htmlFor="btn-6" /> */}
          </div>
          <ul className="slides">
            <li className="slide" style={{ backgroundColor: "#3CB371" }}>
              <div className="slide-content">
                <h2 className="jnui">In Internship, always choose learning over everything</h2>
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
            <li className="slide" style={{ backgroundColor: "#FFD700" }}>
              <div className="slide-content">
                <h2 className="jnui">
                Try to Intern at startup or relatively newer companies like Google, Fynii etc.
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
            <li className="slide" style={{ backgroundColor: "#FFC0CB" }}>
              <div className="slide-content">
                <h2 className="jnui">Internship will have great Impact on your career!</h2>
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
                <h2 className="jnui">Don't Intern with just any company! Be selective in choosing!!</h2>
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
                Pursue Internship to get ahead of your peers!
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
      </section>
    </div>
  );
}