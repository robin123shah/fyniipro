import React from "react";
import "./profile.css";

export default function Profile() {
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
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  alt=""
                  className="rounded-circlem"
                  width={150}
                />
                <div className="mt-3m">
                  <h3>NAME</h3>
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
                    <h5>Full Name</h5>
                  </div>
                  <div className="col-md-9m text-secondarym">Blah</div>
                </div>
                <br />
                <div className="rowm">
                  <div className="col-md-3m">
                    <h5>Email</h5>
                  </div>
                  <div className="col-md-9m text-secondarym">abc@gmail.com</div>
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
                  <div className="col-md-9m text-secondarym">Graduation</div>
                </div>

                <br />
                <div className="rowm">
                  <div className="col-md-3m">
                    <h5>Phone</h5>
                  </div>
                  <div className="col-md-9m text-secondarym">98488149865</div>
                </div>
                <br />
                <div className="rowm">
                  <div className="col-md-3m">
                    <h5>Address</h5>
                  </div>
                  <div className="col-md-9m text-secondarym">
                    Street no. 2, Marble Palace
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
