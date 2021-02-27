import React from "react";
import products from "../products";

const ProductDetails = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div>
      <p>{product.name}</p>
      <p> {product.description}</p>
      <p>Brand::{product.brand}</p>
      <p>Category::{product.category}</p>
      <p>Review and rating::{product.rating}</p>

      <p>
        <small>Price :: ${product.price}</small>
      </p>
    </div>
  );
};

export default ProductDetails;
