import React from "react";

function RadioButton(props) {

  const { category, isSelected, onCategoryChange } = props;

  return (
    <>
      <label className="radio">
        <input type="radio" id={category.id} onChange={onCategoryChange} checked={isSelected} value={category.name} name="category" />
        <label htmlFor={category.id}>{category.name}</label>
      </label>
      <br></br>
    </>
);
}

export default RadioButton;