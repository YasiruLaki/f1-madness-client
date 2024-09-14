import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./fonts.css"
import HomePage from './pages/HomePage';
import ProductPage from './pages/Product';
import CollectionPage from './pages/Collections';
import CartPage from './pages/Cart';
import OrderSuccess from './pages/OrderSuccess';
import SearchPage from './pages/Search';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
