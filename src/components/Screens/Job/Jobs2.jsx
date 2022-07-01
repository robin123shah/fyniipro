import React from "react";
// import { Helmet } from "react-helmet";
import "./Jobs.css";
import Aiimslogo from "./img/aiimslogo.png"
import PEClogo from "./img/PEClogo.png"
import ICMRlogo from "./img/ICMRlogo.jpg"

import "./style.css";
import Navbar from "../../Navigation/Navbar/Navbar";
import Jobs from "./Jobs";
import Footer from "../Footer/Footer";
export default function Intership() {
  const InternshipData = [

    {
      id: "0",
      Title: "Stenographer",
      Company: "Aims",
      Location: "Bilaspur",
      Date: "27-1-2023",
      Stipend: "18750",
      WorkType: "Full Time",
      About: "Aims is government Medical Institute",
      Link:"https://becilregistration.com/Home/ListofExam.aspx",
      img_src : Aiimslogo,
      alt:"Aiimslogo"
    },
    {
      id: "1",
      Title: "Proffesor/ Associate Professor",
      Company: "Punjab Engineering College",
      Location: "Chandigarh",
      Date: "11-07-2022",
      Stipend: "may vary",
      WorkType: "Full Time",
      About: "PEC is an engineering institute ..",
      Link:"https://pec.ac.in/jobs/advt-pec-recruitment-faculty-01-2022",
      img_src : PEClogo,
      alt:"Aiimslogo"
    },
    {
      id: "2",
      Title: "Assistance Professor",
      Company: "ICMR",
      Location: "New Delhi",
      Date: "18-07-2022",
      Stipend: "may vary",
      WorkType: "Full Time",
      About: "ICMR is a medical research institute.",
      Link:"https://recruit.icmr.org.in/",
      img_src : ICMRlogo,
      alt:"Logo"
    },
    {
      id: "3",
      Title: "Physicist",
      Company: "IBM",
      Location: "Noida",
      Date: "27-1-2023",
      Stipend: "3000",
      WorkType: "Full Time",
      About: "Marble Palace is a millionare Company",
      Link:"/",
      img_src : "",
      alt:"Logo"
      
    },
    {
      id: "4",
      Title: "Software Engineer",
      Company: "IBM",
      Location: "Deoria",
      Date: "27-1-2023",
      Stipend: "0",
      WorkType: "Part Time",
      About: "Marble Palace is a millionare Company",
      Link:"/",
      img_src : "",
      alt:"Logo"
    },
  ];

  // const [Inttopic, setInttopic] = useState("All");
  // const [location, setlocation] = useState("All");
  // const [Company, setCompany] = useState("All");
  // const [IntType, setIntType] = useState("All");
  // const [IntDuration, setDuration] = useState("All");

  return (

    <React.Fragment>
      <Jobs/>
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
      <div class="container">
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
                  s
                />
                <i
                  style={{
                    position: "absolute",
                    right: "5%",
                    marginTop:"-25px",
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
                    marginTop:"-25px"
                  }}
                  class="fas fa-search"
                ></i>
              </div>

              <br />

              <h4>
                <strong>Experience</strong>
              </h4>
              <div>
              <select class="form-select">
                <option selected>
                  <strong>Work Experience</strong>
                </option>
                <option value="1">Part time</option>
                <option value="2">Full time</option>
              </select>
                {/* <i
                  style={{
                    position: "absolute",
                    right: "5%",
                    "margin-top": "-20px",
                  }}
                  class="fas fa-search"
                ></i> */}
              </div>

              <br />
              <h4>
                <strong>Subject</strong>
              </h4>
              <div>
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="e.g. Mathematics"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />

                <i
                  style={{
                    position: "absolute",
                    right: "5%",
                    marginTop:"-25px",
                  }}
                  class="fas fa-search"
                ></i>
              </div>

              <br />
              <h4>
                <strong>Organization</strong>
              </h4>
              <div>
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="e.g. Google"
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

              {/* <select class="form-select">
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

              <br /> */}

              <div class="container">
                <ul class="ks-cboxtags">
                  <li style={{"margin":"5px"}}>
                    <input type="checkbox" id="checkboxOne" />
                    <label >Government</label>
                  </li>

                  <li style={{"margin":"5px"}}>
                    <input type="checkbox" id="checkboxTwo" />
                    <label >Non-Government</label>
                  </li>
                  <li style={{"margin":"5px"}}>
                    <input type="checkbox" id="checkboxTwo" />
                    <label >Work From Home</label>
                  </li>
                  <li style={{"margin":"5px"}}>
                    <input type="checkbox" id="checkboxTwo" />
                    <label >Part Time</label>
                  </li>
                </ul>
              </div>

              <br />

              {/* <select class="form-select">
                <option selected>
                  <strong>Salary</strong>
                </option>
                <option value="0">Rs. 0</option>
                <option value="100">Rs. 100</option>
                <option value="1000">Rs. 1000</option>
                <option value="3000">Rs. 3000</option>
                <option value="5000">Rs. 5000</option>
                <option value="7000">Rs. 7000</option>
                <option value="10000">Rs. 10000</option>
                <option value="15000">Rs. 15000</option>
                
              </select> */}

              <br />

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                Future Jobs
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
                  Woman Friendly
                </label>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            {InternshipData.map((e) => (<div class="box2">
              <a href="/">
              <img style={{position:"absolute","height":"80px","width":"80px","right":"17%"}} src = {e.img_src} alt = {e.alt} />
                <h2 class="bigg" style={{"fontSize":"3rem"}}>{e.Title}</h2>
                <p class="big">{e.Company}</p>

                <hr />

                <div class="row">
                  <div class="col-lg-6">
                    <p>
                      <i class="fa-solid fa-location-dot"></i> {e.Location}
                    </p>
                    <p>
                      <i class="fa-solid fa-briefcase"></i> Rs. {e.Stipend}
                    </p>
                    <p>
                      <i class="fa-solid fa-building"></i> {e.About}
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
                  
                  <div class="btnn">
                    <i class="fa-regular fa-hand"></i><a style={{color:"white"}} href={e.Link}> Apply  </a>
                  </div>
                 
                  <div class="btnn">
                    <i class="fa-regular fa-bookmark"></i> Save
                  </div>
                  <div class="btnn">
                    <i class="fa-solid fa-share-nodes"></i> Share
                  </div>
                </div>
              </a>
            </div>))}
          </div>
        </div>
      </div>


      <Navbar/>
      <Footer/>
    </React.Fragment>
  );
}