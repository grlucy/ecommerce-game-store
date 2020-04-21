import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import adminAPI from "../../utils/adminAPI";
import StoreNav from "../../components/StoreNav";

function Store() {

  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ stockedChecked, setStockedChecked ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState("");

  const handleSearchChange = (event) => {
    console.log("in handleSearchChange");
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    console.log("in handleSearchSubmit");
  }

  const handleCatFiltersChange = (event) => {
    const { name } = event.target;
    let updatedArr = [ ...categories ];
    updatedArr.forEach((category) => {
      if (category.name === name) {
        category.isChecked = !category.isChecked;
      }
    })
    setCategories(updatedArr);
  };

  const handleStockFilterChange = (event) => {
    setStockedChecked(!stockedChecked);
  }

  const buildCategoryList = (products) => {
    const categories = [];
    products.forEach((product) => {
      let catInArray = false;
      console.log("Product category is: " + product.category);
      categories.forEach((category) => {
        if (product.category === category) {
          catInArray = true;
        }
      });
      if (!catInArray) {
        categories.push(product.category);
      }
    });
    setCategories(categories.map((category, index) => {
      return {
        id: index,
        name: category,
        isChecked: false
      }
    }));
  }

  const loadProductData = () => {
    adminAPI.getProducts()
    .then((res) => {
      if(res.error) {
        console.log(res.error);
      } else {
        setProducts(res.data);
        buildCategoryList(res.data);
      }
    })
  }

  useEffect( () => {
    loadProductData();
  }, [])

  return (
    <>
      <div className="title page-title has-text-centered is-2">
        ONLINE STORE
      </div>
      <section className="section">
        <div className="columns">
          <div className="column is-one-quarter">
            <StoreNav
              search={searchTerm}
              onSearchChange={handleSearchChange}
              onSearchSubmit={handleSearchSubmit}
              categories={categories}
              onFilterChange={handleCatFiltersChange}
              onStockedChange={handleStockFilterChange}
              stockedChecked={stockedChecked}
            />
            {/* <Form>
              <SearchBar
                placeholder="Search Products"
                value={searchTerm}
                onChange={handleSearchChange}
                onSubmit={handleSearchSubmit}
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
                    onChange={handleCatFiltersChange}
                    isSelected={category.isChecked}
                    key={category.id}
                  />
                );
              })}
              <hr></hr>
              <CheckBox
                name="stocked"
                label="In Stock Only"
                onChange={handleStockFilterChange}
                isSelected={stockedChecked}
              />
            </Form> */}
          </div>
          <div className="column is-three-quarters">
            Second column
          </div>
        </div>
      </section>
    </>
  );
}

export default Store;