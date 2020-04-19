import React from "react";

function InputField(props) {

  const { name, label, type, placeholder, onChange, value } = props;

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input 
          className="input is-radiusless"
          type={type}
          placeholder={placeholder}
          onChange={onChange(name)}
          value={value}
        />
      </div>
    </div>
  );
}

export default InputField;