
import React, { useState, useEffect } from 'react';

import './App.css';
import Loading from './components/Loading';
import ProductDetail from './components/ProductDetails';
import Product from './components/Products';

function App() {
  const [currentPage, setCurrentPage] = useState('product')
  const [currentProduct, setCurrentProduct] = useState('')
  const [loading, setLoading] = useState(true)
  const [productList, setProductlist] = useState([
    {
      name: "JavaScript",
      description: "Web App",
      price: 100,
      category: "programming language"
    },
    {
      name: "Python",
      description: "Data Science",
      price: 200,
      category: "programming language 2"
    },
    {
      name: "java",
      description: "App Development",
      price: 300,
      category: "programming language 3"
    },
    {
      name: "C++",
      description: "Big Game Development",
      price: 400,
      category: "programming language 4"
    },
  ])
  const updatePage = (product) => {
    setCurrentPage('product_detail')
    setCurrentProduct(product)
  }
  const onProductpage = () => {
    setCurrentPage('product')
    setCurrentProduct('')
  }


  useEffect(() => {
    if (loading) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [currentProduct])



  return (
    <>

      {
        loading && <Loading />
      }
      {
        currentPage === 'product' ?
          <Product products={productList} function={updatePage} /> :
          <>
            <button onClick={onProductpage}>Product Page</button> <br />
            <ProductDetail detail={currentProduct} />
          </>
      }
    </>
  );
}

export default App;
