import React,{useState,useRef, useEffect} from "react";
import "./Jobs.css";
import "../Courses/course.css"
import InternshipData from "./Jobdata";
import "./style.css";
import Navbar2 from "../../Navigation/Navbar/Navbar2";
import JobsSlider from "./JobsSlider";
import Footer from "../Footer/Footer";
export default function Intership() {
  const [WkTypeGov, setWkTypeGov] = useState(false)
  const [WkTypeNGov, setWkTypeNGov] = useState(false)
  const [WkTypeWFH, setWkTypeWFH] = useState(false)
  const [WkTypePT, setWkTypePT] = useState(false)
  
  const [showNavTab,setshowNavTab] = useState(false)
  const NavTabRef = useRef();

  const closeNavTab = e => {
    if(NavTabRef.current === e.target) {
      setshowNavTab(false)
    }
  }
  // const [Inttopic, setInttopic] = useState("All");
  // const [location, setlocation] = useState("All");
  // const [Company, setCompany] = useState("All");
  // const [IntType, setIntType] = useState("All");
  // const [IntDuration, setDuration] = useState("All");

  const [openModal,setopenModal] = useState("modal__wrapper")


  const onSetjobalert = () => {
    setopenModal("modal__wrapper active");
  }

  const onclosealert = () => {
    setopenModal("modal__wrapper");
  }


useEffect(()=>{
  document.querySelector('.modal__wrapper').addEventListener('click', function(e){
    if(e.target !== this) return;
    setopenModal("modal__wrapper")
});})

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        setopenModal("modal__wrapper")
    }
})




  return (

    <React.Fragment>
      <JobsSlider openModal= {openModal}/>
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
      <div ref={NavTabRef} onClick={closeNavTab} class="container">
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

              {<br />

              /*<h4>
                <strong>Experience</strong>
              </h4>
              <div>
              <select class="form-select">
                <option selected>
                  <strong>Work Experience</strong>
                </option>
                <option value="1">Part time</option>
                <option value="2">Full time</option>
              </select> */}
                {/* <i
                  style={{
                    position: "absolute",
                    right: "5%",
                    "margin-top": "-20px",
                  }}
                  class="fas fa-search"
                ></i> */}
              {/* </div>

              <br /> */}
              {/* <h4>
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
              </div> */}

              <h4>
                <strong>Company</strong>
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



              {/* <h4>
                <strong>Starting Date</strong>
              </h4>
              <input type="date" size="30" class="form-control" />

              <br /> */}

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
                    <input onClick={()=>setWkTypeGov(!WkTypeGov)} type="checkbox" id="checkboxOne" />
                    <label for="checkboxOne">Government</label>
                  </li>

                  <li style={{"margin":"5px"}}>
                    <input onClick={()=>setWkTypeNGov(!WkTypeNGov)} type="checkbox" id="checkboxTwo" />
                    <label for="checkboxTwo">Non-Government</label>
                  </li>
                  <li style={{"margin":"5px"}}>
                    <input onClick={()=>setWkTypeWFH(!WkTypeWFH)} type="checkbox" id="checkboxThree" />
                    <label for="checkboxThree">Work From Home</label>
                  </li>
                  <li style={{"margin":"5px"}}>
                    <input onClick={()=>setWkTypePT(!WkTypePT)} type="checkbox" id="checkboxFour" />
                    <label for="checkboxFour">Part Time</label>
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
              <button class="btn__purple" onClick={onSetjobalert}>Set job alert</button>

              <div class={openModal}>
              <div style={{"zIndex":"1000"}}  class="modal__container">
                <button class="close" onClick={onclosealert}>&times;</button>
                <h2 class="bigg">Job alert</h2>

                <h4>Topic</h4>
                <div class="input-group rounded">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="e.g. Software"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                  </span>
                </div>

                <br />

                <h4>Location</h4>
                <div class="input-group rounded">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="e.g. Delhi"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                  </span>
                </div>

                <br />

                <h4>Company</h4>
                <div class="input-group rounded">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="e.g. Google"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                  </span>
                </div>

                <br />

                <div class="container">
                  <ul class="ks-cboxtags">
                    <li>
                      <input type="checkbox" id="checkboxFive" /><label
                        for="checkboxFive"
                        >Government</label
                      >
                    </li>

                    <li>
                      <input type="checkbox" id="checkboxSix" /><label
                        for="checkboxSix"
                        >Work from home</label
                      >
                    </li>
                    <li>
                      <input type="checkbox" id="checkboxSeven" /><label
                        for="checkboxSeven"
                        >Non-Government</label
                      >
                    </li>
                    <li>
                      <input type="checkbox" id="checkboxEight" /><label
                        for="checkboxEight"
                        >Part time</label
                      >
                    </li>
                  </ul>
                </div>

                <br />

                <h4>How would you like to get informed?</h4>
                <div class="container">
                  <ul class="ks-cboxtags">
                    <li>
                      <input type="checkbox" id="checkboxNine" /><label
                        for="checkboxNine"
                        >Message</label
                      >
                    </li>

                    <li>
                      <input type="checkbox" id="checkboxTen" /><label
                        for="checkboxTen"
                        >e-mail</label
                      >
                    </li>
                  </ul>
                </div>

                <div class="action">
                  <button class="btn__purple">Submit</button>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div class="col-lg-8">
            {InternshipData.InternshipData.map((e) => 
            ((WkTypeGov === false && WkTypeNGov === false && WkTypeWFH === false && WkTypePT === false) || (WkTypeGov === true && e.Type === "Govt.") || (WkTypeNGov === true && e.Type === "Non Govt.") || (WkTypeWFH === true && e.Type === "Remote") || (WkTypePT === true && e.Type === "PT")) 
            && 
            (<div class="box2">
              <a href="/Company">
              <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
              }}
              >

              <div className="img-box"><img class="img_class" src = {e.img_src} style={{"display" : openModal === "modal__wrapper active"?"none" :"block"}} alt = {e.alt} /></div>
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
                      <i class="fa-solid fa-briefcase"></i> {e.Experience} Yrs
                    </p>
                    <p>
                      {/* <i class="fa-solid fa-building"></i> {e.About} */}
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <p>
                      <i class="fa-solid fa-clock"></i> {e.Date}
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
                  
                  <div class="btnn">
                    <i class="fa-solid fa-share-nodes"></i> Share
                  </div>
                </div>
              </a>
            </div>))}
          </div>
        </div>
      </div>


      <Navbar2 showNavTab={showNavTab} setshowNavTab= {setshowNavTab}/>
      <Footer/>
    </React.Fragment>
  );
}