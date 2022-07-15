// import { useState } from "react";
import "../../styles/app.css";
// import { useNavigate } from "react-router-dom";
import "./yourself.css";
const YourselfEdi = () => {
  // const [values, setValues] = useState({
  //   you_are: "",
  //   education_level: "",
  //   // college_school: "",
  //   looking_for: "",
  // });

  // setValues()

  // const detail = JSON.parse(localStorage.getItem("details"));

  // let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // const handleSubmit = (e) => {
  //   
  //   var SignUPAPI = "https://fynii.herokuapp.com/insertuser";
  //   var headers = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   };
  //   var Data = {
  //     username: detail.username,
  //     email: detail.email,
  //     number: detail.number,
  //     birthday: detail.birthday,
  //     password: detail.password,
  //     you_are: values.you_are,
  //     education_level: values.education_level,
  //     looking_for: values.looking_for,
  //     // college_school: values.college_school
  //   };
  //   fetch(SignUPAPI, {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(Data),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       localStorage.setItem("login", true);
  //       localStorage.setItem("username", detail.username);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       alert("Error" + error);
  //     });
  // };



  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2 className="Register_h2">About Your Profession?</h2>
        {/* {inputschool.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {inputs.map((input) => (
          <DropFormInput
            key={input.id}
            {...input}
            // value={values[input.name]}
            onChange={onChange}
          />
        ))} */}
        <div className="formInput">
          <label className="droplabel">
            Enter topic you would love to work on:
          </label>
          <textarea
            name="Career Objective"
            className="CareerObjective"
            pattern="^[A-Za-z0-9 ]{3,50}$"
            // style={{ width: "100%", height: "50px" }}
            placeholder="Write your topic."
          ></textarea>
        </div>

        <div className="formInput">
          <label className="droplabel">
            Describe in brief about your interest in selected topic:
          </label>
          <textarea
            name="Career Objective"
            className="CareerObjective"
            pattern="^[A-Za-z0-9 ]{3,50}$"
            // style={{ width: "100%", height: "100px" }}
            placeholder="Write about your thoughts."
          ></textarea>
        </div>
        <button className="Style1_button">Register</button>
      </form>
    </div>
  );
};

export default YourselfEdi;
