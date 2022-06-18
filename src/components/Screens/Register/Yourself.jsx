import { useState } from "react";
import "../../styles/app.css"
import { useNavigate } from "react-router-dom";
import DropFormInput from "./DropFormInput"


const Yourself = (props) => {
  const [values, setValues] = useState({
    you_are: "",
    education_level: "",
    // college_school: "",
    looking_for: "",
  });

  const detail = JSON.parse(localStorage.getItem("details"))

  let navigate = useNavigate()

  const inputs = [
    {
      id: 1,
      label : "You are a ",
      name: "you_are",
      placeholder: "Select",
      errorMessage:
        "Can't be remain None!",
      required: true,
      actions : [
                    {label:"Student",value:1},
                    {label:"Fresher",value:2},
                ]
    },
    {
    id: 2,
    label : "Education Level",
    name: "education_level",
    placeholder: "Select",
    errorMessage:
      "Can't be remain None!",
    required: true,
    actions : [
        {label:"Highter Secondary",value:1},
        {label:"Undergraduate",value:2},
        {label:"Postgraduate",value:3},
        {label:"Ph.D.",value:4},
    ]
  },
  {
    id: 3,
    label : "Are you Looking for",
    name: "looking_for",
    placeholder: "Select",
    errorMessage:
      "Can't be remain None!",
    required: true,
    actions : [
        {label:"Job",value:1},
        {label:"Internship",value:2},
        {label:"Course",value:3},
        {label:"Guidance",value:4},
    ]
  }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    var SignUPAPI = "http://localhost:3001/insertuser";
    var headers ={
      'Accept':'application/json',
      'Content-Type':'application.json'
  };
  var Data={
    username:detail.username,
    email:detail.email,
    number:detail.number,
    birthday:detail.birthday,
    password:detail.password,
    you_are:values.you_are,
    education_level:values.education_level,
    looking_for:values.looking_for
};
fetch(SignUPAPI,
  {
      method:'POST',
      headers:headers,
      body:JSON.stringify(Data),
      mode:"no-cors"
  })
  .then(() =>
  {
      localStorage.setItem("login",false)
      localStorage.setItem("username",detail.username)
      navigate("/Home")
  }
)
.catch((error)=>{alert("Error"+error)});
  };

  const onChange = (e,input) => {
    setValues({ ...values, [input.name]: e.label });
    console.log(input.name,values)
  };


  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Tell us about Yourself?</h1>
        {inputs.map((input) => (
          <DropFormInput
            key={input.id}
            {...input}
            // value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Register</button>
      </form>
    </div>
  );
}

export default Yourself;
