import React from "react";
import products from "../products";
import Products from "./Products";

const HomeScreen = () => {
  return (
    <div>
      {products.map((product) => (
        <a href={`/product/${product._id}`}>
          <div key={product._id}>
            <Products product={product}/>
          
          </div>
        </a>
      ))}
    </div>
  );
};

export default HomeScreen;
