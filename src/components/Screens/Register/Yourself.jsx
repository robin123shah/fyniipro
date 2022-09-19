import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropFormInput from "./DropFormInput";
import "./yourself.css";

const Yourself = () => {
  const [values, setValues] = useState({
    you_are: "",
    education_level: "",
    looking_for: "",
  });
  
  // const [college_school,setcollege_school] = useState("")

  // const [carObj,setcarObj] = useState("")

  const detail = JSON.parse(localStorage.getItem("details"));

  let navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      label: "Who are you? ",
      name: "you_are",
      placeholder: "Select",
      errorMessage: "Can't be remain None!",
      required: true,
      actions: [
        { label: "Student", value: 1 },
        { label: "Fresher", value: 2 },
      ],
    },
    {
      id: 2,
      label: "Your Interests",
      name: "your_interests",
      placeholder: "Select",
      errorMessage: "Can't be remain None!",
      required: true,
      actions: [
        { label: "Engineering", value: 1 },
        { label: "Business", value: 2 },
        { label: "Humanities", value: 3 },
        { label: "Software", value: 4 },
        { label: "HR", value: 5 },
        { label: "Graphic", value: 6 },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    var SignUPAPI = "https://fynii.herokuapp.com/insertuser";
    // var SignUPAPI = "http://localhost:3001/insertuser";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      username: detail.username,
      email: detail.email,
      number: detail.number,
      birthday: detail.birthday,
      password: detail.password,
      you_are: values.you_are,
      education_level: values.education_level,
      // looking_for: values.looking_for,
      // college_school: college_school,
      // carObj:carObj
    };
    fetch(SignUPAPI, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        // if (response[0] === "0"){
        //   alert("Email already exist")
        // }
        if (response[0] === "true"){
          localStorage.setItem("login","true")
          // localStorage.setItem("email",response[1].email);
          localStorage.setItem("username",detail.username);
          navigate("/");
        }
      })
      .catch((error) => {
        alert("Error" + error);
      });
  };

  const onChange = (e, input) => {
    setValues({ ...values, [input.name]: e.label });
    console.log(input.name, values);
  };

  return (
    <div className="app">
    <div className="yourself-left">
    <form onSubmit={handleSubmit}>
        <h2 className="Register_h2">
          Tell us about Yourself?
        </h2>
      <div className="formInput">
        <label className="formlabel">School/ University</label>
        <input
          name= "college_school"
          type= "name"
          pattern= "^[A-Za-z0-9 ]*$"
          // onChange={(e)=>{setcollege_school(e)}}
          onBlur="handleFocus"
        />
        <span className="ErrorSpan">Name should be 3-50 characters and shouldn't include any special character!</span>
      </div>
          <DropFormInput
            key={inputs[0].id}
            {...inputs[0]}
            onChange={onChange}
            className='DropFormInput'
          />
      <div className="formInput">
        <label className="formlabel">Your Education</label>
        <input
          name= "education_level"
          type= "name"
          placeholder= "e.g. : Msc(Maths), MBA(Finance)"
          pattern= "^[A-Za-z]*$"
          // onChange={(e)=>{setcollege_school(e)}}
          onBlur="handleFocus"
        />
        <span className="ErrorSpan">Education should be 3-50 characters and shouldn't include any special character!</span>
      </div>

      <DropFormInput
            key={inputs[1].id}
            {...inputs[1]}
            // value={values[input.name]}
            onChange={onChange}
            className='DropFormInput'
          />
    
    {/* <div className="formInput">
    <label className="formlabel">Your Interests</label>
      <input
        name= "your_interest"
        type= "name"
        placeholder= "e.g. : Teaching, Software"
        // pattern= "^[A-Za-z ]*$"
        // onChange={(e)=>{setcollege_school(e)}}
        onBlur="handleFocus"
      />
      <span className="ErrorSpan">Interests should be 3-50 characters and shouldn't include any special character!</span>
    </div> */}
    
        <button className="Style1_button">Register</button>
      </form>
    </div>
    <div className="yourself-right">
        <img src="/images/yourself.jpeg" alt=""/>
        <div className="onImag">Get Personalized & relevant results matching your profile</div>
    </div>
    </div>
  );
};

export default Yourself;
