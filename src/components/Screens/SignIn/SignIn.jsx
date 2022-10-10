import { useState } from "react";
import FormInput from "../Register/FormInput";
import { useNavigate } from "react-router-dom";

import "./SignIn.css";

const SignIn = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: " Wrong Password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://fynii.herokuapp.com/checklogin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response[0] === "1") {
          localStorage.setItem("login", true);
          localStorage.setItem("username", response[1]);
          navigate("/");
        } else{
          alert("Incorrect Email or password");
        }
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
    <div className="signinbox">
        <form className="signform" onSubmit={handleSubmit}>
          <h2 className="sign_title"
          >
            Already Member?
          </h2>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              className="sign_input"
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="signin_button">Sign In</button>
          <span>New Here? <a href="/Register" className="signin_next">
            Register Here
          </a>
          </span>
        </form>
      </div>
    </div>
  );
};
export default SignIn;