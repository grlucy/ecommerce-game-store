import React from "react";
import Form from "../Form";
import SearchBar from "../Form/SearchBar";
import RadioButton from "../Form/RadioButton";
import CheckBox from "../Form/CheckBox";

import "./style.css";

function StoreSearch(props) {

  const { search, onSearchChange, onSearchSubmit, categories, selectedCat, onCategoryChange, onStockedChange, stockedChecked} = props;

  return (
    <Form>
      <SearchBar
        placeholder="Search Products"
        value={search}
        onChange={onSearchChange}
        onSubmit={onSearchSubmit}
      />
      <hr></hr>
      <label className="label">
        Filter By Category:
      </label>
      <div className="field">
        <div className="control">
          <RadioButton
            category={{
              name: "None",
              id: categories.length
            }}
            isSelected={selectedCat === "None"}
            onCategoryChange={onCategoryChange}
          />
          {categories.map((category) => {
            return (
              <RadioButton
                category={category}
                isSelected={category.name === selectedCat}
                onCategoryChange={onCategoryChange}
                key={category.id}
              />
            );
          })}
        </div>
      </div>
      <hr></hr>
      <CheckBox
        name="stocked"
        label="In Stock Only"
        onChange={onStockedChange}
        isSelected={stockedChecked}
      />
    </Form>
  );
}

export default StoreSearch;