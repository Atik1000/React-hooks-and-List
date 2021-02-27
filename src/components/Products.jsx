import React from "react";
import './Product.css'

const Products = ({ product }) => {
  return (
    <div className='product'>
      <a href={`/product/${product._id}`}>
        <p>{product.name}</p>
      </a>

      <p>{product.price}</p>
    </div>
  );
};

export default Products;
