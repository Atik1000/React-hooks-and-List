import React from "react";

const ProductDetails = (props) => {
  console.log(props.detail);
  //   console.log(detail);
  // const {description,category}=props.detail;
  return (
    <div>
      {props.detail.category}
      {/* {category} */}
      {/* <h1>{detail.description}</h1> */}
      {/* <h1>{props.pd.description}</h1> */}
    </div>
  );
};

export default ProductDetails;
