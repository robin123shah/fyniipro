import React, { useEffect,useRef } from "react";
import { useState } from "react";
import "./profile.css";

export default function Profile() {
  const [username, setusername] = useState("")
  const [email,setemail] = useState("")
  const [number,setnumber] = useState("")
  // const [birthday,setbirthday] = useState("")
  // const [password,setpassword] = useState("")
  const [you_are,setyou_are] = useState("")
  const [education_level,seteducation_level] = useState("")
  const [looking_for,setlooking_for] = useState("")  

  const [file, setFile] = useState("");
  function handleChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  function useHover() {
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(
      () => {
        // const ref.current = ref.current;
        if (ref.current) {
          ref.current.addEventListener("mouseover", handleMouseOver);
          ref.current.addEventListener("mouseout", handleMouseOut);
          return () => {
            ref.current.removeEventListener("mouseover", handleMouseOver);
            ref.current.removeEventListener("mouseout", handleMouseOut);
          };
        }
      },
      [ref.current] // Recall only if ref changes
    );
    return [ref, value];
  }

  const [hoverRef, isHovered] = useHover();

  useEffect(()=> {
    var getprofileData = "http://localhost:3001/getprofileData";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    fetch(getprofileData, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({username:localStorage.getItem("username")}),
    })
      .then((response) => response.json())
      .then((response) => {
        setusername(response.username);
        setemail(response.email);
        setnumber(response.number);
        // setbirthday(response.birthday);
        // setpassword(response.password);
        setyou_are(response.you_are);
        seteducation_level(response.education_level);
        setlooking_for(response.looking_for);
      })
      .catch((error) => {
        alert("Error" + error);
      });
  })

  return (
    <div class="containerm">
      <div className="main">
        <div className="topbar">
          <a href="/">logout</a>
        </div>
        <div className="rowm">
          <div className="col-md-4m mt-1m fix">
            <div className="cardm text-centerm sidebar">
              <div className="card-bodym">
                <img
                  src = {file === "" ? "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" : file } 
                  alt=""
                  className="rounded-circlem"
                  width={150}
                  height={450}
                />
                <input ref={hoverRef} type="file" accept="image/jpeg, image/png" onClick={(e) =>handleChange(e)} style={{"opacity":isHovered ? "1" : "0"}} className="ChangeProfilePic"/>
                <div className="mt-3m">
                  <h3>{username}</h3>
                  <p style={{ color: "black" }}>Aboutttttttttttttttttttttttt</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8m mt-1m">
            <div className="cardm mb-3m content">
              <h1 className="m-3m pt-3m">About</h1>
              <div className="card-bodym">
                <div className="rowm">
                  <div className="col-md-3m">
                    <h5>Name</h5>
                  </div>
                  <div className="col-md-9m text-secondarym">{username}</div>
                </div>
                <br />
                <div className="rowm">
                  <div className="col-md-3m">
                    <h5>Email</h5>
                  </div>
                  <div className="col-md-9m text-secondarym">{email}</div>
                </div>
                <br />
                <div className="rowm">
                  <div className="col-md-3m">
                    <h5>Password</h5>
                  </div>
                  <button className="col-md-9m text-secondarym">
                    Change Password
                  </button>
                </div>
                <br />
                <div className="rowm">
                  <div className="col-md-3m">
                    <h5>Education</h5>
                  </div>
                  <div className="col-md-9m text-secondarym">{education_level}</div>
                </div>

                <br />
                <div className="rowm">
                  <div className="col-md-3m">
                    <h5>Number</h5>
                  </div>
                  <div className="col-md-9m text-secondarym">{number}</div>
                </div>
                <br />
                <div className="rowm">
                  <div className="col-md-3m">
                    <h5>Looking For</h5>
                  </div>
                  <div className="col-md-9m text-secondarym">
                    {looking_for}
                  </div>
                </div>
                <br />
                <div className="rowm">
                  <div className="col-md-3m">
                    <h5>You are</h5>
                  </div>
                  <div className="col-md-9m text-secondarym">
                    {you_are}
                  </div>
                </div>
              </div>
            </div>
            <div className="cardm mb-3m content">
              <h1 className="m-3m">Saved Items</h1>
              <div className="card-bodym">
                <div className="rowmi">
                  <div
                    className="col-md-3m"
                    style={{
                      margin: "10px 20px",
                      backgroundColor: "#fff",
                      width: "90%",
                      borderRadius: "10px",
                    }}
                  >
                    <h5>Item1</h5>
                    <div className="col-md-9m text-secondarym">Description</div>
                  </div>
                  <div className="w-100m"></div>
                  <div
                    className="col-md-3m"
                    style={{
                      margin: "10px 20px",
                      backgroundColor: "#fff",
                      width: "90%",
                      borderRadius: "10px",
                    }}
                  >
                    <h5>Item2</h5>
                    <div className="col-md-9m text-secondarym">Description</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
