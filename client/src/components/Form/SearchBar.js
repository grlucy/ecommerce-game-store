import React from "react";
import "./style.css";

function SearchBar(props) {

  const { placeholder, value, onChange, onSubmit } = props;

  return (
    <div className="field has-addons">
      <div className="control">
        <input className="input is-radiusless is-small"
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="control">
        <button className="button is-danger is-radiusless is-small" onClick={onSubmit}>
          <span className="icon">
            <i className="fas fa-search"></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;