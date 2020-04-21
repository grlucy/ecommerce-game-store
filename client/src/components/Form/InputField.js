import React from "react";

function InputField(props) {

  const { name, label, type, placeholder, onChange, value } = props;

  return (
    <div className="field is-horizontal">
      <div className="field-label is-small">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <input 
              className="input is-radiusless is-small"
              type={type}
              placeholder={placeholder}
              onChange={onChange(name)}
              value={value}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputField;