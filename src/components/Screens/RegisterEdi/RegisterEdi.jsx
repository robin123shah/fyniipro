import { useState } from "react";
import FormInput from "./FormInput";
import '../RegisterEdi/registerEdi.css'
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const RegisterEdi = () => {

  let navigation = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    number: "",
    birthday: "",
    createPassword: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "name",
      placeholder: "Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9 ]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "number",
      type: "number",
      placeholder: "99999 99999",
      errorMessage: "Number must be Valid!",
      label: "Phone number",
      required: true,
    },
    
    {
      id: 4,
      name: "createPassword",
      type: "password",
      placeholder: "Create Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Create Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("details", JSON.stringify(values));
    navigation("/expertEdi");
    toast.success('Submitted successfully!!')
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onGoogleRegister = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  };

  return (
    <div className="app">
      <div className="expert_signup_box">
        <form className="expert_signup_form" onSubmit={handleSubmit}>
          <h2 className="expert_signup_title">Create Your Expert Profile</h2>

          <div className="google"><GoogleButton label='Sign up with Google' onClick={onGoogleRegister} className="google-button"/></div>


          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              className="expert_signup_input"
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="expert_signup_button">Next</button>
          <span>Already Registered?<a href="/SignIn" className="sign-button"> SignIn Here</a></span>
        </form>
      </div>
    </div>
  );
};

export default RegisterEdi;
