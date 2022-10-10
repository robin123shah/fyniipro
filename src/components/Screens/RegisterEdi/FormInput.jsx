import { useState } from "react";
import "../../styles/formInput.css"

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label className="formlabel">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      {/* <span className="ErrorSpan">{errorMessage}</span> */}
      <span class="ErrorSpan">Username should be 3-16 characters and shouldn't include any special character!</span>
    </div>
  );
};

export default FormInput;
