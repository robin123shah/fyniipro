import { useState } from "react";
import FormInput from "./FormInput";
import '../../Screens/Register/register.css'
// import "../../styles/app.css";
import { useNavigate } from "react-router-dom";
// import "../Courses/course.css";
// import '../../styles/style.css';
// import GoogleButton from 'react-google-button'
// import GoogleLogin from "react-google-login"



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
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
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

  // const onGoogleRegister = (googleUser) => {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  return (
    <div className="app">
      <div className="register-left">
        <form onSubmit={handleSubmit}>
        <h2 className="Register_h2">
          Create Your Profile
        </h2>
        {/* <div className="google"><GoogleButton onClick={onGoogleRegister} className="google-button"/></div> */}

      <div className="google">
      {/* <GoogleLogin
    clientId=""
    render={(renderProps)=>(
    
 GoogleButton className="google-button"/>  


    )}


      /> */}
     

      </div>

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
        <span className="span">Already Registered?<a href="/SignIn" className="sign-button"> SignIn Here</a></span>
      </form>
      </div>
      <div className="register-right">
      <div className="register-ri"> 
        <img src="/images/1.jpeg" alt=""/>
        <div className="onImage">Gain Knowledge & Awareness for a great Career</div>
      </div>
       
      </div>
      
    </div>
  );
};

export default Register;
