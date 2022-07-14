import Select from "react-select";
import "../../styles/formInput.css"

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, actions, ...inputProps } = props;

  return (
    <div className="formInput">
      <label className="droplabel">{label}</label>
      <Select className="select"
        {...inputProps}
        options = {actions}
        onChange={onChange}
      />
      <span className="ErrorSpan">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
