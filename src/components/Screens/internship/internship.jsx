import React from 'react'
// import './style.css'
import { Helmet } from 'react-helmet'

export default function intership() {
  return (
    <React.Fragment>
      <Helmet>
      <script
      src="https://kit.fontawesome.com/08e9a53b4a.js"
      crossorigin="anonymous"
    ></script>
        <script
      src="https://kit.fontawesome.com/ca07ed316a.js"
      crossorigin="anonymous"
    ></script>
         {/* <script src="https://cdn.tailwindcss.com"></script> */}
    {/* <script src="https://unpkg.com/flowbite@1.4.3/dist/flowbite.js"></script> */}
    <script src="https://unpkg.com/flowbite@1.4.3/dist/datepicker.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    {/* <script src="./script.js" async defer></script>
    <script src="./slide.js"></script> */}
      </Helmet>
      <br></br>
      <br></br>
      <br></br>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="filter-box">
            <h4><strong>Topic</strong></h4>
            <div>
              <input
                type="search"
                class="form-control rounded"
                placeholder="e.g. Software"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <i style={{"position":"absolute", "right":"5%","margin-top":"-35px"}} class="fas fa-search"></i>
            </div>
            <br />

            <h4><strong>Location</strong></h4>
            <div>
              <input
                type="search"
                class="form-control rounded"
                placeholder="e.g. Delhi"
                aria-label="Search"
                aria-describedby="search-addon"
              />

              <i style={{"position":"absolute", "right":"5%","margin-top":"-35px"}} class="fas fa-search"></i>
            </div>

            <br />

            <h4><strong>Company</strong></h4>
            <div>
              <input
                type="search"
                class="form-control rounded"
                placeholder="e.g. IBM"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <i style={{"position":"absolute", "right":"5%","margin-top":"-35px"}} class="fas fa-search"></i>
            </div>

            <br />

            <h4><strong>Starting Date</strong></h4>
            <input type="date" size="30" class="form-control" />

            <br />

            <select class="form-select">
              <option selected><strong>Type</strong></option>
              <option value="1">Part time</option>
              <option value="2">Full time</option>
            </select>

            <br />
            <select class="form-select">
              <option selected><strong>Duration</strong></option>
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
                <li>
                  <input type="checkbox" id="checkboxOne" /><label
                    for="checkboxOne"
                    >Government</label
                  >
                </li>

                <li>
                  <input type="checkbox" id="checkboxTwo" /><label
                    for="checkboxTwo"
                    >Non-Government</label
                  >
                </li>
              </ul>
            </div>

            <br />

            <h4><strong>Stipend</strong></h4>
            <div class="slidecontainer">
              <input
                type="range"
                min="0"
                max="10000"
                value="5000"
                class="slider"
                id="myRange"
              />
              <p>
                <i class="fa-solid fa-indian-rupee-sign"></i
                ><span id="demo"></span>
              </p>
            </div>

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
          <div class="box">
            <a href="newpage.html">
              <h2 class="bigg">Internship Title</h2>
              <p class="big">Company Name</p>

              <hr />

              <div class="row">
                <div class="col-lg-6">
                  <p><i class="fa-solid fa-location-dot"></i> Location</p>
                  <p><i class="fa-solid fa-briefcase"></i> Stipend</p>
                  <p><i class="fa-solid fa-building"></i> About Company</p>
                </div>
                <div class="col-lg-6">
                  <p>
                    <i class="fa-solid fa-calendar-check"></i> Last Date to
                    Apply
                  </p>
                  <p><i class="fa-solid fa-user"></i> Work Type</p>
                </div>
              </div>

              <div class="grid-container">
                <div class="btnn"><i class="fa-regular fa-hand"></i> Apply</div>
                <div class="btnn">
                  <i class="fa-regular fa-bookmark"></i> Save
                </div>
                <div class="btnn">
                  <i class="fa-solid fa-share-nodes"></i> Share
                </div>
              </div>
            </a>
          </div>

          <div class="box">
            <h2 class="bigg">Internship Title</h2>
            <p class="big">Company Name</p>

            <hr />

            <div class="row">
              <div class="col-lg-6">
                <p><i class="fa-solid fa-location-dot"></i> Location</p>
                <p><i class="fa-solid fa-briefcase"></i> Stipend</p>
                <p><i class="fa-solid fa-building"></i> About Company</p>
              </div>
              <div class="col-lg-6">
                <p>
                  <i class="fa-solid fa-calendar-check"></i> Last Date to Apply
                </p>
                <p><i class="fa-solid fa-user"></i> Work Type</p>
              </div>
            </div>

            <div class="grid-container">
              <div class="btnn"><i class="fa-regular fa-hand"></i> Apply</div>
              <div class="btnn">
                <i class="fa-regular fa-bookmark"></i> Save
              </div>
              <div class="btnn">
                <i class="fa-solid fa-share-nodes"></i> Share
              </div>
            </div>
          </div>

          <div class="box">
            <h2 class="bigg">Internship Title</h2>
            <p class="big">Company Name</p>

            <hr />

            <div class="row">
              <div class="col-lg-6">
                <p><i class="fa-solid fa-location-dot"></i> Location</p>
                <p><i class="fa-solid fa-briefcase"></i> Stipend</p>
                <p><i class="fa-solid fa-building"></i> About Company</p>
              </div>
              <div class="col-lg-6">
                <p>
                  <i class="fa-solid fa-calendar-check"></i> Last Date to Apply
                </p>
                <p><i class="fa-solid fa-user"></i> Work Type</p>
              </div>
            </div>

            <div class="grid-container">
              <div class="btnn"><i class="fa-regular fa-hand"></i> Apply</div>
              <div class="btnn">
                <i class="fa-regular fa-bookmark"></i> Save
              </div>
              <div class="btnn">
                <i class="fa-solid fa-share-nodes"></i> Share
              </div>
            </div>
          </div>

          <div class="box">
            <h2 class="bigg">Internship Title</h2>
            <p class="big">Company Name</p>

            <hr />

            <div class="row">
              <div class="col-lg-6">
                <p><i class="fa-solid fa-location-dot"></i> Location</p>
                <p><i class="fa-solid fa-briefcase"></i> Stipend</p>
                <p><i class="fa-solid fa-building"></i> About Company</p>
              </div>
              <div class="col-lg-6">
                <p>
                  <i class="fa-solid fa-calendar-check"></i> Last Date to Apply
                </p>
                <p><i class="fa-solid fa-user"></i> Work Type</p>
              </div>
            </div>

            <div class="grid-container">
              <div class="btnn"><i class="fa-regular fa-hand"></i> Apply</div>
              <div class="btnn">
                <i class="fa-regular fa-bookmark"></i> Save
              </div>
              <div class="btnn">
                <i class="fa-solid fa-share-nodes"></i> Share
              </div>
            </div>
          </div>

          <div class="box">
            <h2 class="bigg">Internship Title</h2>
            <p class="big">Company Name</p>

            <hr />

            <div class="row">
              <div class="col-lg-6">
                <p><i class="fa-solid fa-location-dot"></i> Location</p>
                <p><i class="fa-solid fa-briefcase"></i> Stipend</p>
                <p><i class="fa-solid fa-building"></i> About Company</p>
              </div>
              <div class="col-lg-6">
                <p>
                  <i class="fa-solid fa-calendar-check"></i> Last Date to Apply
                </p>
                <p><i class="fa-solid fa-user"></i> Work Type</p>
              </div>
            </div>

            <div class="grid-container">
              <div class="btnn"><i class="fa-regular fa-hand"></i> Apply</div>
              <div class="btnn">
                <i class="fa-regular fa-bookmark"></i> Save
              </div>
              <div class="btnn">
                <i class="fa-solid fa-share-nodes"></i> Share
              </div>
            </div>
          </div>

          <div class="box">
            <h2 class="bigg">Internship Title</h2>
            <p class="big">Company Name</p>

            <hr />

            <div class="row">
              <div class="col-lg-6">
                <p><i class="fa-solid fa-location-dot"></i> Location</p>
                <p><i class="fa-solid fa-briefcase"></i> Stipend</p>
                <p><i class="fa-solid fa-building"></i> About Company</p>
              </div>
              <div class="col-lg-6">
                <p>
                  <i class="fa-solid fa-calendar-check"></i> Last Date to Apply
                </p>
                <p><i class="fa-solid fa-user"></i> Work Type</p>
              </div>
            </div>

            <div class="grid-container">
              <div class="btnn"><i class="fa-regular fa-hand"></i> Apply</div>
              <div class="btnn">
                <i class="fa-regular fa-bookmark"></i> Save
              </div>
              <div class="btnn">
                <i class="fa-solid fa-share-nodes"></i> Share
              </div>
            </div>
          </div>

          <div class="box">
            <h2 class="bigg">Internship Title</h2>
            <p class="big">Company Name</p>
            <hr />

            <div class="row">
              <div class="col-lg-6">
                <p><i class="fa-solid fa-location-dot"></i> Location</p>
                <p><i class="fa-solid fa-briefcase"></i> Stipend</p>
                <p><i class="fa-solid fa-building"></i> About Company</p>
              </div>
              <div class="col-lg-6">
                <p>
                  <i class="fa-solid fa-calendar-check"></i> Last Date to Apply
                </p>
                <p><i class="fa-solid fa-user"></i> Work Type</p>
              </div>
            </div>

            <div class="grid-container">
              <div class="btnn"><i class="fa-regular fa-hand"></i> Apply</div>
              <div class="btnn">
                <i class="fa-regular fa-bookmark"></i> Save
              </div>
              <div class="btnn">
                <i class="fa-solid fa-share-nodes"></i> Share
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script.js" async defer></script>
    <script src="slide.js"></script>
    </React.Fragment>
  )
}
