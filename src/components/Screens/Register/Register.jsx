import { useState } from "react";
import FormInput from "./FormInput";
import "../../styles/app.css";
import { useNavigate } from "react-router-dom";
import "../Courses/course.css";
import '../../styles/style.css';
import GoogleButton from 'react-google-button'


const Register = () => {
  let navigation = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    number: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "name",
      // placeholder: "Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9 ]*$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      // placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    // {
    //   id: 3,
    //   name: "number",
    //   type: "number",
    //   placeholder: "99999 99999",
    //   errorMessage: "Number must be Valid!",
    //   label: "Phone number",
    //   required: true,
    // },
    // {
    //   id: 4,
    //   name: "birthday",
    //   type: "date",
    //   placeholder: "Birthday",
    //   label: "DOB",
    //   required: true
    // },
    {
      id: 5,
      name: "password",
      type: "password",
      // placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Create Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      // placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("details", JSON.stringify(values));
    navigation("/Yourself");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onGoogleRegister = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  return (
    <div className="app">
      {/* <img
          style={{
            "margin":"15px auto",
            width: "120px",
            // height: "38px",
            // overflow: "hidden",

          }}
          href="/Home"
          alt="img"
          src={require("./logo.png")}
        /> */}
      <div className="register-left">
        <form onSubmit={handleSubmit}>
      

        <h2 className="Register_h2">
          Create Your Profile
        </h2>
        {/* <h4 className="Register_h4">
          Get started with Fynii
        </h4> */}

        <GoogleButton onClick={onGoogleRegister} style={{"margin":"auto"}}/>

        <div class="my-12 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sx text-gray-600 tracking-wide font-medium bg-white transform translate-y-1"
              >
                Or sign up with e-mail
              </div>
        </div>  
        
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="Style1_button">Next</button>
        <div className="sign" >Already Registered?<a href="/SignIn" className="botton"> SignIn Here</a></div>
      </form>
      </div>
      <div className="register-right">
        <img src="/images/1.jpeg" alt=""/>
        <div className="onImage">Gain Knowledge & Awareness for a great Career</div>
      </div>
      
    </div>
  );
};

export default Register;
