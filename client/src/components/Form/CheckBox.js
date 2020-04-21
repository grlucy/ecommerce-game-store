import React from "react";

function CheckBox(props) {

  const { name, label, onChange, isSelected } = props;

  return (
    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input
            name={name}
            type="checkbox"
            onChange={onChange}
            checked={isSelected}
          />
            <strong> {label}</strong>
        </label>
      </div>
    </div>
  );
}

export default CheckBox;