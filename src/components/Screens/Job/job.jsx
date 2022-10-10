import React from "react";
import "./style.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navigation/Navbar/Navbar";

export default function Job() {
  return (
    <React.Fragment>
      <Helmet>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/flowbite@1.4.3/dist/flowbite.js"></script>
        <script src="https://unpkg.com/flowbite@1.4.3/dist/datepicker.js"></script>
        <script
          src="https://kit.fontawesome.com/ca07ed316a.js"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/08e9a53b4a.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="filter-box">
              <h4>
                <strong>Topic</strong>
              </h4>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="e.g. Software"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <i
                  style={{
                    position: "absolute",
                    right: "5%",
                    marginTop: "-35px",
                  }}
                  className="fas fa-search"
                ></i>
              </div>

              <br />

              <h4>
                <strong>Location</strong>
              </h4>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="e.g. Delhi"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search"></i>
                </span>
              </div>

              <br />

              <h4>
                <strong>Experience</strong>
              </h4>
              <select className="form-select">
                <option selected>Work experience</option>
                <option value="1">0 Year</option>
                <option value="2">1 Year</option>
                <option value="3">2 Year</option>
              </select>

              <br />

              <h4>
                <strong>Subject</strong>
              </h4>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="e.g. Mathematics"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search"></i>
                </span>
              </div>

              <br />

              <h4>
                <strong>Organization</strong>
              </h4>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="e.g. Google"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search"></i>
                </span>
              </div>

              <br />

              <h4>
                <strong>Starting Date</strong>
              </h4>
              <input type="date" size="30" className="form-control" />

              <br />

              <div className="container">
                <ul className="ks-cboxtags">
                  <li>
                    <input type="checkbox" id="checkboxOne" />
                    <label for="checkboxOne">Government</label>
                  </li>

                  <li>
                    <input type="checkbox" id="checkboxThree" />
                    <label for="checkboxThree">Work from home</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxTwo" />
                    <label for="checkboxTwo">Non-Government</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxFour" />
                    <label for="checkboxFour">Part time</label>
                  </li>
                </ul>
              </div>

              <br />

              {/* <!-- Range --> */}
              <h4>
                <strong>Salary</strong>
              </h4>
              <div className="slidecontainer">
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  value="50000"
                  className="slider"
                  id="myRange"
                />
                <p>
                  Salary : <i className="fa-solid fa-indian-rupee-sign"></i>
                  <span id="demo"></span>
                </p>
              </div>

              <br />

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Future jobs
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Woman friendly
                </label>
              </div>

              <button className="btn__purple" id="trigger">
                Set job alert
              </button>

              <div className="modal__wrapper">
                <div className="modal__container">
                  <button className="close">&times;</button>
                  <h2 className="bigg">Job alert</h2>

                  <h4>Topic</h4>
                  <div className="input-group rounded">
                    <input
                      type="search"
                      className="form-control rounded"
                      placeholder="e.g. Software"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span
                      className="input-group-text border-0"
                      id="search-addon"
                    >
                      <i className="fas fa-search"></i>
                    </span>
                  </div>

                  <br />

                  <h4>Location</h4>
                  <div className="input-group rounded">
                    <input
                      type="search"
                      className="form-control rounded"
                      placeholder="e.g. Delhi"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span
                      className="input-group-text border-0"
                      id="search-addon"
                    >
                      <i className="fas fa-search"></i>
                    </span>
                  </div>

                  <br />

                  <h4>Organization</h4>
                  <div className="input-group rounded">
                    <input
                      type="search"
                      className="form-control rounded"
                      placeholder="e.g. Google"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span
                      className="input-group-text border-0"
                      id="search-addon"
                    >
                      <i className="fas fa-search"></i>
                    </span>
                  </div>

                  <br />

                  <div className="container">
                    <ul className="ks-cboxtags">
                      <li>
                        <input type="checkbox" id="checkboxOne" />
                        <label for="checkboxOne">Government</label>
                      </li>

                      <li>
                        <input type="checkbox" id="checkboxThree" />
                        <label for="checkboxThree">Work from home</label>
                      </li>
                      <li>
                        <input type="checkbox" id="checkboxTwo" />
                        <label for="checkboxTwo">Non-Government</label>
                      </li>
                      <li>
                        <input type="checkbox" id="checkboxFour" />
                        <label for="checkboxFour">Part time</label>
                      </li>
                    </ul>
                  </div>

                  <br />

                  <h4>How would you like to get informed?</h4>
                  <div className="container">
                    <ul className="ks-cboxtags">
                      <li>
                        <input type="checkbox" id="checkboxOne" />
                        <label for="checkboxOne">Message</label>
                      </li>

                      <li>
                        <input type="checkbox" id="checkboxThree" />
                        <label for="checkboxThree">e-mail</label>
                      </li>
                    </ul>
                  </div>

                  <div className="action">
                    <button className="btn__purple">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Job Details --> */}

          <div className="col-lg-8">
            <div className="box">
              {/* <img className="logo" src={require("./r.png")} alt="" /> */}
              <h2 className="bigg">Engineering Manager for Banking Team</h2>
              <p className="big">Razorpay</p>

              <hr />

              <div className="row">
                <div className="col-lg-6">
                  <p>
                    <i className="fa-solid fa-location-dot"></i>Bangalore
                  </p>
                  <p>
                    <i className="fa-solid fa-briefcase"></i> Salary/ CTC
                  </p>

                  <div className="tooltip">
                    <p>
                      <i className="fa-solid fa-building"></i> About
                    </p>
                    <span className="tooltiptext">
                      Note that the position of the tooltip text isn't very
                      good. Go back to the tutorial and continue reading on how
                      to position the tooltip in a desirable way.
                    </span>
                  </div>

                  {/* <!-- <div className="content">
                  <p><i className="fa-solid fa-building"></i> About</p>
                  <div className="hidden">
                    <h2>About</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsa deleniti soluta officia quae numquam. Accusamus
                      tempore culpa quas fuga quasi reprehenderit? Maiores
                      voluptatibus sit quas quod soluta ad blanditiis sed?
                    </p>
                  </div>
                </div> --> */}
                </div>

                <div className="col-lg-6">
                  <p>
                    <i className="fa-solid fa-calendar-check"></i> Last Date to
                    Apply
                  </p>
                  <p>
                    <i className="fa-solid fa-user"></i> Work Type
                  </p>
                </div>
              </div>

              {/* <!-- <p><i className="fa-solid fa-building"></i> About Company</p> --> */}

              <div className="grid-container">
                <div className="btnn">
                  <a
                    href="https://razorpay.com/jobs/?src%3Dcareers%26p%3DeyJwYWdlVHlwZSI6ImpkIiwiY3ZTb3VyY2UiOiJjYXJlZXJzIiwicmVxSWQiOjE3NjMsInJlcXVlc3RlciI6eyJpZCI6IiIsImNvZGUiOiIiLCJuYW1lIjoiIn0sInBhZ2UiOiJjYXJlZXJzIiwiYnVmaWx0ZXIiOi0xLCJjdXN0b21GaWVsZHMiOnt9fQ=="
                    target="_blank"
                  >
                    <i className="fa-regular fa-hand"></i> Apply
                  </a>
                </div>
                <div className="btnn">
                  <i className="fa-regular fa-bookmark"></i> Save
                </div>

                {/* <!-- <div className="btnn">
                <i className="fa-solid fa-share-nodes"></i> Share
              </div> --> */}

                <button className="view-modal">
                  <i className="fa-solid fa-share-nodes"></i> Share
                </button>
                <div className="popup">
                  {/* <!-- <span>Share</span> -->
                  <!-- <div className="close"><i className="uil uil-times"></i></div> -->
                <!-- </header> --> */}
                  <div className="content">
                    {/* <!-- <p>Share this link via</p> --> */}
                    <ul className="icons">
                      <a href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="/">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                      <a href="/">
                        <i className="fab fa-telegram-plane"></i>
                      </a>
                    </ul>
                    <p>Or copy link</p>
                    <div className="field">
                      <i className="url-icon uil uil-link"></i>
                      <input
                        type="text"
                        readonly
                        value="example.com/share-link"
                      />
                      <button>Copy</button>
                    </div>
                  </div>
                </div>

                {/* <script>
                const viewBtn = document.querySelector(".view-modal"),
                  popup = document.querySelector(".popup"),
                  close = popup.querySelector(".close"),
                  field = popup.querySelector(".field"),
                  input = field.querySelector("input"),
                  copy = field.querySelector("button");

                viewBtn.onclick = () => {
                  popup.classNameList.toggle("show");
                };
                close.onclick = () => {
                  viewBtn.click();
                  this.addEventListener("click")
                };

                copy.onclick = () => {
                  input.select(); //select input value
                  if (document.execCommand("copy")) {
                    //if the selected text copy
                    field.classNameList.add("active");
                    copy.innerText = "Copied";
                    setTimeout(() => {
                      window.getSelection().removeAllRanges(); //remove selection from document
                      field.classNameList.remove("active");
                      copy.innerText = "Copy";
                    }, 3000);
                  }
                };
              </script> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="script.js" async defer></script>
      <script src="slide.js"></script>
      <script src="app.js"></script>
      <Navbar />
    </React.Fragment>
  );
}
