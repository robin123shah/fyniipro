import { useState } from "react";
import "../../styles/app.css";
import { useNavigate } from "react-router-dom";
import DropFormInput from "./DropFormInput";
import "./yourself.css";
import FormInput from "./FormInput";
const Yourself = (props) => {
  const [values, setValues] = useState({
    you_are: "",
    education_level: "",
    looking_for: "",
  });
  
  const [college_school,setcollege_school] = useState("")

  // const [carObj,setcarObj] = useState("")

  const detail = JSON.parse(localStorage.getItem("details"));

  let navigate = useNavigate();

  const inputschool = [
    {
      id: 1,
      name: "college_school",
      type: "name",
      placeholder: "School/University",
      errorMessage:
        "Name should be 3-50 characters and shouldn't include any special character!",
      label: "School/University",
      pattern: "^[A-Za-z0-9 ]*$"
    }]

  const inputs = [
    {
      id: 1,
      label: "Who are you?* ",
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
      label: "Your Education*",
      name: "education_level",
      placeholder: "Select",
      errorMessage: "Can't be remain None!",
      required: true,
      actions: [
        { label: "Highter Secondary", value: 1 },
        { label: "Undergraduate", value: 2 },
        { label: "Postgraduate", value: 3 },
        { label: "Ph.D.", value: 4 },
      ],
    },
    {
      id: 3,
      label: "Are you Looking for*",
      name: "looking_for",
      placeholder: "Select",
      errorMessage: "Can't be remain None!",
      required: true,
      actions: [
        { label: "Job", value: 1 },
        { label: "Internship", value: 2 },
        { label: "Course", value: 3 },
        { label: "Guidance", value: 4 },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    var SignUPAPI = "https://fynii.herokuapp.com/insertuser";
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
      looking_for: values.looking_for,
      college_school: college_school,
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
        if (response[0] === "0"){
          alert("Email already exist")
        }
        if (response[0] === "true"){
          localStorage.setItem("login","true")
          localStorage.setItem("email",response[1].email);
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
      <form onSubmit={handleSubmit}>
        <h2 className="Register_h2">
          About Yourself?
        </h2>
        {inputschool.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            // value={values[input.name]}
            onChange={(e)=>{setcollege_school(e)}}
          />
        ))}
        {inputs.map((input) => (
          <DropFormInput
            key={input.id}
            {...input}
            // value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="formInput">
        <label className="droplabel">Career Objective</label>
        <textarea name="Career Objective"  className="CareerObjective" pattern="^[A-Za-z0-9 ]{3,50}$" style={{"width":"100%","height":"100px"}} placeholder="Write about you dreams."></textarea>
        </div>
        <button className="Style1_button">Register</button>
      </form>
    </div>
  );
};

export default Yourself;
