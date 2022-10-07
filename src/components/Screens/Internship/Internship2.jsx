import React, { useState,useRef } from "react";
import "./internship.css";
import InternshipData from "./Internshipdata";
import "../Job/style.css";
import Navbar2 from "../../Navigation/Navbar/Navbar2";
import Internship from "./Internship";
import Footer from "../Footer/Footer";
import Modal from "./Modal";

export default function Intership() {
  const [showNavTab,setshowNavTab] = useState(false)
  const NavTabRef = useRef();

  const closeNavTab = e => {
    if(NavTabRef.current === e.target) {
      setshowNavTab(false)
    }
  }
  const [WkTypeGov, setWkTypeGov] = useState(false)
  const [WkTypeNGov, setWkTypeNGov] = useState(false)
  const [WkTypeWFH, setWkTypeWFH] = useState(false)
  const [WkTypePT, setWkTypePT] = useState(false)
  const [Title,setTitle] = useState('');
  const [Location,setLocation] = useState('');
  const [Company,setCompany] = useState('');

  // const [Inttopic, setInttopic] = useState("All");
  // const [location, setlocation] = useState("All");
  // const [Company, setCompany] = useState("All");
  // const [IntType, setIntType] = useState("All");
  // const [IntDuration, setDuration] = useState("All");
  const [showModal,setshowModal] = useState(false)
  const modalRef = useRef();

  const openModal = () => {
    setshowModal(prev => !prev)
  }

  const closeModal = e => {
    if(modalRef.current === e.target) {
      setshowModal(false)
    }
  }
  return (
    <React.Fragment>
    <div ref={modalRef} onClick={closeModal}>
      <Internship />
      {/* <Helmet>
        <script
          src="https://kit.fontawesome.com/08e9a53b4a.js"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/ca07ed316a.js"
          crossorigin="anonymous"
        ></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/flowbite@1.4.3/dist/flowbite.js"></script>
        <script src="https://unpkg.com/flowbite@1.4.3/dist/datepicker.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="./script.js" async defer></script>
        <script src="./slide.js"></script>
      </Helmet> */}
      <br></br>
      <br></br>
      <br></br>
      <div  ref={NavTabRef} onClick={closeNavTab} class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="filter-box">
              <h4>
                <strong>Topic</strong>
              </h4>
              <div>
                <input
                  type="search"
                  class="form-control rounded"
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g. Software"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <i
                  style={{
                    position: "absolute",
                    right: "5%",
                    "margin-top": "-25px",
                  }}
                  class="fas fa-search"
                ></i>
              </div>
              <br />

              <h4>
                <strong>Location</strong>
              </h4>
              <div>
                <input
                  type="search"
                  class="form-control rounded"
                  onChange={e => setLocation(e.target.value)}
                  placeholder="e.g. Delhi"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />

                <i
                  style={{
                    position: "absolute",
                    right: "5%",
                    "margin-top": "-25px",
                  }}
                  class="fas fa-search"
                ></i>
              </div>

              <br />

              <h4>
                <strong>Company</strong>
              </h4>
              <div>
                <input
                  type="search"
                  class="form-control rounded"
                  onChange={e => setCompany(e.target.value)}
                  placeholder="e.g. IBM"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <i
                  style={{
                    position: "absolute",
                    right: "5%",
                    "margin-top": "-25px",
                  }}
                  class="fas fa-search"
                ></i>
              </div>

              <br />

              {/* <h4>
                <strong>Starting Date</strong>
              </h4>
              <input type="date" size="30" class="form-control" />

              <br /> */}

              <select class="form-select">
                <option selected>
                  <strong>Type</strong>
                </option>
                <option value="1">Part time</option>
                <option value="2">Full time</option>
              </select>

              <br />
              <select class="form-select" placeholder="Duration">
                <option selected>
                  <strong>Duration</strong>
                </option>
                <option value="1">1 Week</option>
                <option value="2">2 Week</option>
                <option value="3">3 Week</option>
                <option value="4">4 Week</option>
                <option value="5">5 Week</option>
                <option value="6">6 Week</option>
                <option value="7">7 Week</option>
                <option value="8">8 Week</option>
                <option value="9">9 Week</option>
                <option value="10">10 Week</option>
                <option value="11">11 Week</option>
                <option value="12">12 Week</option>
              </select>

              <br />

              <div class="container">
                <ul class="ks-cboxtags">
                  <li className="li1">
                    <input onClick={()=>setWkTypeGov(!WkTypeGov)} type="checkbox" id="checkboxOne" />
                    <label for="checkboxOne">Govt.</label>
                  </li>

                  <li className="li2">
                    <input onClick={()=>setWkTypeNGov(!WkTypeNGov)} type="checkbox" id="checkboxTwo" />
                    <label for="checkboxTwo">Non-Govt.</label>
                  </li>
                  <li className="li3">
                    <input onClick={()=>setWkTypeWFH(!WkTypeWFH)} type="checkbox" id="checkboxThree" />
                    <label for="checkboxThree">WFH</label>
                  </li>
                  <li className="li4">
                    <input onClick={()=>setWkTypePT(!WkTypePT)} type="checkbox" id="checkboxFour" />
                    <label for="checkboxFour">Part Time</label>
                  </li>
                </ul>
              </div>

              <br />

              <select class="form-select">
                <option selected>
                  <strong>Stipend</strong>
                </option>
                <option value="unpaid">Unpaid</option>
                <option value="paid">Paid</option>
              </select>

              <br />

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Internship with job offer
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Work from home
                </label>
              </div>
            </div>
          </div>

          <div class="col-lg-8 internList">
            {InternshipData.InternshipData
              .filter(e=>e.Title.toLowerCase().includes(Title.toLowerCase()))
              .filter(e=>e.Location.toLowerCase().includes(Location.toLowerCase()))
              .filter(e=>e.Company.toLowerCase().includes(Company.toLowerCase())).map((e) => (
                ((WkTypeGov === false && WkTypeNGov === false && WkTypeWFH === false && WkTypePT === false) || (WkTypeGov === true && e.Type === "Govt.") || (WkTypeNGov === true && e.Type === "Non Govt.") || (WkTypeWFH === true && e.Type === "WFH") || (WkTypePT === true && e.Type === "Part Time")) 
              &&(<div class="box2">
              
                  <div className="internImageContainer" style={{display: "flex"}}>
                    <div className="intern-text-box" style={{flex: "5"}}>
                      <h2 className="intern-box-title" style={{flex: "1"}}>{e.Title}</h2>
                      <p class="intern-box-company">{e.Company}</p>
                    </div>
                    <div className="intern-img-box"><img src = {e.img_src} alt=""/></div>
                  </div>
                  <hr />

                  <div class="row internMetadata">
                    <div class="col-lg-6">
                      <p>
                        <i class="fa-solid fa-location-dot"></i> {e.Location}
                      </p>
                      <p>
                        <i class="fa-solid fa-briefcase"></i> {e.Stipend}
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <i class="fa-solid fa-calendar-check"></i> {e.Date}
                      </p>
                      <p>
                        <i class="fa-solid fa-user"></i> {e.WorkType}
                      </p>
                    </div>
                  </div>

                  <div class="grid-container">
                    <div className="btnn-content">
                      <a href={e.Link} rel="noreferrer" target="_blank" class="btnn">
                        <i style={{color:"white"}} class="fa-regular fa-hand"></i><a style={{color:"white"}} href={e.Link} rel="noreferrer" target="_blank"> Apply  </a>
                      </a>
                    </div>

                    <div className="btnn">
                      <i class="fa-regular fa-bookmark"></i> Save
                    </div>

                    <div onClick={openModal} className="btnn">
                      <i class="fa-solid fa-share-nodes"></i> Share
                    </div>

                  </div>
            </div>)))}
          </div>
        </div>
      </div>
      {console.log("1",showModal)}
      <Modal showModal= {showModal} setshowModal= {setshowModal}/>


      <Navbar2 showNavTab={showNavTab} setshowNavTab= {setshowNavTab}/>
      <Footer/>
    </div>
    </React.Fragment>
  );
}