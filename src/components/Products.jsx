import React, { useState } from "react";
import './Product.css';

const Products = () => {
    const [product, setProduct] = useState([
        {
            name: "JavaScript",
            description:
                "Programming language.Which is best for web app developed.",
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
            description:
                "Programming language.Which is best for  game developed.",
            price: "$30.10",
            category: "game App",
        },
    ]);

    return (
        <div>
            {product.map((pd) => (
                <div className="product">
                    <p>{pd.name}</p>
                    <p> {pd.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;
