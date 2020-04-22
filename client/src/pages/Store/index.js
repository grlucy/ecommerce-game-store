import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import adminAPI from "../../utils/adminAPI";
import StoreSearch from "../../components/StoreSearch";
import StoreItem from "../../components/StoreItem";

function Store() {

  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ selectedCat, setSelectedCat ] = useState("None");
  const [ stockedChecked, setStockedChecked ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState("");

  const handleSearchChange = (event) => {
    console.log("in handleSearchChange");
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    console.log("in handleSearchSubmit");
  }

  const handleCategoryChange = (event) => {
    setSelectedCat(event.target.value);
  };

  const handleStockFilterChange = (event) => {
    setStockedChecked(!stockedChecked);
  }

  const loadCategoryList = () => {
    adminAPI.getCategories()
    .then((res) => {
      if(res.error) {
        console.log(res.error);
      } else {
        console.log(res.data);
        setCategories(res.data.map((category, index) => {
          return {
            id: index,
            name: category
          }
        }));
      }
    });
  }

  const loadProductData = () => {
    adminAPI.getProducts()
    .then((res) => {
      if(res.error) {
        console.log(res.error);
      } else {
        setProducts(res.data);
      }
    });
  }

  const productShouldRender = (product) => {
    let stockOK = false;
    let catOK = false;
    if (!stockedChecked || product.quantity > 0) stockOK = true;
    if (selectedCat === "None" || selectedCat === product.category) catOK = true;
    return stockOK && catOK;
  }

  useEffect( () => {
    loadProductData();
    loadCategoryList();
  }, [])

  return (
    <>
      <div className="title page-title has-text-centered is-2">
        ONLINE STORE
      </div>
      <section className="section">
        <div className="columns">
          <div className="column is-one-quarter">
            <StoreSearch
              search={searchTerm}
              onSearchChange={handleSearchChange}
              onSearchSubmit={handleSearchSubmit}
              categories={categories}
              selectedCat={selectedCat}
              onCategoryChange={handleCategoryChange}
              onStockedChange={handleStockFilterChange}
              stockedChecked={stockedChecked}
            />
          </div>
          <div className="column is-three-quarters">
            {products.map((product) => {
              if (productShouldRender(product)) {
                return (
                  <StoreItem product={product} key={product._id} />
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Store;