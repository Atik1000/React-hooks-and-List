import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeScreen from './components/HomeScreen';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/product/:id' component={ProductDetails}/>



    </Router>
  );
};

export default App;
