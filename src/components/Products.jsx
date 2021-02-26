import React, { useState } from "react";
import "./Product.css";
import ProductDetails from "./ProductDetails";

const Products = () => {
    const [product, setProduct] = useState([
        {
            name: "JavaScript",
            description:
                "Programming language.Which is best for web app developed.",
            price: "$10.50",
            category: "Web app",
            id:1
        },
        {
            name: "Python",
            description: "Programming language.Which is best for Data Science",
            price: "$20.10",
            category: "Data science",
            id:2
        },
        {
            name: "Java",
            description:
                "Programming language.Which is best for mobile app developed.",
            price: "$30.10",
            category: "Android App",
            id:3
        },
        {
            name: "C++",
            description:
                "Programming language.Which is best for  game developed.",
            price: "$30.10",
            category: "game App",
            id:4
        },
    ]);

    return (
    
        <div>
                <ProductDetails detail={product}/>
            {product.map((pd) => (
                <div className="product">
                    <p>{pd.name}</p>
                    <p> {pd.price}</p>
                    {/* <ProductDetails detail={pd}/> */}
                </div>
            ))}
        </div>
    );
};

export default Products;
