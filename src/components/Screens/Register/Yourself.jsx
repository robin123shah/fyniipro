import { useState } from "react";
import "../../styles/app.css"
import { useNavigate } from "react-router-dom";
import DropFormInput from "./DropFormInput"


const Yourself = () => {
  const [values, setValues] = useState({
    you_are: "",
    education_level: "",
    // college_school: "",
    looking_for: "",
  });

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
    console.log(values)
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Tell us about Yourself?</h1>
        {inputs.map((input) => (
          <DropFormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Register</button>
      </form>
    </div>
  );
}

export default Yourself;
