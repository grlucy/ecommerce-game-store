import React from "react";

function AuthInputField(props) {

  const { name, label, type, placeholder, onChange, value, icon} = props;

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-left">
        <input 
          className="input is-radiusless"
          type={type}
          placeholder={placeholder}
          onChange={onChange(name)}
          value={value}
        />
        <span className="icon is-small is-left">
          <i className={icon}></i>
        </span>
      </div>
    </div>
  );
}

export default AuthInputField;