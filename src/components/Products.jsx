import React from 'react';

const Product = (props) => {

    return (
        <>
            {
                props.products.map((product, index) => {
                    return <div onClick={()=>props.function(product)} key={index}>
                            <div  className="product">
                                Name: {product.name} <br />
                                Price: {product.price}
                            </div>
                         </div>
                })
            }


        </>
    )
}


export default Product;