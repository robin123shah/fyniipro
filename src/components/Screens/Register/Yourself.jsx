import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropFormInput from "./DropFormInput";
import "./yourself.css";
import Select from "react-select";

import MultipleSelect from 'react-multiple-select-dropdown';
import 'react-multiple-select-dropdown/dist/index.css';


const Yourself = () => {
  const [values, setValues] = useState({
    you_are: "",
    education_level: "",
    looking_for: "",
  });
  const [selectedOptions, setSelectedOptions] = useState();

  // const [college_school,setcollege_school] = useState("")

  // const [carObj,setcarObj] = useState("")

  const detail = JSON.parse(localStorage.getItem("details"));

  let navigate = useNavigate();
  const optionList = [
        { label: "Web Development", value: 1 },
        { label: "Quantum Computing", value: 2 },
        { label: "Teaching", value: 3 },
        { label: "Software Development", value: 4 },
        { label: "Civil Services", value: 5 },
        { label: "Defence Services", value: 6 },
        { label: "AI/ML", value: 7},
        { label: "Aerospace/Rocket Science", value: 8 },
        { label: "Cloud Computing", value: 9 },
        { label: "Police", value: 10 },
        { label: "Doctor", value: 11 },
        { label: "Surgeon", value: 12 },
        { label: "Dentist", value: 13 },
        { label: "Automobile Engineer", value: 14 },
        { label: "Electric Vehicles", value: 15 },
        { label: "Data Science", value: 16 },
        { label: "Research", value: 17 },
        { label: "Healthcare", value: 18 },
        { label: "Banking/Financial services/Insurance", value: 19 },
        { label: "Semiconductors", value: 20 },
        { label: "Media", value: 21 },
        { label: "Scientist", value: 22 },
        { label: "Airline Pilot", value: 23 },
        { label: "Actuary", value: 24 },
        { label: "Business Devlopment manager", value: 25 },
        { label: "Judge/Advocate", value: 26 },
        { label: "Engineer", value: 27 },
        { label: "Chartered Accountant", value: 28 },
        { label: "Architect", value: 29 },
        { label: "Biotechnology", value: 30 },
        { label: "Blockchain", value: 31 },
        { label: "Climate Change", value: 32 },
        { label: "Cybersecurity", value: 33 },
        { label: "Government Job", value: 34 },
        { label: "Railway", value: 35 },
        { label: "Content writing/editing", value: 36 },
        { label: "Big Data", value: 37 },
        { label: "Chemical Engineering", value: 38 },
        { label: "Management", value: 39 },
        { label: "Technology", value: 40 },
        { label: "Software", value: 41 },
        { label: "Ps", value: 42 },
        { label: "Arts & Humanities", value: 43 },
        { label: "Full Stack Development ", value: 44 },
        { label: "Programming", value: 45 },
        { label: "Design", value: 46 },
        { label: "Future Career", value: 47 },
        { label: "Education", value: 48 },
        { label: "Cryptocurrency", value: 49 },
        { label: "Space", value: 50 },
        { label: "Freelancing", value: 51 },
        { label: "Sports", value: 52},
        { label: "Self driving cars", value: 53 },
        { label: "Android/ios development", value: 54 },
        { label: "Computer Science", value: 55 },
        { label: "Energy", value: 56 },
        { label: "Electronics", value: 57 },
        { label: "STEM", value: 58 },
        { label: "Data Analytics", value: 59 },
        { label: "IT", value: 61 },
        { label: "IoT", value: 62 },
        { label: "Robotics", value: 63 },
        { label: "Higher Education", value: 64 },
        { label: "Nano Technology", value: 65 },
        { label: "Material Sciences", value: 66 },
        { label: "Renewable Energy", value: 67 },
        { label: "Food Science", value: 68 },
        { label: "Mental health", value: 69 },
        { label: "Law", value: 70 },
        { label: "Mathematics", value: 71 },
        { label: "Biomedical Engineering", value: 72 },
        { label: "Cognitive Science", value: 73 },
        { label: "Environmental Science", value: 74 },
        { label: "HR/Recruiter", value: 75 },
        { label: "AI engineer", value: 76 },
        { label: "Product Manager", value: 77 },
        { label: "Devops Engineer", value: 78 },
        { label: "Cloud Architect", value: 79 },
        { label: "IT Manager ", value: 80 },
        { label: "Acturial Science", value: 81 },
        { label: "Investment Banking", value: 82 },
        { label: "Full Stack Software Development", value: 83 },
        { label: "Medical Profession", value: 84 },
        { label: "College Professor", value: 85 },
        { label: "Environmental Science", value: 86 },
  ];

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
        
      ],
    },
  ];
  function handleSelect(data) {
    setSelectedOptions(data);
  }
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
          // pattern= "^[A-Za-z]*$"
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
          <div className="drop-app">
      <h2>Choose your color</h2>
      <div className="dropdown-app-container">
        <Select
          options={optionList}
          placeholder="Select color"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
    
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
