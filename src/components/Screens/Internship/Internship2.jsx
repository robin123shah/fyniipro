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
      Title: "Smart Manufacturing using CNC Router",
      Company: "Aicte Idea Lab - Guru Nanak Institutions Technical Campus",
      Location: "WFH",
      Date: "23-09-2022",
      Stipend: "Unpaid",
      WorkType: "Part Time",
      Link:"https://internship.aicte-india.org/internship-details.php?uid=INTERNSHIP_16632020596322730b435de",
      img_src : require("../../Screens/Internship/img/internlogo/gnitc.png"),
      alt:"Logo"
    },
    {
      id: "1",
      Title: "Web Development",
      Company: "Zed Age Infotech",
      Location: "Suri",
      Date: "31-10-2022",
      Stipend: "Unpaid",
      WorkType: "Part Time",
      Link:"https://www.zedageinfotech.co.in/recruitment.php",
      img_src : require("../../Screens/Internship/img/internlogo/zedage.png"),
      alt:"Logo"
    },
    {
      id: "2",
      Title: "Documentation Assistant",
      Company: "DTDC Express Ltd.",
      Location: "Pan India",
      Date: "Not Available",
      Stipend: "Unpaid",
      WorkType: "Part Time",
      Link:"https://www.apprenticeshipindia.gov.in/apprenticeship/opportunity-view/5cc2e2f5af11374ab473b582",
      img_src : require("../../Screens/Internship/img/internlogo/dtdc.png"),
      alt:"Logo"
    },
    {
      id: "3",
      Title: "Quality Analyst Intern",
      Company: "Adobe",
      Location: "Bangalore",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/details/Non-Tech-Intern-BS_R123584?locationCountry=c4f78be1a8f14da0ab49ce1162348a5e&workerSubType=3ba4ecdf4893100b2f8d08d56d8d6c8e",
      img_src : require("../../Screens/Internship/img/internlogo/adobe.png"),
      alt:"Logo"
    },
    {
      id: "4",
      Title: "C++ Developer",
      Company: "Adobe",
      Location: "Noida",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/details/Tech-Intern-BS_R129379?locationCountry=c4f78be1a8f14da0ab49ce1162348a5e&workerSubType=3ba4ecdf4893100b2f8d08d56d8d6c8e",
      img_src : require("../../Screens/Internship/img/internlogo/adobe.png"),
      alt:"Logo"
    },
    {
      id: "4",
      Title: "C++ Developer",
      Company: "Adobe",
      Location: "Noida",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/details/SheSparks---C---Developer_R129386?locationCountry=c4f78be1a8f14da0ab49ce1162348a5e&workerSubType=3ba4ecdf4893100b2f8d08d56d8d6c8e",
      img_src : require("../../Screens/Internship/img/internlogo/adobe.png"),
      alt:"Logo"
    },
    {
      id: "5",
      Title: "Business Consultant",
      Company: "Adobe",
      Location: "Bangalore,Noida",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/details/SheSparks---Business-Consultant_R129183?locationCountry=c4f78be1a8f14da0ab49ce1162348a5e&workerSubType=3ba4ecdf4893100b2f8d08d56d8d6c8e",
      img_src : require("../../Screens/Internship/img/internlogo/adobe.png"),
      alt:"Logo"
    },
    {
      id: "6",
      Title: "Solution Architect",
      Company: "Adobe",
      Location: "Bangalore,Noida",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/details/Non-Tech-Intern-BS_R129182?locationCountry=c4f78be1a8f14da0ab49ce1162348a5e&workerSubType=3ba4ecdf4893100b2f8d08d56d8d6c8e",
      img_src : require("../../Screens/Internship/img/internlogo/adobe.png"),
      alt:"Logo"
    },
    {
      id: "7",
      Title: "AEM Intern",
      Company: "Adobe",
      Location: "Bangalore,Noida",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/details/Non-Tech-Intern-BS_R129181?locationCountry=c4f78be1a8f14da0ab49ce1162348a5e&workerSubType=3ba4ecdf4893100b2f8d08d56d8d6c8e",
      img_src : require("../../Screens/Internship/img/internlogo/adobe.png"),
      alt:"Logo"
    },
    {
      id: "8",
      Title: "Software Engineering Intern",
      Company: "Google",
      Location: "Bangalore",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://careers.google.com/jobs/results/80503484702433990-software-engineering-intern-summer-2023/?distance=50&employment_type=INTERN&location=India&q=",
      img_src : require("../../Screens/Internship/img/internlogo/google.png"),
      alt:"Logo"
    },
    {
      id: "9",
      Title: "Intern (Technical-Engineering)",
      Company: "Synopsys",
      Location: "Noida",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://sjobs.brassring.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25235&siteid=5359&PageType=JobDetails&jobid=1970413#jobDetails=1970413_5359",
      img_src : require("../../Screens/Internship/img/internlogo/synopsys.png"),
      alt:"Logo"
    },
    {
      id: "10",
      Title: "Intern (Technical-Engineering)",
      Company: "Synopsys",
      Location: "Bangalore",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://sjobs.brassring.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25235&siteid=5359&PageType=JobDetails&jobid=1971081",
      img_src : require("../../Screens/Internship/img/internlogo/synopsys.png"),
      alt:"Logo"
    },
    {
      id: "11",
      Title: "Intern (Technical-Engineering)",
      Company: "Synopsys",
      Location: "Hyderabad",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://sjobs.brassring.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25235&siteid=5359&PageType=JobDetails&jobid=1970899#jobDetails=1970899_5359",
      img_src : require("../../Screens/Internship/img/internlogo/synopsys.png"),
      alt:"Logo"
    },
    {
      id: "12",
      Title: "Software Engineering",
      Company: "Microsoft",
      Location: "US",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://careers.microsoft.com/us/en/job/1370686/Software-Engineering-PhD-Intern-Opportunities",
      img_src : require("../../Screens/Internship/img/internlogo/microsoft.png"),
      alt:"Logo"
    },
    {
      id: "13",
      Title: "Software Engineering",
      Company: "Microsoft",
      Location: "Paris, France",
      Date: "Not Available",
      Stipend: "Paid",
      WorkType: "Full Time",
      Link:"https://careers.microsoft.com/us/en/job/1464936/Software-Engineering-Internship-Opportunities-France-Start-date-Feb-March-2023",
      img_src : require("../../Screens/Internship/img/internlogo/microsoft.png"),
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

          <div class="col-lg-8">
            {InternshipData.map((e) => (<div class="box2">
              <a href="/Company">
              <div 
              className="box-inside"
              >
                <div className="img-box">
                  <img className="img_class" src = {e.img_src} alt = {e.alt} />
                </div>
                <div>
                  <h2 class="bigg" style={{"fontSize":"3rem"}}>{e.Title}</h2>
                  <p class="big">{e.Company}</p>
                </div>
                </div>
                <hr />

                <div class="row">
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
                </a>
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