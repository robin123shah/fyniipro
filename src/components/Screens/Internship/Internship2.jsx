import React, { useState,useRef } from "react";
import "./internship.css";
import Internship from "./Internship";
import Footer from "../Footer/Footer";
import Modal from "./Modal";
import Navbar2 from "../../Navigation/Navbar/Navbar2";

export default function Intership() {
  const [showNavTab,setshowNavTab] = useState(false)
  const NavTabRef = useRef();

  const closeNavTab = e => {
    if(NavTabRef.current === e.target) {
      setshowNavTab(false)
    }
  }

  const InternshipData = [
    {
      id: "0",
      Title: "Customer Success",
      Company: "Microsoft",
      Location: "Multiple",
      Date: "Not Available",
      // Stipend: "10000",
      WorkType: "Full Time",
      Link:"https://careers.microsoft.com/us/en/job/1452539/Customer-Success-Technology-Sales-Internship-Opportunity-for-University-Graduates",
      img_src : require("../../Screens/Internship/img/internlogo/microsoft.png"),
      alt:"Logo"
    },
    {
      id: "1",
      Title: "Quality Analyst Intern - SheSpark",
      Company: "Adobe",
      Location: "Bangalore",
      Date: "Not Available",
      // Stipend: "3000",
      WorkType: "Full Time",
      Link:"https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/details/Non-Tech-Intern-BS_R123584?locationCountry=c4f78be1a8f14da0ab49ce1162348a5e&workerSubType=3ba4ecdf4893100b2f8d08d56d8d6c8e",
      img_src : require("../../Screens/Internship/img/internlogo/adobe.png"),
      alt:"Logo"
    },
    
  ];

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

              <h4>
                <strong>Starting Date</strong>
              </h4>
              <input type="date" size="30" class="form-control" />

              <br />

              <select class="form-select">
                <option selected>
                  <strong>Type</strong>
                </option>
                <option value="1">Part time</option>
                <option value="2">Full time</option>
              </select>

              <br />
              <select class="form-select">
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
                  <li style={{"margin":"5px"}}>
                    <input type="checkbox" id="checkboxOne" />
                    <label for="checkboxOne">Government</label>
                  </li>

                  <li style={{"margin":"5px"}}>
                    <input type="checkbox" id="checkboxTwo" />
                    <label for="checkboxTwo">Non-Government</label>
                  </li>
                </ul>
              </div>

              <br />

              <select class="form-select">
                <option selected>
                  <strong>Stipend</strong>
                </option>
                <option value="0">Rs. 0</option>
                <option value="100">Rs. 100</option>
                <option value="1000">Rs. 1000</option>
                <option value="3000">Rs. 3000</option>
                <option value="5000">Rs. 5000</option>
                <option value="7000">Rs. 7000</option>
                <option value="10000">Rs. 10000</option>
                <option value="15000">Rs. 15000</option>
                
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

          <div class="col-lg-8">
            {InternshipData.map((e) => (<div class="box2">
              <div>
                <div style={{height:"80px"}}><img style={{position:"absolute","width":"80px","max-width":"100%","left":"82%","objectFit":"cover"}} src = {e.img_src} alt = {e.alt} /></div>
                <h2 class="bigg" style={{"fontSize":"3rem"}}>{e.Title}</h2>
                <p class="big">{e.Company}</p>

                <hr />

                <div class="row">
                  <div class="col-lg-6">
                    <p>
                      <i class="fa-solid fa-location-dot"></i> {e.Location}
                    </p>
                    <p>
                      <i class="fa-solid fa-briefcase"></i> {e.Stipend}
                    </p>
                    <p>
                      {/* <i class="fa-solid fa-building"></i> {e.About} */}
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
                <a  href={e.Link} rel="noreferrer" target="_blank" class="btnn">
                    <i class="fa-regular fa-hand"></i><a style={{color:"white"}} href={e.Link} rel="noreferrer" target="_blank"> Apply  </a>
                  </a>
                  <div class="btnn">
                    <i class="fa-regular fa-bookmark"></i> Save
                  </div>
                  <div onClick={openModal} class="btnn">
                    <i class="fa-solid fa-share-nodes"></i> Share
                  </div>
                </div>
              </div>
            </div>))}
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