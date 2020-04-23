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
  const [ pendingSearch, setPendingSearch ] = useState("");

  const handleSearchChange = (event) => {
    setPendingSearch(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(pendingSearch);
  }

  const handleCategoryChange = (event) => {
    setSelectedCat(event.target.value);
  };

  const handleStockFilterChange = (event) => {
    setStockedChecked(!stockedChecked);
  }

  const loadCategoryList = () => {
    API.getCategories()
    .then((res) => {
      if(res.error) {
        console.log(res.error);
      } else {
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
    API.getProducts()
    .then((res) => {
      if(res.error) {
        console.log(res.error);
      } else {
        setProducts(res.data);
      }
    });
  }

  const getSearchResults = () => {
    let term = searchTerm.toLowerCase();
    let matches = products.filter( product => {
      return ( 
        product.name.toLowerCase().indexOf(term) !== -1 ||
        product.category.toLowerCase().indexOf(term) !== -1 ||
        product.description.toLowerCase().indexOf(term) !== -1
      );
    });
    return matches;
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
              search={pendingSearch}
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
            {getSearchResults().map((product) => {
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