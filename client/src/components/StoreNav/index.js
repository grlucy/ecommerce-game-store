import React from "react";
import Form from "../Form";
import SearchBar from "../Form/SearchBar";
import CheckBox from "../Form/CheckBox";

function StoreNav(props) {

  const { search, onSearchChange, onSearchSubmit, categories, onFilterChange, onStockedChange, stockedChecked} = props;

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
      {categories.map((category) => {
        return (
          <CheckBox 
            name={category.name}
            label={category.name}
            onChange={onFilterChange}
            isSelected={category.isChecked}
            key={category.id}
          />
        );
      })}
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

export default StoreNav;