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

  // const buildCategoryList = (products) => {
  //   const categories = [];
  //   products.forEach((product) => {
  //     let catInArray = false;
  //     console.log("Product category is: " + product.category);
  //     categories.forEach((category) => {
  //       if (product.category === category) {
  //         catInArray = true;
  //       }
  //     });
  //     if (!catInArray) {
  //       categories.push(product.category);
  //     }
  //   });
  //   setCategories(categories.map((category, index) => {
  //     return {
  //       id: index,
  //       name: category,
  //       isChecked: false
  //     }
  //   }));
  // }

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
              return (
                <StoreItem product={product} key={product._id} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Store;