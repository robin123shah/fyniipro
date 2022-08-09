import React from 'react'
import "./help.css"

export default function help() {
  return (
    <React.Fragment>
        <div class="containerp contactp">
      <div class="rowp">
        <div class="col-md-3p">
          <div class="contact-infop">
            <h2>Contact Us</h2>
            <h4>We are here to help you !</h4>
          </div>
        </div>
        <div class="col-md-9p">
          <div class="contact-formp">
            <div class="form-groupp">
              <label class="control-labelp col-sm-2p" for="name">Name:</label>
              <div class="col-sm-10p">
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  placeholder="Enter Your Name"
                  name="fname"
                />
              </div>
            </div>

            <div class="form-groupp">
              <label class="control-labelp col-sm-2p" for="Phone"
                >Phone No.:</label
              >
              <div class="col-sm-10p">
                <input
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Enter Your Phone No."
                  name="lname"
                />
              </div>
            </div>
            <div class="form-groupp">
              <label class="control-labelp col-sm-2p" for="email">Email:</label>
              <div class="col-sm-10p">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
            </div>
            <div class="form-groupp">
              <label class="control-labelp col-sm-2p" for="comment">Query:</label>
              <div class="col-sm-10p">
                <textarea class="form-controlp" rows="5" id="comment"></textarea>
              </div>
            </div>
            <div class="form-groupp">
              <div class="col-sm-offset-2p col-sm-10p">
                <button type="submit" class="btnp btn-defaultp">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
