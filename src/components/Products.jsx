import React, { useState } from "react";
import "./Product.css";
import ProductDetails from "./ProductDetails";

const Products = () => {
    const product=[
        {
          name: "JavaScript",
          description: "Programming language.Which is best for web app developed.",
          price: "$10.50",
          category: "Web app",
        },
        {
          name: "Python",
          description: "Programming language.Which is best for Data Science",
          price: "$20.10",
          category: "Data science",
        },
        {
          name: "Java",
          description:
            "Programming language.Which is best for mobile app developed.",
          price: "$30.10",
          category: "Android App",
        },
        {
          name: "C++",
          description: "Programming language.Which is best for  game developed.",
          price: "$30.10",
          category: "game App",
        },
      ]
//   const [product, setProduct] = useState();
  console.log(product);
  return (
    // <div>
    //     {product.map((pd) => (
    //         <div className="product">
    //             {/* <p>{pd.name}</p>
    //             <p> {pd.price}</p> */}
    //             <ProductDetails detail={pd}/>
    //         </div>
    //     ))}
    // </div>
    <div>
      {product.map((pd) => (
        <ProductDetails detail={pd} />
      ))}
    </div>
  );
};

export default Products;
