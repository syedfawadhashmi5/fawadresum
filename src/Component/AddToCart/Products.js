import React, { useState } from "react";
import { Data } from "./Data";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  // Filter cart items by search query
  const filteredCart = Data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );



  return (
    <div className="productConatiner">
      <div className="products">
        <div className="container">
          <div className="search-container">
            <input
            className="search_prodcut"
              type="text"
              placeholder="Search for items in your cart"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="row">
            {filteredCart.map((item) => {
              
              return (
                <div
                  key={item.id}
                  className="col-md-4 d-flex justify-content-center mt-4"
                >
                  <div className="product">
                    <img src={item.image} alt="cart" />
                    <h4>{item.name}</h4>
                    <p>Pkr. {item.price}</p>
                    <button
                      onClick={() => dispatch({ type: "ADD", payload: item })}
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
