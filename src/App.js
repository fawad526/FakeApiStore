import React from 'react';
import Header from './containers/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import "./app.css";
function App() {
  return (
    <>
      <div className='App'>
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/products/:productId" exact element={<ProductDetail/>}/>
        <Route>404 Not found!</Route>
        </Routes>
      </Router>
      </div>
      
    </>
  );
}

export default App;
